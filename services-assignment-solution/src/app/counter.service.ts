export class CounterService {
    activeToinactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveToinactive() {
        this.activeToinactiveCounter++;
        console.log(this.activeToinactiveCounter);
    }

    incrementInactiveToActive() {
        this.inactiveToActiveCounter++;
        console.log(this.inactiveToActiveCounter);
    }

}