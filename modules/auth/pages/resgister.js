import React,{useState, useEffect}from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  SafeAreaView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {Header, Button, TextInput} from '../../../components'
import {ValidaterEmail,ValidaterPassword} from '../../../utils'
import {Screen} from '../../../constants'

export default function Register({navigation}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword]= useState('')
  const [success, setSuccess] = useState({email: true, password: true, name: true});
  const [select, setSelect] = useState(false)

  const onNext = () => {
    if (email === '' || password === '') {
      setSuccess({
        ...success,
        email: false,
        password: false,
      });
    } else {
      if (ValidaterEmail(email) && ValidaterPassword(password) ) {
        setSelect(true)
      }
    }
  };

  const onResgiter = () =>{
    if (name === '') {
      setSuccess({
        ...success,
        name: false
      });
    }else {
      let data = {email, password, name}
      console.log(data)
      navigation.goBack()
    }
  }


  const renderInputEmailAndPass = () => (
    <>
      <TextInput
        style={{...styles.input,marginTop: 32}}
        onChangeText={text => setEmail(text)}
        onFocus={() => {
          setSuccess({
            ...success,
            email: true,
          });
        }}
        placeholder='Email'
        success={success.email}
        keyboardType="email-address"
        value={email}
        autoCapitalize="none"
      />

      <TextInput
        style={{...styles.input,marginTop: 16}}
        onChangeText={text => setPassword(text)}
        onFocus={() => {
          setSuccess({
            ...success,
            password: true,
          });
        }}
        placeholder='Password'
        secureTextEntry={true}
        success={success.password}
        value={password}
        autoCapitalize="none"
        
      />
    </>
  )

  const renderInputName = () =>(
    <TextInput
      style={{...styles.input,marginTop: 16}}
      onChangeText={text => setName(text)}
      onFocus={() => {
        setSuccess({
          ...success,
          name: true,
        });
      }}
      placeholder='Name'
      success={success.name}
      value={name}
      autoCapitalize="none"
    />
  )

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Header
          onPressLeft={() => {
            navigation.goBack();
          }}
          title=''
          renderLeft={() => {
            return (
              <AntDesign name="back" size={20}  color="#888" enableRTL={true} />
            );
          }}
          primaryMode
        />

       <View style={styles.main}>
          <Text style={styles.tilteHeard}>Register</Text>
          {!select  ? renderInputEmailAndPass() : renderInputName()}

          <Button
            style={{
              marginTop: 16,
              width: '100%',
              backgroundColor: '#000',
            }}
            full
            styleText={{color: '#fff'}}
            onPress={() => {
              !select ? onNext() : onResgiter() 
            }}>
            <Text style={{fontWeight: '900'}}>
              {!select ? 'next' : 'resgiter'}
            </Text>
          </Button>
          
          {select &&
            <Text style={{marginTop: 32, fontSize: 13}}>
              {`By signing up, you agree to Photo's `}
              <Text style={styles.textDecoration}>Terms of Service</Text>
              {' and '}
              <Text style={styles.textDecoration}>Privacy Policy</Text>
              {'.'}
            </Text>
          }
        </View>
       </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tilteHeard: {
    marginTop: 20,
    textTransform: 'capitalize',
    fontSize: 36,
    fontWeight: '400',
  },
  main:{
    paddingHorizontal: 16
  },
  input: {
    borderWidth: 2,
    borderColor: '#000',
  },
  textDecoration:{
    textDecorationLine: "underline"
  }
});
