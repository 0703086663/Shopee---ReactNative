import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import { ButtonHref } from '../components/ButtonHref';

export const HomeScreen = () => {
  return (
      <View style={styles.container}>
          <Text style={styles.h1}>Home Screen index</Text>
          <ButtonHref route={'Category'} />
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        paddingLeft: 18,
        paddingRight: 18,
        marginTop: 10
    },
    h1: {
        textTransform: 'uppercase',
        fontSize: 18,
    }
})