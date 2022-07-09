import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})

export class BindingComponent {
  constructor(){
   
   
  }
  
  

  isHidden:boolean = false;
  imgClassName: string = 'container d-none'
  inputClassName: string = 'input-group mb-3 d-none'

  image: {url:string; alt:string; hidden: boolean} = {
    url: 'https://cdn.pixabay.com/photo/2017/04/10/15/04/flowers-2218771_960_720.jpg',
    alt: 'Japan',
    hidden: this.isHidden
  };
 
  
  
  toogle(){
      if(this.isHidden == false){
        this.isHidden = !this.isHidden
        this.imgClassName ='container d-block'
        this.inputClassName = 'input-group mb-3'
        
        
      }
      else {
        this.imgClassName ='container d-none'
        this.inputClassName = 'input-group mb-3 d-none'
        this.isHidden = !this.isHidden
      }
      
      
 }    

  

}
