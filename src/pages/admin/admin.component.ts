import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.template.html',
})
export class AdminPage {

  id: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
