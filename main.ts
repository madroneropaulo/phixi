import * as PIXI from 'pixi.js';

interface ISquareParams {
    x: number,
    y: number,
    width: number,
    height: number,
    graphics: PIXI.Graphics,
    radius?: number,
    fillColor?: number;
}

interface IFigurePosition {
    x: number,
    y: number
}

class Square {
    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private radius: number;
    private initialized = false;

    constructor(params: ISquareParams){
        const {x,y,width,height,radius,graphics,fillColor} = params;
        this.initParams(params);
        graphics.lineStyle(2, 0xaaaaaa, 1);
        graphics.beginFill(fillColor || 0xFF00BB, 0.25);
        graphics.drawRoundedRect(x, y, width, height, radius || 0);
        graphics.endFill();
    }

    private initParams(params: ISquareParams) {
        this.x = params.x;
        this.y = params.y;
        this.width = params.width;
        this.height = params.height;

        this.markAsInitialized();
    }

    private markAsInitialized(): void {
        this.initialized = true;
    }

    public getPosition(): IFigurePosition{
        return this.getProps({x: this.x, y: this.y})
    }

    public getOriginX(): number {
        return this.getProps(this.x)
    }

    public getOriginY(): number {
        return this.getProps(this.y)
    }

    public getWidth(): number {
        return this.getProps(this.width)
    }

    public getHeight(): number {
        return this.getProps(this.height)
    }

    public getArea(): number {
        return this.getProps(this.width*this.height)
    }

    private getProps<T>(prop: T): T {
        console.assert(this.initialized, 'Object not initialized yet');
        return prop
    }
}