import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyBGyOsi9A-X9WE92yfdVg1Y7iKZE6pVaRY',
  authDomain: "tilendar-3f9b6.firebaseapp.com",
});

const provider = new firebase.auth.GithubAuthProvider();
provider.addScope('repo');

export const signIn = () => {
    return firebase.auth().signInWithPopup(provider)
      .then((result) => firebase.auth().currentUser);
};

export const signOut = () => {
  return firebase.auth().signOut()
    .then(() => firebase.auth().currentUser);
};
