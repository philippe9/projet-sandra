import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent implements OnInit {

  @Input()
  message = 'Mon message';

  @Output()
  messageChange = new EventEmitter();

  basicData = '';
  counter = 0;
  constructor(private com: CommunicationService) { }

  ngOnInit(): void {
  }
  emitMessage(event: any) {
    console.log(event)
    this.messageChange.emit(event);
  }

  dataToComponent(data: string) {
    this.counter++
    this.com.announdeData(data + this.counter);
  }
}
