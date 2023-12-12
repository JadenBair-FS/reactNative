import { View, Text, Pressable } from "react-native";
import styles from "../styles/appStyles";
import { useNavigation } from "@react-navigation/native";

const handlePress = (id, navigation) => {
  console.log("Pressed!");
  console.log(`The id is ${id}`);
  navigation.navigate("Car", { id: id });
};



// const ListItem = ({ year, make, model}) => (
//   <View>
//     <Pressable onPress={handlePress} onLongPress={handleLongPress} style={styles.listItem}>
//       <Text style={styles.bold}>{year} {make} {model}</Text>
//     </Pressable>
//   </View>
// );

export default function ListItem({ year, make, model, id }) {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable onPress={() => handlePress(id, navigation)} style={styles.listItem}>
        <Text style={styles.bold}>
          {year} {make} {model} {id}
        </Text>
      </Pressable>
    </View>
  );
}

// export default ListItem;
