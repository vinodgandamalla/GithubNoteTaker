

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';
import api from '../Utils/api';
import Profile from './Profile';

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});


class Dashboard extends React.Component{
   makeBackground(btn){
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }
    if(btn === 0){
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1){
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }
    return obj;
  }
  goToProfile(){
    Actions.profile({userInfo: this.props.userInfo});
    console.log('Going to Profile Page');
  }
  goToRepos(){
     api.getRepos(this.props.userInfo.login)
         .then((res) => {
           Actions.repositories({userInfo: this.props.userInfo,
                                  repos: res});
           console.log('Going to Repos');
                       });
         }

  goToNotes(){
    api.getNotes(this.props.userInfo.login)
      .then((jsonRes) => {
        jsonRes = jsonRes || {};
        Actions.notes({userInfo: this.props.userInfo,
                              notes:jsonRes});
        console.log('Going to Notes');
        });
  }
render(){
  return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
        <TouchableHighlight
            style={this.makeBackground(0)}
            onPress={this.goToProfile.bind(this)}
            underlayColor="#88D4F5">
              <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={this.makeBackground(1)}
            onPress={this.goToRepos.bind(this)}
            underlayColor="#E39EBF">
              <Text style={styles.buttonText}>View Repositories</Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={this.makeBackground(2)}
            onPress={this.goToNotes.bind(this)}
            underlayColor="#9BAAF3">
              <Text style={styles.buttonText}>Take Notes</Text>
        </TouchableHighlight>
      </View>
    )
}
};

module.exports = Dashboard;
