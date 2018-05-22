import firebase from 'firebase';
import {getData} from 'GetUserData';


var user = firebase.auth().currentUser;
getUserId = function() {
    return user.uid;
};


