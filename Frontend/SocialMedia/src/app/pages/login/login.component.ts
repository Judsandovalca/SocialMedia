import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.errorMessage = '';
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onRegisterClick() {
    // ... acción antes de navegar
    // Ejemplo: mostrar un modal de confirmación
    this.router.navigate(['/register']);
  }
  onSubmit() {

      this.authService.login(this.loginForm.value)

        .subscribe(
          response => {
            this.authService.setToken(response.token);
            this.router.navigate(['/home']);

          },
          error => this.errorMessage = error
        );

  }

}
