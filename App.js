import React from "react";
import { Text, StyleSheet, View, Image, FlatList} from "react-native";
import Header from "./components/header";
import Card from "./components/card";
import Rotina from './data';

export default function App() {
  return (
    <View style={estilo.container}>
      <Header></Header>
    <FlatList
    data = {Rotina}
    keyExtractor = {(item)=>item.id}
    renderItem = {({item}) =>(
       <Card
       porcentagem = {item.porcentagem}
       titulo = {item.titulo}
       imagem = {item.imagem}
       descricao = {item.descricao}
       />
    )} 
    />
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CAF0F8",
    borderColor: "#90E0EF",
    paddingHorizontal: 20,
  },
});
