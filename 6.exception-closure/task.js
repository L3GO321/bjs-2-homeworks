//Hometask 1
const parseCount = (number) => {
    let parsed = Number.parseInt(number, 10);

    if (!isNaN(parsed)) {
        return parsed;
    }

    throw new Error('Невалидное значение');
}

const validateCount = (numberOfGoods) => {
    try {
        return parseCount(numberOfGoods);
    } catch(e) {
        return e;
    }
}

//Hometask 2
class Triangle {
    constructor (firstSide, secondSide, thirdSide) {
        if (firstSide + secondSide <= thirdSide || 
            firstSide + thirdSide <= secondSide || 
            secondSide + thirdSide <= firstSide) {
            throw new Error ('Треугольник с такими сторонами не существует');
        }  

        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
    }

    getPerimeter() {
        return this.firstSide + this.secondSide + this.thirdSide;
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        return Number(Math.sqrt(p * (p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide)).toFixed(3));
    }
}

const getTriangle = (firstSideLength, secondSideLength, thirdSideLength) => {
    try {
        return new Triangle(firstSideLength, secondSideLength, thirdSideLength);
    } catch {
        return {
            getArea: () => 'Ошибка! Треугольник не существует',
            getPerimeter: () => 'Ошибка! Треугольник не существует'
        };
    }
}




