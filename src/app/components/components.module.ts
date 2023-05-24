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

export function playerFactory() {
  return player;
}


@NgModule({
  declarations: [ 
 
    // TermsModalComponent,
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
  ],
  exports: [



    // TermsModalComponent,
  ],
  providers: [
    // { provide: BsDatepickerConfig, useValue: { timezone: 'utc' } }
  ],
})
export class ComponentsModule {}
