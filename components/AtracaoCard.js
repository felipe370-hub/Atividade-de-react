import React from 'react';
import { Image } from 'react-native';

import { View, Text, StyleSheet } from 'react-native';

export default function AtracaoCard(props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: props.imagem }} style={styles.img} />
      <Text style={styles.nome}>{props.nome}</Text>
      <Text style={styles.descricao}>{props.descricao}</Text>
      
      {props.infoTitulo ? (
        <View style={styles.infoBox}>
          <Text style={styles.infoTitulo}>{props.infoTitulo}</Text>
          <Text style={styles.infoTexto}>{props.infoTexto}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
    width: '100%',
    marginBottom: 12
  },
  img: {
    width: '100%',
    maxWidth: 360,
    height: 200,
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: '#f0f0f0',
    objectFit: 'cover',
    display: 'block'
  },
  nome: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 6,
    color: '#7b1fa2'
  },
  descricao: {
    fontSize: 16,
    textAlign: 'center',
    color: '#111',
    marginBottom: 10
  },
  infoBox: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    width: '100%'
  },
  infoTitulo: {
    fontSize: 14,
    fontWeight: '700',
    color: '#7b1fa2',
    marginBottom: 6,
    textAlign: 'left'
  },
  infoTexto: {
    fontSize: 14,
    color: '#222',
    lineHeight: 20
  }
});
