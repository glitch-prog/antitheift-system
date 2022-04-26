import React from "react";
import { MainPageView } from "../../views/MainPage/MainPage";

export const MainPageContainer = ({ navigation }: any) => {
  const navigateToMaps = () => {
    const navigateToMapsPage = () => navigation.navigate("map");
    navigateToMapsPage();
  };
  return <MainPageView navigateToMaps={navigateToMaps} />;
};
