import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { IUser } from '../../models/user.model';
import { AuthApiService } from '../../services/auth-api/auth-api.service';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.css'
})
export class PageContainerComponent implements OnInit {

  constructor (private router: Router, private route: ActivatedRoute, private auth: AuthApiService) {}

  paths = ['tables','table-editor','order-history'];
  currentPath : string = '/tables';

  user : IUser | undefined;

  ngOnInit(): void {
    this.currentPath = this.router.routerState.snapshot.url;
    this.router.events.subscribe(event => (event instanceof NavigationStart) ? this.currentPath=event.url : null);
    this.auth.getUser().subscribe(data => this.user = data.user);
  }


  parseName (path: string) {
    return path.split("-").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
  }
  isSelected (path: string) {
    return this.currentPath.slice(1) === path
  }

}