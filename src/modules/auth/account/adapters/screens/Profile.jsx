import { StyleSheet, Text, View } from 'react-native'
import { getAuth } from "firebase/auth";
import React from 'react'
import { signOut } from 'firebase/auth';
import { Button } from '@rneui/base';

export default function Profile(props) {
  const { navigation } = props;
  const auth = getAuth();
  const logout = () => {
    signOut(auth).then(() => {
      navigation.navigate('UserLogged');
    }).catch((error) => {
      console.error(error);
    });
  }
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Cerrar sesión" onPress={logout} />
    </View>
  )
}

const styles = StyleSheet.create({})
