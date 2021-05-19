import React, { useState, useEffect } from 'react';
import FirstRowHex from './FirstRowHex.jsx';
import OtherRowHex from './OtherRowHex.jsx';
import hexResources from '../hexResources.js';

export default function App() {
  const [resources, setResources] = useState(shuffle(hexResources))
  const [firstRowLength, setFirstRowLength] = useState(3);
  const [firstRow, setFirstRow] = useState([]);
  const [secondRow, setSecondRow] = useState([]);
  const [thirdRow, setThirdRow] = useState([]);
  //define hex value types
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  function buildHexRow(currentPosition, firstRowLength, currentRow, resources) {
    const rowLength = firstRowLength + currentRow;
    const start = currentPosition;
    const end = currentPosition + rowLength;

    const result = resources.slice(start, end).map((resource, index) => {
      const first = index === 0;
      const last = index === (rowLength - 1);
      let space = {
        position: currentPosition,
        resource,
        adjacent: {
          tr: null,
          tl: null,
          l: first ? null : resources[currentPosition - 1],
          bl: resources[currentPosition + rowLength],
          br: resources[currentPosition + rowLength + 1],
          r: last ? null : resources[currentPosition + 1],
        },
        first,
        last,
      }
      currentPosition++;
      return space;
    })
    return result;
  }
  useEffect(() => {
    setFirstRow(buildHexRow(0, firstRowLength, 0, resources));
    setSecondRow(buildHexRow(3, firstRowLength, 1, resources));
    setThirdRow(buildHexRow(7, firstRowLength, 2, resources));
  }, [])


  //create first row hex objects
  // let position = 0;
  // const firstRowLength = 3;
  // const firstRow = resources.slice(0,3).map((resource, index) => {
  //   const isFirst = index === 0;
  //   const isLast = index === (firstRowLength - 1);

  //   let space = {
  //     position,
  //     resource,
  //     adjacent: {
  //       tr: null,
  //       tl: null,
  //       l: isFirst ? null : resources[position - 1],
  //       bl: resources[position + firstRowLength],
  //       br: resources[position + firstRowLength + 1],
  //       r: isLast ? null : resources[position + 1],
  //     },
  //     first: isFirst,
  //     last: isLast,
  //   }
  //   position += 1;
  //   return space;
  // })

  // //create second row hex opjects
  // const secondRowLength = 4;
  // const secondRow = resources.slice(3, 7).map((resource, index) => {
  //   const isFirst = index === 0;
  //   const isLast = index === (secondRowLength - 1);

  //   let space = {
  //     position,
  //     resource,
  //     adjacent: {
  //       tr: null,
  //       tl: null,
  //       l: isFirst ? null : resources[position - 1],
  //       bl: resources[position + secondRowLength],
  //       br: resources[position + secondRowLength + 1],
  //       r: isLast ? null :   resources[position + 1],
  //     },
  //     first: isFirst,
  //     last: isLast,
  //   }
  //   position += 1;
  //   return space;
  // })

  // //create third row hex objects
  // const thirdRowLength = 5;
  // const thirdRow = resources.slice(7, 12).map((resource, index) => {
  //   const isFirst = index === 0;
  //   const isLast = index === (thirdRowLength - 1);

  //   let space = {
  //     position,
  //     resource,
  //     adjacent: {
  //       tr: null,
  //       tl: null,
  //       l: isFirst ? null : resources[position - 1],
  //       bl: null,
  //       br: null,
  //       r: isLast ? null : resources[position + 1],
  //     },
  //     first: isFirst,
  //     last: isLast,
  //   }
  //   position += 1;
  //   return space;
  // })
  console.log('firstRow', firstRow)
  console.log('secondRow', secondRow)
  console.log('thirdRow', thirdRow)
  return (
    <>
      <h1>Catan</h1>
      {firstRow && (
        <div className="board">
          <div className="row" >
            {firstRow.map((hex) => (<FirstRowHex key={hex.position} position={hex.position} resource={hex.resource} adjacent={hex.adjacent} first={hex.first} last={hex.last} />))}
          </div>
          <div className="row" >
            {secondRow.map((hex) => (<OtherRowHex key={hex.position} position={hex.position} resource={hex.resource} adjacent={hex.adjacent} first={hex.first} last={hex.last} />))}
          </div>
          <div className="row" style={{transform: 'translate(0px, -30px)'}}>
            {thirdRow.map((hex) => (<OtherRowHex key={hex.position} position={hex.position} resource={hex.resource} adjacent={hex.adjacent} first={hex.first} last={hex.last} />))}
          </div>
        </div>
      )}
    </>
  )
}