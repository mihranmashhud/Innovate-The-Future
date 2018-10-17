import * as firebase from "firebase"

import { FirebaseConfig } from "../config/keys"
firebase.initializeApp(FirebaseConfig)

const databaseRef = firebase.database().ref()
export const applicationRef = databaseRef.child("application")
export const authRef = firebase.auth()
export const provider = {
  google: new firebase.auth.GoogleAuthProvider(),
  github: new firebase.auth.GithubAuthProvider(),
  facebook: new firebase.auth.FacebookAuthProvider(),
  twitter: new firebase.auth.TwitterAuthProvider()
}
