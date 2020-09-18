import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AddProduct } from '../store/admin.actions'
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges{
  homeSubs: Subscription;
  total:number =0;
  hot: number=0;
  cold:number=0;
  constructor(private authService: AuthService,
    private store: Store<any>) { }

  public ngOnInit(): void {
    this.homeSubs = this.store.select(s => s.admin).subscribe(res => {
      this.total = res.total;
      this.hot = res.hot;
      this.cold = res.cold;
    });
   
  }

  ngOnChanges(){
    
  }

  public onLogout(): void {
    this.authService.logout();
  }

}