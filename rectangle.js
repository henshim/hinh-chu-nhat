class Rectangle{
    constructor(w,h) {
        this.width=+w;
        this.height=+h;
    }
    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
    }
    getArea(){
        return this.height*this.width;
    }
    getPerimeter(){
        return (this.width+this.height)*2;
    }
    draw(canvas){

        pen.beginPath();
    }
}