import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna']

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]), // can pass string 'Default username'
        'email': new FormControl(null, [Validators.required, Validators.email, this.forbidenEmails])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    this.signupForm.valueChanges.subscribe((value) => console.log(value));

    this.signupForm.statusChanges.subscribe((status) => console.log(status));

    this.signupForm.setValue({
      'userData':{
        'username':'Max',
        'email':'max@test.com'
      },
      'gender':'male',
      'hobbies':[]
    });

    this.signupForm.patchValue({
      'userData':{
        'username':'Veronica ptach value from max',
        'email':'max@test.com'
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl([null, Validators.required]);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value)) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }

  forbidenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value == 'test@test.com') {
          resolve({ 'emailsForbidden': true })
        } else {
          resolve(null)
        }
      }, 100);
    });

    return promise;
  }
}