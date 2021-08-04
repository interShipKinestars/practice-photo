import React,{useState}from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  SafeAreaView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {Header, Button, TextInput} from '../../../components'
import {ValidaterEmail} from '../../../utils'
import {Screen} from '../../../constants'

export default function Login({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword]= useState('')
  const [success, setSuccess] = useState({email: true, password: true});


  const onLogin = () => {
    if (email === '' || password === '') {
      setSuccess({
        ...success,
        email: false,
        password: false,
      });
    } else {
      if (ValidaterEmail(email)) {
        let data = {email, password} || {};
        console.log(data)
        navigation.navigate(Screen.HOME_PAGE)
      }
    }
  };

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
              <AntDesign name="back" size={20} color="#888" enableRTL={true} />
            );
          }}
          primaryMode
        />

       <View style={styles.main}>
          <Text style={styles.tilteHeard}>log in</Text>
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

          <Button
            style={{
              marginTop: 16,
              width: '100%',
              backgroundColor: '#000',
            }}
            full
            styleText={{color: '#fff'}}
            onPress={() => {
              onLogin();
            }}>
            <Text style={{fontWeight: '900'}}>
              log in
            </Text>
          </Button>
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
  }
});
