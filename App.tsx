import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Audio } from "expo-av";
const url = "https://samplelib.com/lib/preview/mp3/sample-12s.mp3";

export default function App() {
  const [count, setCount] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const sound = React.useRef(new Audio.Sound()).current;

  React.useEffect(() => {
    sound
      .loadAsync({
        uri: url,
      })
      .then(() => {
        setLoaded(true);
        sound.setOnPlaybackStatusUpdate((status) => {
          console.log(status);
          setCount((c) => c + 1);
        });
      });
    return () => {
      sound.unloadAsync();
    };
  }, []);
  const play = () => sound.playAsync();
  const pause = () => sound.pauseAsync();
  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      {loaded ? (
        <>
          <Button onPress={play} title="play" />
          <Button onPress={pause} title="pause" />
        </>
      ) : (
        <Text>Loading Sound... </Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
