import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './layout/container/container.component';
import { ChatBoxModule } from './shared/chat-box/chat-box.module';
import { UserAccessModule } from './user-access/user-access.module';

@NgModule({
  declarations: [AppComponent, ContainerComponent],
  imports: [BrowserModule, AppRoutingModule, UserAccessModule, ChatBoxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
