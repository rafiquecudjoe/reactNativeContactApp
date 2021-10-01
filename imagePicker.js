import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  Text,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from '@expo/vector-icons';

export default function ImagePickerApp() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        color: "red",
      }}
    >
      <TouchableOpacity onPress={pickImage}>
        <Ionicons style={{alignSelf:'center'}}name="md-person-add-outline" size={24} color="red" />
        <Text style={{color:'red',fontWeight:'bold'}}> ADD PROFILE PHOTO</Text>
      </TouchableOpacity>

      {image && (
        <Image source={{ uri: image }} style={{ width: "100%", height: 240 }} />
      )}
    </View>
  );
}
