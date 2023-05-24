import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../shared/pipe/pipe.module';
import { RouterModule } from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { DirectiveModule } from '../shared/directive/directive.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CustomInputComponent } from './formly/fields/custom-input/custom-input.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export function playerFactory() {
  return player;
}


@NgModule({
  declarations: [

    // TermsModalComponent,

    CustomInputComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    PipeModule,
    DragDropModule,
    DirectiveModule,
    FormsModule,
    LottieModule.forRoot({ player: playerFactory }),
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
 
  ],
  exports: [


    MatIconModule,
    MatInputModule,
    MatFormFieldModule
    // TermsModalComponent,
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
    // { provide: BsDatepickerConfig, useValue: { timezone: 'utc' } }
  ],
})
export class ComponentsModule { }
