import React, { useState } from 'react';
import Node from './Node.jsx';
import Road from './Road.jsx';

const style1 = {left: '-22px', top: '-34px'}
const style2 = {left: '35px', top: '-30px'}
const style3 = {left: '92px', top: '-124px'}
const style4 = {left: '92px', top: '-227px'}
const style5 = {left: '-22px', top: '-186px'}

export default function OtherRowHex({resource, adjacent, position, first, last, isTopHalf, currentPlayer}) {
  const nodes = [];
  for (let i = 1; i < 6; i++) {
    let currentNode = [resource]
    let first = adjacent[Object.keys(adjacent)[i]];
    let second = adjacent[Object.keys(adjacent)[(i + 1) % 6]];
    if (first) {
      currentNode.push(first)
    }
    if (second) {
      currentNode.push(second)
    }
    nodes.push(currentNode);
  }
  return (
    <div className="full-hex">
      <button className="hex" >
        {resource}
      </button>
      <Node currentPlayer={currentPlayer} index={3} resources={nodes[1]} style={style1}/>
      <Node currentPlayer={currentPlayer} index={4} resources={nodes[2]} style={style2}/>
      <Road currentPlayer={currentPlayer} style={{top: '-115px', left: '-25px', transform: 'rotate(90deg)'}}/>
      <Road currentPlayer={currentPlayer} style={{top: '-76px', left: '3px', transform: 'rotate(32deg)'}}/>
      <Road currentPlayer={currentPlayer} style={{top: '-86px', left: '61px', transform: 'rotate(-32deg)'}}/>
      {first && isTopHalf &&(
        <>
          <Node currentPlayer={currentPlayer} index={2} resources={nodes[0]} style={style5}/>
          <Road currentPlayer={currentPlayer} style={{top: '-224px', left: '3px', transform: 'rotate(-32deg)'}}/>
        </>
      )}
      {last && (
        <>
          <Node currentPlayer={currentPlayer} index={5} resources={nodes[3]} style={style3}/>
          <Road currentPlayer={currentPlayer} style={{top: '-175px', left: '89px', transform: 'rotate(90deg)'}}/>
          {isTopHalf && (
            <>
              <Node currentPlayer={currentPlayer} index={6} resources={nodes[4]} style={style4}/>
              <Road currentPlayer={currentPlayer} style={{top: '-263px', left: '61px', transform: 'rotate(32deg)'}}/>
            </>
          )}
        </>
      )}
    </div>
  )
}