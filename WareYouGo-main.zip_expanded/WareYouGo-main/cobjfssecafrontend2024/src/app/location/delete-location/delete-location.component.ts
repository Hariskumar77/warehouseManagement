import { Component, OnInit } from '@angular/core';
import {LocationService} from "../location.service";
import {Location} from "../location.model";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-delete-location',
  templateUrl: './delete-location.component.html',
  styleUrls: ['./delete-location.component.css']
})
export class DeleteLocationComponent implements OnInit {
  location:Location;
  locationdeleteform: FormGroup;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationdeleteform = new FormGroup({
      locationId: new FormControl()
    });
  }

  onSubmit() {
    const locationId = this.locationdeleteform.get('locationId').value;
    this.locationService.getLocation(locationId).subscribe(
      (location)=>{
        this.location=location;
      this.locationService.deleteLocation(locationId).subscribe(
        () => {
          console.log('Location deleted successfully');
          window.location.replace("/product-inbound");
          // You can add further logic here, such as showing a success message or refreshing the list of locations
        });
      },
        (error) => {
          console.error('Error deleting location:', error);
          // Handle error - show error message, etc.
          alert("Location id is not valid")
        }
      );
      }
    
  }




















//   locations:Location[];
//  // newLocation: Location= { id: null, title: '', description: '' };
//   selectedLocation: Location = null;
//   constructor(private locationService:LocationService) { }

//   ngOnInit() {
//   }
//   OnDelete(id:number): void {
//     if (confirm('Are you sure you want to delete this task?')) {
//       this.locationService.deleteLocation(id)
//         .subscribe(() => {
//           // Task deleted successfully, you can perform any additional actions here
//           console.log('Location deleted successfully.');
//           this.locations = this.locations.filter(l => l.locationId !== id);
//                 if (this.selectedLocation && this.selectedLocation.locationId === id) {
//                     this.selectedLocation = null;
//                 }
//             });  
//           }
 
// }
// }
