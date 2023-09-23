import { TextInput, Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  StatusBar,
  setStatusBarNetworkActivityIndicatorVisible,
} from "expo-status-bar";

export default App = () => {
  const [number1, number1change] = useState("");
  const [number2, number2change] = useState("");
  const [resultNumber, setResultNumber] = useState(0);

  function fancycalc(whattodo) {
    if (whattodo == 'Plus'){
      if (resultNumber < 10 && number1 == 0) {
        setResultNumber(resultNumber + 1);
      }  
    } else if (whattodo == 'Minus'){
      if (resultNumber > 0 ) {
        setResultNumber(resultNumber - 1);
      }
    } else if (whattodo == 'reset'){
        setResultNumber(0);
    } 
  } 

  var n1 = 0;
  if (number1.toLocaleLowerCase() == "ett") {
    n1 = 1;
  }
  if (number1.toLocaleLowerCase() == "två") {
    n1 = 2;
  }
  if (number1.toLocaleLowerCase() == "tre") {
    n1 = 3;
  }

  var n2 = 0;
  if (number2.toLocaleLowerCase() == "ett") {
    n2 = 2;
  }
  if (number2.toLocaleLowerCase() == "två") {
    n2 = 2;
  }
  if (number2.toLocaleLowerCase() == "tre") {
    n2 = 3;
  }

  return (
    <View style={styles.container}>
      <Button
        title="Plus"
        onPress={() => {
          fancycalc("Plus");
        }}
      />

      <View style={styles.resultHeader}>
        <Text style={styles.numbertext}>{resultNumber}</Text>
      </View>


      <Button
        title="Minus"
        onPress={() => {
          fancycalc("Minus");
        }}
      />

      <Button
       title="reset"
      onPress={() => {
        fancycalc("reset");
      }}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  resultHeader: {
    backgroundColor: "#0000ff",
    alignItems: "center",
    justifyContent: "center",
  },
  calcPlace: {
    backgroundColor: "#fff",
  },
  numbertext: {
    color: "#ffffff",
  },
  numberinput: {
    borderWidth: 1,
    padding: 10,
  },
});

/*
//// Gör en enkel layout enligt nedan. 

* Större siffra i mitten av skärmen
* Knapp med text "Plus" över siffran. Tryck på knapp ökar siffra med 1.
* Knapp med text "Minus" under siffran. Tryck på knapp minskar siffra med 1.
* Längst ner finns knapp "Reset" som sätter siffra till noll.
* Det ska inte gå att minska till mindre än noll.
* Det ska inte gå att öka till mer än 10.

Ta screenshot på layout och ladda upp nedan
*/
