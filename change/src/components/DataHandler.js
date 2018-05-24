import firebase from 'firebase';
import {getData} from '../firebase/GetUserData';


var user = firebase.auth().currentUser;
export const getUserId = function() {
    return user.uid;
};


