import {Page, NavParams} from 'ionic-framework/ionic';
import {Injectable} from 'angular2/core'
@Injectable()
@Page({
    templateUrl: 'build/pages/detail/detail.html'
})
export class Detail {
    message = this.params.get('message')
    constructor(
        public params: NavParams
    ) {}
}
