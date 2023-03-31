import { View, Text } from 'react-native'
import React from 'react'

const Section2 = (propss) => {
    return (
      <View style={{margin : 10}}>
        <Text style={{fontSize: 20, fontWeight: 500}}>{propss.title}</Text>
      </View>
    )
}

export default Section2