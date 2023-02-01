import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SvgIconsComponent } from './utility/svg-icons/svg-icons.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PlatformPageComponent } from './components/platform-page/platform-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SvgIconsComponent,
    LandingPageComponent,
    PlatformPageComponent,
    AboutPageComponent,
    BookPageComponent,
    ShopPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
