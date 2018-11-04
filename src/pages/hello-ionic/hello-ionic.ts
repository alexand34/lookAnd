import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, Platform } from 'ionic-angular';
import { CameraPage } from '../../pages/camera/camera';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  @ViewChild(Nav) nav: Nav;

  page: {component: any };
  constructor(
    
  ) {
    this.page = { component: CameraPage }
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
   
    // navigate to the new page if it is not the current page
    // this.nav.setRoot(page.component);
  }

  // redirectToCameraPage(){
  //   this.nav.setRoot(CameraPage)
  // }
}
