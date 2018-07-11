import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatIconModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatIconModule],
  declarations: []
})
export class MaterialModule { }
