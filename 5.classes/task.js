//Hometask 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5; 
    }

    set state(newState) {
        this._state = newState;

        if (newState < 0) {
            this._state = 0;
        };
        
        if (newState > 100) {
            this._state = 100;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(...args) {
        super(...args);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, ...args) {
        super(...args);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = 'detective';
    }
}

//Hometask 2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book); 
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        let givenBook = null;
        let givenBookIndex;

        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                givenBook = this.books[i];
                givenBookIndex = i;        
            }
        }

        if (givenBookIndex !== -1) {
            this.books.splice(givenBookIndex, 1);
        }

        return givenBook;
    }
}

//Hometask 3
class Student {
    constructor(name, gender, age) {
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.marks = {};
    }

    setSubject(subject) {
        this.marks[subject] = [];
      }

    addMark(mark, subject) {
      if (mark < 1 || mark > 5) {
          return 'Ошибка, оценка должна быть числом от 1 до 5';
      }
        
      if (this.marks.hasOwnProperty(subject)) {
        this.marks[subject].push(mark);
      } else {
        this.marks[subject] = [mark];
      }
    }

    getAverageBySubject(subject) {
        if (!this.marks.hasOwnProperty(subject)) {
            return 'Несуществующий предмет';
        } 

        let sum = this.marks[subject].reduce((sum, mark) => sum + mark);
        return `Средний балл по предмету ${subject} ${sum / this.marks[subject].length}`;
    }

    getAverage() {
        let sumOfMarks = 0;
        let numberOfMarks = 0;

        for (let key in this.marks) {
            sumOfMarks += this.marks[key].reduce((sum, mark) => sum + mark);
            numberOfMarks += this.marks[key].length;
        } 

        if (numberOfMarks) {
            return `Средний балл по всем предметам ${sumOfMarks / numberOfMarks}`;
        }

        return 'Журнал оценок пуст';
    }

    exclude(reason) {
      delete this.marks;
  
      this.excluded = reason;
    }
  }

