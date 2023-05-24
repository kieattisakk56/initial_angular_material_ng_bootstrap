import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLayoutRoutes } from './content-layout.routing';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';

import { DirectiveModule } from 'src/app/shared/directive/directive.module';





import { HomeComponent } from 'src/app/pages/home/home.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ErrorComponent } from 'src/app/pages/error/error.component';




@NgModule({
  declarations: [
    //////Home
    HomeComponent,
    ErrorComponent,
    // Formly
  ],
  imports: [
   
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(ContentLayoutRoutes),
    FormsModule,
    ComponentsModule,
    DirectiveModule,
    DragDropModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,

  ],
})
export class ContentLayoutModule { }
