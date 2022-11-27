import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  constructor(
    private shared: SharedService
  ) { }

  stations: any[];

  ngOnInit(): void {
    this.shared.get('stations').subscribe({
      next: ((response: any) => {
        this.stations = response?.stations; 
        console.log(this.stations)
      })
    })
  }

  showDialog(id: String, isEditing: boolean){

  }

  delete(id: String){

  }

}
