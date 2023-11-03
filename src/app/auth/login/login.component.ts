import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";

import {AuthActions} from "../store/auth.actions";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  form: FormGroup = this.fb.group({
    email: ['test@angular-university.io', [Validators.required]],
    password: ['test', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {
  }

  login() {
    const credentials = this.form.value as {email: string, password: string};
    this.store.dispatch(AuthActions.login({credentials}));
  }
}

