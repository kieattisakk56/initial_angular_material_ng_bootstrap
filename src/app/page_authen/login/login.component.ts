import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { CoreService } from 'src/app/core/core.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'input',
          type: 'CustomInput',
          className: 'col-6',
          props: {
            label: 'Input',
            type: 'email',
            placeholder: 'Input placeholder',
            required: true,
          },
        },
        {
          key: 'textarea',
          type: 'textarea',
          className: 'col-6',
          props: {
            label: 'Textarea',
            placeholder: 'Textarea placeholder',
            required: true,
          },
        },
        {
          key: 'checkbox',
          type: 'checkbox',
          className: 'col-6',
          props: {
            label: 'Checkbox',
          },
        },
        {
          key: 'select',
          type: 'select',
          className: 'col-6',
          props: {
            label: 'Select',
            placeholder: 'Select placeholder',
            required: true,
            options: [
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
              { label: 'Option 3', value: '3' },
            ],
          },
        },
        {
          key: 'radio',
          type: 'radio',
          className: 'col-6',
          props: {
            label: 'Radio',
            required: true,
            options: [
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
            ],
          },
        },
      ]
    }

  ];


  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {

  }

  async onSubmit() {

  }
}
