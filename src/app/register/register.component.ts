import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }
  RegisterUser(event) {
    event.preventDefault()
    const target =event.target
    const name = target.querySelector('#name').value
    const phone = target.querySelector('#phone').value
    const mail = target.querySelector('#mail').value
    const password = target.querySelector('#password').value
    console.log(name , phone , mail , password)
  }
}
