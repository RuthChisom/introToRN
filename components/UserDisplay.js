import { View, Text } from 'react-native'
import React from 'react'

// child component to display message to user
const UserDisplay = ({loading, error, title}) => {
    let showContent;
  
    {/* Method 3 */}
    if(error) showContent = <Text style={{color:'red'}}>Something went wrong!</Text>
    else if(loading) showContent = <Text style={{color:'blue'}}>Loading...</Text>
    else showContent = <Text style={{color:'green'}}>{title}</Text>
  
    return(
      <View style={{padding:20}}>
        <Text>{showContent}</Text>
      </View>
    )
}

export default UserDisplay