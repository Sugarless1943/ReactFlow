import React from "react";
import ReactFlow from "reactflow";
import styles from "./index.less";
import { MarkerType, Position } from "reactflow";
import Node1 from "./Node1";
import Node2 from "./Node2";
import Node3 from "./Node3";
import FloatingEdge from "./FloatingEdge";

import "reactflow/dist/style.css";

const nodeTypes = {
  selectorNode1: Node1,
  selectorNode2: Node2,
  selectorNode3: Node3,
};

const edgeTypes: any = {
  floating: FloatingEdge,
};

const initialNodes: any = [
  {
    id: "1",
    type: "input",
    position: { x: 50, y: 50 },
    data: { label: "1" },
    sourcePosition: Position.Right,
  },
  {
    id: "2",
    position: { x: 250, y: 50 },
    data: { label: "2" },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
  {
    id: "3",
    type: "input",
    position: { x: 50, y: 100 },
    data: { label: "3" },
    sourcePosition: Position.Right,
  },
  {
    id: "4",
    position: { x: 250, y: 100 },
    data: { label: "4" },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
  {
    id: "5",
    type: "input",
    position: { x: 50, y: 150 },
    data: { label: "5" },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "6",
    position: { x: 250, y: 150 },
    data: { label: "6" },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
  {
    id: "7",
    type: "selectorNode1",
    position: { x: 450, y: 50 },
  },
  {
    id: "8",
    type: "selectorNode1",
    position: { x: 450, y: 250 },
  },
  {
    id: "9",
    position: { x: 650, y: 175 },
    type: "selectorNode3",
  },
  {
    id: "10",
    type: "selectorNode2",
    position: { x: 850, y: 155 },
  },
  {
    id: "11",
    data: { label: "11" },
    type: "input",
    position: { x: 800, y: 35 },
    sourcePosition: Position.Left,
  },
  {
    id: "12",
    data: { label: "12" },
    type: "output",
    position: { x: 450, y: 430 },
    targetPosition: Position.Right,
  },
];
const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    // type: "floating"
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    // type: "floating"
  },
  {
    id: "e2-7",
    source: "2",
    target: "7",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
    // type: "floating",
    targetHandle: "a",
  },
  {
    id: "e4-7",
    source: "4",
    target: "7",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
    targetHandle: "b",
  },
  {
    id: "e6-7",
    source: "6",
    target: "7",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
    targetHandle: "c",
    // animated: true,
    // style: { stroke: '#f00' },
  },
  {
    id: "e7-9",
    source: "7",
    target: "9",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
    type: "smoothstep",
    targetHandle: "c",
    // animated: true,
    // style: { stroke: '#f00' },
  },
  {
    id: "e8-9",
    source: "8",
    target: "9",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
    type: "smoothstep",
    targetHandle: "c",
    // animated: true,
    // style: { stroke: '#f00' },
  },
  {
    id: "e9-10",
    source: "9",
    target: "10",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
    sourceHandle: "d",
    // animated: true,
    // style: { stroke: '#f00' },
  },
  {
    id: "e11-9",
    source: "11",
    target: "9",
    type: "smoothstep",
    sourceHandle: "a",
    animated: true,
    style: { stroke: "#f00" },
  },
  {
    id: "e9-12",
    source: "9",
    target: "12",
    type: "smoothstep",
    sourceHandle: "b",
    animated: true,
    style: { stroke: "#f00" },
  },
];

export default function App() {
  return (
    <div style={{}} className={styles.flow}>
      <div style={{ width: 1000, height: 500, border: "1px solid red" }}>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          className={styles.intersectionFlow}
          preventScrolling={false}
          panOnDrag={false}
          nodesConnectable={false}
          nodesFocusable={false}
          elementsSelectable={false}
          autoPanOnConnect={false}
          autoPanOnNodeDrag={false}
          minZoom={1}
          maxZoom={1}
          fitView
        />
      </div>
    </div>
  );
}
