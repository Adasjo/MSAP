# MSAP
### A music streaming web app for iProg, by Adam Sjöberg & Samuel Falk

Our goal is to develop an app for music-streaming. The user should be able to search
for songs, albums, artists etc, as well as creating and managing playlists. A music player
should be available for the user at all times and the user should be able to queue tracks
either by playing an album/playlist or by queuing individual tracks manually.

To access the music content our initial idea was to let the user connect their accounts
from various streaming platforms to be able to access all their services from a single
source. With this in mind, the user should also be able to import existing playlists from
their connected services. However, from a practical standpoint we will primarily focus
on implementing one such API, in our case the Spotify API. If time allows we will then
try to extend the app with other publicly available API:s.

As for frameworks we will use Redux with React. For hosting and data management we
will use firebase.

All data containing information about songs will come from the respective API:s. This
probably includes title, id, length, genre etc. However, in order to allow for multiple
API:s we will have to store the data in some custom structure to be able to mix data
from multiple sources. This custom data will be stored in a firebase database. In order
to import playlists from other sources we will have to handle this data as well.

Finally if we want the user to be able to search for artists, albums etc, we will have to
handle these types of data from the API:s

-------------------------

## What we have done:

- Set up basic project structure with react redux
- Email login/registration + authentification via firebase
- Authentification via Spotify
- Very basic site layout with login/registration, getting started page, home page, and a search page


## What we plan to do:

**Components**
- Add a music player component
- Add a sidebar component
- Add an options page
- Add a playlist viewer/component
- Integrate components into the home page

**Misc**
- Aestethics with css
- Add persistence to a users Spotify access token
- Add persistence to redux using some package like `redux-persist`
- Try to add another API (if time allows)

## Project Structure
```
📦src
 ┣ 📂components --  Components for the web app
 ┃ ┣ 📜gettingStarted.js    --  Introduce the user to the website
 ┃ ┣ 📜home.js              --  Home screen
 ┃ ┣ 📜noPage.js            --  404 page
 ┃ ┣ 📜searchbar.js         --  Component for searching tracks
 ┃ ┣ 📜signIn.js            --  Login page
 ┃ ┣ 📜signUp.js            --  Register page
 ┃ ┗ 📜spotify.js           --  Compononent that handles Spotify authentification. (Will probably be removed)
 ┣ 📂reducers   --  Redux reducers for modifying the state
 ┃ ┣ 📜root.js              --  The root reducer that merges all reducers
 ┃ ┣ 📜spotifyReducer.js    --  Reducer for spotify authentification
 ┃ ┗ 📜userInfo.js          --  Reducer for user information
 ┣ 📂styles     --  CSS files for styling
 ┃ ┣ 📜App.css              --  CSS for the App component
 ┃ ┣ 📜auth.css             --  CSS for login/register
 ┃ ┗ 📜index.css            --  Default CSS
 ┣ 📂utilities  --  Miscellaneous utilities
 ┃ ┗ 📜apiUtils.js          --  Various api autilities 
 ┣ 📜.eslintignore
 ┣ 📜App.js                 --  The root component
 ┣ 📜index.html
 ┣ 📜index.js
 ┗ 📜store.js               --  Initializes and exports the redux store
 ```