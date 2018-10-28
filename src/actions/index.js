import { authRef, provider } from "../config/firebase"
import actionType from "./types"
import { getApplication, updateApplication } from "./../config/firebase"

export const loadUserApplication = () => dispatch => {
  dispatch({
    type: actionType.LOAD_APPLICATION_REQUEST
  })
  getApplication()
    .then(application => {
      dispatch({
        type: actionType.LOAD_APPLICATION_SUCCESS,
        payload: application.val()
      })
    })
    .catch(error => {
      dispatch({
        type: actionType.LOAD_APPLICATION_FAILED,
        payload: error
      })
    })
}

export const updateUserApplication = questions => dispatch => {
  dispatch({
    type: actionType.UPDATE_APPLICATION_REQUEST
  })
  updateApplication(questions)
    .then(res => {
      loadUserApplication()(dispatch)
      dispatch({
        type: actionType.UPDATE_APPLICATION_SUCCESS
      })
    })
    .catch(error => {
      dispatch({
        type: actionType.UPDATE_APPLICATION_FAILED,
        payload: error
      })
    })
}

export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: actionType.FETCH_USER,
        payload: user
      })
    } else {
      dispatch({
        type: actionType.FETCH_USER,
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
