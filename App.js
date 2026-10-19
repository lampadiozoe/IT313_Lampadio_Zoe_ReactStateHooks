import {View, StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import LabScreen from './components/LabScreen';

export default function App() {
    return (
        <View style={styles.container}>
            <LabScreen />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingTop: 80,
        paddingHorizontal: 16,
    },
});
