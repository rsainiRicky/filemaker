import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  loginQrCode = 'LoginQrForfilemaker';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      ) {}

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          firstName: ['', Validators.compose([Validators.required,Validators.minLength[1]])],
          lastName: ['', Validators.compose([Validators.required,Validators.minLength[1]])],
          userName: ['', Validators.compose([Validators.required,Validators.minLength[2]])],
          email: ['', Validators.compose([Validators.required,Validators.email])],
          password: ['', Validators.compose([Validators.required,
            Validators.pattern('^(?=\P{Ll}*\p{Ll})(?=\P{Lu}*\p{Lu})(?=\P{N}*\p{N})(?=[\p{L}\p{N}]*[^\p{L}\p{N}])[\s\S]{8,}$')

        ])]
      });

      // reset login status
      
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }else{
            this.router.navigateByUrl('/profile');

      }
      console.log(this.loginForm.value);
      this.loading = true;
  }

}
