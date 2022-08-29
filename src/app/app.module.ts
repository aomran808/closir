import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { HeroComponent } from './hero/hero.component';
import { CardContainerComponent } from './choose-us-section/choose-us-section.component';
import { OurWorkSectionComponent } from './our-work-section/our-work-section.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    CardComponent,
    HeroComponent,
    CardContainerComponent,
    OurWorkSectionComponent,
    AboutUsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
