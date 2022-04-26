import React, { useCallback, useEffect, useState } from "react";
import { PermissionsAndroid, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import {
  collection,
  DocumentData,
  getDocs,
  onSnapshot,
  Query,
} from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import firestore from "@react-native-firebase/firestore";
import { MarkerView } from "../Marker/Marker";

export const MapPageView = () => {
  const [coord, setCoord] = useState<any>({
    latitude: 53.919838,
    longitude: 27.592643,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [obj, setObj] = useState<any>({ data: "53.919193,27.593078" });

  const getNewData = async () => {
    await firestore()
      .collection("newCollection")
      .doc("location")
      .onSnapshot((documentSnapshot) => {
        setObj(documentSnapshot.data());
        console.log("User data: ", documentSnapshot.data());
        console.log("object data", obj.data.split(","));
        // setCoord({
        //   ...coord,
        //   latitude: +obj.data.split(",")[0],
        //   longitude: +obj.data.split(",")[1],
        // });
      });
  };
  const requestGeolocationPermission = useCallback(async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("done");
      // setPermission(true);
    } else {
      console.log("Camera permission denied");
    }
  }, []);

  useEffect(() => {
    // getNewData();
    requestGeolocationPermission();
    // location();
  }, []);

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={coord}
        region={coord}
        // followsUserLocation={true}
        showsUserLocation={true}
      >
        <MarkerView />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: { width: "100%", height: "100%" },
});
