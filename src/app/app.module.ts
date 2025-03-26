import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { DadosService } from '../services/dadosService';
import { HeaderComponent } from './header/header.component';
import { TextsComponent } from './texts/texts.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule, 
    ButtonModule
  ],
  providers: [
    DadosService,
    provideHttpClient(),
    provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
