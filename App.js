import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Button , ScrollView, FlatList} from 'react-native';
import Section2 from './components/Section2';
import styles from './styles'
import FormInput from './components/FormInput';
import {names} from './externalData';
import Users from './components/Users';

// child component
const Section = (propss) => {
  return (
    <View style={{margin : 10}}>
      <Text style={{fontSize: 20, fontWeight: 500}}>{propss.title}</Text>
    </View>
  )
}

// child component
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

// parent component
export default function App() {

  const [name, setName] = useState('Ruth');
  // console.log(name);
  let [age, setAge] = useState('20');


  const accessMyContacts = () => {
    console.log("accessing my contacts");
    setName('Chisom');
    console.log(name);
  }

  const happyBirthday = () => {
    setAge(++age);
    console.log(age);
  }

  return (
    <SafeAreaView>
    {/* <SafeAreaView style={{flex:1}}> */}
      <ScrollView>
        <View style={styles.container} >
          {/* header text */}
          <View style={styles.head}>
            <Text style={styles.headerText}>Welcome to MY Intro to React Native</Text>
          </View>

          {/* paragraph */}
          <View style={styles.paragraph}>
            <Text style={styles.pText}>This is going to be fun!!</Text>
            <StatusBar style="auto" />
          </View>

          {/* image */}
          <View style={styles.myImgContainer}>
            <Image
            style={styles.myImg}
            source={require("./assets/logo-react-icon.png")}
            resizeMode="contain"
            />
          </View>

          {/* button */}
          <View style={styles.btnArea}>
            <TouchableOpacity onPress={accessMyContacts} style={styles.btn}>
              <Text style={styles.btnText}>Access My Contact</Text>
            </TouchableOpacity>

          </View>

          <Button title='Happy Birthday' onPress={happyBirthday} />

          <Text>{age} Years Old</Text>

          <Section title="Section 1"/>
          
          <Section2 title="Section 2"/>

          <FormInput />

          <Text style={styles.headerText}> Conditional Rendering</Text>
          <Card title='Mon 17, April 2023' />
          <Card title='Tue 18, April 2023' showButton={true} />
          <Card title='Wed 19, April 2023' showButton={true} buttonTitle='Click me also'/>
          
          <UserDisplay error={true} />
          <UserDisplay loading={true} title='Data Successfully Loaded' />
          <UserDisplay title='Data Successfully Loaded!!' />
        </View>
      </ScrollView>

      {/* list */}
      {/* i had to bring Flatlist outside ScrollView because both have scroll feature, which will clash */}
      {/* move to a new screen to test */}
      {/* <View style={styles.head}>
        <Text style={styles.headerText}>List and Keys</Text>
      </View> */}
      {/* <View>
        <FlatList
        horizontal
        data={names}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => {
          console.log("names", item);
          return <Users names={item.name}/>;
        }}
        ListHeaderComponent={() => {
          return(
            <View style={{margin:10}}>
            <Text>List of User Names</Text>
            </View>
          );
        }}
        />
      </View> */}
    </SafeAreaView>

    
  );
}


