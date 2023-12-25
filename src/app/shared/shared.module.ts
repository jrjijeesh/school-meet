import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxModule } from './chat-box/chat-box.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ChatBoxModule],
  exports: [ChatBoxModule]
})
export class SharedModule {}
