import {db} from './firebase';

//Function that handles information submit from the BasicInfo component.
//Takes in the userID of the current user, the category of basicInfo, 
//and the data that the user input into the various forms as an object.
export const submitBasicInfo = (userId, dataObject, category) =>
    db.ref(userId +'/'+category).set({
        income: dataObject.income,
        savings: dataObject.savings,
        student: dataObject.student,
        dependent: dataObject.dependent,
        numberOfDependents: dataObject.dependentNum,
        numberInHouse: dataObject.householdNum,
        employmentStatus: dataObject.empStatus,  

    });

//Function that handles information submit from the ExpenseInfo component.
//Takes in the userID of the current user, the category of ExpenseInfo, 
//and the data that the user input into the various forms as an object.

//TODO: change set discretionary goals to a dynamic number of them
export const submitExpenseInfo = (userId, dataObject, category) =>
<<<<<<< HEAD
    dataObject.forEach(element => {
        db.ref(userId +'/'+category).child(element.name).set({
            value: [element.value],
            type: [element.type]
        });
=======
    db.ref(userId +'/'+category).set({
        housing: dataObject.housing,
        utilities: dataObject.utilities,
        food: dataObject.food,
        transportation: dataObject.transportation,
        misc: dataObject.misc
>>>>>>> 57b1be89c485fc948f72d14c19166441384be9e5
    });
    

//Function that handles information submit from the GoalInfo component.
//Takes in the userID of the current user, the category of GoalInfo, 
//and the data that the user input into the various forms as an object.
export const submitGoalInfo = (userId, dataObject, category) =>
    db.ref(userId +'/'+category).set({
        savingsGoal: dataObject.savings,
        necessarySpendingGoal: dataObject.necSpend,
        discretionarySpendingGoal: dataObject.desc,
    });

//Takes in the userID of the current user and fetches their data tree from firebase.
//The data is returned as an object.



export const getSavingIncome = (userId) =>
    db.ref(userId).child('basicInfo').on('value', (snapshot) => {
        var moneyValues = {};
        moneyValues = {
            savings: snapshot.val().basicInfo.savings,
            income: snapshot.val().basicInfo.income
        }
        return moneyValues;
    })