import {NgModule} from '@angular/core';
import {SaludoComponent} from './saludo/saludo.component'
@NgModule({
  declarations: [
    SaludoComponent
  ],
  exports:[
    SaludoComponent
  ]
})

export class SaludosComponent{}
