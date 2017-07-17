import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';

import { HeaderMainComponent } from './header-main/header-main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderContentComponent } from './header-content/header-content.component';
import { ViewStoriesComponent } from './view-stories/view-stories.component';
import { StoryComponent } from './story/story.component';
import { ShareStoryComponent } from './share-story/share-story.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderMainComponent,
    FooterComponent,
    HeaderContentComponent,
    ViewStoriesComponent,
    StoryComponent,
    ShareStoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
