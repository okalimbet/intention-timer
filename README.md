
---
# Intention Timer
###### Practice pomodoro on your own time!
---
## Table of Contents
[Introduction](#introduction)
[Step-By-Step](#step-by-step)
[Features](#features)
[Deployment](#deployment)
[Authors](#authors)
[Contributors](#contributors)


## Introduction
The primary goal of [the intention timer](https://scripka.github.io/intention-timer/) is to time and track a user's intentions! The idea is to give a user the ability to create a timer that will allow them to devote a specified amount of time to a specific task as well as highlight the user's good habits by producing a tangible productivity history - taking a little bit of the guesswork out of following through with their goals. This project was created using JS, html and CSS from a blank canvas given only specific colors and desired results ([Project Specs](https://frontend.turing.io/projects/module-1/intention-timer-group.html)).

#### Motivation
The motivation behind this projects creation was to build an application to help the user practice mindfulness in self-determined, bite-sized chunks while we focused on writing DRY JS, semantic html & well organized CSS, and solidifying good habits in git workflow as a team.
    
## Step-By-Step
    Using the Intention Timer

1. Start categorizing your thoughts by choosing an umbrella category: Study, Meditation, or Exercise.
2. Give yourself a related goal!
3. Set a time in which you wish to complete this goals.
    *User will be promprted for any missing inputs via error message(s).
4. Click `Start Activity` when you're happy with the conditions you've set for yourself.
5. When you're ready to begin working on your activity, select `Start` to begin your countdown.
6. When the timer goes off you're done! Congratulations! You've successfully devoted the time you wanted to your activity.
7. Log your activity to keep track of your productivity! Clicking the `Log Activity` button upon completion of your timer will produce a new card adorned with your goal's name, it's selected category, and the time you spent on it! This card will live in the "Past Activities" section on the right of the page. (*Disclaimer - this includes a local storage component: past activities will be saved from previous sessions.)

## Features 
The intention timer allows the user to create and time activities by specifying a category that correlates with their own personal goal. The (intention timer/project) also provides the user space to keep track of their habits/history/use with a `Past Activities` section. 


---

### Create a New Activity
Select a category and fill out the respective inputs, then click the `Start Activity` button to create a new timer based on your parameters.
<p align = "center">
<img src="https://media.giphy.com/media/kEixa1a8ozTptbDlJd/giphy.gif">
</p>
        <details>
        <summary>**Under the Hood**</summary>
    In order to create a new activity, and before the user can employ the event listener by clicking `Start Activity`, a radio button must be selected and all the input sections must be filled out following their respective conventions. `Start Activity`, when clicked, will use submitActivityForm() to ensure that all the form's input conditions are properly met - until that time, the button will act as a blocker to keep the user from progressing. Assuming these conditions are met this will allow the creation of an Activity class instance to sort/temporarily store all the user provided information and transfer the user to the Current Activity window (timer) page.
    *Note: the minutes and second fields allow users to enter numbers followed by a dot which gets accepted by submitActivityForm(). Such inputs get parsed to an integer and displayed as a regular number, however, it is a correction to be addressed in our efforts for future improvements of this project.
        </details>


---

### Timer
Once your timer counts down to Zero, your activity is complete! If you'd like to continue using the Intention Timer for it's intended purpose, click `Log Activity`.
<p align = "center">
<img src="https://media.giphy.com/media/Sv2nAOaXs5Ny5fLneM/giphy.gif">
</p>
        <details>
        <summary>**Under the Hood**</summary>
        The timer will display inputs (utilizing the specified user inputs from the previous form) and re-format them into a clock-face with an integrated `Start` button. This button employs an event listener to begin the countdown using the setTimeout method. Upon reaching 00:00, the timer will end and be replaced with a congratulatory message as well as activating the `Log Activity` button.
        </details>

---

### Log Your Activities
Activities that you've chosen to log will appear in the Past Activities section as an `Activity Card` containing your activity's name, the amount of time you've devoted, it's category and corresponding color!
<p align = "center">
<img src="https://media.giphy.com/media/Sv2nAOaXs5Ny5fLneM/giphy.gif">
</p>
        <details>
        <summary>**Under the Hood**</summary>
        Clicking `Log Activity` once a timer has counted down to 00:00 employs an event listener to run the function `logCompletedActivity();` that in turn kicks several other functions; `displayCompletedActivityWindow();` which acts to replace the Current Activity window with a Completed Activity window as well as `addCompleteActivityCard();` which marks activity complete (activity.js), creates the Past Activities card based on the users inputs, will display the card in the Past Activities section and simultaneously saves it to local storage.
        </details>

---
### Past Activities (and Local Storage)
Once you've logged your activity, the option to `Start A New Activity` will be presented. Selecting this option will place the original form in front of you, where you'll be able to set new parameters and create another timer! 
Rinse and repeat until you're satisfied that you've efficiently practiced focused mindfulness to your heart's content.
<p align = "center">
<img src="https://media.giphy.com/media/U1mYebiC4h78gCHgOC/giphy.gif">
<img src="https://media.giphy.com/media/elPR2V0cvMcKlniLeQ/giphy.gif">

</p>
        <details>
        <summary>**Under the Hood**</summary>
        The `Create a New Activity` button employs an event listener to watch for a click. On click, it will run the function ` returnToMainPage();` that will re-present the user with the original form and clear out any previous inputs and radio selections in order to allow them to create a new activity (timer) with a fresh form. Past Activities will persist on page load, this utilizes the displaySavedPastActivities() function as the previously mentioned local storage.
        </details>


## Deployment
# https://scripka.github.io/intention-timer/


### Continuous Improvement/future improvements
 In the next iteration we hope to add:
    * Animation and Pausing options to the timer
    * Favoriting & Reuse of an activity
    * Ability to clear activity history
    * Celebration animation upon activity completion



## Authors

<table>
    <tr>
        <td> Olga Morgan <a href="https://github.com/scripka">GH</td>
         <td> Thao Ma <a href="https://github.com/thaomonster">GH</td>
         <td> Daniel Plummer <a href="https://github.com/bearfrowns">GH</td>
    </tr>
    </tr>
    <td><img src="https://avatars0.githubusercontent.com/u/66269306?s=400&u=b59f8ccc1002269319d952aa028ee270629b2ead&v=4" alt="Mrs. Fox"
 width="150" height="auto" /></td>
<!-- **Olga Morgan**
[GitHub Profile](https://github.com/scripka) -->

<td><img src="https://avatars0.githubusercontent.com/u/67611512?s=460&u=539b2ddb5db472ee1db734c0ce522551ad071521&v=4" alt="Ms. Turtle"
 width="150" height="auto" /></td>

<td><img src="https://avatars3.githubusercontent.com/u/67286509?s=460&u=4ff9a9bc67d00b454308d5fb3d09797939576ac3&v=4" alt="Mr. Squid"
 width="150" height="auto" /></td>
</tr>
</table>




## Contributors
    
    Thank you for your contributions!
        
For his help and direction as a reviewer: <a href="https://github.com/t-laird">Thomas Laird</a>

For her wonderful workshop on readme's: <a href="https://github.com/stellakunzang">Stella Bonnie</a>
