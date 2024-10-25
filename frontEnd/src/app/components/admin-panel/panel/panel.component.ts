import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'] 
})
export class PanelComponent {
  currentView: string = 'ordenes'; 

  setView(view: string) {
    this.currentView = view;
  }
}
