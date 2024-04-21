import React from 'react';
import Welcome from './Welcome';
import Hero from './Hero';

function App() {
  return (
    <div>
      <Hero />
      <>
        <Welcome name="Алексей" />
        <Welcome name="Екатерина" />
        <Welcome name="Иван" />
      </>
    </div>
  );
}

export default App;
