import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import pic from "../assets/qr1.jpg";
import pic1 from "../assets/profile2.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";

function Home() {
  return (
    <View style={styles.mainhome}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Exchange Contact Information
      </Text>
      <Text style={{ fontSize: 15, marginBottom: 20, color: "grey" }}>
        Scan the QR below to share your contacts
      </Text>

      <View>
        <Image style={styles.homeimg} source={pic} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.homep} source={pic1} />
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20 }}>Rafique Adam Cudjoe</Text>
          <Text style={{ color: "grey" }}>Software Developer</Text>
        </View>
      </View>
      <View
        style={{ marginTop: 70, borderTopWidth: 0.7, borderTopColor: "grey",}}
      >
        <View style={{ paddingTop: 20, flexDirection: "row",marginBottom:30 }}>
          <Text style={{marginLeft:20}}>Want to add a connection?</Text>
          <TouchableOpacity style={{marginLeft:30,borderWidth:1,width:100,borderColor:'red',justifyContent:"center"}}>
            <Text style={{padding:8,textAlign:"center",color:'red',justifyContent:"center"}}>Scan QR</Text>
          </TouchableOpacity>
        </View>
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

export default Home;
