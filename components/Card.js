import { View, Text, Button } from 'react-native'
import React from 'react'

const Card = ({title, showButton, buttonTitle}) => {
  return (
    <View 
      style={{
        margin: 20,
        height: 100,
        borderRadius:8,
        backgroundColor: 'lavender',
        padding:12,
        justifyContent:'center',
      }}
    >
      <Text style={{fontSize: 15, fontWeight: 500}}>{title}</Text>
      {/* this will only be displayed if showButton is true */}
      {/* Method 1 */}
      {showButton && <Button title='Click Me'/>}
      {/* Method 2 */}
      {buttonTitle ? <Button title={buttonTitle}/> : null}
    </View>
  )
}

export default Card