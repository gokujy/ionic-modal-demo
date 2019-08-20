import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalertPage } from '../modals/calert/calert.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CalertPage,
      cssClass: 'modalCss'
    });
    return await modal.present();
  }

}
