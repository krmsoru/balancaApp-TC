/* eslint-disable no-bitwise */
import { useMemo, useState } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import {
  BleError,
  BleManager,
  Characteristic,
  Device,
} from "react-native-ble-plx";

import * as ExpoDevice from "expo-device";

import base64 from "react-native-base64";

const UUID = "4298cd96-8280-11ee-b962-0242ac120002";
const CHARACTERISTIC = "4298d67e-8280-11ee-b962-0242ac120002";

interface BluetoothLowEnergyApi {
  requestPermissions(): Promise<boolean>;
  scanForPeripherals(): void;
  connectToDevice: (deviceId: Device) => Promise<void>;
  disconnectFromDevice: () => void;
  connectedDevice: Device | null;
  allDevices: Device[];
  weightValue: number;
}

function useBLE(): BluetoothLowEnergyApi {
  const bleManager = useMemo(() => new BleManager(), []);
  const [allDevices, setAllDevices] = useState<Device[]>([]);
  const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);
  const [weightValue, setWeightValue] = useState<number>(0);

  const requestAndroid31Permissions = async () => {
    const bluetoothScanPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      {
        title: "Location Permission",
        message: "Bluetooth Low Energy requires Location",
        buttonPositive: "OK",
      }
    );
    const bluetoothConnectPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      {
        title: "Location Permission",
        message: "Bluetooth Low Energy requires Location",
        buttonPositive: "OK",
      }
    );
    const fineLocationPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Location Permission",
        message: "Bluetooth Low Energy requires Location",
        buttonPositive: "OK",
      }
    );

    return (
      bluetoothScanPermission === "granted" &&
      bluetoothConnectPermission === "granted" &&
      fineLocationPermission === "granted"
    );
  };

  const requestPermissions = async () => {
    if (Platform.OS === "android") {
      if ((ExpoDevice.platformApiLevel ?? -1) < 31) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Permission",
            message: "Bluetooth Low Energy requires Location",
            buttonPositive: "OK",
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else {
        const isAndroid31PermissionsGranted =
          await requestAndroid31Permissions();

        return isAndroid31PermissionsGranted;
      }
    } else {
      return true;
    }
  };

  const isDuplicteDevice = (devices: Device[], nextDevice: Device) =>
    devices.findIndex((device) => nextDevice.id === device.id) > -1;

  const scanForPeripherals = () =>
    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log(error);
      }
      if (device && device.name?.includes("WeightSensor")) {
        setAllDevices((prevState: Device[]) => {
          if (!isDuplicteDevice(prevState, device)) {
            return [...prevState, device];
          }
          return prevState;
        });
      }
    });

  const connectToDevice = async (device: Device) => {
    try {
      const deviceConnection = await bleManager.connectToDevice(device.id);
      setConnectedDevice(deviceConnection);
      await deviceConnection.discoverAllServicesAndCharacteristics();
      bleManager.stopDeviceScan();
      startStreamingData(deviceConnection);
    } catch (e) {
      console.log("FALHA AO CONECTAR", e);
    }
  };

  const disconnectFromDevice = () => {
    try {
      if (connectedDevice) {
        bleManager.cancelDeviceConnection(connectedDevice.id);
        setConnectedDevice(null);
        setWeightValue(0);
      }
    } catch (error) {
      console.log(`ERRO: ${error}`);
    }
  };

  const onUpdate = (
    error: BleError | null,
    characteristic: Characteristic | null
  ) => {
    try {
      if (error) {
        console.error(error);
        return -1;
      } else if (!characteristic?.value) {
        console.log("No Data was received");
        return -1;
      }

      // Decodifica os dados da característica BLE
      const weightData: string = base64.decode(characteristic.value);

      // Converte a string de peso para um número
      const weightValue: number = parseFloat(weightData);

      // Verifica se a conversão foi bem-sucedida
      if (!isNaN(weightValue)) {
        // Faça algo com o valor de peso, como exibi-lo no console
        console.log("Weight value received:", weightValue);

        // Aqui você pode chamar uma função para lidar com o valor de peso, por exemplo:
        setWeightValue(weightValue);
      } else {
        console.error("Invalid weight data received:", weightData);
      }
    } catch (error) {
      console.log(`ERRO: ${error}`);
    }
  };

  const startStreamingData = async (device: Device) => {
    try {
      if (device) {
        device.monitorCharacteristicForService(UUID, CHARACTERISTIC, onUpdate);
      } else {
        console.log("Nenhum Dispositivo Conectado");
      }
    } catch (error) {
      console.log(`ERRO: ${error}`);
    }
  };

  return {
    scanForPeripherals,
    requestPermissions,
    connectToDevice,
    allDevices,
    connectedDevice,
    disconnectFromDevice,
    weightValue: weightValue,
  };
}

export default useBLE;
