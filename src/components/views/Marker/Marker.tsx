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

export const MarkerView = () => {
  const [coord, setCoord] = useState<any>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [obj, setObj] = useState<any>({ data: "53.919193,27.593078" });
  // const [permission, setPermission] = useState(false);

  const getNewData = async () => {
    await firestore()
      .collection("newCollection")
      .doc("location")
      .onSnapshot((documentSnapshot) => {
        setObj(documentSnapshot.data());
        console.log("User data: ", documentSnapshot.data());
        console.log("object data", obj.data.split(","));
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

  // const location = useCallback(() => {
  //   Geolocation.getCurrentPosition(
  //     (position) => {
  //       console.log(position.coords.latitude);
  //       if (position.coords.latitude != coord.latitude) {
  //         setCoord({
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //           latitudeDelta: 0.0922,
  //           longitudeDelta: 0.0421,
  //         });
  //       }
  //     },
  //     (error) => {
  //       // See error code charts below...
  //       console.log(error.code, error.message);
  //     },
  //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  //   );
  // }, [coord.latitude]);

  useEffect(() => {
    getNewData();
  }, []);

  return (
    <Marker
      draggable
      coordinate={{
        latitude: +obj.data.split(",")[0],
        longitude: +obj.data.split(",")[1],
      }}
    />
  );
};
