import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ConcertServiceService } from '../services/concert-service.service';
@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private concertService: ConcertServiceService) { }

  concertForm : FormGroup;
  concerts = [];

  nacional = [];
  internacional = [];

  idEdit:string;
  conCreate: Subscription;
  conDelete: Subscription;
  conAdd: Subscription;
  conUpdate: Subscription;

  ngOnInit() {
    this.loadConcerts();
    this.concertForm = this.formBuilder.group({
      enable:null,
      name:['',[Validators.required, Validators.minLength(3)]],
      stock:'',
      type: ['',[Validators.required]],
      urlImage:''
    });
  }

  
  loadConcerts(): void {
    this.concerts = [];
    this.conCreate = this.concertService.getConcerts().subscribe(res => {
      Object.entries(res).map((c:any) => this.concerts.push({id: c[0], ...c[1]}));
      this.nacional = this.concerts.filter(s => s.type === 'nacional');
      this.internacional = this.concerts.filter(s => s.type === 'internacional');

    })
  }

  onDelete(id: any) :void{
    this.conDelete = this.concertService.deleteConcert(id).subscribe(res => {
      this.loadConcerts();
    });
  }

  onAdd():void{
    this.conAdd = this.concertService.addConcert(this.concertForm.value).subscribe(res => {
      this.loadConcerts();
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );
  }

  onUpdate():void{
    this.conUpdate = this.concertService.updateProducts(this.idEdit, this.concertForm.value).subscribe(res => {
       console.log('RES',res);
      this.loadConcerts();
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );
  }

  onEdit(concert):void {
    this.concertForm.patchValue({

      enable: concert.enable,
      name: concert.name,
      stock: concert.stock,
      type: concert.type,
      urlImage: concert.urlImage

    });

    this.idEdit = concert.id;

  }

}