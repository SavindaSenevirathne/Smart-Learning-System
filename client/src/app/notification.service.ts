import { Injectable } from '@angular/core';


declare var $: any; 

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  showNotification(type , message ) {
    $.notify({
      icon: "pe-7s-note2",
      message: message
    }, {
        type: type,
        timer: 1000,
        placement: {
          from: 'top',
          align: 'right'
        }
      });
  }

}
