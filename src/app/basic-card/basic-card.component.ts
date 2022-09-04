import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent implements OnInit {

  @Input()
  message = 'Mon message';

  @Output()
  messageClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  emitMessage(event: any) {
    this.messageClicked.emit('Message clicked');
  }
}
