import { View, Text, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'

const FormInput = () => {
    // define name as hook, so that input will show in textinput box
    const [name, setName] = useState('');

  return (
    <View style={{margin: 15}}>
      <TextInput
    //   value={name}
      onChangeText={setName}
      placeholder={'Please enter your Fullname '}
      placeholderTextColor={{color:'red'}}
      style={{borderWidth: 1,padding: 10, borderColor: 'red', borderRadius: 20}}
    //   keyboardType="numeric"
    // onPressIn = {() => Alert.alert("Your details will be Protected!!")}
    onPressOut = {() => Alert.alert("Continue Typing!!")}
      />
      <View style={{margin: 10, flexDirection: 'row', justifyContent: "space-between"}}>
        <View style={{justifyContent:'center'}}>
            <Text style={{fontSize: 10}}>Your Name is:</Text>
        </View>
        <View style={{flex:1, paddingLeft:15, justifyContent:'center'}}>
            <Text style={{fontSize: 10, color: 'purple'}}>{name}</Text>
        </View>
      </View>
    </View>
  )
}

export default FormInput