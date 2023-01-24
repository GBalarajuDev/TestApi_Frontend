import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { questionPaper } from '../Paper1';
import { Paper1Service } from '../paper1.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  obj:questionPaper;
  constructor(private service:Paper1Service, private route:ActivatedRoute){}
  ngOnInit(){
      
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.service.getById(id).subscribe(data=> this.obj=data)
  }
}

