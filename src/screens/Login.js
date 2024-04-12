import {
  StyleSheet,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from 'react-native';
import React from 'react';
import {Icon, Text, Image, ListItem, Button} from '@rneui/themed';

const img = require('../assets/images/icon.png');

const Login = props => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {/* first container */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={img}
              resizeMode="cover"
              style={{
                width: 150,
                height: 150,
              }}
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5,
              }}>
              <Text h3>Welcome</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5,
              }}>
              <Text style={{fontSize: 16, color: 'grey'}}>
                Please Enter Your Email And Password
              </Text>
            </View>
          </View>

          {/* second container */}
          <View>
            <View>
              <TextInput
                placeholder="Email"
                style={{
                  borderColor: '#808080',
                  borderWidth: 1,
                  borderRadius: 5,
                  margin: 20,
                  paddingLeft: 20,
                  height: 56,
                }}
                placeholderTextColor={'#808080'}
              />
            </View>
            <View style={{}}>
              <TextInput
                placeholder="Password"
                style={{
                  height: 56,
                  borderColor: '#808080',
                  borderWidth: 1,
                  borderRadius: 5,
                  margin: 20,
                  paddingLeft: 20,
                }}
                placeholderTextColor={'#808080'}
              />
            </View>
            <View>
              <Text>Forgot Password?</Text>
            </View>

            <Button title={"Login"} color={'secondary'} onPress={() => console.log('asdf')} />

            <Button color="secondary">Secondary</Button>
          </View>

          {/* third container */}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
