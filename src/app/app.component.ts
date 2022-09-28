import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projet-sandra';
  messageForChild = 'Message for child';
  teller: Greeter = { name: 'test' };
  url!: UrlTypes;
  user: userData = { prenom: "", name: 'test', 29: "toto" }
  ngOnInit(): void {
    console.log(this.teller.name);
    // this.teller.name = "test";
  }
  doSomething(): string {
    return '';
  }
}

interface Greeter {
  name: string;
}
interface userData {
  prenom: string;
  name: string;
  [toto: number]: string;
}

type UrlTypes = string
