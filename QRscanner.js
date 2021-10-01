import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View>
        
      </View>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      <View style={{marginTop:700,borderTopWidth: 0.7, borderTopColor: "grey" }}>
      <View
          style={{ paddingTop: 20, flexDirection: "row", marginBottom: 30 }}
        >
          <Text style={{ marginLeft: 20 }}>Want to add a connection?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("scanner")}
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
   
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});