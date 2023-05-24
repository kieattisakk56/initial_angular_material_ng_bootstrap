import { Injectable, Injector } from '@angular/core';
import { CoreAlertService } from './services/core.alert';
import { CoreCopyService } from './services/core.coppy';

import { CoreCryptoJSService } from './services/core.cryptojs';
import { CoreEnvironmentService } from './services/core.environment';
import { CoreEventsService } from './services/core.events';
import { CoreFormService } from './services/core.form';
import { CoreHttpService } from './services/core.http';
import { CoreModalService } from './services/core.modal';
import { CoreStorageService } from './services/core.storage';
import { CoreToastService } from './services/core.toast';
import { CoreUtilityService } from './services/core.utility';
import { CoreDatetimeService } from './services/core.datetime';
import { StoreService } from '../shared/services/store/store.service';


@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(private injector: Injector) { }

  public get services() {
    return {
      storage: this.injector.get(CoreStorageService),
      crypto: this.injector.get(CoreCryptoJSService),
      copy: this.injector.get(CoreCopyService),
      alert: this.injector.get(CoreAlertService),
      events: this.injector.get(CoreEventsService),
      utility: this.injector.get(CoreUtilityService),
      http: this.injector.get(CoreHttpService),
      toast: this.injector.get(CoreToastService),
      modal: this.injector.get(CoreModalService),
      form: this.injector.get(CoreFormService),
      environment: this.injector.get(CoreEnvironmentService),
      dateTime: this.injector.get(CoreDatetimeService),
  
    };
  }

  public get https() {
    return {
      store: this.injector.get(StoreService)
    }

  }

  public get socket() {
    return {}
  }


}
