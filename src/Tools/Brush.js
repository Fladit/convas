import Tool from "./Tool";
import ToolStore from "../store/ToolStore";

class Brush extends Tool {

    constructor(canvas) {
        super(canvas);
    }

    onMouseDown(e) {
        super.onMouseDown(e);
        const {x, y} = this.getCurrentCoordinates(e)
        this.ctx.beginPath()
        this.ctx.moveTo(x, y)
    }

    onMouseUp(e) {
        super.onMouseUp(e)
        this.ctx.closePath()
    }

    onMouseMove(e) {
        if (this.isMouseDown)
        {
            const {x, y} = this.getCurrentCoordinates(e)
            this.draw(x, y)
        }
    }


    draw(x, y) {
        this.ctx.lineWidth = ToolStore.lineWidth
        this.ctx.strokeStyle = this.getColor()
        this.ctx.lineTo(x, y)
        this.ctx.stroke()
        console.log("brush draw")
    }




}

export default Brush
