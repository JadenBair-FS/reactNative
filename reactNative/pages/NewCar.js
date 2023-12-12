import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import styles from "../styles/appStyles";
import React, { useState } from "react";

export default function NewCar({ navigation }) {
  const [values, setValues] = useState({
    make: "",
    model: "",
    year: "",
  });

  const API_BASE = "http://localhost:8000/api/v1";

  const createCar = async () => {
    try {
      await fetch(`${API_BASE}/cars`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then(() => navigation.navigate("Home"));
    } catch (error) {
      console.log(error);
    }
  };

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     createCar();
  //   };

  return (
    <SafeAreaView style={styles.listView}>
      <Text style={styles.headerText}>Add a New Car:</Text>
      <ScrollView>
        <TextInput
          style={styles.input}
          placeholder="Make"
          onChangeText={(text) => {
            setValues({ ...values, make: text });
            console.log(values.make);
          }}
          label="make"
        />
        <TextInput
          style={styles.input}
          placeholder="Model"
          onChangeText={(text) => {
            setValues({ ...values, model: text });
            console.log(values.model);
          }}
          label="model"
        />
        <TextInput
          style={styles.input}
          placeholder="Year"
          onChangeText={(text) => {
            setValues({ ...values, year: text });
            console.log(values.year);
          }}
          label="year"
        />
        <Button title="Submit" onPress={createCar} style={styles.button} />
      </ScrollView>
    </SafeAreaView>
  );
}
