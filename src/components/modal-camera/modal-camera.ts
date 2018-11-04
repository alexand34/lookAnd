import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular'

/**
 * Generated class for the ModalCameraComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal-camera',
  templateUrl: 'modal-camera.html'
})
export class ModalCameraComponent {
  text: string;
  constructor(public modalView: ViewController) {
    console.log('Hello ModalCameraComponent Component');
    this.text = 'Hello World';
  }

  closeModal() {
    this.modalView.dismiss();
  }

}
