import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import pic1 from "../assets/home2.jpg";

function Welcome({ navigation }) {
  return (
    <View style={styles.main}>
      <Image style={styles.welcomeimg} source={pic1} />
      <View style={{ marginTop: 80,alignSelf:"flex-start",marginHorizontal:20 }}>
        <View style={styles.input1}>
          <Text style={{fontSize:20,marginBottom:20,}}> Email</Text>
                  <TextInput style={styles.email }placeholder="john.smith@gmail.com" />
        </View>
        <View style={styles.input2}>
          <Text style={{fontSize:20}}> Password</Text>
          <TextInput style={styles.pass } placeholder="..." />
        </View>
          </View>
      <View style={styles.signin}>
        <TouchableOpacity>
          <Text style={styles.signin1}>SIGN IN</Text>
        </TouchableOpacity>
          </View>

      <View style={styles.footer}>
        <View style={styles.resetp}>
          <TouchableOpacity onPress={() => navigation.navigate("signUp")}>
            <Text style={styles.res}>Forgot?</Text>
          </TouchableOpacity>

          <Text style={styles.border}>Reset Password</Text>
        </View>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    
    alignItems: "center",
  },
  welcomeimg: {
    height: "30%",
    width: "100%",
  },

  input1: {
    flexDirection: "row",
      alignItems: "center",
    alignSelf: 'flex-start',
    borderBottomWidth: 0.2,
    borderColor: 'grey',
     marginBottom:10
     
  },
  input2: {
    flexDirection: "row",
      alignItems: "center",
     alignSelf:'flex-start'
     
  },
    email:{paddingLeft:135,fontSize:17},
    pass: { paddingLeft: 250, fontSize: 17 },
  resetp: { flexDirection: 'row' },
  signin: {
    marginVertical: 40,
    backgroundColor: '#FF2442',
    height: 45,
    width: 330,
    borderRadius: 5,
    justifyContent: "center",
    
  },
  signin1: {
    alignSelf: "center",
    color:'white'
    
  },
  footer: {
    alignSelf: "flex-start",
    marginLeft:30
    
  }, res: {
   marginRight:5
  },
  border: {
    borderBottomWidth: 1.5,
    borderBottomColor:'red'
  }

 
});
export default Welcome;
