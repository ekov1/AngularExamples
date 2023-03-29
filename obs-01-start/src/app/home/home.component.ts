import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // storing the subscription
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
        if (count === 4) {
          observer.complete();
        }
        if (count > 5) {
          observer.error(new Error('Cout is greater 3!'));
        }
      }, 1000);
    });

    //customIntervalObservable.pipe(map((data: number) => { return 'Round' + data++; }));

    // storing the subscription
    this.firstObsSubscription = customIntervalObservable.pipe(filter(data => { return data > 0 }),
      map((data: number) => { return 'Round: ' + data++; }))
      .subscribe(
        //data => { console.log('Round: '+ data++); },
        data => { console.log(data); },
        error => {
          console.log(error);
          alert(error);
        },
        // complete handle
        () => {
          console.log('completed observable');
        }
      );

  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
