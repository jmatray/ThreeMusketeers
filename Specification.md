# Design Specification

## The Problem
Despite an improving economy, about 62% of Americans still have less than $1,000 in their savings accounts1. The result of this is Americans not having sufficient cash reserves for vital purchases to cover emergencies, or being unable to save up for expensive items that have the potential to significantly improve their lives.

This especially affects those who are in low-income households, which is a class that is increasing in numbers each year2, as they often must live from paycheck to paycheck, which does not allow for the saving of money in order to make larger and more impactful purchases in the future.  Even those who are not particularly low-income are having difficulties with saving up enough for their reach purchases, as they typically spend more than 89% of their earnings a year, leaving very little for their savings3.

Should someone with a low amount of savings suddenly have a vital appliance of theirs cease to function, have an emergency occur, or unexpectedly lose their job, many will either make last-minute reductions to their spending elsewhere, borrow from family or friends, or go into debt through credit cards. Unfortunate events occur all too often, especially when it is least expected, and having a sufficient amount of savings could help surmount those events4.

1. Fottrell, Quentin. “Most Americans Have Less than $1,000 in Savings.” MarketWatch, 23 Dec. 2015, www.marketwatch.com/story/most-americans-have-less-than-1000-in-savings-2015-10-06.
2. Mather, Mark. “U.S. Low-Income Working Families Increasing.” Population Reference Bureau, www.prb.org/us-working-poor-families/.
3. Luhby, Tami. “It's Expensive to Be Poor.” CNNMoney, Cable News Network, money.cnn.com/2015/04/23/news/economy/poor-spending/index.html.
4. “10 Reasons Why You Should Save Money (Even When Borrowing Is Cheap & Easy).” 10 Reasons Why You Should Save Money | My Money Coach, www.mymoneycoach.ca/saving-money/why-save-money.

## The Solution
Our solution to this problem is [app name]. Our goal is to provide a simple way for users to view their monthly expenses breakdown, as well as make personal goals to help them achieve a desired financial state. The application will require users to sign up with a username and password as seen in Figure 1 to create a user account, which will be stored in a firebase database. The purpose of creating a user account is so user information, like monthly income and goal achievement status can be easily retrieved, reducing required user input.  Also seen in Figure 1 is the login functionality, which will require that users enter their email and password associated with their account if they have already created on. 

![Login Screen](imgs/Login.PNG)
*Figure 1*

After initially signing up, users will be redirected to a page asking for a basic breakdown of their current financial state. This screen is seen in Figure 2, and will require basic information such as average monthly income, average savings per month, and basic demographic information. This demographic information includes the number of dependents the user has, whether they’re a student, whether they work part-time, etc. This information will allow us to get a better understanding of the areas in which income will need to be allocated to when creating suggested budgets. Users will type this information into form boxes next to their labeling question. Users will also be asked to select the expenses that they are responsible for every month, and can enter in other expenses if one is not listed. The sample expenses will be radio-buttons that users can check, and the additional expenses will be form boxes. At the bottom of the page are two buttons, one to save the user’s input information, and another to cancel the process and return to the login and sign up page.
![New User Basics Screen](imgs/NewUserBasics.png)
*Figure 2*

The next screen, Figure 3, the user will be sent to upon clicking save is a breakdown of the users current expenses. The user will be prompted to enter fields based on the expenses they indicated on the previous screen. These fields will again be text forms that the users can input their own monetary amounts into. If the user indicated that they would like to record a custom expense that was not captured in the generic options, they have the ability to add details to that custom option on this form, again using text fields. All the user needs to record is the approximate monetary amount they spend in each category. Once the information has been sufficiently recorded, the user can select the save button at the bottom of the screen to push their information to our database and continue to their goal setting page.

![New User Expenses Screen](imgs/NewUserExpenses.png)
*Figure 3*


In Figure 4 we see the goal setting page. Here, users will be able to state what finance related goals they would like to set. The generic goals presented allow the user to determine how much they would like to allocate per month in three main categories, necessities, discretionary spending, and savings. Users are given a guideline for what recommended percentages are in each category , presented as a label beneath each goal section. Users can input their monetary amounts via text forms. Additionally, users can create custom goals using the three tabs at the bottom of the page. Selecting these tabs will trigger a form in which users can enter in what their custom goal is, and what measure they would like to try and attain. Similarly to before, the user can select the save button at the bottom of the screen to record their data and proceed, or select the back button to return to the previous screen. Figure 4.2 is an error message that the user may encounter should their goal amounts not realistically match the other financial data they’ve entered so far. For example, if a user indicates that they would like to save more than 80 percent of their monthly income, yet has indicated that the amount of money they spend on expenses is greater than the remaining 20 percent, this error would appear. This is aimed at preventing goals that are impossible for the user to attain, and would render the service useless.

![Goals Screen](imgs/Goals.png)
*Figure 4*

![Goal Error Popup](imgs/ErrorGoals.png)
*Figure 4.2*

The next screen that the user will be taken to is the final step of signing up for the service. In Figure 5, the user will be able to adjust their notification and interaction settings. Notifications will be emailed to the user based on the email address used to sign up for the service. These notifications can be set to arrive daily, weekly, or monthly and will remind the user to keep their spending information up to date and to view their goal process. The interaction setting is how often the user would like to update their financial information and reset their goals. The user can then select the save button to record their settings with the rest of their user information and proceed to the dashboard. Selecting the back button will take the user back to the goal setting screen.

![Notification Settings Screen](imgs/NotificationSettings.png)
*Figure 5*

The user is then taken to the dashboard view, as shown in Figure 6. Here, the user can view their goal achievement progress, what their current goals are, and compare their current spending habits to what has been recommended to them. Users can also access any of the previous pages from here should they need to update their financial data. In the center of the dashboard will be a radial chart breaking down where the user’s income goes by category. In the upper left corner will be the current goals that the user is working towards as well as progress bars associated with each of them. The bottom left corner will contain a spreadsheet-esque breakdown of the user’s expenses for the month by category, showing what they currently have spent, what they should spend, and what they’ve spent in the prior month. Additional displays will compare suggested versus actual spending amounts on the right side of the dashboard. The information populating the dashboard will be pulled from firebase in one transaction upon rendering the page.

![Main Display Screen](imgs/MainDisplay.png)
*Figure 6*

Figure 7 is an example of a notification that the user may receive if they have not updated their financial information within the time parameter they set on the notification page. The reminder/notification will pop up as a modal reminding the user to update their information in order to help the application more accurately fit their needs. The notification can be dismissed by either clicking ignore or edit at the bottom. Clicking the edit button will redirect the user to the expenses page, prompting them to update their information, while clicking ignore will simply close the modal. 

![Notification Popup](imgs/Notification.png)
*Figure 7*

Once the user has created an account and gone through the initial information entry process, the dashboard will be the screen that they are redirected to upon logging in. In the upper left hand corner will be a hamburger menu. Once opened, the menu will allow users to navigate to other pages such as the goals page and the general expenses page by clicking on those specific links.

When users are inputting their information into the application, the data will be pushed to firebase as the user clicks save at the bottom of the page. The data will be stored in a JSON tree structure in our Firebase Database, with the parentmost node of the tree being the unique ID for each user that is generated when they enter their email into the application at signup. This data will be broken into smaller trees based on the category it fits into, and will all be pulled when rendering the dashboard view.

