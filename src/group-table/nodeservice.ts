import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/api';

@Injectable()
export class NodeService {

  constructor(private http: HttpClient) { }

  getFiles() {
    return this.http.get<any>('assets/files.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
  }

  getLazyFiles() {
    return this.http.get<any>('assets/files-lazy.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
  }

  public getTemplateFiles(){
    const arrFiles: TreeNode[]=[];

    for(let i=0; i < 100; i++){

     let testData:TreeNode = {
        label:`Group ${i}`,
        data: `Group Folder ${i}`,
        key: `node-key ${i}`,
        leaf: true,
        children: [{
          label: `Sub group ${i}`,
          data: "item Sub Group Folder",
          children: [{
            label: `Expenses ${i}`,
            data: `Expenses ${i}`,
          }]
        }]
      }

      arrFiles.push(testData)
    }
    return {
      'data':arrFiles
    }
  }



  public getTemplateTableFiles(){
    const arrFiles: TreeNode[]=[];

    for(let i=0; i < 5000; i++){

      let testData:TreeNode = {
        key:`node-key${i}`,
        "expanded": false,
        "data":{
          "name":`Documents ${i}`,
          "sum":10000,
          "type":"ParentFolder",
        },
        "children":[
          {
            "data":{
              "name":`Work ${i}`,
              "sum": 10000,
              "type":"Folder"
            },
            "children":[
              {
                "data":{
                  id:`Expenses_id${i}`,
                  "name":`${i} Expenses`,
                  "sum":5000,
                  "type":"Item-group"
                }
              },
              {
                "data":{
                  id:`Resume_id${i}`,
                  "name":`${i} Resume`,
                  "sum":5000,
                  "type":"Item-group"
                }
              }
            ]
          }
          ]
      }

      arrFiles.push(testData)
    }
    return {
      'data':arrFiles
    }
  }
}
