import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAutFQnrtXm6apriJBiPJzHNHxcGCwyyAg",
    authDomain: "budget-app-db2d0.firebaseapp.com",
    databaseURL: "https://budget-app-db2d0.firebaseio.com",
    projectId: "budget-app-db2d0",
    storageBucket: "budget-app-db2d0.appspot.com",
    messagingSenderId: "960807417072"
};
firebase.initializeApp(config);

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();
export {
    db,
    auth,
};