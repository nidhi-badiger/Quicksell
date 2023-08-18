// src/App.js
import React from 'react';
import KanBoard from './KanbanBoard';
import './App.css';
import TopBar from './Topbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='display'>
          <span>Display :</span>
        <select name="Display" id="display">
            <option value="Group">Group by</option>
  
             <option value="Sorting">Sort by</option>
  
</select>
        </div>
      </header>
      <main>
        <TopBar/>
        <KanBoard />
      </main>
    </div>
  );
}

export default App;
