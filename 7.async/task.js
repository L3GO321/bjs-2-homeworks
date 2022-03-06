const isIdExists = (id, arr) => {
    return arr.find(item => item.id === id);
};

class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.');
        }

        if (isIdExists(id, this.alarmCollection)) {
            console.error('Будильник с таким id уже существует');
            return;
        }

        this.alarmCollection.push({
            id,
            time,
            callback,
        });
    }

    removeClock(id) {
        if (isIdExists(id, this.alarmCollection)) {
            this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
            return true;
        }

        return false;
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0, -3);
    }

    start() {
        const checkClock = (call) => {
            if (this.getCurrentFormattedTime() === call.time) {
                call.callback();
            }
        }

        if (!this.timerId) {
            this.timerId = setInterval(() => 
                this.alarmCollection.forEach(item => 
                    checkClock(item)
                ), 2000
            );
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(item => 
            console.log(`Будильник №${item.id} заведен на ${item.time}`)
        );
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

const clock1 = new AlarmClock();
clock1.addClock('15:04', () => {console.log('1')}, 1);
clock1.addClock('15:05', () => {console.log('2'); clock1.removeClock(2)}, 2);
clock1.addClock('15:06', () => {console.log('3'); clock1.stop(); clock1.clearAlarms(); clock1.printAlarms()}, 3);
clock1.printAlarms();
clock1.start();