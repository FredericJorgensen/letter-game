/* eslint-disable prettier/prettier */
//game parameters
export const gameGridSize = 8;

import { Solution } from "./solutions";

export class Box {
    id: number;
    clicked: boolean;
    constructor(id: number) {
        this.id = id;
        this.clicked = false;
    }
    computeRow(): number {
        return Math.floor(this.id / gameGridSize);
    }
    click() {
        this.clicked = true;
    }
}

export class Game {
    board: Box[];
    private solution: Solution;
    constructor() {
        this.board = [];
        for (let i = 0; i < gameGridSize ** 2; i++) {
            this.board.push(new Box(i));
        }
        this.solution = new Solution();
    }
    //TODO : remove after debugging
    getSolution() {
        return this.solution;
    }
    getScore() {
        return this.board.filter((box) => box.clicked).length;
    }

    getRow(row: number) {
        if (!(row >= 0 && row < gameGridSize)) {
            throw new Error("row must be between 0 and " + gameGridSize);
        }
        return this.board.filter((box) => box.computeRow() === row);
    }
    private isBoxCorrect(box: Box) {
        return (
            this.board[box.id].clicked && this.solution.solutionIncludes(box)
        );
    }
    isSolved() {
        return (
            this.solution.pattern.boxes.flat(2).filter((x) => x === 1)
                .length ===
            this.board.filter((box) => this.isBoxCorrect(box)).length
        );
    }

    isBoxClickable(box: Box) {
        return !this.board[box.id].clicked && !this.isSolved();
    }

    getBoxColor(box: Box) {
        if (!this.isSolved()) {
            if (this.isBoxCorrect(box)) {
                return "green lighten-3";
            } else if (this.board[box.id].clicked) {
                return "red";
            } else {
                return null;
            }
        } else {
            if (this.isBoxCorrect(box)) {
                return "black";
            } else {
                return "white";
            }
        }
    }
}
