import React, { useState } from 'react';
import Node from './Node.jsx';
import Road from './Road.jsx';

const nodeStyle1 = {left: '35px'}
const nodeStyle2 = {left: '92px', top: '4px'}
const nodeStyle3 = {left: '92px', top: '36px'}
const nodeStyle4 = {left: '35px', top: '-60px'}
const nodeStyle5 = {left: '-22px', top: '-124px'}
const nodeStyle6 = {left: '-22px', top: '-216px'}

export default function FirstRowHex({type, adjacent, position, last}) {
  const nodes = [];
  if (!last) {
    for (let i = 0; i < 6; i++) {
      let currentNode = [type]
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
  } else {
    for (let i = 0; i < 4; i++) {
      let currentNode = [type]
      let first = adjacent[Object.keys(adjacent)[i]];
      let second = adjacent[Object.keys(adjacent)[i + 1]];
      if (first) {
        currentNode.push(first)
      }
      if (second) {
        currentNode.push(second)
      }
      nodes.push(currentNode);
    }
  }
  return (
    <div >
      <Node resources={nodes[0]} style={nodeStyle1}/>
      <Node resources={nodes[1]} style={nodeStyle2}/>
      <Node resources={nodes[2]} style={nodeStyle3}/>
      <button className="hex" style={{top: '-60px'}}>
        {type}
      </button>
      <Node resources={nodes[3]} style={nodeStyle4}/>
      {!last && (
        <>
          <Node resources={nodes[4]} style={nodeStyle5}/>
          <Node resources={nodes[5]} style={nodeStyle6}/>
          <Road style={{top: '-255px', left: '2px', transform: 'rotate(-34deg)'}}/>
          <Road style={{top: '-215px', left: '-25px', transform: 'rotate(90deg)'}}/>
          <Road style={{top: '-176px', left: '2px', transform: 'rotate(32deg)'}}/>
          <Road style={{top: '-285px', left: '62px', transform: 'rotate(34deg)'}}/>
          <Road style={{top: '-197px', left: '61px', transform: 'rotate(-32deg)'}}/>
        </>
      )}
      {last && (
        <>
          <Road style={{top: '-195px', left: '2px', transform: 'rotate(-34deg)'}}/>
          <Road style={{top: '-155px', left: '-25px', transform: 'rotate(90deg)'}}/>
          <Road style={{top: '-117px', left: '3px', transform: 'rotate(32deg)'}}/>
          <Road style={{top: '-225px', left: '62px', transform: 'rotate(34deg)'}}/>
          <Road style={{top: '-185px', left: '89px', transform: 'rotate(90deg)'}}/>
          <Road style={{top: '-146px', left: '61px', transform: 'rotate(-32deg)'}}/>
        </>
      )}
    </div>
  )
}