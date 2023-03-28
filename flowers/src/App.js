import './App.scss';
import {Routes, Route } from 'react-router-dom';
import Header from './components/Catalog/Header';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
    </div>
  );
}

export default App;
