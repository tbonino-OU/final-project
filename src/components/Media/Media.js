import React from "react";
import "./Media.css";
import Card from "../../components/Card/Card.js";
// import experience list stored as an array of objects in CardData.js
const Media = ({ data }) => {
  // Store data from CardData.js into an array using .map()
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id} // Unique key for each card
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

  return <section className="section-experience-list">{cards}</section>;
};

export default Media;
