import firebase from 'firebase';
import {getData} from '../firebase/GetUserData';



export const getUserId = function() {
    var user = firebase.auth().currentUser;
    return user.uid;
};



export function formatExpenses(data) {
    let retArray = [];
    if (data) {
        let savings = data.basicInfo.savings;
        let expenses = data.expenseInfo;
        retArray.push({name: 'savings', value: savings});
        let keys = Object.keys(expenses);
        let values = Object.values(expenses);
        for (let i = 0; i < keys.length; i++) {
            retArray.push({ name: keys[i], value: Number(values[i]) });
        }
    }
    return retArray;
}

export function formatGoals(data) {
    let retObj = {};
    if(data) {
        let goals = data.goals;
        retObj.savings = goals.savingsGoal;
        retObj.necessary = goals.necessarySpendingGoal;
        retObj.discretionary = goals.discretionarySpendingGoal;
    }
    return retObj;
}

export function getSuggestion(data) {
    let retArray = [];
    if (data) {
        let basicInfo = data.basicInfo;
        let income = basicInfo.income;
        let savings = basicInfo.savings;
        let dependents = (basicInfo.numberOfDependents > 0);
        let student = (basicInfo.student == 'yes');
        let employed = (basicInfo.employmentStatus == 'yes');


        let sugHousingPercent;
        let sugUtilityPercent;
        let sugFoodPercent;
        let sugTransPercent;
        let sugMiscPercent;
        let sugSavingPercent;
        if (dependents && employed) {
            sugHousingPercent = 0.35;
            sugUtilityPercent = 0.10;
            sugFoodPercent = 0.15;
            sugTransPercent = 0.15;
            sugMiscPercent = 0.15;
            sugSavingPercent = 0.10;
        } else if (student) {
            sugHousingPercent = 0.25;
            sugUtilityPercent = 0.10;
            sugFoodPercent = 0.15;
            sugTransPercent = 0.10;
            sugMiscPercent = 0.20;
            sugSavingPercent = 0.20;
        } else {
            sugHousingPercent = 0.30;
            sugUtilityPercent = 0.10;
            sugFoodPercent = 0.10;
            sugTransPercent = 0.10;
            sugMiscPercent = 0.25;
            sugSavingPercent = 0.15;
        }

        let sugHousing = (income * sugHousingPercent);
        let sugUtility = (income * sugUtilityPercent);
        let sugTrans = (income * sugTransPercent);
        let sugFood = (income * sugFoodPercent);
        let sugMisc = (income * sugMiscPercent);
        let sugSaving = (income * sugSavingPercent);

        sugHousing = sugHousing.toFixed(2);
        sugUtility = sugUtility.toFixed(2);
        sugTrans = sugTrans.toFixed(2);
        sugFood = sugFood.toFixed(2);
        sugMisc = sugMisc.toFixed(2);
        sugSaving = sugSaving.toFixed(2);


        retArray.push(
            { name: 'Savings', value: sugSaving },
            { name: 'Food', value: sugFood },
            { name: 'Housing', value: sugHousing },
            { name: 'Misc.', value: sugMisc },
            { name: 'Trans.', value: sugTrans },
            { name: 'Util.', value: sugUtility }
        );
    }
    return retArray;
} 

export function checkCompletion(data) {
    let retObj = {};
    if(data) {
        if(data.baiscInfo) {
            retObj.basicInfo = true;
        } else {
            retObj.baiscInfo = false;
        }
        if(data.expenseInfo) {
            retObj.expenseInfo = true;
        } else {
            retObj.expenseInfo = false;
        }
        if(data.goals) {
            retObj.goals = true;
        } else {
            retObj.goals = false;
        }
    }
    console.log(retObj);
    return retObj;
}



