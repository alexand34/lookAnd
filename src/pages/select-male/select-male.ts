import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalCameraComponent } from "../../components/modal-camera/modal-camera";
//import BackgroundColorImg from "../../assets/imgs/BackgroundColorImg";
/**
 * Generated class for the SelectMalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-male',
  templateUrl: 'select-male.html',
})
export class SelectMalePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectMalePage');
  }



  openModal() {
    let modal = this.modalCtrl.create(ModalCameraComponent, {image: "https://static4.cilory.com/273124-large_default/nologo-navy-casual-shirt.jpg"} );
    modal.present();
  }
}
