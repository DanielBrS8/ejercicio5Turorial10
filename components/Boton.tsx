import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function Boton() {

  const [pulsado,setPulsado] = useState(false)
  const [texto,setTexto] = useState("Pulsar")
  const [opacidad,setOpacidad] = useState(1)

  useEffect(pulsar,[pulsado])

  function pulsar(){

    if(pulsado){

      setTexto("Soltar")
      setOpacidad(0.33)

    }else{

      setTexto("Pulsar")
      setOpacidad(1)
    }



  }

  return (
    <View style={[styles.boton,{opacity: opacidad}]}>
      <Pressable onPress={() =>{setPulsado(!pulsado)}}>
      <Text>{texto}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({

  boton:{

    borderWidth:1,
    padding:10,
    backgroundColor:"blue"

  }

});
