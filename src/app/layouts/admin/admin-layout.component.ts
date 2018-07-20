import { Component, OnInit, OnDestroy, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { NavItem, NavItemType } from '../../md/md.module';
import { Subscription } from 'rxjs/Subscription';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import 'rxjs/add/operator/filter';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import PerfectScrollbar from 'perfect-scrollbar';

declare const $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './admin-layout.component.html'
})

export class AdminLayoutComponent implements OnInit, AfterViewInit {
  public tecmicroBG: string;
  public tecmicroColor: string;

  private _router: Subscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
  url: string;
  location: Location;

  @ViewChild('sidebar') sidebar: any;
  @ViewChild(NavbarComponent) navbar: NavbarComponent;
  
  constructor( private router: Router, location: Location ) {
    this.location = location;
  }

  ngOnInit() {
    if (localStorage.getItem("tecmicro-sidebar-bg") == null) {
      localStorage.setItem("tecmicro-sidebar-bg", "black");
      this.tecmicroBG = "black";
    } else {
      this.tecmicroBG = localStorage.getItem("tecmicro-sidebar-bg");
    }

    if (localStorage.getItem("tecmicro-sidebar-color") == null) {
      localStorage.setItem("tecmicro-sidebar-color", "white");
      this.tecmicroColor = "white";
    } else {
      this.tecmicroColor = localStorage.getItem("tecmicro-sidebar-color");
    }

      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
      this.location.subscribe((ev:PopStateEvent) => {
          this.lastPoppedUrl = ev.url;
      });
       this.router.events.subscribe((event:any) => {
          if (event instanceof NavigationStart) {
             if (event.url != this.lastPoppedUrl)
                 this.yScrollStack.push(window.scrollY);
         } else if (event instanceof NavigationEnd) {
             if (event.url == this.lastPoppedUrl) {
                 this.lastPoppedUrl = undefined;
                 window.scrollTo(0, this.yScrollStack.pop());
             }
             else
                 window.scrollTo(0, 0);
         }
      });
      this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
           elemMainPanel.scrollTop = 0;
           elemSidebar.scrollTop = 0;
      });
      if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
          let ps = new PerfectScrollbar(elemMainPanel);
          ps = new PerfectScrollbar(elemSidebar);
      }
      this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
        this.navbar.sidebarClose();
      });

      
  }

  ngAfterViewInit() {
    this.runOnRouteChange();
  }

  runOnRouteChange(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      let ps = new PerfectScrollbar(elemMainPanel);
      ps = new PerfectScrollbar(elemSidebar);
      ps.update();
    }
  }

  isMac(): boolean {
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }

}
