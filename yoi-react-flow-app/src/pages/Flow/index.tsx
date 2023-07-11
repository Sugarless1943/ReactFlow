import React from "react";
import ReactFlow from "reactflow";
import styles from "./index.less";
import { MarkerType, Position } from "reactflow";
import totalNode1 from "./totalNode1";
import totalNode2 from "./totalNode2";

import "reactflow/dist/style.css";

const nodeTypes = {
  selectorNode1: totalNode1,
  selectorNode2: totalNode2,
};

const initialNodes: any = [
  {
    id: "1",
    type: "input",
    position: { x: 50, y: 50 },
    data: { label: "1" },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
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
    targetPosition: Position.Left,
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
    data: { label: "9" },
    style: {
      width: 100,
      height: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "10",
    type: "selectorNode2",
    position: { x: 850, y: 155 },
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
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
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
    type: "smoothstep",
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
    type: "smoothstep",
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
    type: "smoothstep",
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
    type: "smoothstep",
    // animated: true,
    // style: { stroke: '#f00' },
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
          className={styles.intersectionFlow}
        />
      </div>
    </div>
  );
}