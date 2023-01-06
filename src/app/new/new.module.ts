import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { NewComponent } from './new.component';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [
       NewComponent
       
    ],
    providers: [],
    bootstrap: [NewComponent],
   imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule
        
    ]
})
export class NewModule {}