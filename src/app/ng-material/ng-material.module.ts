import { NgModule } from '@angular/core';
import { MatButtonModule, MatListModule, MatCardModule, MatChipsModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatListModule, MatCardModule, MatChipsModule],
  exports: [MatButtonModule, MatListModule, MatCardModule, MatChipsModule],
})
export class NgMaterialModule {}
