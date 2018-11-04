import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
// Modals component
import { ModalCameraComponent } from '../../components/modal-camera/modal-camera';

@Component({
    selector: 'page-hello-ionic',
    templateUrl: 'hello-ionic.html',
})
export class HelloIonicPage {
    constructor(public modalView: ModalController) {}

    openModalWindow() {
        let _modal = this.modalView.create(ModalCameraComponent, { image: 'assets/imgs/backgroundImg.jpg' });
        _modal.present();
    }
}
