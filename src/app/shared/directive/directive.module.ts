import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountUpDirective } from './count-up/count-up.directive';
import { JsonRenderingDirective } from './json-rendering/json-rendering.directive';
import { HasPermissionDirective } from './has-permission/has-permission.directive';


@NgModule({
  declarations: [CountUpDirective, JsonRenderingDirective, HasPermissionDirective],
  imports: [CommonModule],
  exports: [CountUpDirective, JsonRenderingDirective, HasPermissionDirective],
})
export class DirectiveModule { }
