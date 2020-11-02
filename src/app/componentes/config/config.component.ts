import {Router} from '@angular/router'
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  genero:string;
  link:string;
  mensaje:string=" ";
  generoEncriptado:string;
  linkEncriptado:string;
  mensajeEncriptado:string;
  constructor(private router:Router) { }

  encriptar(genero:string, link:string, mensaje:string){
    this.generoEncriptado= encodeURI(genero);
    this.linkEncriptado= encodeURIComponent(link);
    console.log(this.linkEncriptado)
    this.mensajeEncriptado=encodeURI(mensaje);
  }

  ngOnInit(): void {

    
  

    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Género de tu crush',
        input: 'radio',
        inputOptions: {'Mujer':'Mujer', 'Hombre':'Hombre', 'Indiferente':'Indiferente'},
        inputValidator: (value) => {
          if (!value) {
            return 'Selecciona alguno'
          }
        }
      },
      {
        title: 'Link canción o video a dedicar',
        text: 'Ingresa un link valido',
        input: 'url',
      },
      {
        title: '¿Quieres dejar un mensaje?',
        input: 'text',
        inputPlaceholder: 'Deja un linto mensaje aquí'
      }

    ]).then((result: any) => {
      if (result.value) {
        const answers:string[] = result.value
        this.genero=(answers[0]==='Hombre')?"0":(answers[0]==='Mujer')?"1":"-1";
        this.link=answers[1].substr(8);
        this.mensaje = answers[2]
        this.encriptar(this.genero, this.link, this.mensaje);
        Swal.fire({
          title: 'Todo listo, ¡comparte el link a tu crush!',
          confirmButtonText: '¡Crear link!'
        }).then((result: any) => {
          if (result.isConfirmed) {
            let url: string = `/crush/${this.generoEncriptado}/${this.linkEncriptado}/${this.mensajeEncriptado}`
            Swal.fire({
              title: 'Copia este link y compartelo',
              text: window.location.host + url
            }).then((result2: any) => {
              if (result2.isConfirmed) {
                this.router.navigate([url])
              }
              if (result2.dismiss) {
                window.location.reload()
              }
            })
          }
          if (result.dismiss) {
            window.location.reload()
          }
        })
      }
      if(result.dismiss){
        window.location.reload()
      }
    })
  }

}
