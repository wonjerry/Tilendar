import * as firebase from 'firebase';
import _ from 'lodash';

firebase.initializeApp({
  apiKey: 'AIzaSyBGyOsi9A-X9WE92yfdVg1Y7iKZE6pVaRY',
  authDomain: "tilendar-3f9b6.firebaseapp.com",
});

const provider = new firebase.auth.GithubAuthProvider();
provider.addScope('repo');

export const signIn = () => {
    return firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const token = result.credential.accessToken;
        const userData = result.user.providerData[0];
        return _.assign(userData, { token });
      });
};

export const signOut = () => {
  return firebase.auth().signOut();
};
