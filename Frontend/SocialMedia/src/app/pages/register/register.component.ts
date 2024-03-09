import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.errorMessage = '';
   }

  ngOnInit() {

  }

  onSubmit() {this.authService.register(this.registerForm.value)

    .subscribe(
      response => {
        this.authService.setToken(response.token);
        this.router.navigate(['/login']);

      },
      error => this.errorMessage = error
    );
  }
}
