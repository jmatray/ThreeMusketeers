# Requirements Specification

## General
* The entire site should be accessible in all modern web browsers, and in internet explorer version 10 and up
* The site should be viewable by screen sizes >1024px 
* Text input forms will not accept empty strings as valid inputs
* Except when a new user is setting their information for the first time, a hamburger menu will be in the top right corner of the screen
   * The navigation bar should contain these options: “Dashboard”, “Expenses”, “Goals”, "Profile," and “Settings”
   * Each option should send the user to their respective page after being clicked
* Font for all titles is tentatively Century Gothic
* Font for all regular text is tentatively PT Serif 
* Font size for titles is tentatively 36pt
* Font size for all regular text is tentatively 24pt

## User creation and logging in 
* The entirety of the page should be viewable without needing to scroll
* Both login and signup are contained within opaque boxes. 
   * These boxes are the same size, and are placed next to each other in the middle of the screen.
* The submit buttons must be a significantly darker shade than the color of the overall container
* The user information will be saved in a JSON object as they are entering it in. Once the submit button is hit, this object will be pushed to firebase all at once
   ### Log In 
    * Displayed on the right-hand side of the screen (to the right of the sign up box)
    * Title at the top of the box will say “Log In”
    * Two form boxes contain placeholder text, the top saying “Username” and the bottom saying “Password”
    * A button near the bottom of the box/container validates the user’s input upon being clicked
      * The information is searched for in the firebase database, checking to see if a user account exists with that information
      * This will be handled by firebase’s in house authentication functions.
    * Underneath the submit button there will be a link that users can click on if they have forgotten their password
      * Clicking the link will call a firebase method that will send the user an email. The email will contain a link, allowing the user to reset their password for the system.

   ### Sign Up
     * Displayed on the left-hand side of the screen (to the left of the login box)
     * Title at the top of the box will say “Sign Up”
     * The overall container contains four text input forms
     * The fist box prompts the user to enter in their username/display name for the application
       * There are no specific requirements regarding usernames
     * The second form box prompts the user to enter in the email address that they would like to associate with their account
       * Emails must be in valid email format (ex: name@email.com)
       * Only one user account can be associated with an email address
     * The third and fourth boxes are for the user’s password
       * The third box prompts the user to enter in the password they would like to use
         * Passwords must be at least 6 characters in length
         * The characters can be any case, and any character type
         * There are no specific character type requirements
       * The fourth box prompts the user to re-enter their password in order to confirm it
          * If the passwords do not match, an error message will be displayed indicating that they are not the same
   * Towards the bottom of the box will be a button allowing users to submit their information and says “Sign Up”
      * Once this is clicked, the user-input will be passed to a firebase method used for creating new users with email and password. This is an in house method of firebase
Once the user account has successfully been created, the user will then be redirected to the “User Setting Basics” Page

## User setting basics
* Basics  (first page to collect information from new users) 
  * Users must be able to view the entirety of the page without scrolling 
  * Users must be able to enter estimated monthly income, monthly savings, student, dependent, number of dependents, number of members in household, amount of work over 40 hours a week on the left half of the web page
    * Within the left half of the page, the left most quarter of the page will display text representing what information the user should enter in this order: “Estimated Monthly Income”, “Estimated Monthly Savings”, “Are you a student?”, “Are you a dependent?”, “Number of dependents”, “Number of members in your household”, and “Do you work less than 40 hours a week?”; next to it will be rectangular boxes for user input 
    * For monthly income, monthly savings, users must input numerical values representing US dollars and cents
    * For number of dependents and number of household members, users should be able to select an integer from a dropdown that ranges from 0-12 and shows when the user clicks anywhere on the box
      * There should be a “+” next to the last number in the dropdown(12)
    * For student, dependent, working plus or minus 40 hours a week categories, users should be able to select yes or no from a dropdown menu that appears once users click on the input box
  * “Save” and “cancel” buttons will be displayed in the bottom right hand corner of the web page 
    * “Save” button should have the most emphasis (i.e. darker color, larger shadow)
    * “Cancel” button should have less emphasis than the “save” button (i.e. no fill on the button)
    * Once the user hits “Save,” the information on this page should be saved locally and be sent to the GetUserData component
    * Once the user hits “cancel,” all the input will be erased and the app will go back to whatever their previous screen was
    * Users must enter their estimated monthly income and savings, as well as select at least one category of expenses 
      * To indicate this, there will be asterisks near the “estimated monthly income” and “estimated monthly savings” text; there will be a sentence of text explaining that users must select at least one category in the box for expenses, as well as an asterisk
      * If users do not, a pop up will appear in a box in the middle of the page, stating what the user has not completed and prompting them to do so
      * To exit out of the pop up box, the user can hit the “okay” button in the bottom right hand corner of the pop up box
      * Once the user exits out of the pop up box, the box that needs to be filled out will be emphasized (i.e. the box will be filled in in red)
      * The information collected on this page once saved will be accessible and editable through the link to "Profile" on the navigation bar in order to allow users to change these values if necessary

## User Setting Expenses
* Upon entering the page, users must be able to view the entire contents of the page, without needing to scroll 
  * “Set Your Expenses” will be shown in the top center of the page
  * The text below “Set Your Expenses” will be “Please enter the estimated amount you spend per month on the below expenses” and will be center aligned
* The estimated monthly income and savings the user entered on the previous screen should be displayed below the page title and instructions on the left hand side of the screen in a non-editable manner, and should be retrieved from the GetUserData component
  * Users must click anywhere on the boxes to edit them
  * Users must input numerical values representing US dollars and cents
* a darker panel should appear spanning the right hand side of the page.
  * the user should see the text “You selected “Please name categories of expenses that apply to you and fill in the estimated amount you spend on that category per month. Please check the box on the right of the row if this category of expenses is a necessity”
  * “Category Name” will appear on the left half of the panel inside of a text input box; a box for user input will appear on the right half of the panel.
  * Users may click anyone on “Category Name” text box to edit the text . Once they click on the pre-filled text box, the clicked text “Category Name” will change to a blank input box in which they can type a new name. To save the name, they simply click outside of the input box, hit tab, or hit enter. 
  * For the input boxes on the right half of the panel, users must click on the box to begin entering information. Users may only enter in numerical values representing US dollars and cents,
  * Check boxes will appear on the right of the boxes for Category Name and numerical values. They will appear as blank originally but once the user clicks on it to mark it as a necessity, a check mark will appear in the box. 
  * Originally, four rows of prefilled text boxes saying “Category Name” and blank input boxes will appear. If the user would like to add more categories of discretionary expenses, they must press the “add additional categories” button. Once they hit that button, an additional row will appear with an “X” icon to the left of the “category name” text. 
  * To remove the additional categories that have been added, one presses the “X” and the row disappears along with the data potentially entered into it.
  * As the user adds additional categories, the color of the panel will extend past the newly added categories.
    * Any additional categories that overflow off the page must be visible by scrolling down
* Users will see two buttons in the bottom right corner of the page, the left button saying “Go Back” and the right saying “Save”
  * The “Save” button should have a darker color than the “Go Back” button to have more emphasis
  * The “Go Back button should have a lighter color than the “Save” button to have more emphasis
  * If the “Go Back” button is clicked, the user will be sent back to their last page, with all input boxes that have their specific information saved in firebase should be pre-filled with their saved values, but still be editable and act like pre-defined text boxes
  * If the “Save” button is clicked, all entered data should be sent to the GetUserData compoment and the user should be sent to the “User Setting Goals” page

## User Setting Goals
* Upon entering the page, users must be able to view the entire contents of the page, without needing to scroll 
  * “Set Your Goals” will be shown in the top center of the page
  * The text below “Set Your Expenses” will be “Please fill out the information below to help us get an accurate picture of what your goals are. You can always edit this information latere” and will be center aligned
* There will be three categories of input in the center of the page that must be equally spaced from each other
  * The text below the three categories of input will take the order of “Savings”, “Spending: Necessities”, and “Spending: Discretionary”
* Input boxes will be located directly to the right of each category, and must be equally spaced from each other
  * Users will be able to click anywhere on each input box to toggle it active
  * If a user has selected an input box, they can deselect it either by click elsewhere on the screen, or by hitting enter
  * After deselecting an input box, all inputted text should remain contained in the input box
  * Users must be able to freely delete any inputted information
* Users can only click the “Save” Button after filling in all three input boxes
* The “Save” button must be a darker color than the “Go Back” button
* “Save” and “Go Back” buttons must show feedback when users hover their mouse over them by changing their shade of color
* Errors that appear when setting goals: if an error occurs, an alert will pop up in a rectangular box in the middle of the screen with a title for the alert, a description of the alert, and buttons in the right hand bottom corner of the screen that say “Save” and “Edit Goal.” The “Edit Goal” button will appear darker than the “Save” button to emphasize this path is suggested for the user.
  * If users attempt to save 40% or more of their income, an alert will pop up in a rectangular box in the middle of the screen warning users that the suggested percentage of savings is often 15-20% and if they are attempting to save more than double that, their goals may be too ambitious
  * If users attempt to save 50% or more of their income on non-essential/discretionary items, an alert will pop up stating that discretionary spending is typically 30% of one’s budget
  * The goals page allows users to allocate percentages of their income to certain categories of the budget - if the total percentage of all the categories does not equal 100% (if it is lower than or greater than 100%), an alert will pop up prompting the user to adjust their goals to match exactly 100%
* If the “Go Back” button is clicked, the user will be sent to back to their last page, with all input boxes that have their specific information saved in firebase should be pre-filled with their saved values, but still be editable and act like pre-defined text boxes
* If the “Save” button is clicked, all entered data should be sent to the GetUserData component and the user should be sent to the “Dashboard” page


## Notification Settings
* Upon entering the page, users must be able to view the entire contents of the page, without needing to scroll 
* There are two options, one asking for how often users would like to receive notifications and the other asking for the method in which users would like to receive them

   ### How often
   * A drop down selector will be displayed on the right-hand side of the screen with an accompanying label to the left of it
   * This selector will have three options, one for receiving notification weekly, another for every two weeks, and one for notifications for once a month
   * Users will then select the option that they would like and that information will be saved as a state in the user’s account
   * This data will be passed to Firebase’s notification services
   * Users can return to this page via a link on the navigation bar 
     * Updates made to the notification time or method will again be saved as a state within the user object, replacing what was currently there
   ### Method
   * Several checkboxes will be displayed beneath the dropdown menu (the one determining frequency of notifications) with an accompanying label to the left it
   * The label will ask how users would like to receive notifications and will prompt the user to check all the boxes that apply
   * The boxes will have options for email, text, in-app, all of the above, and preferring not to receive notifications
     * If the user attempts to save this page without checking one of these boxes, an alert will appear prompting the user to select one of the boxes
     * If the email box is checked, an input box below the method checkboxes will appear with a label to its left asking for the user to input their email
     * If the text box is checked, an input box below the method checkboxes will appear with a label to its left asking for the user to input their phone number

## Dashboard
* The dashboard will feature the same navigation bar that is available on all other components
* In the upper-left corner will be a section containing the users’ current financial goals. 
  * The goals box will display each goal in a vertical list, with the least recently created goal appearing first. 
  * The goals will be labeled as “Goal 1”, “Goal 2”, etc. 
  * Each goal will be displayed as the label for the goal, the actual content of the goal underneath it (what is the goal and what do we do for it), and a progress bar to the right of the text.
    * The progress bar will indicate how close the user is to achieving their goal. As the user reports that they are getting closer to their goal, for example, by reporting how much they have saved towards a specific amount, this information will be saved as a percentage of goal completion. When this information is pulled from the database, the percentage can be used to specify how much of the bar to fill.
  * When a goal is completed, i.e. when the percentage reaches 100, the goal will remain on the screen with a text flag stating that the goal is complete until the user enters in a new goal to replace it.
  * In the top right corner of the container will be a link titled “Edit Goals”. Clicking this link will redirect the user to the Goal Setting page, where the user can update, remove, or create new goals. These updates will again be pushed to firebase while the user is on that page, and when the user returns to the dashboard, these changes will be shown upon re-rendering of the dashboard. The edit goals link facilitates the same redirecting/navigation as opening the navigation bar and clicking the goals tab.

* In the bottom-left corner, a panel/section titled “Spending” contains information about how much a user is currently spending on categories of expenses per month, what the application suggests the user should be spending, what they have spent so far this month, and whether the user is over and/or under budget
  * The categories of expenses the user has previously inputted will appear under “Spending” on the very left of the section under the subheading “Category..” For example, if the user inputted the category names “housing,” “Starbucks,” and “vacation” on the screen to add expenses, those names will appear under “Category.”
  * What the user is currently spending on categories of expenses will appear under “Spending” to the right of the Category column with the subheading “Current.” Under “Current” should display numerical values representing how much a user is currently spending per relevant category in US currency.
  * Using the user’s inputted goals and spending on different categories, the app will determine the suggested amount of money the user should be spending on different categories for month. This information will appear under the “Suggested” column, which will be under the “Spending” title and to the right of the “Current” column.
  * Given the user’s updated expenses for the month (on a different screen, the user signs up for notifications to update expenses every so often and when notified, update how much they have spent on categories expenses in that period of time), the app will display how much the user has spent on different categories of expenses for the month so far. This information will appear under the “This Month” column, which will be under the “Spending” title and to the right of the “Suggested” column.
  * On the bottom row of the panel/section, a row displaying whether a user is under/over budget will appear with the title “Under/Over Budget” on the left bottom of the panel. To its right will be numerical values representing US currency that is positive or negative to indicate whether a user is under or over budget. For example, in the “Current” column and “Under/Over Budget” row, “-$450” will show a user is $450 under budget with their current spending patterns; a “+$500” in the “Suggested” column and “Under/Over Budget” row will show that if a user follows the suggested spending on categories, the user will be $500 over budget.
  * At the top right corner of the panel/section is an “Edit” button. If a user clicks on “Edit,” they will be redirected to the screen that prompts users to input information about expenses so they may adjust how much they are spending and what they are spending on.
* To the right of the “Goal” box will be a radial/pie chart titled “Overall Breakdown”. This display will take all of the various categories that the user spends money on (food, coffee, housing, etc.) and display these categories on the pie chart based on how much the user spends in each category.
  * This will rely on the data that the user has previously input into the application. When pulling data from firebase, the radial chart will take the percentages that each category makes up of the total income, and will use those percentages when rendering the radial display slices. 
  * As the user updates their spending habits, the percentages will change and so will the radial display to reflect that.
  * When each slice of the pie chart is rendered, a small modal accompanying each section must also be created. This modal should be opened when the user hovers over the slice with their cursor. The modal will contain the name of the category, as well as the numerical percentage amount for the category.
* Below the “Overall Breakdown” display will be a bar diagram titled “Actual vs Suggested Spending”. This bar diagram will compare the suggested spending amounts for the user to what they currently spend in each category.
  * The amounts of what the user currently spends in each category are what the user input on the “Set Your Expenses Page”. The amounts that the user reported spending in each category they defined will be used to determine the heights of the bars when rendering the bar chart. 
    * All of the current expense bars will be the same color to make comparison easier. 
  * The suggested amounts will come from the budget that is suggested for the user based on the “Set Your Expenses” page results. The suggested amounts that the user should be spending will determine the heights of the suggested bars
    * The suggested expense bars will all be the same color, but their color will contrast the current expense color enough to facilitate easy comparison.
  * Since the current expense amounts are subject to change from month to month, this bar chart will likely change as the user interacts with the application over time.
* On the right-hand side of the screen to the left of the “Overall Breakdown” and “Actual vs. Suggested Spending” displays will be a display that shows progress bars with each category of expenses and the suggested amount of spending on that category per month versus how much the user has already spent so far on that category per month. Starting at the top of the section, the name of a category of expenses will be displayed with a progress bar under it. For example, if one category is “Starbucks,” suggested spending is $50 a month and spending this month so far is $25, “Starbucks” will appear at the top of the section, the progress bar will be half full (going from left to right) in green, and “50%” will appear over the visual to indicate the user is 50% of the way to suggested spending.
  * If a user is 90-99% of the way to their suggested spending, the filling of the progress bar will be yellow.
  * If a user has spent the amount suggested for that category of expenses or above, the progress bar will be red. 

## Notification/Reminder (In App)
* Users will receive reminders if they have not updated their spending information within the time period that they specified on the “Notification Settings” page. This time frame will be enforced via a timestamp saved in firebase when the user updates their spending information. This timestamp will be compared against the current date. 
  * The notification will appear in the app. A badge will appear on the navigation bar, indicating that the user has a pending notification. 
  * When the user selects the notification icon (a bell in the navigation bar) the notification modal will open on the user’s screen (in the middle)
  * This modal will remind the user to update their spending information in order to make the application more accurate. 
    * Text: “Don’t forget to update how much you have spent this month! Doing so helps us help you reach your goals.”
  * The modal will have two options for closing it at the bottom. 
    * The Edit button will redirect the user to the Input Spending page of the application, where they can update their spending habits. 
      * The edit button should be a color that contrasts the background of the modal, and is significantly darker than the ignore button
    * The Ignore button will dismiss the modal, closing it and allowing the user to continue interacting with the screen they were previously on. The timestamp will not be reset however; meaning the user will constantly have the notification badge until they actually update their spending data

