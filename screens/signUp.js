import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import ImagePicker from "../imagePicker";

function Welcome({ navigation }) {
  return (
    <View style={styles.main}>
      <View style={{ height: 200,width:"100%" }}>
      <ImagePicker />

      </View>
      
      <View style={{ marginTop: 30,alignSelf:"flex-start",marginHorizontal:20 }}>
        <View style={styles.input1}>
          <Text style={{fontSize:20,marginBottom:20,}}> Full Name</Text>
                  <TextInput style={styles.name }placeholder="Rafique Adam Cudjoe" />
        </View>
        <View style={styles.input2}>
          <Text style={{fontSize:20,marginBottom:20,}}> Email</Text>
                  <TextInput style={styles.email }placeholder="rafiqueacudjoe@gmail.com" />
        </View>
        <View style={styles.input3}>
          <Text style={{fontSize:20,marginBottom:20,}}> Phone Number</Text>
                  <TextInput style={styles.phone }placeholder="0544413229" />
        </View>
        <View style={styles.input4}>
          <Text style={{fontSize:20,marginBottom:20,}}> Role</Text>
                  <TextInput style={styles.role }placeholder="Software Developer" />
        </View>
        <View style={styles.input4}>
          <Text style={{fontSize:20,marginBottom:20,}}>Twitter</Text>
                  <TextInput style={styles.twitter }placeholder="@Rafiqueacudjoe" />
        </View>
        <View style={styles.input6}>
          <Text style={{fontSize:20,marginBottom:20,}}>LinkedIn</Text>
                  <TextInput style={styles.linkedin }placeholder="@Rafiquecudjoe" />
        </View>
          </View>
      <View style={styles.signin}>
        <TouchableOpacity onPress={()=>navigation.navigate('home')}>
          <Text style={styles.signin1}>REGISTER</Text>
        </TouchableOpacity>
          </View>

     
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    
    alignItems: "center",
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
    alignSelf: 'flex-start',
    borderBottomWidth: 0.2,
    borderColor: 'grey',
     marginBottom:10
    
  },
  input3: {
    flexDirection: "row",
      alignItems: "center",
    alignSelf: 'flex-start',
    borderBottomWidth: 0.2,
    borderColor: 'grey',
     marginBottom:10
    
  },
  input4: {
    flexDirection: "row",
      alignItems: "center",
    alignSelf: 'flex-start',
    borderBottomWidth: 0.2,
    borderColor: 'grey',
     marginBottom:10
    
  },
  input5: {
    flexDirection: "row",
      alignItems: "center",
    alignSelf: 'flex-start',
    borderBottomWidth: 0.2,
    borderColor: 'grey',
     marginBottom:10
    
  },
  input6: {
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
    email:{paddingLeft:100,fontSize:17},
 twitter: { paddingLeft: 170, fontSize: 17 },
  name: { paddingLeft: 100, fontSize: 17 },
  phone: { paddingLeft: 130, fontSize: 17 },
  role: { paddingLeft: 170, fontSize: 17 },
  linkedin: { paddingLeft: 165, fontSize: 17 },
  resetp: { flexDirection: 'row' },
  
  signin: {
    marginVertical: 40,
    backgroundColor: '#FF2442',
    height: 45,
    width: 330,
    borderRadius: 5,
    justifyContent: "center",
    marginTop:50,
    
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
