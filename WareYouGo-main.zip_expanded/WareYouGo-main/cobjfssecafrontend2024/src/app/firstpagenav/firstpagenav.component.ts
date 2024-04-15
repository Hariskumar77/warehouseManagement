import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstpagenav',
  templateUrl: './firstpagenav.component.html',
  styleUrls: ['./firstpagenav.component.css']
})
export class firstpagenavComponent implements OnInit {

  data1='About Us'
  data2='Contact Us'


  constructor() { }

  ngOnInit() {
  }

}
