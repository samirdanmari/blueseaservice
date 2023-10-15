import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public Form!: FormGroup;
  private formSubmit!: boolean;
    constructor(private fb: FormBuilder) {
    }
    ngOnInit() {
      this.Form = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      })
    }
    onSubmit() {
      if (this.Form.valid) {
        
      }
      this.formSubmit = true;             // {8}
    }



}
