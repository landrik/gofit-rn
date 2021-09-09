import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import IconButton from './src/components/IconButton';
import Screen from './src/components/Screen';

import RoutinesPage from './src/screens/Routines';
import LogsPage from './src/screens/Logs';
import LogWorkoutPage from './src/screens/LogWorkout'
import ProgressPage from './src/screens/Progress';
import ExercisesPage from './src/screens/Exercises';
import CreateExercisePage from './src/screens/CreateExercise';




const { width } = Dimensions.get('window');

const pages = {
  routines: {
    title: 'Routines',
    component: <RoutinesPage />,
    has_header_button: false
  },
  exercise: {
    title: 'Exercises',
    component: <ExercisesPage />,
    has_header_button: true
  },
  create_exercise: {
    title: 'Create a new exercise',
    component: <CreateExercisePage />,
    has_header_button: false
  },
  logs: {
    title: 'Logs',
    component: <LogsPage />,
    has_header_button: true
  },
  log_workout: {
    title: 'Log Workout',
    component: <LogWorkoutPage />,
    has_header_button: true
  },
  progress: {
    title: 'Progress',
    component: <ProgressPage />,
    has_header_button: true
  },
  
  
  
}

var current_page = pages.createExercise;






export default class App extends Component  {
  render(){
    return (
      <View style={styles.container}>
        <Screen
          page={current_page.component}
          title={current_page.title}
          has_header_button={current_page.has_header_button} />
          
        <View style={styles.tabs_container}>
          <IconButton icon="event-note" />
          <IconButton icon="edit" />
          <IconButton icon="camera-alt" />
        </View>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs_container: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#3e3e3e'
  }
});
