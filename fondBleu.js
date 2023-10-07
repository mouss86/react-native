import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function blueBackground({navigation, route}) {
    return (
        <View style={styles.container}>
            <Text style={{color: 'white'}} onPress={() => {
                navigation.navigate("BlueBiggerText");
            }}>Ici le text en Bleu grand caractere en fond bleu</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00f',
        alignItems: 'center',
        justifyContent: 'center',
    },
});