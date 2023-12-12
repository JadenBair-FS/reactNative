import { SafeAreaView, Text, View } from "react-native";
import styles from "../styles/appStyles";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Car({ navigation, route }) {
  const id = route.params?.id;

  const API_BASE_URL = "http://localhost:8000/api/v1";


  const [values, setValues] = useState({
    make: "",
    model: "",
    year: "",
  });

  useEffect(() => {
    navigation.addListener("focus", () => {
      getCar();
    });
  }, [navigation]);

  const getCar = async () => {
    await axios
      .get(`${API_BASE_URL}/cars/${id}`)
      .then((response) =>
        setValues({
          make: response.data.make,
          model: response.data.model,
          year: response.data.year,
        })
      )
      .catch((error) => console.error(error));
  };

  // const getCar = async () => {
  //   await axios
  //     .get(`${API_BASE_URL}/cars/${id}`)
  //     .then((response) => response.json())
  //     .then((json) =>
  //       setValues({
  //         make: json.make,
  //         model: json.model,
  //         year: json.year,
  //       })
  //     )
  //     .catch((error) => console.error(error));
  // };

  const updateCar = async () => {
    await fetch(`${API_BASE_URL}/cars/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then(() => navigation.navigate("Home"));
  };

  const deleteCar = async () => {
    await fetch(`${API_BASE_URL}/cars/${id}`, {
      method: "DELETE",
    }).then(() => navigation.navigate("Home"));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Current Car Selected:</Text>
      <View style={styles.listView}>
        <Text style={styles.bold}>
          {values.year} {values.make} {values.model}
        </Text>
      </View>
    </SafeAreaView>
  );
}
