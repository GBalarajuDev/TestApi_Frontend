import { Component } from '@angular/core';
import { questionPaper } from '../Paper1';
import { Paper1Service } from '../paper1.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  paper1:questionPaper[]

  constructor(private service: Paper1Service){}

  ngOnInit(){
    this.service.getQuestionPapers().subscribe(data=>this.paper1=data)
  }

}
