import { FlatList, TouchableOpacity, View, Text } from "react-native";
import style from "./styles";
import { foodData } from "../../types";
import { useState } from "react";
import InfoModal from "./modal";

interface tagListProps {
  data: foodData[];
  onLongPress: (item: foodData) => void;
}

export default function TagList({ data, onLongPress }: tagListProps) {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [selectedItem, setItem] = useState<foodData>();

  const openModal = (item: foodData) => {
    setItem(item);
    setVisible(true);
  };

  const closeModal = () => setVisible(false);

  type ItemProps = {
    item: foodData;
    onLongPress: (item: foodData) => void;
  };

  const renderItem = ({ item, onLongPress }: ItemProps) => (
    <View>
      <TouchableOpacity
        onPress={(e) => openModal(item)}
        onLongPress={() => onLongPress(item)}
        style={[style.item]}
      >
        <Text style={style.title}>{item.nome}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={style.container}>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItem({ item, onLongPress })}
      />
      <InfoModal
        closeModal={closeModal}
        item={selectedItem}
        visible={isVisible}
      />
    </View>
  );
}
