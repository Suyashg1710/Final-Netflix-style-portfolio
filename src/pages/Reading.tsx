// Reading.tsx

import React from "react";
import "./Reading.css";

const books = [
  {
    title: "Trainspotting",
    author: "Irvine Welsh",
    imgSrc: "/Trainspotting.jpg",
    description:
      "A raw, gripping tale of addiction and survival in Edinburgh's underworld.",
  },
  {
    title: "Pandeymonium",
    author: "Abhishek Banerjee",
    imgSrc: "/Pandeymonium.jpg",
    description:
      "A hilarious and chaotic journey through Indian advertising madness.",
  },
  {
    title: "Hey Whipple, Squeeze This",
    author: "Luke Sullivan",
    imgSrc: "/HeyWhipple.png",
    description:
      "The ultimate guide to writing great ads and avoiding creative pitfalls.",
  },
  {
    title: "Becoming Supernatural",
    author: "Dr. Joe Dispenza",
    imgSrc: "/Becoming.jpg",
    description:
      "Unlocking your mind's power through meditation, science, and transformation.",
  },
];

const Reading: React.FC = () => {
  return (
    <div className="reading-container">
      <h2 className="reading-title">Books That Shaped My Journey</h2>
      <p className="reading-intro">
        These books have influenced my perspectives, motivation, and
        self-growth.
      </p>
      <div className="books-grid">
        {books.map((book, index) => (
          <div
            key={index}
            className="book-card"
            style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={book.imgSrc} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.author}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;
