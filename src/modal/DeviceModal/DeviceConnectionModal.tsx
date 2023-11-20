import React, { FC, useCallback } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Device } from "react-native-ble-plx";
import style from "./styles";
import Button from "../../components/Button";
type DeviceModalListItemProps = {
  item: ListRenderItemInfo<Device>;
  connectToPeripheral: (device: Device) => void;
  closeModal: () => void;
};

type DeviceModalProps = {
  devices: Device[];
  visible: boolean;
  connectToPeripheral: (device: Device) => void;
  closeModal: () => void;
};

const DeviceModalListItem: FC<DeviceModalListItemProps> = (props) => {
  const { item, connectToPeripheral, closeModal } = props;

  const connectAndCloseModal = useCallback(() => {
    connectToPeripheral(item.item);
    closeModal();
  }, [closeModal, connectToPeripheral, item.item]);

  return (
    <Button
      title={item.item.name !== null ? item.item.name : ""}
      onPress={connectAndCloseModal}
      btnclass={1}
    ></Button>
  );
};

const DeviceModal: FC<DeviceModalProps> = (props) => {
  const { devices, visible, connectToPeripheral, closeModal } = props;

  const renderDeviceModalListItem = useCallback(
    (item: ListRenderItemInfo<Device>) => {
      return (
        <DeviceModalListItem
          item={item}
          connectToPeripheral={connectToPeripheral}
          closeModal={closeModal}
        />
      );
    },
    [closeModal, connectToPeripheral]
  );

  return (
    <Modal
      style={style.modal}
      animationType="slide"
      transparent={false}
      visible={visible}
    >
      <SafeAreaView style={style.Title}>
        <Text style={style.TitleText}>
          Escolha um dispositivo para conectar-se
        </Text>
        <FlatList
          contentContainerStyle={{}}
          data={devices}
          renderItem={renderDeviceModalListItem}
        />
        <Button btnclass={1} onPress={closeModal} title="Fechar" />
      </SafeAreaView>
    </Modal>
  );
};

export default DeviceModal;
