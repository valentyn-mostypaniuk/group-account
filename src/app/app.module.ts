import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GroupComponent } from '../group-table/group/group.component';
import {TreeModule} from 'primeng/tree';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {ContextMenuModule} from 'primeng/contextmenu';
import { NodeService } from '../group-table/nodeservice';
import { HttpClientModule } from '@angular/common/http';
import {GroupTreeTableComponent} from "../group-table/group-tree-table/group-tree-table.component";
import {TreeTableModule} from "primeng/treetable";
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import {MessageService, TreeDragDropService } from 'primeng/api';
import {DragDropModule} from "primeng/dragdrop";
import {PanelModule} from "primeng/panel";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    GroupComponent,
    GroupTreeTableComponent

  ],
  imports: [
    BrowserModule,
    TreeModule,
    HttpClientModule,
    ToastModule,
    ButtonModule,
    DialogModule,
    ContextMenuModule,
    TreeTableModule,
    VirtualScrollerModule,
    DragDropModule,
    PanelModule,
    InputTextModule,
  ],
  providers: [NodeService, TreeDragDropService, TreeDragDropService, MessageService]
})
export class AppModule { }
