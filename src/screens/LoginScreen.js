import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {mvs} from '../config/metraces';

// const mvs = (value) => value * (Dimensions.get("window").height / 900);

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');

        if (token) {
          navigation.replace('Main');
        }
      } catch (err) {
        console.log('error message', err);
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogin = () => {
    // const user = {
    //   email: email,
    //   password: password,
    // };

    // axios
    //   .post("http://localhost:8000/login", user)
    //   .then((response) => {
    //     console.log(response);
    //     const token = response.data.token;
    //     AsyncStorage.setItem("authToken", token);
    //     navigation.replace("Main");
    //   })
    //   .catch((error) => {
    //     Alert.alert("Login Error", "Invalid Email");
    //     console.log(error);
    //   });
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
          <Text style={styles.title}>Login In to your Account</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputWrapper}>
            <MaterialIcons
              style={styles.inputIcon}
              name="email"
              size={24}
              color="gray"
            />

            <TextInput
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input}
              placeholder="Enter your Email"
            />
          </View>

          <View style={styles.inputWrapper}>
            <AntDesign
              name="lock1"
              size={24}
              color="gray"
              style={styles.inputIcon}
            />

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
          <Pressable onPress={handleLogin} style={styles.loginButton}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('Register')}
            style={styles.signUpLink}>
            <Text style={styles.signUpText}>
              Don't have an account? Sign Up
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
  inputIcon: {
    marginLeft: mvs(8),
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
  loginButton: {
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
  signUpLink: {
    marginTop: mvs(15),
  },
  signUpText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: mvs(16),
  },
});

export default LoginScreen;
