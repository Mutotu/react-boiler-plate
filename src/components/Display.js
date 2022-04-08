import React, { useState, useEffect } from 'react';

const Display = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState({});

  const [added, setAdded] = useState(false);
  const [limit, setLimit] = useState(5);
  function pquery(artist) {
    let response = fetch(
      `https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=200`
    )
      .then((res) => res.json())
      .then((r) => showResult(r));
  }

  const handleClick = () => {
    pquery(input);
    setAdded(true);
    setLimit(5);
    moreButton();
  };
  const moreButton = () => {
    if (added)
      return (
        <button
          onClick={() => {
            // setLimit((limit += 5));
          }}
        >
          See more
        </button>
      );
  };
  const showResult = (data) => {
    let response = data?.results?.slice(limit - 5, limit);

    return response?.map((artist, id) => {
      console.log(artist.artistName);
      return (
        <p>sdasdasdasd</p>
        // <div id={artist.artistId}>
        //   <img src={artist.artworkUrl100} />
        // <p>{artist.artistName} </p>
        //   <p>{artist.collectionName}</p>
        // </div>
      );
    });
  };

  return (
    <>
      <div>
        <input
          placeholder=""
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={handleClick}>Search</button>
      </div>

      {moreButton()}
      {showResult() ? showResult() : null}
    </>
  );
};

export default Display;
