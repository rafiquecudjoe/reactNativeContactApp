import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function Welcome({navigation}) {
  return (
    <View style={styles.main}>
      <Text style={styles.logo}>THE TECH GUY</Text>
          <Text style={styles.appname}>CONTACTS APP</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("welcome2")}>
          <Text style={styles.gets}>GET STARTED</Text>

          </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#F3F0D7",
    alignItems: "center",
    paddingVertical: "45%",
  },
  logo: {
    fontSize: 30,
    marginBottom: 150,
  },
  appname: {
    fontSize: 20,
    marginBottom: 50,
  },
  gets: {
    marginTop: 200,
    fontSize: 20,
    borderBottomColor: "red",
    borderBottomWidth: 1.2,
  },
});
export default Welcome;
