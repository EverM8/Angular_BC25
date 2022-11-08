import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { UploaderComponent } from './uploader/uploader.component';
import { CartaocreditoComponent } from './cartaocredito/cartaocredito.component';
import { FormsModule } from '@angular/forms';
import { FormularioCartaoCreditoComponent } from './formulario-cartao-credito/formulario-cartao-credito.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    UploaderComponent,
    CartaocreditoComponent,
    FormularioCartaoCreditoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
