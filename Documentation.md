# Galleria
*Galleria, a project made with React*

> Author: Santhosh Umapathi


#### Project Features

##### Infinte Scrolling
Project is initialized with inifinte scrolling, and initially loads 10 to 15 images, and when user scrolls to the bottom of the page, network request is made again to fetch 10 new images.

##### Authentication - Login/Logout
User Authentication is added to the project with the help of Firebase, Only authorized users can visit the guarded routes like Home Screen and Favorites Screen. If they are already authenticated, reloading a page persists their authentication status so they don't need to re-enter username/password every time they reload.

Unauthorized users are directed to login screen automatically.

##### Search bar (Search as you type)
Search bar is implemented for user to search for images, with search as you type option, for every keystroke a user does, a network request is made to fetch new images

##### Favorites - To save user favorites
User can save their favorite images and it is nicely stored on their favorite screen. They can remove their favorites as well. And when browsing images on the home screen, if they have already added a image as favorite, it is noticeable on the image they revisit.

##### Side drawer / Toolbar for Response layout
Toolbar and Side drawer are added based on the layout, if its a smaller device, they can use side drawer for navigating between screens.

##### Routing with React Router
Navigation is added with the help of React Router, Guarded routes based on user authentication status and redirected to Login screen is not authenticated.

##### Redux for state management
Global state management is handled with ease, thanks to Redux. Every user action is dispatched to redux and does the appropriate action.