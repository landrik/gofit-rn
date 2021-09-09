import React, { Component } from 'react'
import { FlatList } from 'react-native'

import logs from '../data/logs';
import { renderLogItem } from '../lib/general'


export default class Logs extends Component {
  render() {
    return (
      <FlatList data={logs} renderItem={renderLogItem} />
    )
  }
}
