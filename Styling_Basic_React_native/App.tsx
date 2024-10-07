import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import Header from "./components/header";
import Footer from "./components/footer";
import { StatusBar } from "expo-status-bar";
import Home from "./screens/home";

// Load custom fonts
const getFonts = () =>
  Font.loadAsync({
    "caveat-bold": require("./assets/fonts/Caveat-Bold.ttf"),
  });

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await getFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontLoaded(true);
        SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View>
        <Header />
      </View>
      <View style={styles.main}>
        <Home />
      </View>
      <View>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#001f3f",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
