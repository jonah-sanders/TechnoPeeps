# TechnoPeeps

A searchable directory of robot profiles built with React. The app fetches user data from a public API, gives each person a unique robot avatar, and filters the list instantly as you type.

**Live site:** [jonah-sanders.github.io/TechnoPeeps](https://jonah-sanders.github.io/TechnoPeeps/)

This project began while following a React course and has since been customized and updated.

## Features

- **Live data from an API:** loads user profiles from the JSONPlaceholder test API
- **Instant search:** filters profiles by name as you type
- **Unique robot avatars:** generated for each profile from the RoboHash service
- **Scrollable card layout** that keeps the search bar in view
- **Error boundary** that shows a friendly message if a component fails
- **Loading state** while data is being fetched

## Built With

- React 18
- JavaScript (ES6+)
- Tachyons (CSS utility classes)
- Create React App
- GitHub Pages for hosting

## Concepts Demonstrated

- Breaking a UI into reusable components (`Card`, `CardList`, `SearchBox`, `Scroll`)
- Passing data between components with props
- Managing state and lifecycle methods in a class component
- Fetching data from an API and updating the UI with the results
- Filtering arrays to drive what's displayed
- Error handling with an error boundary

## Project Structure

```
src/
├── components/
│   ├── Card.js           # A single robot profile card
│   ├── CardList.js       # Renders the list of cards
│   ├── ErrorBoundary.js  # Catches errors in child components
│   ├── Scroll.js         # Scrollable container for the cards
│   └── SearchBox.js      # Search input
├── containers/
│   ├── App.js            # Main app: fetches data, holds state, filters results
│   └── App.css
├── index.js              # Entry point
└── index.css
```

## How to Run Locally

Requires [Node.js](https://nodejs.org/).

```bash
npm install
npm start
```

Then open http://localhost:3000.

To deploy an updated version to GitHub Pages:

```bash
npm run deploy
```

## Planned Improvements

- Show a message when the data fails to load
- Show a "no results found" message for searches with no matches
- Use each profile's ID as the list key instead of its position
- Convert the app to function components with React hooks
