import * as React from 'react';
import * as classes from './App.scss';
const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <img src={logo} className={classes.AppLogo} alt="logo" />
          <h1 className={classes.AppTitle}>Welcome to React</h1>
        </header>
        <p className={classes.AppIntro}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
