import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {CollapseModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),

    FormsModule,
    ReactiveFormsModule
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule, CollapseModule, CommonModule]
})
export class AppBootstrapModule {}
