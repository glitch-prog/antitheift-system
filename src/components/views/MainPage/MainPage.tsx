import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Text,
  Button,
  TouchableOpacity,
  View,
  Switch,
  StyleSheet,
} from "react-native";
import firestore from "@react-native-firebase/firestore";

import Icon from "react-native-vector-icons/FontAwesome";

export const MainPageView = ({ navigateToMaps }: any) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const getLockerState = async () => {
    const lockerState = await (
      await firestore().collection("devices").doc("locker").get()
    ).data()?.isLocked;
    console.log(lockerState);
    // setIsEnabled(lockerState);
  };

  // const handleOnChangeLocked = async (isEnabled: any) => {
  //   await firestore()
  //     .collection("devices")
  //     .doc("locker")
  //     .update({
  //       isLocked: isEnabled,
  //     })
  //     .then(() => {
  //       console.log(isEnabled ? "Locked" : "Unlocked");
  //     });
  // };

  const updateLockerState = async (isEnabled: boolean) => {
    await firestore()
      .collection("devices")
      .doc("locker")
      .update({
        isLocked: isEnabled,
      })
      .then(() => console.log(!isEnabled ? "unlocked" : "locked"));
  };

  const handleOnClickLocked = () => {
    setIsEnabled(!isEnabled);
    updateLockerState(isEnabled);
  };

  useEffect(() => {
    getLockerState();
  });

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.locker} onPress={handleOnClickLocked}>
          <Icon
            name="lock"
            size={150}
            color={!isEnabled ? "#6ECEE3" : "#FFDEAC"}
          />
        </TouchableOpacity>
        <Text style={styles.locker_state_text}>
          {!isEnabled ? "Unlocked" : "Locked"}
        </Text>
        <TouchableOpacity onPress={navigateToMaps} style={styles.map__btn}>
          <Text style={styles.map__btn__text}>Open map</Text>
        </TouchableOpacity>

        {/*<Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleOnChangeLocked}
        value={isEnabled}
      /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F3F6F9",
  },
  container: {
    width: 320,
    height: 500,
    // height:,
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },

  map__btn: {
    display: "flex",
    width: 150,
    height: 75,
    backgroundColor: "#007DFC",
    borderRadius: 10,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    marginBottom: 50,
  },

  map__btn__text: {
    color: "#ffffff",
    fontWeight: "500",
    fontSize: 18,
  },

  locker: {
    marginTop: 150,
  },

  locker_state_text: {
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 26,
    color: "#000",
    marginBottom: 60,
  },
});
