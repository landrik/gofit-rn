import React, { Component } from 'react'
import { FlatList } from 'react-native'

import routines from '../data/routines';
import { renderItem } from '../lib/general'

export default class Routines extends Component {
  render() {
    return (
      <FlatList data={routines} renderItem={renderItem} />
    )
  }
}