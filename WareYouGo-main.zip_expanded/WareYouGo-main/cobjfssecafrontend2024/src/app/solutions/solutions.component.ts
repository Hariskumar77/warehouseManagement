import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {
  title="Solutions"
  desc="Inventory management systems streamline processes for businesses. Key solutions include real-time tracking, efficient order management, demand forecasting, supplier management, optimized warehouse operations, insightful reporting, and seamless system integration. These systems enhance inventory visibility, reduce stockouts, and improve decision-making. Choose a solution aligned with your organization’s needs and growth goals ."

  constructor() { }

  ngOnInit() {
  }

}
