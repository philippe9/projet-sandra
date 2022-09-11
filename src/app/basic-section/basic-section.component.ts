import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-basic-section',
  templateUrl: './basic-section.component.html',
  styleUrls: ['./basic-section.component.scss']
})
export class BasicSectionComponent implements OnInit {

  @Input()
  message = 'Mon message';

  confirmBasicData$: Observable<string> = of('');
  constructor(private com: CommunicationService) { }

  ngOnInit(): void {
    this.confirmBasicData$ = this.com.dataSource$;
  }

}
