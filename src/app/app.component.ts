import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public routes: SelectItem[];
  public selectedRoute: string;

  constructor(
    private router: Router,
  ) {
    this.routes = [
      { label: 'Table', value: '/primeNgTable' },
      { label: 'Table', value: '/primeNgTable2' },
    ];

    this.selectedRoute = this.routes.find(Boolean).value;
    this.onSelectChange(this.selectedRoute);
  }

  onSelectChange(value: string) {
    this.router.navigate([value]);
  }
}
