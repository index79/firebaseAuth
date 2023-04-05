import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import firebase from "../firebase";
import { getAuth, signOut } from "firebase/auth";

const HomeScreen = () => {
  const navigation = useNavigation();
  const auth = getAuth(firebase);

  function handleSignOut() {
    signOut(auth)
      .then(async () => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  }

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
