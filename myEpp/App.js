import React, { useEffect, useState } from "react";
import { View, StatusBar } from "react-native";
import SplashScreen from './src/assets/screens/SplashScreen';

import HomeScreen from './src/assets/screens/HomeScreen';


export default function App() {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      {isloading ? <SplashScreen /> : <HomeScreen />}
    </View>
  );
}