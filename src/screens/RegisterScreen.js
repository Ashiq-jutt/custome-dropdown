import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useNavigation from '@react-navigation/native';
import axios from 'axios';
import {mvs} from '../config/metraces';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png',
          }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={styles.centerContainer}>
          <Text style={styles.title}>Register to your Account</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputWrapper}>
            <Ionicons name="ios-person" size={24} color="gray" />
            <TextInput
              value={name}
              onChangeText={text => setName(text)}
              style={styles.input}
              placeholder="Enter your name"
            />
          </View>

          <View style={styles.inputWrapper}>
            <MaterialIcons name="email" size={24} color="gray" />
            <TextInput
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input}
              placeholder="Enter your Email"
            />
          </View>

          <View style={styles.inputWrapper}>
            <AntDesign name="lock1" size={24} color="gray" />
            <TextInput
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              style={styles.input}
              placeholder="Enter your Password"
            />
          </View>
        </View>

        <View style={styles.checkboxRow}>
          <Text>Keep me logged in</Text>
          <Text style={styles.forgotPassword}>Forgot Password</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable onPress={handleRegister} style={styles.registerButton}>
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.signInLink}>
            <Text style={styles.signInText}>
              Already have an account? Sign In
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: mvs(50),
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: mvs(150),
    height: mvs(100),
  },
  centerContainer: {
    alignItems: 'center',
    marginTop: mvs(12),
  },
  title: {
    fontSize: mvs(17),
    fontWeight: 'bold',
    color: '#041E42',
  },
  formContainer: {
    marginTop: mvs(70),
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: mvs(5),
    backgroundColor: '#D0D0D0',
    paddingVertical: mvs(5),
    borderRadius: mvs(5),
    marginTop: mvs(30),
  },
  input: {
    color: 'gray',
    marginVertical: mvs(10),
    width: mvs(300),
    fontSize: mvs(16),
  },
  checkboxRow: {
    marginTop: mvs(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  forgotPassword: {
    color: '#007FFF',
    fontWeight: '500',
  },
  buttonContainer: {
    marginTop: mvs(80),
  },
  registerButton: {
    width: mvs(200),
    backgroundColor: '#FEBE10',
    borderRadius: mvs(6),
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: mvs(15),
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: mvs(16),
    fontWeight: 'bold',
  },
  signInLink: {
    marginTop: mvs(15),
  },
  signInText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: mvs(16),
  },
});

export default RegisterScreen;
