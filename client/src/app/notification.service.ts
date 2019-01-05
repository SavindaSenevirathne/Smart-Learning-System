import { Injectable } from '@angular/core';


declare var $: any; 

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  showNotification(type , message ) {
    // const type = ['', 'info', 'success', 'warning', 'danger'];

    // var color = Math.floor((Math.random() * 4) + 1);
    $.notify({
      icon: "pe-7s-note2",
      message: message
    }, {
        type: type,
        allow_dismiss: true,
        timer: 1000,
        placement: {
          from: 'top',
          align: 'right'
        }
      });
  }

}
