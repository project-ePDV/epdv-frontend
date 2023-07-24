import { Component, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() title!: string;

  constructor(private menuCtrl: MenuController) {}
  
  openMenu() {
    this.menuCtrl.enable(true, 'main');
    this.menuCtrl.open('main');
  }
}
