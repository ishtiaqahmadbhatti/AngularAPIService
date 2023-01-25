import { Component } from '@angular/core';
import { DummyapidataService } from 'src/app/Shared/dummyapidata.service';

@Component({
  selector: 'app-dummyapidata',
  templateUrl: './dummyapidata.component.html',
  styleUrls: ['./dummyapidata.component.css'],
  providers: [DummyapidataService]
})
export class DummyapidataComponent {
  myApiData:any;
  constructor(private data:DummyapidataService){}
  ngOnInit(){
    this.data.getApiData().subscribe(respose =>{
      this.myApiData = respose;
    })
  }
}
