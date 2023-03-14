import {Component, ViewChild,Input,
  OnInit,
  AfterViewChecked,ChangeDetectorRef
 } from '@angular/core';
import {NodeService} from '../nodeservice';
import {MessageService, TreeDragDropService, TreeNode} from 'primeng/api';
import {TreeTableModule} from 'primeng/treetable';

@Component({
  selector: 'app-group-tree-table',
  templateUrl: './group-tree-table.component.html',
  styleUrls: ['./group-tree-table.component.css'],
  providers: [TreeDragDropService,MessageService]
})
export class GroupTreeTableComponent implements OnInit,
  AfterViewChecked
 {

  @ViewChild('tt') treeTable: {
    filterGlobal: (arg0: any, arg1: string) => any; } | undefined;


  public files: TreeNode[] = [];
  public  cols: any[] = [];

  private searchNode = [];
  private selectedNode:any;

  constructor(private nodeService: NodeService, private cdRef: ChangeDetectorRef  ) {
  }

  public ngOnInit() {
    this.files = this.nodeService.getTemplateTableFiles().data;

    this.cols = [
      { field: 'name', sum:'sum'},
      // { field: 'sum' },
      // { field: 'type' }
    ];
  }

 public ngAfterViewChecked() {

    console.log(`ngAfterViewChecked`);


    // @ts-ignore
   //  if(this.treeTable?.filteredNodes){
   //    console.log('start if');
   //
   //    // @ts-ignore
   //    this.treeTable?.filteredNodes.map((item)=>{
   //    return item.expanded = true;
   //    });
   //
   //    // @ts-ignore
   //    // console.log(`this.treeTable?.filteredNodes - `,this.treeTable?.filteredNodes);
   //  }
   //
   // this.cdRef.detectChanges();
  }

 public drag(event:any,rowNode:any ) {
    // console.log("drag - ",event);
   // console.log("drag rowNode - ",rowNode);
  }


  // public dragEnter(event:any){
  //   console.log("dragEnter - ",event);
  // }

  public drop(event:any,rowNode:any) {
    const copyFiles = [...this.files];

    const parentId = this.selectedNode.parent.parent.key;
    const index = copyFiles.findIndex(item => item.key === parentId);
    const itemIndex = this.findIndexItemGroup();

    // @ts-ignore
    const deleteChild = copyFiles[index].children[0].children.splice(itemIndex, 1);


    const parentIdDrop = rowNode.parent.key;
    const indexDrop = copyFiles.findIndex(item=>item.key === parentIdDrop);

    // @ts-ignore
    copyFiles[indexDrop].children[0].children.push({data:deleteChild[0].data});

    this.files = [...copyFiles];
  }

 public dragStart(event:any, rowNode:any){
   // console.log('dragStart - ',event);
   // console.log('dragStart rowData- ',rowNode);
   this.selectedNode = rowNode;
 }

 public dragEnd(event:any, rowData:any){
   // console.log('dragEnd - ',event);
   // console.log('dragEnd rowData- ',rowData);
 }


 private findIndexItemGroup(){

    const childrenArray = [...this.selectedNode.node.parent.children];
    const selectedId = this.selectedNode.node.data.id;

    return childrenArray.findIndex(item => item.data.id === selectedId);
 }

 public assign(rowNode:any){
   console.log('click btn - ',rowNode);
 }

 public filterGlobal(event:any){

   // @ts-ignore
   this.treeTable.filterGlobal(event.target?.value,'contains');
  }
}


