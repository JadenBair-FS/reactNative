import { SafeAreaView, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles/appStyles";
import ListContainer from "../components/ListContainer";
import axios from "axios";

export default function Home({ navigation, route }) {
  const [cars, setCars] = useState();
  const [refresh, setRefresh] = useState(true);

  // "https://carcrudapi-32e43b52f09e.herokuapp.com/api/v1";

  const API_BASE_URL = "http://localhost:8000/api/v1";

  useEffect(() => {
    if (refresh) {
      setRefresh(false);
      getCars();
      return;
    }
  }, [refresh]);

  const getCars = async () => {
    await axios
      .get(`${API_BASE_URL}/cars`)
      .then((response) => setCars(response.data))
      .catch((error) => console.error(error));
  };

  // const getCars = async () => {
  //   await fetch(`${API_BASE_URL}/cars`)
  //     .then((response) => response.json())
  //     .then((json) => setCars(json))
  //     .catch((error) => console.error(error));
  // };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>All Cars in Database:</Text>
      <View style={styles.listView}>
        <ListContainer data={cars} />
      </View>
    </SafeAreaView>
  );
}
