import React, { useState, useEffect } from 'react';
import FirstRowHex from './FirstRowHex.jsx';
import OtherRowHex from './OtherRowHex.jsx';
import constants from '../constants.js';

export default function Board({currentPlayer}) {
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  const [resources, setResources] = useState([])
  const [numberTokens, setNumberTokens] = useState([])
  const [firstRowLength, setFirstRowLength] = useState(3);
  const [firstRow, setFirstRow] = useState([]);
  const [secondRow, setSecondRow] = useState([]);
  const [thirdRow, setThirdRow] = useState([]);
  const [fourthRow, setFourthRow] = useState([]);
  const [fifthRow, setFifthRow] = useState([]);

  function buildHexRow(currentPosition, firstRowLength, currentRow, resources, numberTokens, isTopHalf = false) {
    const rowLength = firstRowLength + currentRow;
    const start = currentPosition;
    const end = currentPosition + rowLength;

    const result = resources.slice(start, end).map((resource, index) => {
      const first = index === 0;
      const last = index === (rowLength - 1);
      let space = {
        position: currentPosition,
        resource,
        numberToken: numberTokens[currentPosition],
        adjacent: {
          tr: null,
          tl: null,
          l: first ? null : resources[currentPosition - 1],
          bl: isTopHalf ? resources[currentPosition + rowLength] : resources[currentPosition + rowLength - 1],
          br: isTopHalf ? resources[currentPosition + rowLength + 1] : resources[currentPosition + rowLength],
          r: last ? null : resources[currentPosition + 1],
        },
        first,
        last,
      }
      if (first && !isTopHalf) {
        space.adjacent.bl = null;
      }

      if (last && !isTopHalf) {
        space.adjacent.br = null;
      }
      currentPosition++;
      return space;
    })
    return result;
  }
  useEffect(() => {
    const currentResources = shuffle(constants.hexResources);
    const currentNumberTokens = shuffle(constants.numberTokens);
    const desertLoc = currentResources.indexOf('desert');
    currentNumberTokens.splice(desertLoc, 0, 7);
    setResources(currentResources);
    setNumberTokens(currentNumberTokens);
    setFirstRow(buildHexRow(0, firstRowLength, 0, currentResources, currentNumberTokens, true));
    setSecondRow(buildHexRow(3, firstRowLength, 1, currentResources, currentNumberTokens, true));
    setThirdRow(buildHexRow(7, firstRowLength, 2, currentResources, currentNumberTokens));
    setFourthRow(buildHexRow(12, firstRowLength, 1, currentResources, currentNumberTokens));
    setFifthRow(buildHexRow(16, firstRowLength, 0, currentResources, currentNumberTokens));
  }, [])

  return (
    <>
      <h1>Catan</h1>
      {firstRow && (
        <div className="board">
          <div className="row" >
            {firstRow.map((hex) => (
              <FirstRowHex
                key={hex.position}
                position={hex.position}
                resource={hex.resource}
                numberToken={hex.numberToken}
                adjacent={hex.adjacent}
                first={hex.first}
                last={hex.last}
                currentPlayer={currentPlayer}
              />
            ))}
          </div>
          <div className="row" >
            {secondRow.map((hex) => (
              <OtherRowHex
                key={hex.position}
                position={hex.position}
                resource={hex.resource}
                numberToken={hex.numberToken}
                adjacent={hex.adjacent}
                first={hex.first}
                last={hex.last}
                isTopHalf={true}
                currentPlayer={currentPlayer}
              />
            ))}
          </div>
          <div className="row" style={{transform: 'translate(0px, -30px)', zIndex: '80'}}>
            {thirdRow.map((hex) => (
              <OtherRowHex
                key={hex.position}
                position={hex.position}
                resource={hex.resource}
                numberToken={hex.numberToken}
                adjacent={hex.adjacent}
                first={hex.first}
                last={hex.last}
                isTopHalf={true}
                currentPlayer={currentPlayer}
              />
            ))}
          </div>
          <div className="row" style={{transform: 'translate(0px, -60px)', zIndex: '70'}}>
            {fourthRow.map((hex) => (
              <OtherRowHex
                key={hex.position}
                position={hex.position}
                resource={hex.resource}
                numberToken={hex.numberToken}
                adjacent={hex.adjacent}
                first={hex.first}
                last={hex.last}
                currentPlayer={currentPlayer}
              />
            ))}
          </div>
          <div className="row" style={{transform: 'translate(0px, -90px)', zIndex: '60'}}>
            {fifthRow.map((hex) => (
              <OtherRowHex
                key={hex.position}
                position={hex.position}
                resource={hex.resource}
                numberToken={hex.numberToken}
                adjacent={hex.adjacent}
                first={hex.first}
                last={hex.last}
                currentPlayer={currentPlayer}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}