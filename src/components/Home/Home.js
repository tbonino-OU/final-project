import React from "react";
import data from "../../CardData.js";
import "./Home.css"; // Import the separate CSS file for Home(LandingPage)

const getTopRated = (mediaType) => {
  const filteredData = data.filter((item) => item.mediaType === mediaType);
  return filteredData.reduce(
    (top, current) => (current.stats.rating > top.stats.rating ? current : top),
    filteredData[0]
  );
};

function Home() {
  const topRatedFilm = getTopRated("Film");
  const topRatedGame = getTopRated("Game");
  const topRatedBook = getTopRated("Book");
  const topRatedTVShow = getTopRated("TV Show");

  return (
    <div className="landing-page">
      <section className="top-section">
        <div className="horizontal-section">
          <div className="card">
            <p className="top-rated-medias">
              Top Rated Film:&nbsp;
              {topRatedFilm.mediaTitle} - Rating: {topRatedFilm.stats.rating}
            </p>
            <img src={topRatedFilm.coverImage} alt={topRatedFilm.mediaTitle} />
          </div>
          <div className="card">
            <p className="top-rated-medias">
              Top Rated Game:&nbsp;
              {topRatedGame.mediaTitle} - Rating: {topRatedGame.stats.rating}
            </p>
            <img src={topRatedGame.coverImage} alt={topRatedGame.mediaTitle} />
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Mashed Potatoes</h2>
        <h2>Mission:</h2>
        <p className="about-mashed-potatoes">
          At Mashed Potatoes, our goal is to build a community-driven hub where
          fans can discover, rate, and review all kinds of media—from films and
          books to games and TV shows. We’re here to help people find, explore,
          and connect with the media they love by offering a complete archive
          where users can share their own reviews, submit new media, and link
          related content. Our platform makes it easy to see if a piece of media
          had a physical or digital release, track series connections, and find
          where physical copies are available if they exist. With Mashed
          Potatoes, we’re creating a place that’s part archive, part community,
          and fully dedicated to celebrating and preserving the media we love.
        </p>
        <h2>Vission:</h2>
        <p className="about-mashed-potatoes">
          To be a trusted and welcoming home for media fans everywhere, where
          discovering, sharing, and preserving all forms of media is simple and
          enjoyable. We imagine a future where everyone can easily find and
          connect with their favorite films, books, games, and shows, keeping
          their stories and experiences alive for generations to come.
        </p>
      </section>

      <section className="bottom-section">
        <div className="horizontal-section">
          <div className="card">
            <p className="top-rated-medias">
              Top Rated Book:&nbsp;
              {topRatedBook.mediaTitle} - Rating: {topRatedBook.stats.rating}
            </p>
            <img src={topRatedBook.coverImage} alt={topRatedBook.mediaTitle} />
          </div>
          <div className="card">
            <p className="top-rated-medias">
              Top Rated TV Show:&nbsp;
              {topRatedTVShow.mediaTitle} - Rating:{" "}
              {topRatedTVShow.stats.rating}
            </p>
            <img
              src={topRatedTVShow.coverImage}
              alt={topRatedTVShow.mediaTitle}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
