import { StyleSheet, View, Text } from "react-native";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { Button, Avatar } from "@rneui/base";
import PhotoProfile from "../components/PhotoProfile";
import ActionProfile from "../components/ActionProfile";

export default function Profile(props) {
  const { navigation } = props;
  const auth = getAuth();
  const logout = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("UserLogged");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const user = auth.currentUser;
  const [userProfile, setUserProfile] = useState(null);
  useEffect(() => {
    if (user !== null) {
      user.providerData.forEach((profile) => {
        setUserProfile(profile);
      });
    }
  }, []);
  return (
    <View style={styles.container}>
      {userProfile && <PhotoProfile infoUser={userProfile} />}
      {userProfile && <ActionProfile infoUser={userProfile} />}
      <Button
        title="Cerrar sesión"
        onPress={logout}
        buttonStyle={{ backgroundColor: "#EB5149", borderRadius: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});
