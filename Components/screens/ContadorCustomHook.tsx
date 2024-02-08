import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export const ContadorCustomHook = () => {
  const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const [pares, setPar] = useState<number[]>([]);
  const [impares, setImp] = useState<number[]>([]);

  const Paresmayor = () => {
    const paresTemp: number[] = [];
    const imparesTemp: number[] = [];

    numeros.forEach((num) => {
      if (num % 2 === 0) {
        paresTemp.push(num);
      } else {
        imparesTemp.push(num);
      }
    });

    setPar(paresTemp);
    setImp(imparesTemp);
  };

  return (
    <View>
      <Text style={{ textAlign: 'center' }}>Evaluación Final</Text>

      <Text>Vectores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]</Text>
      
      <Button title="Enviar" onPress={Paresmayor}/>
      <Text> Pares: {pares.join(',')}</Text>
      <Text> Impares: {impares.join(',')}</Text>
    </View>
  );
};

