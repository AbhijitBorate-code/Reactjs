import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap styles are applied

// Header Component
const Header = () => {
  return (
    <header className="header d-flex justify-content-between align-items-center p-3 bg-light">
      <div className="logo">
        <h3>Logo</h3>
      </div>
      <nav>
        <ul className="d-flex list-unstyled gap-3">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Card Data
const cardData = [
  {
    title: "Card Title 1",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imageUrl: "https://via.placeholder.com/150",
    link: "#",
  },
  {
    title: "Card Title 2",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imageUrl: "https://via.placeholder.com/150",
    link: "#",
  },
  {
    title: "Card Title 3",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imageUrl: "https://via.placeholder.com/150",
    link: "#",
  },
  {
    title: "Card Title 4",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imageUrl: "https://via.placeholder.com/150",
    link: "#",
  },
];

// Card Component
const Card = () => {
  return (
    <div className="row">
      {cardData.map((card, index) => (
        <div className="col-sm-4 mb-4" key={index}>
          <div className="card">
            <img
              src={card.imageUrl}
              alt="Card image cap"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
              <a href={card.link} className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Body Component
const Body = () => {
  return (
    <div className="container mt-4">
      <Card />
    </div>
  );
};

// Title Component
const Title = () => {
  return <h1 className="text-center mt-4">Hello!!</h1>;
};

// Main Component
const MainD = () => {
  return (
    <div>
      <Title />
      <Header />
      <Body />
    </div>
  );
};

// Rendering the Main Component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainD />);
