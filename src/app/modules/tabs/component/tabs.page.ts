import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html'
})
export class TabsPage { 
  title: string = '';

  ionTabsChange(event: { tab: string }) {
    this.title = event.tab
  }
}
