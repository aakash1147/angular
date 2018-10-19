import { Injectable } from "@angular/core";
import { NotifierService } from "angular-notifier";

@Injectable ({
  providedIn: 'root',
})

export class notificationService {
  public notifier;



  constructor (notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  get_Notification (type, message) {
    this.notifier.show( {
      type: type,
      message: message,

    } );
  }
}
