import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

const SetContainer = (props) => {
  return (
    <TouchableHighlight style={styles.set_container} onPress={() => {
      console.log('pressed!');
    }} underlayColor="#eee">
      <View style={styles.set_body}>
        <View style={styles.weight}>
          <Text style={styles.weight_text}>{props.weight}</Text>
        </View>
        <View style={styles.reps}>
          <Text style={styles.reps_text}>{props.reps}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default SetContainer

const styles = StyleSheet.create({
  set_container: {
    width: 75,
    padding: 15
  },
  set_body: {
    alignItems: 'center'
  },
  weight: {
    marginBottom: 5,
  },
  weight_text: {
    fontSize: 13
  },
  reps: {
    width: 50,
    height: 50,
    backgroundColor: '#ddd',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  reps_text: {
    fontWeight: 'bold',
    fontSize: 20
  }
})
