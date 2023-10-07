import { StatusBar } from 'expo-status-bar';
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>LOGIN</Text>
      <View style={styles.viewCenter}>
        <View style={styles.viewCenterTextInput}>
          <Image source={require("./assets/avatar_user.png")} style={styles.imageInput}></Image>

          <TextInput type="text" placeholder="Name" style={styles.input}></TextInput>
          
        </View>
        <View style={styles.viewCenterTextInput}>
          <Image source={require("./assets/lock.png")} style={styles.imageInput}></Image>

          <TextInput type="text" placeholder="Password" style={styles.input}></TextInput>
          <Image source={require("./assets/eye.png")} style={styles.imageInput}></Image>

        </View>
        <View style={styles.viewCenterButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: '#fff', fontSize: 20}}>LOGIN</Text>
          </TouchableOpacity>

        </View>
      </View>
      <Text style={styles.textForget}>Forget your password?</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBCB00',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textLogin: {
    fontSize: 30,
    textAlign: 'left',
    fontWeight: 700,
    marginTop: 75,
    marginLeft: 3
  },
  input: {
    height: 50,
    width: '80%',
    margin: 12,
    // borderWidth: 1,
    padding: 10,
  },
  viewCenter: {
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 50,
  },
  viewCenterTextInput: {
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginHorizontal: 5,
    marginTop: 20,
    backgroundColor: '#DCBC3B',
    border: '1px solid #F2F2F2',
  },
  imageInput: {
    width: 32, 
    height: 32,
    margin: 20,
  },
  viewCenterButton: {
    width: 380,
    height: 55,
    backgroundColor: '#060000',
    marginHorizontal: 5,
    marginTop: 50,
  },
  button: {
    marginHorizontal: 150,
    marginVertical: 18,
  },
  textForget: {
    marginLeft: 100,
    marginTop: 50,
    fontSize: 20,
  },
});
