import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs-compat';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubscription: Subscription

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    // on ngInit subscription is created
    this.paramsSubscription = this.route.params.subscribe(
      // this is executed on params change
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      });
  }

  //this is auto but on destroy unsubscribe from custom observables
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}