import React from 'react'
import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native'

import Header from '../Header';
import IconButton from '../IconButton';

const { width } = Dimensions.get('window');

const Screen = (props) => {
  return (
    <View style={styles.screen}>
      <Header text={props.title}>
        <IconButton icon={props.icon} is_header={props.has_header_button} />
      </Header>  
      <View style={styles.body}>
        {props.page}
      </View>
    </View>
  )
}

export default Screen

const styles = StyleSheet.create({
  screen: {
    width: width,
    flex: 10
  },
  body: {
    flex: 10,
    width: width
  }
})



