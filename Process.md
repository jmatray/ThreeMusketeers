# Process

## Team Communication

### Communication Policies:

- Slack channel is primary communication source when the team is remote
- Use @[name] for immediate replies from specific members
  - Since we only have three team members, direct messaging is not necessary, all conversations will apply to everyone
- @channel will be used for questions or statements that apply to the whole group
  - Questions will be answerable by anyone on the team, regardless of role, since we are a small team
- In class meetings on Tuesday and Thursday will be effective for communicating about issues not easily solved over Slack
  - This can include development bugs, roadblocks, etc.
- In class meetings will also provide opportunities for our team to work on development side by side, and ensure that components developed by different team members are able to function with one another.

### Meeting Policies:

- Weekly meetings at 5:30 every Monday (in effect as of April 6, 2018) with additional meetings near/around crucial dates
  - Most often will take place in CoLab
    - Location changes can be made if necessary as long as the need is brought up before the Sunday night before
  -  Agenda and format of meeting will be laid out and communicated to the team by Sunday night by the manager
    - Agenda will also contain specific tasks for each member to complete before the meeting for that week

### Tracking:

- We will use GitHub issues to visible see how each member is doing on their assigned tasks

## Team Coordination

- No daily scrums - since we have other classes, work, and other extracurricular activities and cannot program next to each other most of the time, daily scrums are unrealistic since 1) we are unable to meet every day given our individual schedules and 2) we may not work on this project every day
- Work time during class every Tuesday and Thursday
  - This time will be used to work on the components we are aiming to finish that week, pair programming on issues we are struggling to complete individually, code reviews, and/or testing
- Weekly meetings every Monday
  - Plan weekly sprint schedules
  - Discuss each members tasks for the week, that will be tracked by _issues_ in github
- Updates on progress twice a week
  - In-person updates in Monday meetings, slack check-ins on Fridays
- We will also meet on a case-by-case basis as needed
  - Will be coordinated by Slack
  - In the event of major issues, questions, etc.
- Tentative out-of-class meeting calendar with suggested agenda topics:
    - May 7: begin setup of Firebase, ensure entire team has necessary software/packages/libraries
    - May 14: begin AuthHandler, GetUserData, and Router components if not started already; perform code reviews and testing if completed or in need of assistance
    - May 19: requirements freeze meeting to finalize requirements
    - May 21: discuss progress on AuthHandler, GetUserData, and Router components; test components as a group
    - May 28: no meeting due to Memorial Day weekend
    - May 29: discuss progress on DataHandler, BasicInfo, Goals, Expenses, and NotificationsSettings components; test components as a group; begin working on Dashboard component as a group if not started already
    - June 1: fully completed product should be done by this time; meet to identify what needs to be prioritized or still needs completion before Release on June 3; schedule additional meetings prior to Release if needed
    - June 3-7: work on Evaluate homework individually; meet as a team to Patch and prepare for demo (exact date and time to be determined closer to finals week depending on when other class&#39; final reviews, team members&#39; work schedules, etc. are released)

## Component Ownership

- [Hannah, May 11th, Estimated Time: 1hr] Set up firebase/ Any preliminary setup
  - Necessary for all components
  - Ensure database and app communicate properly
  - Hannah will set up the firebase account for the application, as well as ensure that the application skeleton is also created. Since Hannah will need the firebase database to create the GetUserData component, she will be responsible for ensuring that the database is properly set up and configured with the overall application before the GetUserData component is completed on May 11th. All teammates will need to interact with firebase for the creation of their components, so it is crucial that this is completed on time. Christine and Jacob can communicate as needed to ensure progress is being made.

- [Hannah, May 11th, Estimated Time: 2hr 30min] GetUserData
  - Ensure data can be brought down from firebase
  - Necessary for DataHandler
  - Hannah is going to build the GetUserData component. This will interact directly with the firebase database, and will need to be ready in order to properly build and insert data from the BasicInfo, Goals, Expenses, and Notification components. Since this component will be have the most direct connection with firebase, Hannah will also set up the firebase account and hook it up to the application. Christine will need the GetUserData component to complete both the Goals and the Expenses Components by May 25th, so she will have to coordinate with Hannah to ensure she has an ample amount of time to complete them. Jacob also needs the GetUserData component to finish the AuthHandler component by May 18th and the DataHandler component by May 25th so he will also need to coordinate with Hannah to ensure the required component is completed. This will be tested with mock data until other components are created.
- [Jacob, May 18th, Estimated Time: 2hr] AuthHandler
  - Ensure new accounts are able to be created and current users are able to login
  - Jacob will have to complete the AuthHandler component before he is able to complete the DataHandler component. Since the DataHandler component is required for Christine to complete the Goals component by May 25th, Hannah to complete the NotificationSettings component by May 25th, and the team to complete the DashboardComponent by June 1st, it is important that the team nag Jacob to finish AuthHandler in a timely manner so they can begin working on their parts.
- [Christine, May 18th, Estimated Time: 1 hr 30min] RouterComponent (tabs/pages)
  - Ensure each page is accessible
  - Since the RouterComponent is required for accessing the BasicInfo, Goals, and Expenses components, it is important that Christine finish the RouterComponent by the 18th so that she and Hannah can begin working on and testing their respective components and have them finished by May 25th.
- [Jacob, May 18th Estimated Time: 3hr] DataHandler
  - Ensure data can be processed
  - Because DataHandler is required for Expenses, NotificationSettings, and Dashboard components, Jacob will have to complete DataHandler on time so that each of those components are able to be started on time. Hannah and Christine will have to nag Jacob to be sure that they can start their Components on time.
- [Hannah, May 25th, Estimated Time: 2hr] BasicInfo
  - Ensure users can input data regarding their financial state, and that the data properly stores in firebase
  - Hannah will complete the BasicInfo component by the 25th. The information collected and pushed to firebase from this component is necessary for the Dashboard component, so it is crucial that Hannah completes this component on time so the group can begin developing the Dashboard and properly calculating budgets.
- [Christine, May 25th, Estimated Time: 2hr 30min] Goals
  - Allows users to set their financial goals
  - Goals are required to make the Dashboard component, and since the Dashboard component is going to require the greatest amount of work, the team will have to be in coordination with Christine to be sure that the Goals component is finished by May 25th so they are not blocked on the Dashboard component.
- [Christine, May 25th, Estimated Time: 2hr 30min] Expenses
  - Allows users to input their monthly expenses
  - User expenses are required to make the Dashboard component, and since the Dashboard component is going to require the greatest amount of work, the team will have to be in coordination with Christine to be sure that the Expenses component is finished by May 25th so they are not blocked on the Dashboard component.
- [Jacob, May 25th, Estimated Time: 2hr] NotificationSettings
  - Allows users to set when and how they wish to be notified
  - While notifications are not required for other components, it is important that the team is able to test it when they test all other components by June 1st
- [Everyone,  June 1st, Estimated Time: 5hr]Dashboard display
  - Displays analysis of the user&#39;s current and suggested financial information
  - This will be worked on by each team member, and the Dashboard is reliant on almost every other component. The Dashboard will require each member to communicate with one another to ensure that each of their prior components, as well as their designated portions of the dashboard function properly. This will be completed by June 1st at the latest to ensure that there is time for Patching and Evaluation.
- [Everyone, June 2nd, Estimated Time: 1hr 30min] Testing all components
  - Ensure that each component&#39;s main functionality is working so we can release the most viable product.
  - Testing is important so that we can be sure that each component is viable before the initial release on June 3rd. The team will have to work with each to make sure each member tests the component that they implemented.

## Release Timeline

- Have a fully-built release candidate done by June 1st
  - June 1: fully completed product should be done by this time; we will meet on June 1 to identify what needs to be prioritized or still needs completion before Release on June 3; schedule additional meetings prior to Release if needed
  - Spend June 2 refining the release
- Evaluate
  - Each team member will complete Evaluate between June 3 at 5 PM and June 4 at 12 PM
- Patch
  - Depending on each team member&#39;s finals and work schedules, we will meet between June 4 at 12 PM and June 5 at 12 PM to prioritize defects to patch and complete the assignment (exact date and time to be determined closer to finals week depending on when other class&#39; final reviews, team members&#39; work schedules, etc. are released)
  - Spend June 5 and 6 patching in-person as much as possible
  - Spend June 6 and morning of June 7 finishing patching and preparing for in-class demonstration
- Each finished component will be reviewed before subsequent components are finished
  - Reviews will be done by the two members who did not work on the component

## Progress Tracking

- Weekly meetings and weekly updates will touch on progress each member is making
  - Peer reviews will be done before and during each Monday meeting as well as during work time in class, to ensure each component is following specifications
  - Pair program if necessary
  - Switch components from the person assigned to another person if that&#39;s beneficial
- Slack updates will keep each member in the know on how progress in each component is going
- During group meetings, team members will demo their components, either to show that they have completed so far or their finished product.
  - This will help bring potential bugs to the attention of other teammates in the event that the implementer of the component missed them.
- Components that deal with user data (input and output) are most important, while components such as notifications and their settings are of a lesser priority
  - The priority level of a component will be determined by the number of other components it affects.
  - DataHandler, GetUserData, and the Dashboard are all considered to be of high priority.
  - Notification and NotificationSettings components are less of a priority, and therefore are the most likely to become &quot;optional&quot; candidates.
- We will have each member show a demo of a deliverable of their assigned component for the weeks prior to the May 14th, May 21st, and May 28th meetings to ensure progress is being made
- We will also discuss as a team during the May 14th meeting to determine any optional components that can be worked on by members who finish their components early and want to add more the project

## Potential Process Improvements

- If we find that we need more time working together, we can decide to schedule more frequent in-person meetings
  - This decision will either be made in slack, during the scheduled meetings, or during the given time in class to work on the project
- If we find the deadline for a certain component is too soon, we can adjust the schedule accordingly i.e. have a certain component due on a Sunday instead of a Friday to give two extra days
  - This adjustment will either be made in slack, during the scheduled meetings, or during the given time in class to work on the project
- If a member&#39;s schedule changes making them unable to attend meetings or make their weekly updates, we will discuss as a group new times to update each member
- During the scheduled meeting on May 14th we will discuss if and what changes to the Requirement Specification need to be made before the freeze date on May 19th
  - We will decide what to drop by discussing &quot;problem&quot; requirements that are either taking up far too much time or are more complicated than anticipated, and discussing whether or not they are vital to the project. We will then decide by vote, with majority winning.
- If there are any fights or disputes amongst team members that get to the point of needing a third party, we will meet with Soobin during his office hours to try and come to a solution
  - If that still does not solve the dispute, the Manager will discuss with Professor Begel to determine if the termination of a team member is required
  - If it is the Manager who is causing the issues, the other team members will be the ones to meet with Professor Begel
- If firebase shuts down at some point during the process rendering us unable to continue the project, the team will look at similar alternatives like [http://backendless.com/](http://backendless.com/)to determine the best replacement
  - This will also be decided by vote, with majority winning
- If code stops working, or code gets deleted, and affects the project in such a way that it either halts progress for more than two days or renders the project unusable, we will discuss as a team to determine the best commit to revert back to
  - To ensure that similar problems do not occur again, we will revise our github branch strategies, which will be discussed either during a Monday meeting or during the dedicated work time in class
- During the days of June 2nd and June 3rd, we halt new additions to the master branch
  - It will be up to the Project Manager to determine if new additions will be accepted, making sure that anything new does exactly what it is supposed to, is vital, and will not affect the rest of the project negatively.
