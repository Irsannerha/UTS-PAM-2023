import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: "https://blog-static.mamikos.com/wp-content/uploads/2020/07/itera-kampus.jpg",
          }}
          style={styles.background}
        >
          <View style={styles.content}>
            <View style={styles.logoContainer}>
              <Image
                source={require("../img/foto.jpg")}
                style={styles.logo}
              />
            </View>
            <View style={{ textAlign: "center", paddingBottom: 50 }}>
              <Text style={styles.title}>IRSAN ROMARDI HARAHAP</Text>
              <Text style={styles.title}>120140043</Text>
              <Text style={styles.title}>Teknik Informatika</Text>
              <Text style={styles.label}>Jurusan Teknologi Produksi dan Industri</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
    paddingBottom: 70,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  label: {
    fontWeight: "bold",
    color: "#fff",
    paddingBottom: 30,
    textAlign: "center",
    fontStyle: "italic",
  },
  text: {
    flex: 1,
    color: "#fff",
    fontFamily: 'Roboto-Regular',
  },
  button: { backgroundColor: "gold", padding: 20, borderRadius: 15 },
});
