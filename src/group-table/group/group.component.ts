import {Component,  OnInit} from '@angular/core';
import {NodeService} from '../nodeservice';
import {TreeNode} from 'primeng/api';
import {TreeDragDropService} from 'primeng/api';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  providers: [TreeDragDropService]
})
export class GroupComponent implements OnInit {
  public files: TreeNode[] = [];
  public selectedFile:TreeNode = {};
  private node:unknown;

  constructor(private nodeService: NodeService,private messageService: MessageService) {
  }

  public ngOnInit() {
    this.files = this.nodeService.getTemplateFiles().data;
  }


  public nodeSelect(event:any) {
    console.log('selectedFile - ',this.selectedFile)
    console.log('event -', event);
    this.messageService.add({severity: 'info', summary: 'Node Selected', detail: event.node.label});
  }

  public nodeUnselect(event:any) {
    console.log('selectedFile - ',this.selectedFile)
    this.messageService.add({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
  }

  public dragStart(event:any){
    console.log('event - ',event)
  }
}


