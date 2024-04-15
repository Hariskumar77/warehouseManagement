import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Location } from '../location.model'
import { LocationService } from '../location.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css'],
  providers: [ LocationService ]
})
export class AddLocationComponent implements OnInit {
  locationForm: FormGroup
  location: Location

  ngOnInit() {
    this.location = new Location()
    this.locationForm = new FormGroup({
      'description': new FormControl(this.location.description, Validators.required),
      'length': new FormControl(this.location.length, Validators.required),
      'width': new FormControl(this.location.width, Validators.required),
      'height': new FormControl(this.location.height, Validators.required),
      // 'shelfId': new FormControl(this.location.shelfId, Validators.required),
      // 'rackId': new FormControl(this.location.rackId, Validators.required)
    });
  }

  constructor(private locationService: LocationService) {}

  onSubmit() {
    if (this.locationForm.valid) {
      this.location = Object.assign(this.location, this.locationForm.value);
      this.locationService.postLocation(this.location).subscribe(
        (value) => {
          alert("Location added with Id: " + value.locationId)
          console.log(value)
          window.location.reload()
        },
        (error) => {
          alert("Error occurred, check console")
          console.log(error)
        }
      )
    }
  }

}
