
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-crush',
  templateUrl: './crush.component.html',
  styleUrls: ['./crush.component.css']
})
export class CrushComponent implements OnInit {

  genero: string;
  link:string;
  mensaje:string;
  botonNo: any;
  top: string;
  left: string;
  constructor(private rutaActivada: ActivatedRoute) {
  }

  desencriptar(){
    this.genero= this.rutaActivada.snapshot.paramMap.get("genero")+"=="
    this.genero= (atob(this.genero)==="0")?"Novio":(atob(this.genero)==="1")?"Novia":"Pareja";
    this.link= this.rutaActivada.snapshot.paramMap.get("url")+"=="
    this.link= atob(this.link)
    this.mensaje= this.rutaActivada.snapshot.paramMap.get("mensaje")
    this.mensaje= atob(this.mensaje)

    console.log(this.link)

  }

  ngOnInit(): void {
    this.desencriptar()
  }

  eventmousemove(event: any) {
    let x = Math.round(Math.random() * 90)
    let y = Math.round(Math.random() * 90)
    this.left = x + "%";
    this.top = y + "%";
  }

}
