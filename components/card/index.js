import { View, Text, Image } from "react-native";
import estilo from "./styles";
 
export default function Card(props) {
  const {porcentagem, titulo, imagem, descricao} = props
  return(
    <>
    <View style={estilo.cardTarefa}>
        <Image
          style={estilo.imagemCard}
          source={
            require(`../imagem/${imagem}`)
          }
        />
        <View style={{ marginLeft: 15, width: 150 }}>
          <Text style={estilo.tituloCard}>{titulo}</Text>
          <Text style={estilo.textoCard}>
            {descricao}
          </Text>
        </View>
        <Text style={{ fontSize: 25 }}>{porcentagem}</Text>

        
      </View>
      </>
  );
}