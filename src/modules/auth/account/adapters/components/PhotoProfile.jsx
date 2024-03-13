import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar } from "@rneui/base";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { getAuth, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import UsuarioPhoto from "../../../../../../assets/img/avatar.png";
import Loading from "../../../../../kernel/components/Loading";

export default function PhotoProfile(props) {
  const {
    infoUser: { photoURL, displayName, email, uid },
  } = props;
  const [loading, setLoading] = useState(false);
  const uploadPhotoUrl = () => {
    const storage = getStorage();
    getDownloadURL(ref(storage, `avatar/${uid}`)).then((url) => {
      const auth = getAuth();
      updateProfile(auth.currentUser, {
        photoURL: url,
      });
    });
  };
  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const storage = getStorage();
    const storageRef = ref(storage, `avatar/${uid}`);
    return uploadBytes(storageRef, blob);
  };
  const changeAvatar = async () => {
    const resultPermission = await MediaLibrary.requestPermissionsAsync();
    if (resultPermission.status === "granted") {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        // si pones base64: true te lo regresa automatico
      });
      if (!result.canceled) {
        setLoading(true);
        uploadImage(result.assets[0].uri)
          .then(() => {
            uploadPhotoUrl();
          })
          .catch((error) => {
            alert("Error al subir la imagen");
            console.log("Error al subir la imagen", error);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    } else {
      alert("Necesitas dar permisos a la camara");
    }
  };

  return (
    <View style={styles.row}>
      <Avatar
        size={64}
        rounded
        source={photoURL ? { uri: photoURL } : UsuarioPhoto}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>
      <View style={styles.column}>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>
          {displayName || "Anónimo"}
        </Text>
        <Text style={{ fontSize: 12 }}>{email}</Text>
      </View>
      <Loading isShow={loading} title="Cambiando photo de perfil" />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    padding: 16,
  },
  column: {
    flexDirection: "column",
    marginLeft: 16,
  },
});
