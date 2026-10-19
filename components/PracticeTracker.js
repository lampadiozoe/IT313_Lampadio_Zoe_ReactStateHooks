import {View, Text, Button, StyleSheet} from 'react-native';

export default function PracticeTracker({solved, onSolve, onReset}) {
    return (
        <View style={styles.box}>
            <Text style={styles.count}>{'Solved: ${solved}'}</Text>

            {solved >= 5 && <Text style={styles.great}>Great job!</Text>
            }

            <View style={styles.buttons}>
                <Button title="Solve + 1" onPress={onSolve} />
                <Button title="Reset" onPress={onReset} color="#c62828" />
            </View>
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
    count: {fontSize: 28, fontWeight: "bold"},
    great: {fontSize: 20, color: "#2e7d32", marginTop: 8, fontWeight: "600"},
    buttons: { flexDirection: "row", gap: 16, marginTop: 14},
});
