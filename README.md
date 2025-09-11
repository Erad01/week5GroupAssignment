Project name: Daily Goals: Repo link: https://github.com/Erad01/week5GroupAssignment

Team members: Joseph, Richard & Dare

Project description: A webpage which allows you to create and track your daily goals.

Problem domain: There are alot of todo apps that have timers to keep track of time. This was created to be able to, apart from keeping track of time, have a task tracker and a time tracker in the same place.

User stories: As  user I want to see a list of my current tasks

As a user: I want to be able to see a list of completed tasks.

As a user  I want the application to work as expected on my mobile device so that I can access and use it conveniently.

 As a user, I’d like to fill out a form so that I can submit my  tasks effectively and without issues.
 
 As  a user I would like to be able to have a timer in the app rather then outside of it. 
 
 As a user I would like to be able to set the priority of a task.


Wireframe: !(./screenshots/Wireframe.png)

#A list of any libraries, frameworks, or packages:
>1. Express
>
>2. Cors
>
>3. dotenv
>
>4. pg
>
>5. vite

#Instructions on how to run your app:

#USER:
>Fill out the form with the task, including a time to start and end and notes on what the task is, there is also an option for priority which isn’t required but a useful colour guide. 
>The current tasks appear “Tasks” and can be checked with a box to indicate they are completed.
>You can press the button at the bottom of the page to display completed tasks or navigate back to current tasks.

#DEV
1. Create a DOM Struction including a heading, main and footer that includes a form container that POST data to the server.
2. Have a container in the DOM that GETs data from the database
3. Have a css file to style the webpage
4. Set up the database to store the data submitted by the user(We used supabase and SQL)
5. Set up the client side of the APP with vite
6. Set u the server side of the APP with express
7. We made sure that there was communication between client and the server and then between the server and the database

Lighthouse report: !(./screenshots/lighthouse.png)

Reflections:

Please mention the requirements you met and which goals you achieved for this assignment.


We feel that we met the core requirements of this project and acheived our goal of creating a functional task tracking app that uses a database to store the submited data and that we have a way to showcase that data to the user. 

However, we feel that we were not able to achieve some of the goals we had set for ourselves. In this project, we planned to have a functional timer that would allow the user to set a timer and have it count down for them and send an alert when the time limit was up. 

We also were not able to fully implement a game aspect of the app that would allow the user to collect points for completing tasks and after enough tasks where complete they would score a goal which would ideally trigger an animation or sound to play. 

We also were not able to add in a delete function to delete a task. 

However, we were able to implement a check box function so the user can mark tasks as complete and are then able to toggle between seeing completed tasks and current tasks.
 
Dare was able to implement a good portion of the game feature in which completing tasks collects points and then after 5 tasks are completed the user is met  with a congratulations. (This was not yet complete at code lock time)



What went really well and what could have gone better? Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials). Describing errors or bugs you encountered while completing your assignment.

What went really well was the fact that we worked as a group for most of the work. All of us were able to own the project.
We took a mob development approach to the code which allowed us to be on the same page and allowed us to solve problems quickly.

We had success in ensuring that the form submitted data. We spent time to ensure that the client and server were able to GET and POST data effectively from the database




🎯 If so, could you please tell us what was it that you found difficult about these tasks?
We would say the time we alloted to some of the tasks (making sure we have a viable MVP) may have been too much. That may have impacted on our ability to be able to statrt and finish more of the stretch goals. 

References: links, css reset & images

https://jgthms.com/minireset.css/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND

https://stackoverflow.com/questions/37286629/toggle-checkbox-using-javascript

https://www.youtube.com/watch?v=G0jO8kUrg-I

https://stackoverflow.com/questions/69742483/filter-active-tasks-completed-tasks-and-all-tasks-in-a-to-do-list-with-javascr

https://codesignal.com/learn/courses/building-a-full-stack-todo-list-application/lessons/fetching-and-displaying-todos-from-the-backend

https://agirlcodes.medium.com/build-a-crud-todo-app-with-vanilla-javascript-and-fetch-api-44a664c0de52

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
https://www.youtube.com/watch?v=MyNmd8Wcf7M

https://medium.com/@nasirabdullahsyed/how-to-make-a-to-do-list-app-using-html-css-javascript-and-a-backend-service-a0d69858fa6a

https://codesignal.com/learn/courses/building-a-full-stack-todo-list-application/lessons/fetching-and-displaying-todos-from-the-backend

https://www.w3schools.com/html/html_favicon.asp

https://unsplash.com/photos/green-grass-field-during-daytime-C2PCa6DhlYE
