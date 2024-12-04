import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import data from '../CardData.js';
import { DbData } from '../CardData.js';
//import dbCard from '../components/DbCard.js';
import '../css/TableofContents.css'


const TableofContents = () => {
  
  // Use .map() to loop through the data and create a Card component for each item
  const cards = data.map((item) => {
    return (
      <div>
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
      </div>
    );
  });

  // const dbCards = DbData().props.map((item) => {
  //   return(
  //     <div>
  //   <dbCard
  //       key={item.MediaID} // Each card needs a unique key to improve rendering performance
  //       coverImage={item.MediaImage}
  //       rating={null}
  //       reviewCount={null}
  //       accessMedia={null}
  //       mediaTitle={item.Name}
  //       mediaType={item.Type}
  //       yearsOfRelease={item.RelDate}
  //       synopsis={item.Description}
  //       cast={null}
  //       crew={null}
  //       author={null}
  //       location={null}
  //     />
  //     </div>
  //   )
  // })

  return (
  <div className="table-of-contents">
  <Header />
  <h1>Table of Contents</h1>
  {/* // Render the cards inside a section element */}
  <section className="section-experience-list">{cards}</section>
  <section className="section-experience-list">{DbData()}</section>
  <Footer />
  </div>
  );
  
}

export default TableofContents;