import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title="About Us"
  desc="Welcome to Ware-You-Go, your ultimate solution for streamlined inventory management.With years of experience in the industry, we understand the pain points that businesses face when it comes to managing their inventory. That's why we developed Ware-You-Go – a cutting-edge inventory management system designed to revolutionize the way you track, organize, and optimize your inventory.With Ware-You-Go, you can say goodbye to stockouts, overstocking, and manual errors. Our system empowers you to make informed decisions, minimize costs, and maximize efficiency – so you can focus on what matters most: growing your business."



  constructor() { }

  ngOnInit() {
  }

}
