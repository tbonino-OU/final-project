import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import data from '../CardData.js';
import '../css/TableofContents.css'

const TableofContents = () => {
  
  // Use .map() to loop through the data and create a Card component for each item
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id} // Each card needs a unique key to improve rendering performance
        coverImage={item.coverImage}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        accessMedia={item.accessMedia}
        mediaTitle={item.mediaTitle}
        mediaType={item.mediaType}
        yearsOfRelease={item.descriptions.yearsOfRelease}
        synopsis={item.descriptions.synopsis}
        cast={item.descriptions.cast}
        crew={item.descriptions.crew}
        author={item.descriptions.author}
        location={item.descriptions.location}
      />
    );
  });

  return (
  <div>
  <Header />
  <h1>Table of Contents</h1>
  {/* // Render the cards inside a section element */}
  <section className="section-experience-list">{cards}</section>\
  <Footer />
  </div>
  );
  
}

export default TableofContents;