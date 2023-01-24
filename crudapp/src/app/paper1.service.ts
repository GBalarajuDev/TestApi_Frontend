import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { questionPaper } from './Paper1';

@Injectable({
  providedIn: 'root'
})
export class Paper1Service {

  baseUrl:string="http://localhost:3000/candidateDetails"
  constructor(private http: HttpClient) { }

  getQuestionPapers():Observable<questionPaper[]>{
    return this.http.get<questionPaper[]>(this.baseUrl)
  }

  getById(id:number):Observable<questionPaper>{
    return this.http.get<questionPaper>(this.baseUrl+"/"+id)
  }
  addQuestionPaper(obj:questionPaper){
    return this.http.post(this.baseUrl,obj)
  }
  updateQuestionPaper(obj:questionPaper,id:number){
    return this.http.put(this.baseUrl+"/"+id,obj)
  }
  deleteQuestionPaper(id:number){
    return this.http.delete(this.baseUrl+"/"+id)
  }


}
