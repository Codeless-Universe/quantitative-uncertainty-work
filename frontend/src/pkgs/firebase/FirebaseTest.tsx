import { Button } from "@nextui-org/react";
import { addDoc, collection } from "firebase/firestore";
import { useEffect } from "react";
import { FirebaseHelper } from "./FirebaseHelper";

export default function FirebaseTest() {
  useEffect(() => {}, []);
  return (
    <div>
      Test
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
