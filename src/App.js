import "./App.css";
//import Navbar from "./components/Navbar";
import Header from "./components/Header/Header.js";

import Card from "./components/Card/Card.js";

// import experience list stored as an array of objects in CardData.js
import data from "./CardData";

function App() {
  // Store data from CardData.js into an array using .map()
  // return the JSX element that needs to be called while rendering
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id} //.map() needs every item to have a unique key, otherwise you get a warning
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
    <div className="container">
      <Header />
      <section className="section-experience-list">
        {/* Call  the array that stores JSX elements of card */}
        {cards}
      </section>
    </div>
  );
}

// export to index.js
export default App;
