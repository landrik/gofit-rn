import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-community/picker';

import List from '../components/List';
import IconButton from '../components/IconButton';
import SetContainer from '../components/SetContainer';

const renderItem = ({item}) => {
  return (
    <TouchableHighlight
      underlayColor='#ccc'
      onPress={() => {console.log('pressed!')}}
      style={styles.list_item}
    >
      <Text key={item.key}>{item.name}</Text>
    </TouchableHighlight>
  )
}

const renderPickerItems = (data) => {
  return data.map((item) => {
    let val = item.name.toLowerCase();
    return (
      <Picker.Item key={item.key} label={item.name} value={val} />
    )
  })
}

const renderLogItem = ({item}) => {
  return (
    <TouchableHighlight
      underlayColor='#ccc'
      onPress={() => { console.log('pressed!')}}
    >
      <View style={styles.list_item} key={item.key}>
        <View style={styles.date_container}>
          <Text style={styles.date_month}>{item.month}</Text>
          <Text style={styles.date_day}>{item.day}</Text>
        </View>
        <View style={styles.exercises}>
          <Text style={styles.exercises_text}>{item.exercises}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const renderWorkoutItem = ({item}) => {
  return(
    <View key={item.key}>
      <View style={styles.list_item_header}>
        <Text style={styles.list_item_header_text}>{item.name}</Text>
        <IconButton icon="add" size={20} color="#333" />
      </View>
      <ScrollView horizontal={true} contentContainerStyle={styles.content_container}>
        <List data={item.sets} renderItem={({ item }) => {
          return (
            <SetContainer key={item.key} weight={item.weight} reps={item.reps} />
          );
        }} />
      </ScrollView>
    </View>
  )
}

export { renderItem, renderPickerItems, renderLogItem, renderWorkoutItem }


const styles = StyleSheet.create({
  list: {
    flex: 1
  },
  // list_item_header: {
  //   padding: 10,
  //   fontWeight: 'bold',
  //   fontSize: 17
  // },
  list_item_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f3'
  },
  list_item: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f3'
  },
  date_container: {
    flex: 2
  },
  date_month: {
    fontSize: 12
  },
  date_day: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  exercises: {
    flex: 8
  },
  exercises_text: {
    color: '#696969'
  }



})

