import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-site-navigation',
  templateUrl: './site-navigation.component.html',
  styleUrls: ['./site-navigation.component.scss']
})
export class AppSiteNavigationComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;

  mobileQuery: MediaQueryList;

  fillerNav = [
    { title: 'Latest', 'icon': 'add_alert' },
    { title: 'LIVE', 'icon': 'live_tv' },
    { title: 'Home', icon: 'home', url: '/member/home' },
    { title: 'Portals', icon: 'house', url: '/member/portals' },
    { title: 'Supplications', icon: 'healing' },
    { title: 'My Visits', icon: 'schedule' },
    { title: 'My Books', icon: 'library_books' },
    { title: 'My Videos', icon: 'video_library' },
    { title: 'My Events', icon: 'event_available' },
    { title: 'My Donations', icon: 'payments' },
    { title: 'Settings', icon: 'settings' },
    { title: 'About Us', icon: 'info' }
  ];

  fillerContent = [];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, public media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  menuClicked(isMenuOpened) {
    isMenuOpened? this.sidenav.open() : this.sidenav.close();
  }
}
