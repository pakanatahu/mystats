import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatListModule, MatCheckboxModule, MatToolbarModule, MatCardModule} from '@angular/material';


@NgModule({
    imports: [MatButtonModule, MatListModule, MatCheckboxModule, MatToolbarModule, MatCardModule],
    exports: [MatButtonModule, MatListModule, MatCheckboxModule, MatToolbarModule, MatCardModule],
  })
export class MaterialModule {};