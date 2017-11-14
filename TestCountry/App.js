/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import CountryPicker from 'react-native-country-picker-modal'

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const countryStyles = {
  imgStyle: {
    borderWidth: 2,
    borderRadius: 4,
    borderColor: 'white',
    width: 30,
    height: 22

  }
}


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      country: {
        cca2: 'US',
        callingCode: '1'
      }
    }
  }

  _changeCountry = (country) => {
    console.log('COUNTRY', country)
  }

  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
      <CountryPicker
        ref={'countryPicker'}
        closeable
        style={styles.countryPicker}
        onChange={this._changeCountry}
        cca2={this.state.country.cca2}
        styles={countryStyles}
        filterable={true}
        translation='eng'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#faa42c'
  },
  countryPicker: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
