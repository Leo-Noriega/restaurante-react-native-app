import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loading from "../../../../../kernel/components/Loading";
import Profile from "./Profile";
import UserGuest from "../../../login/adapters/screens/UserGuest";
export default function UserLogged(props) {
  const { navigation } = props;
  const [session, setSession] = useState(null);
  const auth = getAuth();
  // useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Usuario logueado");
      setSession(true);
    } else {
      console.log("Usuario no logueado");
      setSession(false);
    }
  });
  // }, [])
  if (session === null) {
    return <Loading isShow={true} title="Cargando" />;
  } else {
    return session ? (
      <Profile navigation={navigation} />
    ) : (
      <UserGuest navigation={navigation} />
    );
  }
}
