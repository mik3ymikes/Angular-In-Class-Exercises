import { Component } from '@angular/core';

@Component({
  selector:'app-article',
  templateUrl:"./article.component.html"
})


export class articleComponent{
  title:string="whatever you want"
  content:string="some content goes here"
  isTechRelated:boolean=true

  getColor(){
    return this.isTechRelated===true?"blue":"yellow";
  }


}
