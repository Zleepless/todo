import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {
  state = {
    placeName: "",
    places: []
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    })
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.toString() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };

  render() {
    const placeOutput = this.state.places.map((place, i) => (
      <Text key={i}>{place}</Text>
    ));
    return (
      <View style={styles.anotherContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="An awesome Place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
            style={styles.placeInput}
          />
          <Button
            title="Add"
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View>
          {placeOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  anotherContainer: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});
