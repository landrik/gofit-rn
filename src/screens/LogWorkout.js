import React, { Component } from 'react'
import { View, FlatList, Modal, Text, StyleSheet, Button, TextInput } from 'react-native'

import { Picker } from '@react-native-community/picker';

import IconButton from '../components/IconButton';

import workouts from '../data/workouts';
import { renderPickerItems, renderWorkoutItem } from '../lib/general'
import routines from '../data/routines';


export default class LogWorkout extends Component {
  render() {
    return (
      <View>
        <Modal
          animationType='slide'
          transparent={false}
          visible={false}
          onRequestClose={() => {console.log('request close')}}
        >
          <View style={styles.modal_header}>
            <Text style={styles.modal_header_text}>Add Exercise</Text>
            <IconButton icon='close' color='#fff' size={18} />
          </View>
          <View style={styles.modal_body}>
            <Picker
              style={styles.picker}
            >
            { renderPickerItems(routines)}
            </Picker>
            <View style={styles.button_container}>
              <Button 
                style={styles.button}
                title='Add'
                onPress={() => { console.log('Pressed !')}}
              />
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          visible={false}
          onRequestClose={() => {
            console.log('request close');
          }}>
          <View style={styles.modal_header}>
            <Text style={styles.modal_header_text}>Add Set</Text>
            <IconButton icon="close" color="#FFF" size={18} />
          </View>

          <View style={styles.modal_body}>
            <TextInput
              style={styles.text_input}
              returnKeyType="done"
              keyboardType="numeric"
              placeholder="Weight (e.g. 100)"
            />

            <View style={styles.button_container}>
              <Button
                style={styles.button}
                title="Add"
                onPress={() => {
                  console.log('pressed!');
                }}
              />
            </View>
          </View>
        </Modal>
        <FlatList data={workouts} renderItem={renderWorkoutItem} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  list_item_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f3'
  },
  list_item_header_text: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  content_container: {
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f3',
    marginBottom: 10
  },
  modal_header: {
    marginTop: 20,
    padding: 20,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#3e3e3e'
  },
  modal_header_text: {
    fontWeight: 'bold',
    color: '#FFF'
  },
  modal_body: {
    padding: 20
  },
  picker: {
    marginTop: -40
  },
  text_input: {
    height: 40,
    borderColor: '#bfbfbf',
    borderWidth: 1,
    padding: 10
  },
  button_container: {
    marginTop: 30
  }
})

