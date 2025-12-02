import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import AtracaoCard from './components/AtracaoCard';

export default function App() {
  const atracoes = [
    {
      nome: "Nossa Senhora de Fátima",
      descricao: "Uma das maiores monumento do Brasil, ideal turismo religioso.",
      imagem: require("./assets/capa5079.jpg"),
    
      dicas: "Visite em horários de menor movimento.",
      localizacao: "Barro Branco, crato",
      curiosidades: "Tem aproximadamente 340 metros de altura!"
    },
    {
      nome: "Centro Cultura",
      descricao: "Descanso e evento.",
      imagem: require("./assets/centro_cultural.jpg"),
      dicas: "Leve água abundante e protetor solar e preparesse para as melhores Historias.",
      localizacao: "Crato",
     
    },
    {
      nome: "Trilha do Belmonte ",
      descricao: "Uma trilha que você irá se surpreender .",
      imagem: require("./assets/Belmonte.webp"),
      dicas: "Não deixe lixo. Respeite a fauna  local.",
      localizacao: "Chapadas, Crato",
      curiosidades: "É uma das Trilhas mais fotografadas do Crato e está entre as 10 mais bonitas."
    }
  ];

  const [index, setIndex] = useState(0);
  const [infoType, setInfoType] = useState('descricao');
  const [showMore, setShowMore] = useState(false);
  const [useAltImage, setUseAltImage] = useState(false);

  function trocarAtracao() {
    setIndex((index + 1) % atracoes.length);
  }

  function alternarInfo() {
    const tipos = ['descricao', 'dicas', 'localizacao', 'curiosidades'];
    const indiceAtual = tipos.indexOf(infoType);
    setInfoType(tipos[(indiceAtual + 1) % tipos.length]);
  }

  function trocarImagem() {
    setUseAltImage(!useAltImage);
  }

  function mostrarMaisInfo() {
    setShowMore(!showMore);
  }

  const atracao = atracoes[index];
  const imagemExibida = useAltImage ? atracao.imagemAlternativa : atracao.imagem;
  
  let infoExibida = atracao.descricao;
  let tituloInfo = "Descrição";
  
  if (infoType === 'dicas') {
    infoExibida = atracao.dicas;
    tituloInfo = "Dicas";
  } else if (infoType === 'localizacao') {
    infoExibida = atracao.localizacao;
    tituloInfo = "Localização";
  } else if (infoType === 'curiosidades') {
    infoExibida = atracao.curiosidades;
    tituloInfo = "Curiosidades";
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.titulo}>EcoTravel - Turismo Sustentável</Text>
        <Text style={styles.subtitulo}>Descubra atrações ecológicas no Brasil</Text>

        <AtracaoCard 
          nome={atracao.nome}
          descricao={atracao.descricao}
          imagem={imagemExibida}
          infoTitulo={showMore ? tituloInfo : ""}
          infoTexto={showMore ? infoExibida : ""}
        />

        <View style={styles.botoesContainer}>
          <TouchableOpacity style={styles.arrowButton} onPress={() => setIndex((index - 1 + atracoes.length) % atracoes.length)}>
            <Text style={styles.arrowText}>←</Text>
          </TouchableOpacity>

          <View style={styles.middleButtons}>
            <TouchableOpacity style={styles.smallButton} onPress={alternarInfo}>
              <Text style={styles.smallButtonText}>↕</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.smallButton} onPress={trocarImagem}>
              <Text style={styles.smallButtonText}>⟳</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.smallButton} onPress={mostrarMaisInfo}>
              <Text style={styles.smallButtonText}>{showMore ? '✕' : 'ℹ'}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.arrowButton} onPress={trocarAtracao}>
            <Text style={styles.arrowText}>→</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.contador}>Atração {index + 1} de {atracoes.length}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0b'
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  titulo: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
    color: '#9c27b0'
  },
  subtitulo: {
    fontSize: 14,
    marginBottom: 16,
    color: '#ffffff',
    textAlign: 'center'
  },
  botoesContainer: {
    marginTop: 18,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  arrowButton: {
    backgroundColor: '#7b1fa2',
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  arrowText: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '700'
  },
  middleButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  smallButton: {
    backgroundColor: '#ffffff',
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8
  },
  smallButtonText: {
    color: '#7b1fa2',
    fontSize: 18,
    fontWeight: '700'
  },
  contador: {
    marginTop: 18,
    fontSize: 14,
    color: '#cccccc',
    textAlign: 'center',
    fontStyle: 'italic'
  }
});
