import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import PracticeTracker from "./PracticeTracker";
import Stopwatch from "./Stopwatch";
import useStopwatch from "../hooks/useStopwatch";

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const seconds = useStopwatch(isRunning);

  const handleSolve = () => setSolved((s) => s + 1);
  const handleReset = () => setSolved(0);
  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);

  return (
    <View>
      <Text style={styles.title}>Lab Timer & Practice Tracker</Text>

      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />

      <Stopwatch seconds={seconds} isRunning={isRunning} />

      <View style={styles.buttons}>
        <Button title="Start" onPress={handleStart} />
        <Button title="Stop" onPress={handleStop} color="#c62828" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 16, textAlign: "center" },
  buttons: { flexDirection: "row", justifyContent: "center", gap: 16 },
});
