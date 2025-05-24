import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewcomponetComponent } from './newcomponet/newcomponet.component';
import { ReversePipe } from './reverse.pipe';
import { ChangeColorDirective } from './change-color.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NewcomponetComponent,ReversePipe, ChangeColorDirective, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{


  constructor(private _service: DataService){}
  
  title = 'newapplicationh';
  message = "Message from parent component"
  reversepipe = 'Himanshu'

  inputvalue:string = '';
  itemList : string[]=[];

  messagefromservice ='';

  addItem(){
    if(this.inputvalue.trim()){
      this.itemList.push(this.inputvalue.trim());
      this.inputvalue = ''
    }
  }

  deleteItem(index:number){
    this.itemList.splice(index, 1);
  }

  ngOnInit() {
    this.messagefromservice = this._service.getMessage();
  }
  
}
