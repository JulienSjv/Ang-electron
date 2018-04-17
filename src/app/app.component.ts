import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _electronService: ElectronService) {}   // DI
  
  launchWindow() {
    this._electronService.shell.openExternal('https://coursetro.com');
  }

  launchNotif() {
    let myNotification = new Notification('Title', {
      body: 'Test de notification',
      icon: 'assets/favicon.ico'
    })
    myNotification.onclick = () => {
      console.log('Notification clicked')
    }
    
  }

 

}
