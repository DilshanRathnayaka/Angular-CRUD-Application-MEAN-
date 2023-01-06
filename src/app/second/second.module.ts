import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'

import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { SecondComponent } from './second.component';


@NgModule({
    declarations: [
       SecondComponent
       
    ],
    providers: [],
    bootstrap: [SecondComponent],
   imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule
        
    ]
})
export class SecondModule {}