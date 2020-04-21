import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceClassWidgetComponent } from './resource-class-widget.component';
import { MaterialCardModule } from 'src/app/components/cards/material-card/material-card.module';
import { MatIcon, MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [ResourceClassWidgetComponent],
  imports: [
    CommonModule,
    MaterialCardModule,
    MatIconModule
  ],
  exports: [ResourceClassWidgetComponent],
})
export class ResourceClassWidgetModule { }
