import { View, Text, TextInput, Alert, Button } from 'react-native'
import React, { useState } from 'react'

const FormInput = () => {
    // define name as hook, so that input will show in textinput box
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const submitData = () => {
        let myInfo = {
            name,
            email,
            phone
        }
        console.log("Data Submitted", myInfo);
    }

  return (
    <View style={{margin: 15}}>
        {/* Name */}
      <TextInput
        //   value={name}
        onChangeText={setName}
        placeholder={'Please enter your Fullname '}
        placeholderTextColor={{color:'red'}}
        style={{borderWidth: 1,padding: 10, borderColor: 'red', borderRadius: 20}}
        // onPressIn = {() => Alert.alert("Your details will be Protected!!")}
        onPressOut = {() => Alert.alert("Continue Typing!!")}
      />

      {/* Email */}
      <TextInput
        onChangeText={setEmail}
        placeholder={'Please enter your Email Address '}
        placeholderTextColor={{color:'red'}}
        style={{borderWidth: 1,padding: 10, borderColor: 'red', borderRadius: 20, marginTop: 5}}
        keyboardType="email-address"    
      />

      {/* Phone Number */}
      <TextInput
        onChangeText={setPhone}
        placeholder={'Please enter your Phone Number '}
        placeholderTextColor={{color:'red'}}
        style={{borderWidth: 1,padding: 10, borderColor: 'red', borderRadius: 20, marginTop: 5}}
        keyboardType="phone-pad"   
      />

      <View style={{margin: 10, flexDirection: 'row', justifyContent: "space-between"}}>
        <View style={{justifyContent:'center'}}>
            <Text style={{fontSize: 10}}> Name:</Text>
        </View>
        <View style={{flex:1, paddingLeft:15, justifyContent:'center'}}>
            <Text style={{fontSize: 10, color: 'purple'}}>{name}</Text>
        </View>
      </View>

      <View style={{margin: 10, flexDirection: 'row', justifyContent: "space-between"}}>
        <View style={{justifyContent:'center'}}>
            <Text style={{fontSize: 10}}>Email:</Text>
        </View>
        <View style={{flex:1, paddingLeft:15, justifyContent:'center'}}>
            <Text style={{fontSize: 10, color: 'purple'}}>{email}</Text>
        </View>
      </View>

      <View style={{margin: 10, flexDirection: 'row', justifyContent: "space-between"}}>
        <View style={{justifyContent:'center'}}>
            <Text style={{fontSize: 10}}>Phone:</Text>
        </View>
        <View style={{flex:1, paddingLeft:15, justifyContent:'center'}}>
            <Text style={{fontSize: 10, color: 'purple'}}>{phone}</Text>
        </View>
      </View>

      <Button title='Submit' onPress={submitData} />

    </View>
  )
}

export default FormInput