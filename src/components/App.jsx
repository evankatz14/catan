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
  const firstRowLength = 2;
  const firstRow = resources.slice(0,2).map((type, index) => {
    let space;
    if (index < (firstRowLength - 1)) {
      space = {
        position,
        type,
        adjacent: {tl: null, tr: null, r: resources[index + 1], br: resources[index + 2], bl: null, l: null },
        first: index === 0,
        last: false
      }
    } else {
      space = {
        position,
        type,
        adjacent: {tl: null, tr: null, r: null, br: null, bl: resources[index + 1], l: resources[index - 1]},
        last: true
      }
    }
    position += 1;
    return space;
  })

  //create second row hex opjects
  const secondRow = resources.slice(2).map((type, index) => {
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