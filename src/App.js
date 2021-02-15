import React from 'react';
import './App.css';

import Row from './Componet/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Test before buid!!</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Treding Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
