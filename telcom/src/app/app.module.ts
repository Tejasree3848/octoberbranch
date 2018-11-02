import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileplanComponent } from './mobileplan/mobileplan.component';
import { MobileplanfooterComponent } from './mobileplanfooter/mobileplanfooter.component';
import { MobileplancontentComponent } from './mobileplancontent/mobileplancontent.component';
import { MobileadivorsComponent } from './mobileadivors/mobileadivors.component';
import { ShowQuoteComponent } from './show-quote/show-quote.component';
import { ShowhistoryComponent } from './showhistory/showhistory.component';
import { GridhistoryComponent } from './gridhistory/gridhistory.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileplanComponent,
    MobileplanfooterComponent,
    MobileplancontentComponent,
    MobileadivorsComponent,
    ShowQuoteComponent,
    ShowhistoryComponent,
    GridhistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
