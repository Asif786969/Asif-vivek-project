import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Explore The Variety</h3>
            <p>Where the knowlege has no limits</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thumbs.dreamstime.com/b/blurred-image-many-old-books-bookshelf-library-81867124.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Library like none other</h3>
            <p>We bring you the collections from best of the authors</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thumbs.dreamstime.com/b/coffee-cup-reading-books-girl-having-break-fresh-studying-55084904.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Collaborative reading</h3>
            <p>Bring your friends and join reading in a chat room.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
