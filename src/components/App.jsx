import React, { useState } from 'react';
import FirstRowHex from './FirstRowHex.jsx';
import OtherRowHex from './OtherRowHex.jsx';
import hexResources from '../hexResources.js';

export default function App() {
  //define hex value types
  const resources = hexResources.slice();
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffle(resources);

  //create first row hex objects
  let position = 0;
  const firstRowLength = 3;
  const firstRow = resources.slice(0,3).map((type, index) => {
    const isFirst = index === 0;
    const isLast = index === (firstRowLength - 1);

    let space = {
      position,
      type,
      adjacent: {tr: null, tl: null, l: resources[position - 1], bl: resources[position + 3], br: resources[position + 4], r: isLast ? null : resources[position + 1]},
      first: isFirst,
      last: isLast
    }
    position += 1;
    return space;
  })

  //create second row hex opjects
  const secondRowLength = 4;
  const secondRow = resources.slice(3).map((type, index) => {
    const isFirst = index === 0;
    const isLast = index === (secondRowLength - 1);

    let space = {
      position,
      type,
      adjacent: {tr: null, tl: null, l: isFirst ? null : resources[position - 1], bl: null, br: null, r: resources[position + 1] },
      first: isFirst,
      last: isLast
    }
    position += 1;
    return space;
  })

  return (
    <>
      <h1>Catan</h1>
      <div className="board">
        <div className="rowOne" >
          {firstRow.map((hex) => (<FirstRowHex key={hex.position} position={hex.position} type={hex.type} adjacent={hex.adjacent} first={hex.first} last={hex.last} />))}
        </div>
        <div className="rowTwo" >
          {secondRow.map((hex) => (<OtherRowHex key={hex.position} position={hex.position} type={hex.type} adjacent={hex.adjacent} first={hex.first} last={hex.last} />))}
        </div>
      </div>
    </>
  )
}