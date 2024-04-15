import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  title='Contact Us'
  desc='Have a question? Need assistance? We\'re here to help! Get in touch with us using the contact information below'

  constructor() { }

  ngOnInit() {
  }

}
