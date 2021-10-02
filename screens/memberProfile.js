import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import pic from "../assets/profile10.jpg";

function MemberProfile({ navigation }) {
  return (
    <View style={styles.main}>
      <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
        <Image style={styles.profileImage} source={pic} />
        <View style={{ justifyContent: "center", marginHorizontal: 10 }}>
          <Text style={{ fontSize: 18, marginBottom: 5 }}>Mary Kwofie</Text>
          <Text style={{ fontSize: 16, color: "grey" }}>Senior Software Engineer</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 20,
          alignSelf: "flex-start",
        }}
      >
        <Entypo
          style={{ marginRight: 20 }}
          name="twitter-with-circle"
          size={40}
          color="black"
        />
        <Entypo name="linkedin-with-circle" size={40} color="black" />
      </View>
      <View style={{ alignSelf: "flex-start",marginTop:20 }}>
        <View style={{ flexDirection: "row",marginBottom:30,alignItems:"center"  }}>
          <Feather style={{ marginRight: 10 }} name="phone" size={20} color="black" />
          <Text style={{fontSize:20}}>+233 (202) 567229</Text>
        </View>
        <View style={{ flexDirection: "row",marginBottom:30,alignItems:"center" }}>
          <Feather style={{ marginRight: 10 }} name="mail" size={20} color="black" />
          <Text style={{fontSize:20}}>marykwofie@gmail.com</Text>
        </View>
        <View style={{ flexDirection: "row",alignItems:"center" }}>
          <Ionicons style={{ marginRight: 10 }} name="location-outline" size={20} color="black" />
          <Text style={{fontSize:20}}>Accra, Ghana</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 50,
    marginHorizontal: 30,
    alignItems: "center",
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },


});
export default MemberProfile;

