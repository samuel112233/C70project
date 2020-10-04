
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import WriteScreen from './screens/WriteScreen';
import ReadScreen from './screens/ReadScreen';

export default class Apps extends React.Component{
  render(){
    return(
      <View>

      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  write : {screen:WriteScreen},
  read : {screen:ReadScreen}
},

{
  defaultNavigationOptions : ({navigation})=>({
    tabBarIcon:()=>{
      const routeName = navigation.state.routeName
      if(routeName == "WriteStory"){
          return(
            <Image  
            source={require("./assets/write.png") 
            style = {{width:50, height:50}} />
          )
      }
      else if(routeName === "Read"){
        return(
          <Image  
          source={require('./assets/read.png')
          style = {{width:40,height:40}} />
        )         
      }
    }
  })
}



)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
