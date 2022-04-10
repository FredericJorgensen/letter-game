/* eslint-disable prettier/prettier */

export const gridSize = 10;
export const letterSize = 10;

export type BoxState = "clicked" | "unclicked";
export class Box {
    id: number;
    state: BoxState;
    row: number;
    constructor(id: number, row: number) {
        this.id = id;
        this.state = "unclicked";
        this.row = row;
    }
}

export class Board {
    boxes: Box[];
    constructor(size: number) {
        this.boxes = [];
        for (let i = 0; i < size ** 2; i++) {
            this.boxes.push(new Box(i, Math.floor(i / size)));
        }
    }

    getRow(row: number) {
        return this.boxes.filter((box) => box.row === row);
    }
}

export class Game {
    board: Board;
    solution: Solution;
    score: number;
    constructor() {
        this.board = new Board(gridSize);
        this.solution = solutions[Math.floor(Math.random() * solutions.length)];
        this.score = 0;
    }
    clickBox(boxId: number) {
        this.board.boxes[boxId].state = "clicked";
        this.score++;
    }
    isBoxCorrect(boxId: number) {
        return (
            this.board.boxes[boxId].state === "clicked" &&
            this.solution.grid.includes(boxId)
        );
    }
    isSolved() {
        return this.solution.grid.every((boxId) => this.isBoxCorrect(boxId));
    }

    isBoxClickable(box: Box) {
        return (
            this.board.boxes[box.id].state === "unclicked" && !this.isSolved()
        );
    }

    getBoxColor(boxId: number) {
        if (!this.isSolved()) {
            if (this.isBoxCorrect(boxId)) {
                return "green";
            } else if (this.board.boxes[boxId].state === "clicked") {
                return "red";
            } else {
                return null;
            }
        } else {
            if (this.isBoxCorrect(boxId)) {
                return "black";
            } else {
                return "white";
            }
        }
    }
}

type Solution = {
    name: string;
    grid: number[];
};
//put all possible solutions in here
export const solutions: Solution[] = [
    { name: "A", grid: [2, 3, 11, 14, 21, 22, 23, 24, 31, 34, 41, 44] },
];

// TODO: put solution on smaller grid later
export class DisplaySolution {
    board: Board;
    solution: Solution;
    constructor(solution: Solution) {
        this.board = new Board(letterSize);
        this.solution = solution;
    }

    isBoxInSolution(boxId: number) {
        return this.solution.grid.includes(boxId);
    }

    getBoxColor(boxId: number) {
        if (this.isBoxInSolution(boxId)) {
            return "black";
        } else {
            return "white";
        }
    }
}
