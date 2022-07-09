import { Component } from '@angular/core';
import { BindingComponent }  from './component/binding/binding.component';
import { AppData } from './AppData';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'royal-crm';
  data =  new BindingComponent();
  altdata = new AppData('')
  constructor(){
   
   
  }
  altVal: String = this.data.image.alt

  

}

