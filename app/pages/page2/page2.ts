import {Page, NavController} from 'ionic-framework/ionic';
import {Chats} from '../../services/chats'
import {Detail} from '../detail/detail'
@Page({
  templateUrl: 'build/pages/page2/page2.html',
})
export class Page2 {
  messages = [];
  constructor(
    public chats: Chats,
    public nav: NavController
  ) {
    this.messages = chats.all()
  }

  pushDetail(message){
    this.nav.push(Detail, {
      'message': message
    });
  }
}
