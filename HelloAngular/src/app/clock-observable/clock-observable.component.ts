import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'in-clock-observable',
  templateUrl: './clock-observable.component.html',
  styleUrls: ['./clock-observable.component.scss']
})
export class ClockObservableComponent implements OnInit {

  public now$: Observable<Date>;
  public subscribtion: Subscription;

  constructor() { }

  ngOnInit() {
    this.now$ = interval(1000).pipe(
      startWith(0),
      map(() => new Date())
    );
  }

}
