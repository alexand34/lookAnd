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
        let _modal = this.modalView.create(ModalCameraComponent, { image: 'https://static4.cilory.com/273124-large_default/nologo-navy-casual-shirt.jpg' });
        _modal.present();
    }
}
