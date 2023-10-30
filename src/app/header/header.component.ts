import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ticketType:string='';
  quality:number=0;
  handleTicket(event:any){
    this.ticketType=event.target.value
    console.log(this.ticketType);
    
  }
  handlequality(event:any){
    this.quality=event.target.value
    console.log(this.quality);
    
  }

}
