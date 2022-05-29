import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

export interface AccountDetailsTableColumns {
  accountType: string;
  title: string;
  number: string
}

const JAMAT_ACCOUNTS_DATA: AccountDetailsTableColumns[] = [
  {accountType: 'Jazz Cash', title: 'Ghousia Memoodia Walfare Organization', number: 'Will be provided soon' },
  {accountType: 'Easy Paisa', title: 'Ghousia Memoodia Walfare Organization', number: 'Will be provided soon' },
  {accountType: 'Bank Islami', title: 'Ghousia Memoodia Walfare Organization', number: '115200027630001' }
];

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  title = 'Registration Form';

  displayedColumns: string[] = ['accountType', 'title', 'number'];
  dataSource = JAMAT_ACCOUNTS_DATA;

  isLinear = false;
  personalInformationGroup: FormGroup;
  addressGroup: FormGroup;
  donationInformationGroup: FormGroup;
  accountDetailsGroup: FormGroup;;  disclaimerGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.personalInformationGroup = this._formBuilder.group({
      yourName: ['', Validators.required],
      fatherName: ['', Validators.required],
      castName: ['', Validators.required],
      gender: ['', Validators.required],
      nicNo: ['', Validators.required],
      mobileNo: ['', Validators.required],
      email: ['', Validators.required],
      age: [''],
    });

    this.addressGroup = this._formBuilder.group({
      province: ['', Validators.required],
      city: ['', Validators.required],
      district: [''],
      address: ['', Validators.required]
    });

    this.donationInformationGroup = this._formBuilder.group({
      donation: [''],
      frequency: [''],
      autoDeduct: [''],
    });

    this.accountDetailsGroup = this._formBuilder.group({});

    this.disclaimerGroup = this._formBuilder.group({
      consent: ['', Validators.required]
    });
  }
}
