import React from 'react';
import Review from './Review';
import  '../styles/Review.css'
import  '../styles/App.css'

function App() {
  return (
    <main>
      <section className="container">
        <h1 id="review-heading">Our Reviews</h1>
        <Review />
      </section>
    </main>
  );
}

export default App;