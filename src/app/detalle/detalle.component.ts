import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LugaresService} from '../services/lugares.service';



@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {

  id=null;
  lugar:any = {};
	constructor (private route: ActivatedRoute, private lugaresService: LugaresService){

		this.id = this.route.snapshot.params['id'];
		this.lugaresService.getLugar(this.id)
			.subscribe((lugar)=>{
				this.lugar=lugar;
				console.log(this.lugar.lat);
				console.log(this.lugar.lng);
			});
		// this.lugar=this.lugaresService.buscarLugar(this.id);
		// console.log(lugaresService.buscarLugar(this.id));
	}  
	
}


