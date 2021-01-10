import Tool from "./Tool";

class Brush extends Tool {

    constructor(canvas) {
        super(canvas);
    }

    onMouseDown(e) {
        super.onMouseDown(e);
        const {x, y} = this.getCurrentCoordinates(e)
        this.ctx.moveTo(x, y)
        this.ctx.beginPath()
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
        this.ctx.lineTo(x, y)
        this.ctx.stroke()
    }


}

export default Brush