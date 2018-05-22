import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

import Note from './Note';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: ''
    };
  }

  render() {

    const notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val}
        deleteMethod= { ()=> this.deleteNote(key) }/>;
    });

    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.header}>
          <Text style={styles.headerTEXT}> - ToDo - </Text>
        </SafeAreaView>

        <ScrollView style={styles.scrollContainer}>

          {notes}

        </ScrollView>
        <SafeAreaView style={styles.footer}>
          <TextInput style={styles.textInput}
            onChangeText={(noteText) => this.setState({noteText})}
            VALUE={this.state.noteText}
            placeholder='ToDo'
            placeholderTextColor='#715AFF'>

          </TextInput>
        </SafeAreaView>

        <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
          <Text style={styles.addButtonText}>
              +
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  addNote() {

    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        'date': d.getFullYear() +
          '/' + (d.getMonth() + 1) +
          '/' + d.getDate(),
        'note': this.state.noteText
      });
      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: '' });
    }
  }

  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#715AFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTEXT: {
    color: 'white',
    fontSize: 30,
    padding: 25
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  textInput: {
    alignSelf: 'stretch',
    color: 'black',
    padding: 20,
    backgroundColor: 'white',
    borderTopWidth: 2,
    height: 60,
    borderTopColor: '#715AFF',
    fontWeight: 'bold',
    fontSize: 13
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 150,
    bottom: 80,
    backgroundColor: '#715AFF',
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24
  }
});
