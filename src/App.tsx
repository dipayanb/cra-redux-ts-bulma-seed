import * as React from 'react';
import * as localStyles from './App.scss';
import * as bulma from './themed-bulma.scss';
const logo = require('./logo.svg');
import Aux from 'hocs/Aux';

const styles = { ...bulma, ...localStyles };

class App extends React.Component {
  render() {
    const buttonClass = [styles.button, styles.isDanger, styles.isLarge].join(
      ' '
    );
    return (
      <Aux>
        <div className={styles.app}>
          <header className={styles.appHeader}>
            <img src={logo} className={styles.appLogo} alt="logo" />
            <h1 className={styles.appTitle}>Welcome to React</h1>
          </header>
          <p className={styles.appIntro}>
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
        <div className={styles.container}>
          <button className={buttonClass}>Add Me</button>
        </div>
      </Aux>
    );
  }
}

export default App;
