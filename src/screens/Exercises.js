import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { renderItem } from '../lib/general'
import exercises_data from '../data/exercises';

export default class Exercises extends Component {
  render() {
    return (
      <View>
        <Text style={styles.list_item_header}>Legs</Text>
        <FlatList data={exercises_data} renderItem={renderItem} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  list_item_header: {
    padding: 10,
    fontSize: 17,
    fontWeight: 'bold'
  }
})

