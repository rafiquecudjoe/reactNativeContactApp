import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import pic from "../assets/home1.jpg";

function Welcome({ navigation }) {
  return (
    <View style={styles.main}>
      <Image style={styles.welcomeimg} source={pic} />
      <Text style={styles.appname}>
        KEEP IN TOUCH WITH THE PEOPLE OF THE TECH GUY
      </Text>

      <Text style={styles.loginorres}>
        Login or Register with your The Tech Guy email
      </Text>
      <View style={styles.footer}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("signUp")}>
            <Text style={styles.res}>REGISTER</Text>
          </TouchableOpacity>

          <Text style={styles.border}></Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text style={styles.log}>SIGN IN</Text>
          </TouchableOpacity>

          <Text style={styles.border}></Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#F3F0D7",
    alignItems: "center",
  },
  welcomeimg: {
    height: "60%",
    width: "100%",
  },
  appname: {
    fontSize: 20,

    alignSelf: "flex-start",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  loginorres: {
    alignSelf: "flex-start",
    marginHorizontal: 10,
    color: "grey",
  },
  footer: {
    marginTop: 120,
    flexDirection: "row",
  },
  res: {
    paddingHorizontal: 60,
    fontSize: 18,
  },
  log: {
    paddingHorizontal: 80,
    fontSize: 18,
  },
  border: {
    backgroundColor: "red",
    height: 2,
    width: 70,
    alignSelf: "center",
  },
});
export default Welcome;
