import {makeAutoObservable} from "mobx";

class CanvasStore {
    currentCanvas = null
    undoList = []
    redoList = []

    constructor() {
        makeAutoObservable(this)
    }

    setCurrentCanvas(canvas) {
        this.currentCanvas = canvas
    }

}

export default new CanvasStore()
