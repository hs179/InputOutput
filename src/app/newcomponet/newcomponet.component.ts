import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newcomponet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newcomponet.component.html',
  styleUrl: './newcomponet.component.css'
})
export class NewcomponetComponent {
 @Input() childMessage:string=""
 @Input() items:string[] =[];
 @Output() onDelete =  new EventEmitter<number>()

 delete(index: number) {
  this.onDelete.emit(index);  
}

}
