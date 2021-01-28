import React from 'react';
import LaunchPrograms from './components/launch-programs/LaunchPrograms';
import './App.scss';

const App = () => {

  return (
    <div className="app">
        <spacex-header>SpaceX Launch Programs</spacex-header>
        <div className="app__content">
          <LaunchPrograms />
        </div>
        <spacex-footer>Developed by: shriram</spacex-footer>
    </div>
  );
}

export default App;
