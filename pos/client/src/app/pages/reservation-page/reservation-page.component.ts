import { Component, OnInit } from '@angular/core';
import { IReservation, ReservationInterface } from '../../models/reservation.model';
import { ReservationService } from '../../services/reservation.service';
import { TableService } from '../../services/table.service';
import { ITable } from '../../models/table.model';
import { IUser } from '../../models/user.model';
import { AuthApiService } from '../../services/auth-api/auth-api.service';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrl: './reservation-page.component.css'
})
export class ReservationPageComponent implements OnInit {
  
  user: IUser | undefined;
  userId: number | undefined;
  restaurantId: number | null = null;
  
  tables: ITable[] = [];
  reservationList: ReservationInterface[] | null = null;
  todaysReservationList: ReservationInterface[] | null = null;
  tableList: ITable[] | null = null;
  currentDate: number = 1;
  parsedDate: string | null = null;

  constructor(private reservationService: ReservationService, private tableService: TableService, private auth: AuthApiService){};

  ngOnInit(): void {

    this.auth.getUser().subscribe(data => {
      this.user = data.user;
      this.userId = this.user.employeeInformation.position.employeeId;
      this.restaurantId = this.user.employeeInformation.restaurantId;
      this.tableService.getAllTables().subscribe((data) =>{
        this.tables = data;
        this.reservationService.getAllReservationsForToday(this.restaurantId).subscribe(data => {
          this.todaysReservationList = data;
          console.log('Todays Reservation List: ', this.todaysReservationList);
          console.log('Current time is', Date.now());
        })
        this.reservationService.getAllReservations(this.restaurantId).subscribe(data => {
          this.reservationList = data;
          console.log('All Reservations are: ', this.reservationList);
        })
      })
    });

    console.log('Reservations are: ', this.reservationList);
    this.tableService.getAllTables().subscribe(data => this.tableList = data);
    this.currentDate = Date.now();
    console.log(new Date(this.currentDate).toDateString);
  }

  getTableName(tableId: string) {
    if (this.tableList) {
      const foundTable = this.tableList.find(obj => obj._id === tableId);
      if(foundTable) return foundTable.name;
    }
    return;
  }

  // dateFormatter(unixTime: number) {
  //   const date = new Date(unixTime);
  //   const formattedDate = `${this.padZero(date.getDate())}-${this.padZero(date.getMonth() + 1)}-${date.getFullYear()} ${this.padZero(date.getHours())}:${this.padZero(date.getMinutes())}:${this.padZero(date.getSeconds())}`;
  //   return formattedDate;
  // }

  formatDateToString(date: Date): string {
    const formattedDate = new Date(date).toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'medium',
      timeZone: 'GMT'
    });
    console.log('formatted date is: ', formattedDate);
    return formattedDate;
  };

  getDate(date: Date): string {
    const formattedDate = new Date(date).toLocaleString('en-US', {
      dateStyle: 'long',
      // timeStyle: 'medium',
      timeZone: 'GMT'
    });
    console.log('formatted date is: ', formattedDate);
    return formattedDate;
  };

  padZero(number: number) {
    return number < 10 ? `0${number}` : number;
  }

  handleStatusChange(data: ReservationInterface) {
    data.status = 'no-show';
    console.log('Table is: ', this.reservationList);
    this.reservationService.updateReservation(data);
  }

  
}
