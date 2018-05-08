# Australia's Top Artists

A little React app created for the purposes of gaining more experience in React and playing around with the React Router and the Digital Transformation Agency's UI-Kit.  The app pulls the current top 10 most played artists from Last.fm, displays them, and provides a means of drilling down to get more information about them (via another interaction with the Last.fm API).

**Play around with it:** <https://chriswilcox78.github.io/top-australian-artists/>

## Some notes on the design

- I have used React-Router's BrowserRouter to provide an app navigation experience that accords with user expectations when navigating the web (i.e. distinct urls, browser history population, etc.);
- I have employed an ErrorBoundary (not entirely successfully - some further investigation around how to handle errors occurring with promises is needed) in an attempt to centralise the error handling logic;
- I have encapsulated the interactions with Last.fm's API within a module of functions and provided some very basic abstraction of the API's return formats in the same location;
- I have made use of a few elements from the [DTA's UI-Kit](https://github.com/govau/uikit) on the artist details pages (mainly as a way of exploring the use of these elements);
- I haven't written any unit or integration tests simply because this is meant to be a short exploratory project.
