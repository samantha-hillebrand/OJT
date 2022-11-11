# ojt-tracker

## Development

Clone repo and install node modules

to start just development backend server run command

```bash
npm run server
```

to start just development frontend client run command

```bash
npm run client
```

this repo also supports running both scripts in parallel using Concurrently dependency

to start full-stack development run command

```bash
npm run dev
```

this repo also need a `.env`, contact admin for file

## Project goals

1- Tracks progress of each candidate from start of OJT to completion (6-week period).

2- Currently the Transition Coordinator uses a spreadsheet for this purpose. Others who support each candidate have their own way to keep track. Objective: Get everyone on same page by creating a platform where each stakeholder has access to the app to create, retrieve, and update info pertaining to each candidate.

3- Populate DB with company's entire staff so by simply beginning to type staff member's name, the full name appears. Only active employees should be listed.

4- Create modal for userlogin, password (see Televerde's example).

5- Authentication for user credentials.

6- If authentication fails, then offer to create new account.

7- Once user successfully logs in, WELCOME message displays instructing user on how to further proceed.

8- Simultaneously a LOGOUT button is displayed. Also display a RESET btn which clears all fields should the user wish to clear the input data and start over.

9- After authentication, User is now able to enter OJT candidate's name and all related info (so far 15 fields).

10- Status should feature dropdown with these selections: Pending, Active, Inactive. (Pending means the candidate has not yet completed PCC but is expected to do so and is awaiting release in order to begin OJT. Active means candidate is currently in the 6-wk OJT process. Inactive means candidate began OJT but for some reason has not completed).

11- This is an additional field to be added: Graduated: Yes or No. (Has candidate graduated the Persevere Boot Camp or not?)

12- State field features dropdown with all 50 states.

13- Date fields feature datepicker.

14- Phone number validation to update as the user is typing fields. Input must follow Telephone Number format. See: https://stackoverflow.com/questions/69583442/phone-number-validation-in-react-js-how-to-limit-type-and-length-of-input Also: https://stackoverflow.com/questions/63387992/validating-telephone-number-in-regex-in-react

15- Use email validation. See: https://www.geeksforgeeks.org/how-to-validate-an-email-in-reactjs/#:~:text=Email%20validation%20is%20an%20important%20step%20in%20every,not%20using%20the%20npm%20module%20in%20React%20Application.

16- Input fields for TES, Case Manager, and Work Buddy should feature dropdowns allowing choice of appropriate staff members.

17- For now, Rubric input field is for a url that points to Shandea's spreadsheet that holds sensitive information. Only the Transition Coordinator and her seniors should have access to this, so configure security settings accordingly.

18- Once all fields are populated, user selects ADD btn and a card representing the candidate is displayed featuring all input fields.

19- Each card is unique to the candidate.

20- To create a new entry, POST request is needed.

21- To display info from a previous entry, GET request is needed.

22- To update a candidate's info, PUT/PATCH request is needed.

23- React hooks should replace current methods.

24- Functionality should be prompt and sharp.

25- UI should be simple, intuitive, and follow the Banyan-Persevere color scheme.

26- This is the basic model which mirrors Shandea's current format. Once this version is accomplished consider next iteration to include fields requested by TES & Case Managers (i.e., Status of Resume, Status of Job Search, Developer Goals & Challenges).
