import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  basicData: string | null = '';
  counter = 0;
  constructor(private com: CommunicationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.basicData = this.route.snapshot.paramMap.get('basic-name')
  }
  emitMessage(event: any) {
    console.log(event)
    this.messageChange.emit(event);
  }

  dataToComponent(data: string) {
    this.router.navigate(['/home']);
    this.counter++
    this.com.announdeData(data + this.counter);
  }
}
