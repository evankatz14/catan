import React, { useState } from 'react';
import Node from './Node.jsx';
import Road from './Road.jsx';

const style1 = {left: '-22px', top: '-34px'}
const style2 = {left: '35px', top: '-30px'}
const style3 = {left: '92px', top: '-94px'}
const style4 = {left: '92px', top: '-185px'}
const style5 = {left: '-22px', top: '-156px'}

export default function OtherRowHex({type, adjacent, position, first, last}) {
  const nodes = [];
  for (let i = 1; i < 6; i++) {
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
  return (
    <div className="full-hex">
      <button className="hex" >
        {type}
      </button>
      <Node index={3} resources={nodes[1]} style={style1}/>
      <Node index={4} resources={nodes[2]} style={style2}/>
      {first &&(
        <>
          <Node index={2} resources={nodes[0]} style={style5}/>
          {/* <Road style={{top: '-175px', left: '89px', transform: 'rotate(180deg)'}}/> */}
        </>
      )}
      {last && (
        <>
          <Node index={5} resources={nodes[2]} style={style3}/>
          <Node index={6} resources={nodes[3]} style={style4}/>
          {/* <Road style={{top: '-175px', left: '89px', transform: 'rotate(90deg)'}}/> */}
        </>
      )}
      {/* <Road style={{top: '-145px', left: '-25px', transform: 'rotate(90deg)'}}/>
      <Road style={{top: '-106px', left: '3px', transform: 'rotate(32deg)'}}/>
      <Road style={{top: '-116px', left: '61px', transform: 'rotate(-32deg)'}}/> */}
    </div>
  )
}