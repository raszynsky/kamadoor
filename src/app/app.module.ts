import { CommonModule, registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '@pages/header/header.component';
import { FooterComponent } from '@pages/footer/footer.component';
import { PageNotFoundComponent } from '@pages/not-found/not-found.component';
import { MainPageComponent } from '@pages/main-page/main-page.component';
import { HandlesBoardsComponent } from '@pages/offer/handles-boards/handles-boards.component';
import { InternalDoorsComponent } from '@pages/offer/internal-doors/internal-doors.component';
import { ExternalDoorsComponent } from '@pages/offer/external-doors/external-doors.component';
import { ApartmentInternalDoorsComponent } from '@pages/offer/apartment-internal-doors/apartment-internal-doors.component';
import { LoftDoorsComponent } from '@pages/offer/loft-doors/loft-doors.component';
import { HiddenDoorsComponent } from '@pages/offer/hidden-doors/hidden-doors.component';
import { SlidingDoorsComponent } from '@pages/offer/sliding-doors/sliding-doors.component';
import { ShowersComponent } from '@pages/offer/showers/showers.component';
import { CataloguesComponent } from '@pages/catalogues/catalogues.component';
import { RealizationsComponent } from '@pages/realizations/realizations.component';
import { GuideComponent } from '@pages/guide/guide.component';
import { AboutUsComponent } from '@pages/about-us/about-us.component';
import { ContactComponent } from '@pages/contact/contact.component';
import { ExternalBaranskiComponent } from '@pages/offer/external-doors/baranski/baranski.component';
import { ExternalDallasComponent } from '@pages/offer/external-doors/dallas/dallas.component';
import { ExternalKMTComponent } from '@pages/offer/external-doors/kmt/kmt.component';
import { ApartmentInternalBaranskiComponent } from '@pages/offer/apartment-internal-doors/baranski/baranski.component';
import { ApartmentInternalDallasComponent } from '@pages/offer/apartment-internal-doors/dallas/dallas.component';
import { InternalBaranskiComponent } from '@pages/offer/internal-doors/baranski/baranski.component';
import { InternalDallasComponent } from '@pages/offer/internal-doors/dallas/dallas.component';
import { InternalFrenchComponent } from '@pages/offer/internal-doors/french/french.component';
import { InternalJagdorJagrasComponent } from '@pages/offer/internal-doors/jagdor-jagras/jagdor-jagras.component';
import { InternalOldFrameComponent } from '@pages/offer/internal-doors/old-frame/old-frame.component';
import { InternalVosterComponent } from '@pages/offer/internal-doors/voster/voster.component';
import { InternalDreComponent } from '@pages/offer/internal-doors/dre/dre.component';
import { ApartmentInternalFireproofComponent } from '@pages/offer/apartment-internal-doors/fireproof/fireproof.component';
import { LoftLoftComponent } from '@pages/offer/loft-doors/loft/loft.component';
import { LoftGlassComponent } from '@pages/offer/loft-doors/glass/glass.component';
import { LoftVestibuleComponent } from '@pages/offer/loft-doors/vestibule/vestibule.component';
import { HandlesBoardsBoardsComponent } from '@pages/offer/handles-boards/boards/boards.component';
import { HandlesBoardsHandlesComponent } from '@pages/offer/handles-boards/handles/handles.component';
import { SlidingGlassComponent } from '@pages/offer/sliding-doors/glass/glass.component';
import { SlidingWoodenComponent } from '@pages/offer/sliding-doors/wooden/wooden.component';
import { SlidingFoldingComponent } from '@pages/offer/sliding-doors/folding/folding.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

registerLocaleData(localePl, 'pl');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    MainPageComponent,
    HandlesBoardsComponent,
    InternalDoorsComponent,
    ExternalDoorsComponent,
    ApartmentInternalDoorsComponent,
    LoftDoorsComponent,
    HiddenDoorsComponent,
    SlidingDoorsComponent,
    ShowersComponent,
    CataloguesComponent,
    RealizationsComponent,
    GuideComponent,
    AboutUsComponent,
    ContactComponent,
    ExternalBaranskiComponent,
    ExternalDallasComponent,
    ExternalKMTComponent,
    ApartmentInternalBaranskiComponent,
    ApartmentInternalDallasComponent,
    InternalBaranskiComponent,
    InternalDallasComponent,
    InternalFrenchComponent,
    InternalJagdorJagrasComponent,
    InternalOldFrameComponent,
    InternalVosterComponent,
    InternalDreComponent,
    ApartmentInternalFireproofComponent,
    LoftLoftComponent,
    LoftGlassComponent,
    LoftVestibuleComponent,
    HandlesBoardsBoardsComponent,
    HandlesBoardsHandlesComponent,
    SlidingGlassComponent,
    SlidingWoodenComponent,
    SlidingFoldingComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
