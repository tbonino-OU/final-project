//Defines an array called data, which contains information about various media items (in this case, the movie 
//"Inception"). Each media item in the array is an object with several properties, including:
// Import cover images for various media items like films, games, TV shows, and books
import InceptionCover from "./images/Inception.jpg";
import Witcher3Cover from "./images/Witcher3.jpg";
import BreakingBadCover from "./images/BreakingBad.jpg";
import GreatGatsbyCover from "./images/GreatGatsby.jpg";
import MandalorianCover from "./images/Mandalorian.jpg";
import CasablancaCover from "./images/CasablancaCover.jpg";
import PrideAndPrejudiceCover from "./images/PrideAndPrejudiceCover.jpg";

// Defines an array called data, for a media items (Inceptions) with details like title, type, description, and access platforms
const data = [
  {
    id: 1,
    mediaTitle: "Inception",
    mediaType: "Film",
    descriptions: {
      yearsOfRelease: 2010,
      synopsis:
        "A skilled thief is offered a chance to have his criminal history erased if he can infiltrate and plant an idea into someone's subconscious through their dreams.",
      cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
      crew: "Director: Christopher Nolan, Producer: Emma Thomas, Music: Hans Zimmer",
      author: "N/A",
      location: "Various global locations, including Japan, Morocco, and Paris",
    },

    accessMedia: "Netflix, Amazon Prime, HBO Max",
    coverImage: InceptionCover,
    stats: {
      rating: 4.8,
      reviewCount: "2.1M",
    },
  },
  {
    id: 2,
    mediaTitle: "The Witcher 3: Wild Hunt",
    mediaType: "Game",
    descriptions: {
      yearsOfRelease: 2015,
      synopsis:
        "Geralt of Rivia, a monster hunter, embarks on a journey to find his adopted daughter, who is on the run from a supernatural force known as the Wild Hunt.",
      cast: "Voice actors: Doug Cockle (Geralt), Denise Gough (Yennefer)",
      crew: "Director: Konrad Tomaszkiewicz, Composer: Marcin Przybyłowicz",
      author: "Based on novels by Andrzej Sapkowski",
      location: "The Continent (fantasy world)",
    },
    accessMedia: "PlayStation, Xbox, PC (Steam, GOG)",
    coverImage: Witcher3Cover,
    stats: {
      rating: 4.9,
      reviewCount: "1.5M",
    },
  },
  {
    id: 3,
    mediaTitle: "Breaking Bad",
    mediaType: "TV Show",
    descriptions: {
      yearsOfRelease: 2008 - 2013,
      synopsis:
        "A high school chemistry teacher turned methamphetamine producer partners with a former student to secure his family’s future as he battles cancer.",
      cast: "Bryan Cranston, Aaron Paul, Anna Gunn",
      crew: "Creator: Vince Gilligan, Producers: Mark Johnson, Bryan Cranston",
      author: "N/A",
      location: "Albuquerque, New Mexico",
    },
    accessMedia: "Netflix, AMC",
    coverImage: BreakingBadCover,
    stats: {
      rating: 4.7,
      reviewCount: "1.2M",
    },
  },
  {
    id: 4,
    mediaTitle: "The Great Gatsby",
    mediaType: "Book",
    descriptions: {
      yearsOfRelease: 1925,
      synopsis:
        "The mysterious millionaire Jay Gatsby throws extravagant parties in hopes of reuniting with his former lover, Daisy Buchanan, in this tale of love, wealth, and tragedy.",
      cast: "N/A",
      crew: "N/A",
      author: "F. Scott Fitzgerald",
      location: "Long Island, New York",
    },
    accessMedia: "Amazon, Google Play Books, Apple Books",
    coverImage: GreatGatsbyCover,
    stats: {
      rating: 4.4,
      reviewCount: "540K",
    },
  },
  {
    id: 5,
    mediaTitle: "The Mandalorian",
    mediaType: "TV Show",
    descriptions: {
      yearsOfRelease: 2019,
      synopsis:
        "A lone bounty hunter travels across the galaxy, protecting a mysterious child while facing enemies and allies from the Star Wars universe.",
      cast: "Pedro Pascal, Carl Weathers, Gina Carano",
      crew: "Creator: Jon Favreau, Producer: Dave Filoni",
      author: "N/A",
      location: "Galaxy Far, Far Away (Star Wars Universe)",
    },
    accessMedia: "Disney+",
    coverImage: MandalorianCover,
    stats: {
      rating: 4.6,
      reviewCount: "750K",
    },
  },
  {
    id: 6,
    mediaTitle: "Casablanca",
    mediaType: "Film",
    descriptions: {
      yearsOfRelease: 1942,
      synopsis:
        "During WWII, Rick’s quiet life in Casablanca is shaken by the return of his former love, Ilsa, forcing him to confront old feelings and make a life-changing choice.",
      cast: "Humphrey Bogart, Ingrid Bergman, Paul Henreid",
      crew: "Director: Michael Curtiz, Producer: Hal B. Wallis",
      author:
        "Screenwriters: Julius J. Epstein, Philip G. Epstein, Howard Koch",
      location: "Casablanca, Morocco (World War II Era)",
    },
    accessMedia: "HBO Max",
    coverImage: CasablancaCover,
    stats: {
      rating: 4.8,
      reviewCount: "1.2M",
    },
  },
  {
    id: 7,
    mediaTitle: "Pride and Prejudice",
    mediaType: "Book",
    descriptions: {
      yearsOfRelease: 1813,
      synopsis:
        "In early 19th-century England, the strong-willed Elizabeth Bennet navigates societal expectations and complex relationships, particularly with the aloof Mr. Darcy. This classic story explores themes of love, class, and the impact of first impressions.",
      cast: "N/A",
      crew: "N/A",
      author: "Jane Austen",
      location: "England (Early 19th Century)",
    },
    accessMedia: "Available in bookstores and libraries",
    coverImage: PrideAndPrejudiceCover,
    stats: {
      rating: 4.7,
      reviewCount: "3.5M",
    },
  },
];

export default data;