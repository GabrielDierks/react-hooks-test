import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://swapi.co/api/people/")
      .then(response => response.json())
      .then(({ results }) => {
        setCharacters(results);
      });
  }, []);
  return (
    <div>
      <h1>useEffect</h1>
      {characters.map((characters, index) => (
        <ul key={index}>
          <li>{characters.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default UseEffect;
