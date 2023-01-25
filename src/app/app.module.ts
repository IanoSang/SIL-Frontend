import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FilterPipe } from './filter.pipe';
import { ImageComponent } from './components/image/image.component';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { appRoutes} from "../routes";

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    GalleryComponent,
    FilterPipe,
    ImageComponent,
    ImageDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
