import {db} from './firebase';

export const submitBasicInfo = (userId, dataObject, category) =>
    db.ref(userId +'/'+category).set({
        income: dataObject.income,
        savings: dataObject.savings,
        dependent: dataObject.dependent,
        numberOfDependents: dataObject.dependentNum,
        numberInHouse: dataObject.numInHouse,
        employmentStatus: dataObject.empStat
    });

export const submitExpenseInfo = (userId, dataObject, category) =>
    db.ref(userId +'/'+category).set({
        housing: dataObject.housing,
        utilities: dataObject.utilities,
        food: dataObject.food,
        transportation: dataObject.transportation,
        discretionary1: dataObject.desc1,
        discretionary2: dataObject.desc2,
        discretionary3: dataObject.desc3,
        discretionary4: dataObject.desc4,
    });

export const submitGoalInfo = (userId, dataObject, category) =>
    db.ref(userId +'/'+category).set({
        savingsGoal: dataObject.savings,
        necessarySpendingGoal: dataObject.necSpend,
        discretionarySpendingGoal: dataObject.desc,
        customGoal1: dataObject.cust1,
        customGoal2: dataObject.cust2,
        customGoal3: dataObject.cust3,
    });

export const getData = (userId) =>
    db.ref(userId).on('value', (snapshot) => {
        return snapshot.val();
    })