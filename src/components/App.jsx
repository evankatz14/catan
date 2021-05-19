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
      adjacent: {
        tr: null,
        tl: null,
        l: resources[position - 1],
        bl: resources[position + firstRowLength],
        br: resources[position + firstRowLength + 1],
        r: isLast ? null : resources[position + 1],
      },
      first: isFirst,
      last: isLast,
    }
    position += 1;
    return space;
  })

  //create second row hex opjects
  const secondRowLength = 4;
  const secondRow = resources.slice(3, 7).map((type, index) => {
    const isFirst = index === 0;
    const isLast = index === (secondRowLength - 1);

    let space = {
      position,
      type,
      adjacent: {
        tr: null,
        tl: null,
        l: isFirst ? null : resources[position - 1],
        bl: resources[position + secondRowLength],
        br: resources[position + secondRowLength + 1],
        r: isLast ? null :   resources[position + 1],
      },
      first: isFirst,
      last: isLast,
    }
    position += 1;
    return space;
  })

  //create third row hex objects
  const thirdRowLength = 5;
  const thirdRow = resources.slice(7, 12).map((type, index) => {
    const isFirst = index === 0;
    const isLast = index === (thirdRowLength - 1);

    let space = {
      position,
      type,
      adjacent: {
        tr: null,
        tl: null,
        l: isFirst ? null : resources[position - 1],
        bl: null,
        br: null,
        r: isLast ? null : resources[position + 1],
      },
      first: isFirst,
      last: isLast,
    }
    position += 1;
    return space;
  })

  return (
    <>
      <h1>Catan</h1>
      <div className="board">
        <div className="row" >
          {firstRow.map((hex) => (<FirstRowHex key={hex.position} position={hex.position} type={hex.type} adjacent={hex.adjacent} first={hex.first} last={hex.last} />))}
        </div>
        <div className="row" >
          {secondRow.map((hex) => (<OtherRowHex key={hex.position} position={hex.position} type={hex.type} adjacent={hex.adjacent} first={hex.first} last={hex.last} />))}
        </div>
        <div className="row" style={{transform: 'translate(0px, -30px)'}}>
          {thirdRow.map((hex) => (<OtherRowHex key={hex.position} position={hex.position} type={hex.type} adjacent={hex.adjacent} first={hex.first} last={hex.last} />))}
        </div>
      </div>
    </>
  )
}