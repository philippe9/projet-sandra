import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-forms',
  templateUrl: './basic-forms.component.html',
  styleUrls: ['./basic-forms.component.scss']
})
export class BasicFormsComponent implements OnInit {
  formElements = {
    nom: '',
    prenom: ''
  }
  @ViewChild('box') boxRef!: ElementRef;

  userControllerForm = new FormGroup({
    nomReactive: new FormControl('', [Validators.required, Validators.minLength(5)]),
    prenomReactive: new FormControl('',),
    emailReactive: new FormControl('', [Validators.email]),
  })
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }
  logForm(testForm: NgForm) {
    // this.boxRef.nativeElement.setAttribute('style', "border:2px solid red");
    // this.renderer.setStyle(this.boxRef.nativeElement, "border", "2px solid red");
    console.log(testForm);
  }
  logFormReactive(testForm: FormGroup) {
    console.log(testForm)
    // console.log(this.userControllerForm)
  }
}
