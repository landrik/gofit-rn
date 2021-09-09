import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

const List = (props) => {

  return (
    <View style={styles.list}>
      <FlatList
        numColumns={props.data.length}
        columnWrapperStyle={styles.wrapper}
        data={props.data}
        renderItem={props.renderItem}
      />
    </View>
  );
}

export default List;


const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  list: {
    flex: 1
  },
  list_item: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#f3f3f3'
  },
  list_item_header: {
    padding: 10,
    fontSize: 17,
    fontWeight: 'bold'
  }
});

