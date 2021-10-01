import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import QRscanner from "../QRscanner";

function Scanner({ navigation }) {
  return (
      <View style={Styles.mainhome}>
          
      <View style={{backgroundColor:'yellow'}}>
      <QRscanner/>
      </View>
         
      <View>
        
     </View>
        <View
          style={{ paddingTop: 20, flexDirection: "row", marginBottom: 30,backgroundColor:'red' }}
        >
          <Text style={{ marginLeft: 20 }}>Want to add a connection?</Text>
          <TouchableOpacity
            style={{
              marginLeft: 30,
              borderWidth: 1,
              width: 100,
              borderColor: "red",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                padding: 8,
                textAlign: "center",
                color: "red",
                justifyContent: "center",
              }}
            >
              Scan QR
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  mainhome: {
    flex: 1,
    marginHorizontal: 30,
    paddingTop: 60,
  },

  homeimg: {
    marginTop: 80,
    height: 220,
    width: 220,
    alignSelf: "center",
    marginBottom: 40,
  },
  homep: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});

const Styles = StyleSheet.create({
 
  mainhome: {
    paddingTop:100,
    flex: 1,
    backgroundColor:'green'
  }
})

export default Scanner;
