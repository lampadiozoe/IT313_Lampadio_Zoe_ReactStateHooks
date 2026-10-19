import { View, Text, StyleSheet } from "react-native";

export default function Stopwatch({ seconds, isRunning }) {
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <View style={styles.box}>
      <Text style={styles.time}>{`${mm}:${ss}`}</Text>
      <Text style={styles.status}>{isRunning ? "Running…" : "Paused"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginBottom: 16,
  },
  time: { fontSize: 48, fontWeight: "bold" },
  status: { fontSize: 18, color: "#555", marginTop: 4 },
});
