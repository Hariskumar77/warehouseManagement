import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Import necessary form modules
import { LocationService } from '../location.service';
import { Location } from '../location.model'; // Adjust the import path for location model
 
@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.css']
})
export class UpdateLocationComponent implements OnInit {
  isFetched: boolean = false;
  locationForm: FormGroup;
  locationfetchform:FormGroup;
  locationDetails: Location;

  constructor(private fb: FormBuilder, private locationService: LocationService) {
    

    this.locationfetchform = this.fb.group({
      locationId: ['', Validators.required]
    });

    this.locationForm = this.fb.group({
      locationId: ['', Validators.required], // Add locationId control if needed
      description: ['', Validators.required],
      shelfId: ['', Validators.required],
      rackId: ['', Validators.required],
      length: ['', Validators.required],
      width: ['', Validators.required],
      height: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const locationId = this.locationfetchform.get('locationId').value;
    this.locationService.getLocation(locationId).subscribe(
      (location: Location) => {
        this.locationDetails = location;
        this.isFetched = true;
        this.populateForm();
      },
      error => {
        console.log('Error fetching location details: ', error);
        // Handle error accordingly
        alert("location Id is not valid");
      }
    );
  }

  populateForm(): void {
    this.locationForm.patchValue({
      locationId:this.locationDetails.locationId,
      description: this.locationDetails.description,
      shelfId: this.locationDetails.shelfId,
      rackId: this.locationDetails.rackId,
      length: this.locationDetails.length,
      width: this.locationDetails.width,
      height: this.locationDetails.height
    });
  }

  // Update location
onUpdate() {
  const updatedLocation: Location = this.locationForm.value; // Merge fetched location with updated form data
  console.log(updatedLocation);
  this.locationService.updateLocation(updatedLocation).subscribe(() => {
    console.log(updatedLocation)
    console.log("Location updated successfully");
    // Reset form and flags
    this.locationForm.reset();
    // this.isFetched = false;
  }, error => {
    console.error("Error updating location:", error);
  });
}



}



















//   locationForm: FormGroup; // Define FormGroup for the form
//   isFetched: boolean = false;
//   fetchedLocation: Location; // To store the fetched location data
 
//   constructor(private locationService: LocationService, private formBuilder: FormBuilder) {
//     // Initialize FormGroup in the constructor
//     this.locationForm = this.formBuilder.group({
//       description: ['', Validators.required], // Use form builder to define form controls
//       shelfId: ['', Validators.required],
//       rackId: ['', Validators.required],
//       length: ['', Validators.required],
//       width: ['', Validators.required],
//       height: ['', Validators.required]
//     });
//   }
 
//   ngOnInit() {
 
//   }
 
//   // Fetch location by ID
//   // onSubmit() {
    
//   //   //const locationId = this.locationForm.get('locationId').value; // Get the location ID from the form
//   //   //console.log(locationId);
//   //   // this.locationService.getLocation(locationId).subscribe((location: Location) => {
//   //   //   this.fetchedLocation = location; // Store fetched location
//   //     this.isFetched = true; // Set fetched flag
//   //     // Populate form with fetched data
//   //     // this.locationForm.patchValue({
//   //     //   description: location.description,
//   //     //   shelfId: location.shelfId,
//   //     //   rackId: location.rackId,
//   //     //   length: location.length,
//   //     //   width: location.width,
//   //     //   height: location.height
//   //     });
//   //   }, error => {
//   //     console.error("Error fetching location:", error);
//   //   });
//   // }

  

//   onSubmit() {
    
//     this.isFetched=true;
//   }
 
//   // Update location
//   onUpdate() {
//     const updatedLocation: Location = { ...this.fetchedLocation, ...this.locationForm.value }; // Merge fetched location with updated form data
//     this.locationService.updateLocation(updatedLocation).subscribe(() => {
//       console.log("Location updated successfully");
//       // Reset form and flags
//       this.locationForm.reset();
//       this.isFetched = false;
//     }, error => {
//       console.error("Error updating location:", error);
//     });
//   }
 
//   // Delete location
//   onDelete() {
//     const locationId = this.locationForm.get('locationId').value; // Get the location ID from the form
//     this.locationService.deleteLocation(locationId).subscribe(() => {
//       console.log("Location deleted successfully");
//       // Reset form and flags
//       this.locationForm.reset();
//       this.isFetched = false;
//     }, error => {
//       console.error("Error deleting location:", error);
//     });
//   }
// }