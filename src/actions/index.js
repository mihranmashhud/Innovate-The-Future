import { applicationRef, authRef, provider } from "../config/firebase"
import { FETCH_APPLICATION, FETCH_USER } from "./types"

export const updateApplication = updatedApplication => async dispatch => {
  applicationRef.set(updatedApplication)
}

export const submitApplication = submission => async dispatch => {
  applicationRef.set(Object.assign(submission, { submitted: true }))
}

export const checkIfSubmitted = () => async dispatch => applicationRef.submitted

export const fetchApplication = () => async dispatch => {
  applicationRef.on("value", snapshot => {
    dispatch({
      type: FETCH_APPLICATION,
      payload: snapshot.val()
    })
  })
}

export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: FETCH_USER,
        payload: user
      })
    } else {
      dispatch({
        type: FETCH_USER,
        payload: null
      })
    }
  })
}

export const signUpWithEmailAndPassword = (email, password) => dispatch => {
  authRef
    .signUpWithEmailAndPassword(email, password)
    .then(result => {})
    .catch(error => {
      console.log(error)
    })
}

export const signInWithEmailAndPassword = (email, password) => dispatch => {
  authRef
    .signInWithEmailAndPassword(email, password)
    .then(result => {})
    .catch(error => {
      console.log(error)
    })
}

export const signInWithGoogle = () => dispatch => {
  authRef
    .signInWithPopup(provider.google)
    .then(result => {})
    .catch(error => {
      console.log(error)
    })
}

export const signInWithGithub = () => dispatch => {
  authRef
    .signInWithPopup(provider.github)
    .then(result => {})
    .catch(error => {
      console.log(error)
    })
}

export const signInWithFacebook = () => dispatch => {
  authRef
    .signInWithPopup(provider.facebook)
    .then(result => {})
    .catch(error => {
      console.log(error)
    })
}

export const signInWithTwitter = () => dispatch => {
  authRef
    .signInWithPopup(provider.twitter)
    .then(result => {})
    .catch(error => {
      console.log(error)
    })
}

export const signOut = () => dispatch => {
  authRef
    .signOut()
    .then(() => {
      console.log("Sign Out Sucessful!")
    })
    .catch(error => {
      console.log(error)
    })
}
