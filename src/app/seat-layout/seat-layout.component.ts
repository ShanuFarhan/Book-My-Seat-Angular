import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-seat-layout',
  templateUrl: './seat-layout.component.html',
  styleUrls: ['./seat-layout.component.css']
})
export class SeatLayoutComponent {
  stringRef = String;
  @Input() ticketType:string = ''
  @Input() quality:number=0
  // ticketNumber: string = '';
  // SeatType:string='';
  selectedSeats: number = 0;
  seats: any[] = []; 
  layout:number[][] = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 0, 0, 0, 64, 65, 66, 67, 68, 69, 70, 71, 72],
    [73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 0, 0, 0, 86, 87, 88, 89, 90, 91, 92, 93, 94],
    [95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107,0, 0, 0, 108, 109, 110, 111, 112, 113, 114, 115, 116],
    [117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 0, 0, 0, 130, 131, 132, 133, 134, 135, 136, 137, 138],
    [139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 0, 0, 0, 152, 153, 154, 155, 156, 157, 158, 159, 160],
    [161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 0, 0, 0, 174, 175, 176, 177, 178, 179, 180, 181, 182],
    [183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 0, 0, 0, 197, 198, 199, 200, 201, 202, 203, 204, 205],
    [206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 0, 0, 0, 219, 220, 221, 222, 223, 224, 225, 226, 227],
    [228,229,230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 0,0,0, 241, 242, 243, 244, 245, 246, 247, 248, 249],
  ];
  constructor(){
    this.seats = this.layout.map((item, index) =>
    item.map((data) => ({
      id: data,
      isZero: data,
      isSelected: data===0,
      isBooked: false,
      type: index > 1 ? 'Standard' : 'Premium',
  }))
    )}
    unselection(arr:any){
      for(let i=0;i<arr.length;i++){
          for(let j=0;j<arr[i].length;j++){
            // if(arr[i]==0){
            //   arr[i][j].isSelected=true
            // }
            arr[i][j].isSelected=false;
          }
      }
      return arr;
    }
    selectSeat(seatId:number,seat:any){
      let unselected=this.unselection(this.seats)
      if(this.quality<0){
        alert("Select ticket quantity")
        return
      }
      if(seat.type!==this.ticketType){
          alert("Select the seat type"+this.ticketType)
          return
      }
      const updatedSeats = unselected.map((row:any) => {
        return row.map((currentSeat:any) => {
          if (currentSeat.id === seatId && !currentSeat.isBooked) {
            const seatIndex = row.indexOf(currentSeat);
            let selectedCount = 0;
    
            row.forEach((s:any) => {
              if (s.isSelected) {
                selectedCount++;
              }
            });
    
            if (selectedCount < this.quality) {
              for (let i = seatIndex; i < row.length; i++) {
                if (!row[i].isBooked && !row[i].isSelected) {
                  row[i].isSelected = true;
                  selectedCount++;
                }
                if (selectedCount >= this.quality) {
                  break;
                }
              }
            }
          }
          return currentSeat;
          })
      })
    
      this.seats= updatedSeats;
      this.selectedSeats=this.selectedSeats+1
    }
      handleBooking(){
        if(this.quality===0){
          alert("Select ticket quantity")
        }
      this.seats=this.seats.map((row)=>{
        return row.map((seat:any)=>{
          if(seat.isSelected){
            return {...seat, isBooked:true,isSelected:false}
          }else{
            return seat
          }
        })
      })
      alert(`Booked successfully ${this.ticketType} ${this.quality}`)
      this.selectedSeats=0;
    }
  }
