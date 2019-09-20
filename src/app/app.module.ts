import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule} from '@angular/material'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { IndustryComponent } from './industry/industry.component';
import { ContactComponent } from './contact/contact.component';
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
=======
import { FlexLayoutModule } from '@angular/flex-layout';
>>>>>>> 9001284fd523bd25d991317775526c2bfe567e3f

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    TeamComponent,
    IndustryComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    BrowserAnimationsModule,
=======
    NgbModule
>>>>>>> 0cab5f0330d1ec070d3c555c2666f4ffd5e26861
  ],
  exports:[
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
