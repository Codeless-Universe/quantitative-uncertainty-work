// import { initializeApp } from "firebase-admin/app";
import admin from "firebase-admin";

// @ts-ignore
const bean: {
  app: admin.app.App;
  db: admin.firestore.Firestore;
} = {};

const init = () => {
  bean.app = admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string)),
  });
  bean.db = admin.firestore(bean.app);
};

try {
  init();
} catch (e) {
  console.error("Firebase init error", e);
}

export const FirebaseAdminHelper = {
  admin: admin,
  firestore: admin.firestore,
  ...bean,
};
