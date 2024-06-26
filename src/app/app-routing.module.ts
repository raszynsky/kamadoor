import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'oferta',
    children: [
      {
        path: 'drzwi-wewnetrzne',
        children: [
          {
            path: '',
            component: InternalDoorsComponent,
          },
          {
            path: 'baranski',
            component: InternalBaranskiComponent,
          },
          {
            path: 'dallas',
            component: InternalDallasComponent,
          },
          {
            path: 'dre',
            component: InternalDreComponent,
          },
          {
            path: 'francuskie',
            component: InternalFrenchComponent,
          },
          {
            path: 'jagdor-jagras',
            component: InternalJagdorJagrasComponent,
          },
          {
            path: 'stara-metalowa-oscieznica',
            component: InternalOldFrameComponent,
          },
          {
            path: 'voster',
            component: InternalVosterComponent,
          },
        ],
      },
      {
        path: 'drzwi-zewnetrzne',
        children: [
          {
            path: '',
            component: ExternalDoorsComponent,
          },
          {
            path: 'baranski',
            component: ExternalBaranskiComponent,
          },
          {
            path: 'dallas',
            component: ExternalDallasComponent,
          },
          {
            path: 'kmt',
            component: ExternalKMTComponent,
          },
        ],
      },
      {
        path: 'drzwi-wejsciowe-do-mieszkania',
        children: [
          {
            path: '',
            component: ApartmentInternalDoorsComponent,
          },
          {
            path: 'baranski',
            component: ApartmentInternalBaranskiComponent,
          },
          {
            path: 'dallas',
            component: ApartmentInternalDallasComponent,
          },
          {
            path: 'przeciwpozarowe',
            component: ApartmentInternalFireproofComponent,
          },
        ],
      },
      {
        path: 'drzwi-loftowe-drzwi-szklane',
        children: [
          {
            path: '',
            component: LoftDoorsComponent,
          },
          {
            path: 'drzwi-loftowe',
            component: LoftLoftComponent,
          },
          {
            path: 'drzwi-szklane',
            component: LoftGlassComponent,
          },
          {
            path: 'drzwi-szklane-do-wiatrolapu',
            component: LoftVestibuleComponent,
          },
        ],
      },
      {
        path: 'drzwi-ukryte',
        component: HiddenDoorsComponent,
      },
      {
        path: 'drzwi-przesuwne',
        children: [
          {
            path: '',
            component: SlidingDoorsComponent,
          },
          {
            path: 'szklane',
            component: SlidingGlassComponent,
          },
          {
            path: 'drewniane',
            component: SlidingWoodenComponent,
          },
          {
            path: 'lamane-skladane',
            component: SlidingFoldingComponent,
          },
        ],
      },
      {
        path: 'scianki-prysznicowe-kabiny-prysznicowe',
        component: ShowersComponent,
      },
      {
        path: 'klamki-do-drzwi-listwy-przypodlogowe',
        children: [
          {
            path: '',
            component: HandlesBoardsComponent,
          },
          {
            path: 'listwy',
            component: HandlesBoardsBoardsComponent,
          },
          {
            path: 'klamki',
            component: HandlesBoardsHandlesComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'katalogi',
    component: CataloguesComponent,
  },
  {
    path: 'realizacje',
    component: RealizationsComponent,
  },
  {
    path: 'poradnik',
    component: GuideComponent,
  },
  {
    path: 'o-nas',
    component: AboutUsComponent,
  },
  {
    path: 'kontakt',
    component: ContactComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
