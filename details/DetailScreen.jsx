import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableHighlight, 
  Linking,
} from "react-native";

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
  }
    handlePress () {
      console.log('klik')
      Linking.openURL('https://www.itera.ac.id/');
    }  
  render() {
    return (
      <ScrollView>
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
              <Text style={styles.title}>Institut Teknologi Sumatera</Text>
              <Text style={styles.label}>Smart, Friendly & Forest Campus</Text>
              <TouchableHighlight onPress={()=>this.handlePress} style= {{paddingBottom: 30, color:'#fff',}}>
      <Text style= {{ color:'#fff'}}>itera.ac.id</Text>
    </TouchableHighlight>
        <Text style={styles.text}>
          Selamat datang di aplikasi About Campus.
          Aplikasi ini memberikan informasi tentang kampus kami, termasuk program studi yang tersedia, fasilitas kampus, dan sebagainya.
        </Text>
        <View style={styles.infoBox}>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Jurusan</Text>
            <Text style={styles.infoText}>- Jurusan Sains</Text>
            <Text style={styles.infoText}>- Jurusan Teknologi Infrastruktur dan Kewilayahan</Text>
            <Text style={styles.infoText}>- Jurusan Teknologi Produksi dan Industri</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Program Studi</Text>
            <Text style={styles.infoText}>- Teknik Informatika</Text>
            <Text style={styles.infoText}>- Teknik Fisika</Text>
            <Text style={styles.infoText}>- Teknik Elektro</Text>
            <Text style={styles.infoText}>- dan lain-lain</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Fasilitas Kampus</Text>
            <Text style={styles.infoText}>- Laboratorium Teknik</Text>
            <Text style={styles.infoText}>- Perpustakaan</Text>
            <Text style={styles.infoText}>- UPT TIK</Text>
            <Text style={styles.infoText}>- dan lain-lain</Text>
          </View>
          </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      </ScrollView>
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
  label: {
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    fontStyle: "italic",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  label: {
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    fontStyle: "italic",
  },
  text: {
    flex: 1,
    color: "#fff",
    marginBottom: 20,
    textAlign: "justify",
  },
  infoBox: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
  button: { backgroundColor: "gold", padding: 20, borderRadius: 15 },
});
