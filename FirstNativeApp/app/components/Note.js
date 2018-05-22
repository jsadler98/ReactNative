import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Note extends React.Component {
  render() {
    return (

      <View KEY={this.props.keyval} style={styles.note}>

        <Text style={styles.noteText}> {this.props.val.date}</Text>
        <Text style={styles.noteText}> {this.props.val.note}</Text>

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
          <Text style={styles.noteDeleteText}>🗑️</Text>
        </TouchableOpacity>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#715AFF'
  },
  noteText: {
    paddingLeft: 10,
    borderLeftWidth: 10,
    borderLeftColor: '#715AFF'
  },
  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#715AFF',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  noteDeleteText: {
    color: 'white'
  }
});
