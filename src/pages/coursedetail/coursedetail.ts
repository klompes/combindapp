import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';

/**
 * Generated class for the CoursedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coursedetail',
  templateUrl: 'coursedetail.html',
})
export class CoursedetailPage {
  //รับค่าตัวแปร cid

  getcid:number; // รับค่าตัวแปร cid
  baseUrl:string; //
  cdetail:any;   //เก็บข้อมูลที่ได้จาก json
  responseNotfound: any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams ,
    public webService: WebapiServiceProvider) {
      this.getcid = navParams.get('cid');
  }

  ionViewDidLoad() {
    this.webService.getData("feed_course_detail.php?cid="+this.getcid).then((result) => {
      console.log(result);
      this.cdetail = result;
    }, (error) => {
      this.responseNotfound = "มีบางอย่างผิดพลาดในการดึงข้อมูลจาก Server";
      console.log(error);
    });
  }

}
