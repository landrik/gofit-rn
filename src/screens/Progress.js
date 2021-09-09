import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native'
import List from '../components/List'
import progress from '../data/progress'

export default class Progress extends Component {
  render() {
    return (
      <List data={progress} renderItem={this.renderItem} />
    )
  }

  render(){
    return(
      <TouchableHighlight
        key={item.key}
        style={styles.list_item}
        underlayColor='#ccc'
        onPress={() => {console.log('pressed!')}}
      >
        <View style={styles.image_container}>
          <Image 
            source={item.url}
            style={styles.image}
            ImageResizeMode={'contain'}
          />
          <Text style={styles.image_text}>{item.date}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  list_item: {
    padding: 20
  },
  image_container: {
    alignItems: 'center'
  },
  image: {
    width: 150,
    height: 150,
  },
  image_text: {
    fontWeight: 'bold'
  }

})

