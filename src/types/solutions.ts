import { gameGridSize, Box } from "./Game";

export class Solution {
  pattern: Pattern;
  xShift: number;
  yShift: number;

  constructor() {
    const day = new Date().getDay();
    const index = day % solutionPatterns.length;
    this.pattern = solutionPatterns[index];
    this.xShift = Math.floor(Math.random() * (gameGridSize - 3));
    this.yShift = Math.floor(Math.random() * (gameGridSize - 5));
  }

  solutionIncludes(box: Box): boolean {
    const yIndex = Math.floor(box.id / gameGridSize) - this.yShift;
    const xIndex = (box.id % gameGridSize) - this.xShift;
    return this.pattern.boxes[yIndex]
      ? this.pattern.boxes[yIndex][xIndex] === 1
      : false;
  }

  getBoxId(yIndex: number, xIndex: number): number {
    return (yIndex + this.yShift) * gameGridSize + (xIndex + this.xShift);
  }
}

type Pattern = {
  name: string;
  boxes: number[][];
};

//use x instead of 1 for better legibility

const x = 1;
export const solutionPatterns: Pattern[] = [
  {
    name: "A",
    boxes: [
      [0, x, 0],
      [x, 0, x],
      [x, x, x],
      [x, 0, x],
      [x, 0, x],
    ],
  },
  {
    name: "B",
    boxes: [
      [x, x, 0],
      [x, 0, x],
      [x, x, 0],
      [x, 0, x],
      [x, x, 0],
    ],
  },
  {
    name: "C",
    boxes: [
      [0, x, 0],
      [x, 0, x],
      [x, 0, 0],
      [x, 0, x],
      [0, x, 0],
    ],
  },
  {
    name: "D",
    boxes: [
      [x, x, 0],
      [x, 0, x],
      [x, 0, x],
      [x, 0, x],
      [x, x, 0],
    ],
  },
  {
    name: "E",
    boxes: [
      [x, x, x],
      [x, 0, 0],
      [x, x, x],
      [x, 0, 0],
      [x, x, x],
    ],
  },
  {
    name: "F",
    boxes: [
      [x, x, x],
      [x, 0, 0],
      [x, x, x],
      [x, 0, 0],
      [x, 0, 0],
    ],
  },

  {
    name: "H",
    boxes: [
      [x, 0, x],
      [x, 0, x],
      [x, x, x],
      [x, 0, x],
      [x, 0, x],
    ],
  },
  {
    name: "I",
    boxes: [
      [0, x, 0],
      [0, x, 0],
      [0, x, 0],
      [0, x, 0],
      [0, x, 0],
    ],
  },
  {
    name: "J",
    boxes: [
      [x, x, x],
      [0, 0, x],
      [0, 0, x],
      [x, 0, x],
      [0, x, 0],
    ],
  },
  {
    name: "K",
    boxes: [
      [x, 0, x],
      [x, x, 0],
      [x, 0, 0],
      [x, x, 0],
      [x, 0, x],
    ],
  },
  {
    name: "L",
    boxes: [
      [x, 0, 0],
      [x, 0, 0],
      [x, 0, 0],
      [x, 0, 0],
      [x, x, x],
    ],
  },
  {
    name: "O",
    boxes: [
      [0, x, 0],
      [x, 0, x],
      [x, 0, x],
      [x, 0, x],
      [0, x, 0],
    ],
  },
  {
    name: "P",
    boxes: [
      [x, x, 0],
      [x, 0, x],
      [x, x, 0],
      [x, 0, 0],
      [x, 0, 0],
    ],
  },
  {
    name: "R",
    boxes: [
      [x, x, 0],
      [x, 0, x],
      [x, x, 0],
      [x, x, 0],
      [x, 0, x],
    ],
  },
  {
    name: "S",
    boxes: [
      [0, x, x],
      [x, 0, 0],
      [0, x, 0],
      [0, 0, x],
      [x, x, 0],
    ],
  },
  {
    name: "T",
    boxes: [
      [x, x, x],
      [0, x, 0],
      [0, x, 0],
      [0, x, 0],
      [0, x, 0],
    ],
  },
  {
    name: "U",
    boxes: [
      [x, 0, x],
      [x, 0, x],
      [x, 0, x],
      [x, 0, x],
      [0, x, 0],
    ],
  },
];
