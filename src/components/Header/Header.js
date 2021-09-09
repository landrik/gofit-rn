import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.header_text}>{props.text}</Text>
      {props.children}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    backgroundColor: '#3e3e3e'
  },
  header_text: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 17,
    textAlign: 'center',
    padding: 10
  }
})
