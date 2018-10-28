import * as firebase from "firebase"
import applicationModel from "../models/application"

import { FirebaseConfig } from "../config/keys"
firebase.initializeApp(FirebaseConfig)

const database = firebase.database()

export const authRef = firebase.auth()

export const getApplication = user => {
  let application = database.ref(`/${user.uid}`).once("value")
  return application
}

export const updateApplication = (user, questions) => {
  let model = applicationModel(user.uid, user.email, questions)
  return database.ref("/" + user.uid).set(model)
}

export const submitApplication = (user, questions) => {
  let model = applicationModel(user.uid, user.email, questions, true)
  return database.ref(`/${user.uid}`).set(model)
}

export const provider = {
  google: new firebase.auth.GoogleAuthProvider(),
  github: new firebase.auth.GithubAuthProvider(),
  facebook: new firebase.auth.FacebookAuthProvider(),
  twitter: new firebase.auth.TwitterAuthProvider()
}
