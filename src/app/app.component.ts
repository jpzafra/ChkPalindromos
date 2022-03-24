import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  /*

¿ES UN PALÍNDROMO?

Fecha publicación enunciado: 21/03/22
Fecha publicación resolución: 28/03/22
Dificultad: MEDIA

Enunciado: Escribe una función que reciba un texto y retorne verdadero o falso (Boolean) según sean o no palíndromos.
Un Palíndromo es una palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda.
NO se tienen en cuenta los espacios, signos de puntuación y tildes.
Ejemplo: Ana lleva al oso la avellana.

Información adicional:
- Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
- Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
- Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
- Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.

  */

  title = 'ChkPalindromos';

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    string2chk: ''
  }

  chkPalindromo(){
    console.log('clicked Go')
    let output = this.initForm.string2chk;
    output = output.trim();
    output = output.replace(/\s+/g, '')  
    output = output.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    output = output.replace(/[^\w\-]+/g, '');
    output = output.toLowerCase()

    if (output===output.split("").reverse().join("")){
      console.log(this.initForm.string2chk + ' es un palindromo.')
    }
  }

  reset(){
    console.log('reset clicked', this.initForm)
    this.miFormulario.resetForm();
  }

}
