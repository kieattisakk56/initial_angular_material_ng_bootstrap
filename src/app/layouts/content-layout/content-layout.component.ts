import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/core/core.service';



@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent implements OnInit {


  version: any;
  year = new Date();

  constructor(private coreService: CoreService,
 

  ) {

  }

  async ngOnInit() {
    this.version = await this.coreService.services.environment.environment.version;
  }


}
