import React, { useState } from 'react';
import FirstRowHex from './FirstRowHex.jsx';
import OtherRowHex from './OtherRowHex.jsx';
import hexTypes from '../hexTypes.js';

export default function App() {
  //define hex value types
  const hexes = hexTypes.slice();
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffle(hexes);

  //create first row hex objects
  let position = 0;
  const firstRowLength = 2;
  const firstRow = hexes.slice(0,2).map((type, index) => {
    let space;
    if (index < (firstRowLength - 1)) {
      space = {
        position,
        type,
        adjacent: {tl: null, tr: null, r: hexes[index + 1], br: hexes[index + 2], bl: null, l: null },
        last: false
      }
    } else {
      space = {
        position,
        type,
        adjacent: {tl: null, tr: null, r: null, br: null, bl: hexes[index + 1], l: hexes[index - 1]},
        last: true
      }
    }
    position += 1;
    return space;
  })

  const secondRow = hexes.slice(2).map((type, index) => {
    const space = {
      position,
      type,
      adjacent: {r: null, br: null, bl: null, l: null}
    }
    position += 1;
    return space;
  })

  return (
    <>
      <h1>Catan</h1>
      <div className="board">
        <div className="rowOne" >
          {firstRow.map((hex) => (<FirstRowHex key={hex.position} position={hex.position} type={hex.type} adjacent={hex.adjacent} last={hex.last} />))}
        </div>
        <div className="rowTow" >
          {secondRow.map((hex) => (<OtherRowHex key={hex.position} position={hex.position} type={hex.type} adjacent={hex.adjacent} />))}
        </div>
      </div>
    </>
  )
}