import React, { useState } from "react";
import {
  FlatList,
  View,
} from "react-native";
import { itemData } from "../../types";
import ItemInfo from "../ItemInfo/ItemInfo";

type ListProps = {
  dataProp: itemData[];
  horizontalProp?: boolean;
  onLongPress: (item: itemData) => void;
};

const ItemList = ({
  dataProp,
  horizontalProp = false,
  onLongPress,
}: ListProps) => {
  const [selectedID, setID] = useState<string | undefined>("");

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={dataProp}
        style={{ flex: 1 }}
        horizontal={horizontalProp}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          ItemInfo({ item, setID, selectedID, onLongPress })
        }
        bounces={true}
        bouncesZoom={true}
        decelerationRate={"fast"}
        fadingEdgeLength={3}
        centerContent={true}
      />
    </View>
  );
};

export default ItemList;
