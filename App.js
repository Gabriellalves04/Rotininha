import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Header from "./components/header";
import Card from "./components/card";
export default function App() {
  return (
    <View style={estilo.container}>
      <Header></Header>
      <Card
        porcentagem="5.95%"
        titulo="Transporte Ida e Volta para a escola"
        imagem='5.png'
        descricao="Segunda a Sexta"
      ></Card>
      <Card
        porcentagem="41.67%"
        titulo="Dormir"
        imagem="2.png"
        descricao="Todos os dias"
      ></Card>
      <Card
        porcentagem="15.48%"
        titulo="Etec"
        imagem="3.png"
        descricao="Segunda a Sexta"
      ></Card>
      <Card
        porcentagem="8.33%"
        titulo="Almoço e Janta"
        imagem="1.png"
        descricao="Todos os dias"
      ></Card>
      <Card
        porcentagem="11.67%"
        titulo="Arrumar e Organizar a casa"
        imagem="6.png"
        descricao="Todos os dias"
      ></Card>
      <Card
        porcentagem="16,9"
        titulo="Igreja"
        imagem="9.png"
        descricao="Todos os dias"
      ></Card>
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#CAF0F8",
    borderColor: "#90E0EF",
    paddingHorizontal: 20,
  },
});
