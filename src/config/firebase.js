import * as firebase from "firebase"
import applicationModel from "../models/application"

import { FirebaseConfig } from "../config/keys"
firebase.initializeApp(FirebaseConfig)

const database = firebase.database()

export const authRef = firebase.auth()

export const getApplication = () => database.ref(`/${firebase.User.uid}`).once("value")

export const updateApplication = questions => {
  let userId = firebase.User.uid
  let email = firebase.User.email
  let model = applicationModel(userId, email, questions)
  return database.ref("/" + userId).set(model)
}

export const provider = {
  google: new firebase.auth.GoogleAuthProvider(),
  github: new firebase.auth.GithubAuthProvider(),
  facebook: new firebase.auth.FacebookAuthProvider(),
  twitter: new firebase.auth.TwitterAuthProvider()
}
