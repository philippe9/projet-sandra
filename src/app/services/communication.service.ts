import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private dataSource = new Subject<string>();

  dataSource$ = this.dataSource.asObservable();
  constructor() { }

  announdeData(data: string) {
    this.dataSource.next(data);
  }

}
