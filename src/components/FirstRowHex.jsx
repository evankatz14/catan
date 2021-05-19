import React, { useState } from 'react';
import Node from './Node.jsx';
import Road from './Road.jsx';

const nodeStyle1 = {left: '35px'}
const nodeStyle2 = {left: '-22px', top: '5px'}
const nodeStyle3 = {left: '-22px', top: '35px'}
const nodeStyle4 = {left: '35px', top: '-60px'}
const nodeStyle5 = {left: '92px', top: '-175px'}
const nodeStyle6 = {left: '92px', top: '-265px'}

export default function FirstRowHex({resource, adjacent, position, last, currentPlayer}) {
  const nodes = [];
  for (let i = 0; i < 6; i++) {
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
      <Node currentPlayer={currentPlayer} index={1} resources={nodes[0]} style={nodeStyle1}/>
      <Node currentPlayer={currentPlayer} index={2} resources={nodes[1]} style={nodeStyle2}/>
      <Node currentPlayer={currentPlayer} index={3} resources={nodes[2]} style={nodeStyle3}/>
      <button className="hex" style={{top: '-60px'}}>
        {resource}
      </button>
      <Node currentPlayer={currentPlayer} index={4} resources={nodes[3]} style={nodeStyle4}/>
      <Road currentPlayer={currentPlayer} style={{top: '-195px', left: '2px', transform: 'rotate(-34deg)'}}/>
      <Road currentPlayer={currentPlayer} style={{top: '-155px', left: '-25px', transform: 'rotate(90deg)'}}/>
      <Road currentPlayer={currentPlayer} style={{top: '-116px', left: '2px', transform: 'rotate(32deg)'}}/>
      <Road currentPlayer={currentPlayer} style={{top: '-225px', left: '62px', transform: 'rotate(34deg)'}}/>
      <Road currentPlayer={currentPlayer} style={{top: '-137px', left: '61px', transform: 'rotate(-32deg)'}}/>
      {last && (
        <>
          <Node currentPlayer={currentPlayer} index={5} resources={nodes[4]} style={nodeStyle5}/>
          <Node currentPlayer={currentPlayer} index={6} resources={nodes[5]} style={nodeStyle6}/>
          <Road currentPlayer={currentPlayer} style={{top: '-255px', left: '89px', transform: 'rotate(90deg)'}}/>
        </>
      )}
    </div>
  )
}