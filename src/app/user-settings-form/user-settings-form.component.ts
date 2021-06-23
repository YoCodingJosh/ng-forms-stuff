import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  userSettings: UserSettings = {
    ...this.originalUserSettings
  };

  postError = false;
  postErrorMessage = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onHttpError(errorResponse: any): void {
    console.error('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    if (!form.valid)
    {
      this.postError = true;
      this.postErrorMessage = "Fix the above errors before submitting the form.";
      return;
    }
    
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(result => {
      console.log("success! ", result);

      this.postError = false;
      this.postErrorMessage = '';
    }, error => {
      this.onHttpError(error);
    });
  }

  onBlur(field: NgModel) {

  }

}
