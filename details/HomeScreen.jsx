import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

export default class HomeScreen extends Component {
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
                source={require("../img/logo_itera.png")}
                style={styles.logo}
              />
            </View>
            <View style={{ textAlign: "center", paddingBottom: 50 }}>
              <Text style={styles.title}>Welcome to The App</Text>
              <Text style={styles.title}>Institut Teknologi Sumatera</Text>
              <Text style={styles.label}>Smart, Friendly & Forest Campus</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate("Detail")}
              >
                 <Text style={{ fontFamily: 'Roboto-Regular', fontWeight: "condensed", fontSize: 16 }}>
                About Campus
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  this.props.navigation.navigate("Profil Mahasiswa")
                }
              >
                <Text style={{ fontFamily: 'Roboto-Regular', fontWeight: "condensed", fontSize: 16 }}>
                  Profile Student
                </Text>
              </TouchableOpacity>
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
    width: 100,
    height: 100,
    marginBottom: 20,
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
