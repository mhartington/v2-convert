import {App, Platform} from 'ionic-framework/ionic';
import {Page1} from './pages/page1/page1';
import {Page2} from './pages/page2/page2';
import {Page3} from './pages/page3/page3';
import {Chats} from './services/chats';

@App({
  templateUrl: 'build/app.html',
  providers: [Chats]
})
export class MyApp {
    tab1Root = Page1;
    tab2Root = Page2;
    tab3Root = Page3;
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Do any necessary cordova or native calls here now that the platform is ready
    });
  }
}
