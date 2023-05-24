import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentPipe } from './moment/moment.pipe';
import { HighlightPipe } from './highlight/highlight.pipe';

@NgModule({
  declarations: [ MomentPipe, HighlightPipe],
  imports: [CommonModule],
  exports: [MomentPipe, HighlightPipe],
})
export class PipeModule { }
