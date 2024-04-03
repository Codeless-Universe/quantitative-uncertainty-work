import { Button } from "@nextui-org/react";
import { addDoc, collection } from "firebase/firestore";
import { useEffect } from "react";
import { FirebaseHelper } from "./FirebaseHelper";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function FirebaseTest() {
  useEffect(() => {}, []);
  return (
    <div>
      Test
      <Button
        onPress={() => {
          const provider = new GoogleAuthProvider();

          signInWithPopup(FirebaseHelper.auth, provider)
            .then((result) => {
              console.log("xxxxxxxxxxxx", result);
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
              // IdP data available using getAdditionalUserInfo(result)
              // ...
            })
            .catch((error) => {
              console.log("error", error);
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.customData.email;
              // The AuthCredential type that was used.
              const credential = GoogleAuthProvider.credentialFromError(error);
              // ...
            });
        }}
      >
        Login
      </Button>
      <Button
        onPress={async () => {
          console.log("111111111111");
          try {
            const docRef = await addDoc(collection(FirebaseHelper.db, "test_users"), {
              first: "Ada",
              last: "Lovelace" + "_" + Date.now(),
              born: 1815,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        }}
      >
        Save222
      </Button>
    </div>
  );
}
