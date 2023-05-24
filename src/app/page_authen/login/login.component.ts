import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CoreService } from 'src/app/core/core.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  items: any;
  process = false;
  year = new Date();

  constructor(
    private router: Router,
 
  ) { }
  ngOnInit(): void {
  
  }
}
