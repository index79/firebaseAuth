import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { GoogleSignin } from "react-native-google-signin";

GoogleSignin.configure({
  webClientId:
    "181816414435-9rlll33rp0cmmt8mg81fin6q5epsoo7l.apps.googleusercontent.com",
});

const GoogleLogin = () => {
  const [user, setUser] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {user ? (
        <View style={styles.profile}>
          <Image source={{ uri: user.user.photo }} style={styles.avatar} />
          <Text style={styles.name}>{user.user.name}</Text>
        </View>
      ) : (
        <TouchableOpacity onPress={handleGoogleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#DB4437",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  profile: {
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default GoogleLogin;
