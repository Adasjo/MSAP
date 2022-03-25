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
- Sign in/up with google using firebase.

**Home screen**
- If not setup connection between services. -> Getting started page. 
- If connection between serveces. -> The "real" homescreen will be shown. 

**Set up the Spotify API**
- Connect 
TO:DO
- Set up firebase
- Fix a login view
- 