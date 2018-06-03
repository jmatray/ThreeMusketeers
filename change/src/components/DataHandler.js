import firebase from 'firebase';
import {getData} from '../firebase/GetUserData';



export const getUserId = function() {
    var user = firebase.auth().currentUser;
    return user.uid;
};


export var data = { basicInfo: { dependent: "no", employmentStatus: "no", income: "1234.56", nuberInhouse: "0", numberOfDependents: "0", savings: "234.56", student: "no" }, expenses: { food: 300, housing: 3000, transportation: 1000, utilities: 500 } };
export function formatExpenses(data) {
    let retArray = [];

    let expenses = data.expenses;
    if (expenses) {
        let keys = Object.keys(expenses);
        let values = Object.values(expenses);
        for (let i = 0; i < keys.length; i++) {
            retArray.push({ name: keys[i], value: values[i] });
        }
    }
    return retArray;
}


