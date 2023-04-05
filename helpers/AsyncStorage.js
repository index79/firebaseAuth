import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveUserData = async (userData) => {
  try {
    await AsyncStorage.setItem("userData", JSON.stringify(userData.email));
    console.log("User data saved successfully!");
  } catch (error) {
    console.log("Error saving user data: ", error);
  }
};

export const loadUserData = async () => {
  try {
    const userDataString = await AsyncStorage.getItem("userData");
    if (userDataString !== null) {
      const userData = JSON.parse(userDataString);
      console.log("User data loaded successfully!");
      return userData;
    }
  } catch (error) {
    console.log("Error loading user data: ", error);
  }
};

export const updateUserData = async (userData) => {
  try {
    await AsyncStorage.mergeItem("userData", JSON.stringify(userData));
    console.log("User data updated successfully!");
  } catch (error) {
    console.log("Error updating user data: ", error);
  }
};

export const deleteUserData = async () => {
  try {
    await AsyncStorage.removeItem("userData");
    console.log("User data deleted successfully!");
  } catch (error) {
    console.log("Error deleting user data: ", error);
  }
};
