import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function BlueBiggerText({navigation, route}) {
    return (
        <View style={styles.container}>
            <Text style={{color: 'white', fontSize: 20}}>Ici le text en Bleu grand caractere en fond bleu</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 30,
        backgroundColor: '#00f',
        alignItems: 'center',
        justifyContent: 'center',
    },
});