import { Injectable } from '@angular/core';
import { CoreService } from 'src/app/core/core.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  path: string = '/store/';
  constructor(private coreService: CoreService) {

  }

  async get(body: any): Promise<any> {
    const endpoint = this.path + `getCetegoryMenu`;
    return this.coreService.services.http.post(endpoint, body);
  }

  async validate(body: any): Promise<any> {
    const endpoint = this.path + `validateTable`;
    return this.coreService.services.http.post(endpoint, body);
  }

  async history(body: any): Promise<any> {
    const endpoint = this.path + `history`;
    return this.coreService.services.http.post(endpoint, body);
  }
  async order(body: any): Promise<any> {
    const endpoint = this.path + `order`;
    return this.coreService.services.http.post(endpoint, body);
  }
}
