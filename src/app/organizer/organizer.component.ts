
import autoTable from 'jspdf-autotable';
import { Component, ElementRef, ViewChild } from '@angular/core';
import 'jspdf-autotable';
import { jsPDF } from 'jspdf';
import Swal from 'sweetalert2';


import html2canvas from 'html2canvas';
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent {
  @ViewChild('contenido', { static: false }) contenido!: ElementRef;
  colors: any[] = [
    "#9fc0ff",
    "#babcfa",
    "#b5f9c1",
    "#f8c4f9",
    "#c7fae7",
    "#ab9aea",
    "#d5b7f5",
    "#efc7fa",
    "#b1f7f5",
    "#fcd0d9",
    "#feeebd",
    "#fcfebd",
    "#defebd",
    "#c5febd",
    "#bdfedc",
    "#bdfef4",
    "#bdf8fe",
    "#eabdfe",
    "#bdeffe",
  ];
  inUse: any[] = [];
  semestres: any = [
    {
      nombre: 'PRIMER SEMESTRE',
      materias: [
        {
          nombre: 'ADMINISTRACIÓN GENERAL',
          docentes: [
            {
              id: 1, name: 'TORRICO OCAMPO ENRIQUE', group: '01', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 509' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 509' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 509' }
              ]
            },
            {
              id: 2, name: 'MOSCOSO FORONDA DAVID', group: '02', days: [
                { day: 'Martes', start: '14:15', end: '15:45', classRoom: 'E 208' },
                { day: 'Miércoles', start: '14:15', end: '15:45', classRoom: 'E 208' },
                { day: 'Jueves', start: '14:15', end: '15:45', classRoom: 'E 208' }

              ]
            },
            {
              id: 3, name: 'SARMIENTO JALDIN RODOLFO', group: '03', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 209' },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 408' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 310' }
              ]
            },
            {
              id: 4, name: 'SARMIENTO JALDIN RODOLFO', group: '04', days: [
                { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 506' },
                { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 110' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 102' }
              ]
            },
            {
              id: 5, name: 'SARMIENTO JALDIN RODOLFO', group: '06', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 303' },
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 108' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 308' }
              ]
            },
            {
              id: 6, name: 'MALDONADO ROJAS RAMIRO', group: '21', days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 305' },
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 307' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 307' }
              ]
            },
            {
              id: 7, name: 'FERRUFINO GARCIA ALEXANDER', group: '22', days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 205' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 208' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 206' }
              ]
            },
            {
              id: 8, name: 'SANCHEZ CASTELLON JUAN FELIX', group: '23', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 107' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 509' },
                { day: 'Viernes', start: '17:15', end: '18:45', classRoom: 'E 107' }
              ]
            },
          ]
        }, {
          nombre: 'ALGEBRA',
          docentes: [
            {
              id: 9, name: 'IRIARTE MERCADO EDGAR ALBERTO', group: '01', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 542' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E PB-2' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 507' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E 507', auxiliary: true }
              ]
            },
            {
              id: 10, name: 'MONTAÑO ROMERO JOSE', group: '02', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 507', auxiliary: true },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 508' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 541' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 542' }
              ]
            },
            {
              id: 11, name: 'TABORGA ACHA FIDEL', group: '03', days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 507' },
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 507' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 513' },
                { day: 'Martes', start: '11:15', end: '12:15', classRoom: 'E 520', auxiliary: true }
              ]
            },
            {
              id: 12, name: 'TAYLOR TERRAZAS DARLONG HOWARD', group: '04', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E PB-2' },
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 503' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 503' },
                { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 517', auxiliary: true }
              ]
            },
            {
              id: 13, name: 'PATINO TITO RONALD EDGAR', group: '06', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 109' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 307' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 306' }
              ]
            },
            {
              id: 14, name: 'HINOJOSA DE IRAOLA MARCELO', group: '21', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 546' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 546' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 204' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 306', auxiliary: true }
              ]
            },
            {
              id: 15, name: 'MONTANO MONTANO JOSE', group: '22', days: [
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 512' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 512' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 543' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 518', auxiliary: true }
              ]
            },
            {
              id: 16, name: 'JALDIN QUIROZ RENE', group: '23', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 543' },
                { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 544' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 545' },
                { day: 'Viernes', start: '14:15', end: '15:45', classRoom: 'E 101', auxiliary: true }
              ]
            },
            {
              id: 17, name: 'PATINO TITO RONALD EDGAR', group: '24', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 101' },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 306' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 507' }
              ]
            },
          ]
        }, {
          nombre: 'CONTABILIDAD I',
          docentes: [
            {
              id: 18, name: 'VILLARROEL DAZA SILVIA', group: '01', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 546' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 303' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 541' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 508', auxiliary: true }
              ]
            },
            {
              id: 19, name: 'LEDEZMA BELTRAN GUSTAVO', group: '02', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 541' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 102' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 543' },
                { day: 'Miércoles', start: '15:45', end: '17:15', classRoom: 'E 205', auxiliary: true }
              ]
            },
            {
              id: 20, name: 'SANDOVAL CAMACHO MARCELO', group: '03', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 516' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 516' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 102' },
                { day: 'Martes', start: '14:15', end: '15:45', classRoom: 'E 506', auxiliary: true }
              ]
            },
            {
              id: 21, name: 'VILLARROEL DAZA SILVIA', group: '04', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 522' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 208' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 546' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 101', auxiliary: true }
              ]
            },
            {
              id: 22, name: 'VILLARROEL DAZA SILVIA', group: '05', days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 542' },
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 545' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 202' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 512', auxiliary: true }
              ]
            },
            {
              id: 23, name: 'LEDEZMA BELTRAN GUSTAVO', group: '21', days: [
                { day: 'Lunes', start: '12:45', end: '14:15', classRoom: 'E 306', auxiliary: true },
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 209' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 103' },
                { day: 'Viernes', start: '11:15', end: '12:45', classRoom: 'E 543' }
              ]
            },
            {
              id: 24, name: 'PEREZ AMADOR MARIO', group: '22', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 514', auxiliary: true },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 513' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 546' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 541' }
              ]
            },
            {
              id: 25, name: 'SILES RODRIGUEZ ADOLFO JORGE', group: '23', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 512', auxiliary: true },
                { day: 'Miércoles', start: '14:15', end: '15:45', classRoom: 'E 204' },
                { day: 'Jueves', start: '14:15', end: '15:45', classRoom: 'E 204' },
                { day: 'Viernes', start: '15:45', end: '17:15', classRoom: 'E 205' }
              ]
            },
            {
              id: 26, name: 'SANDOVAL CAMACHO MARCELO', group: '24', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 511' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 202' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 104' },
                { day: 'Martes', start: '15:45', end: '17:15', classRoom: 'E 514', auxiliary: true },
              ]
            },
          ]
        }, {
          nombre: 'DERECHO COMERCIAL',
          docentes: [
            {
              id: 27, name: 'DUCHEN SALVATIERRA CARLOS ALBERTO', group: '01', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 308' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 109' }
              ]
            },
            {
              id: 28, name: 'AYALA MENDOZA AMILCAR', group: '02', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 107' },
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 202' }
              ]
            },
            {
              id: 29, name: 'QUINTANILLA CALVIMONTES GONZALO', group: '03', days: [
                { day: 'Lunes', start: '14:15', end: '15:45', classRoom: 'E 543' },
                { day: 'Viernes', start: '14:15', end: '15:45', classRoom: 'E 543' }
              ]
            },
            {
              id: 30, name: 'QUIROZ GOMEZ CARMEN RITA', group: '04', days: [
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 512' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 512' }
              ]
            },
            {
              id: 31, name: 'VILLARROEL FRANCO CESAR VLADIMIR', group: '06', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 507' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 508' }
              ]
            },
            {
              id: 32, name: 'QUINTANILLA CALVIMONTES GONZALO', group: '21', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 543' },
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 542' }
              ]
            },
            {
              id: 33, name: 'QUINTANILLA CALVIMONTES GONZALO', group: '22', days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 509' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 514' }
              ]
            },
            {
              id: 34, name: 'QUINTANILLA CALVIMONTES GONZALO', group: '23', days: [
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 542', },
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 510' }
              ]
            }
          ]
        }, {
          nombre: 'MATEMÁTICA FINANCIERA',
          docentes: [
            {
              id: 35, name: 'FERREIRA MONTES VICTOR HUGO', group: '01', days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 543' },
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 516' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 408' },
              ]
            },
            {
              id: 36, name: 'CRESPO ZAMBRANA PETER IVAN', group: '02', days: [
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 105' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 108' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 108' },
              ]
            },
            {
              id: 37, name: 'VARGAS PEREDO EMIR FELIX', group: '03', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 102' },
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E PB-1' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 301' }
              ]
            },
            {
              id: 38, name: 'SEMPERTEGUI ZEBALLOS SANDRA MA', group: '04', days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 545' },
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 542' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 507' }
              ]
            },
            {
              id: 39, name: 'FERREIRA MONTES VICTOR HUGO', group: '05', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 514' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 303' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 509' }
              ]
            },
            {
              id: 40, name: 'BUSTAMANTE MALDONADO FERNANDO', group: '06', days: [
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 517' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 514' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 514' }
              ]
            },
            {
              id: 41, name: 'CLAURE FUENTES SHIRLEY CONSUELO', group: '10', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 507' },
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 306' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 546' }
              ]
            },
            {
              id: 42, name: 'MOYA ALBARRACIN MARTIN', group: '21', days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 506' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 513' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 510' }
              ]
            },
            {
              id: 43, name: 'TORREZ GALARZA ANDRES REYNALDO', group: '25', days: [
                { day: 'Lunes', start: '12:45', end: '14:15', classRoom: 'E 207' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 202' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 106' }
              ]
            },
            {
              id: 44, name: 'MANSILLA HEREDIA ALFREDO EDUARDO', group: '26', days: [
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 202' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 101' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 201' }
              ]
            }
          ]
        }

      ]
    },
    {
      nombre: 'SEGUNDO SEMESTRE',
      materias: [
        {
          nombre: 'CÁLCULO',
          docentes: [
            {
              id: 45, name: 'CONDORI ARIAS HERMOGENES', group: '01', days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 303', auxiliary: true },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 512' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 518' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 107' }
              ]
            },
            {
              id: 46, name: 'DIAZ MONZON EDMUNDO', group: '02', days: [
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 542' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 542' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 542' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E PB-2', auxiliary: true }
              ]
            },
            {
              id: 47, name: 'MORALES ROJAS ARTURO JOSE L.', group: '03', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 511' },
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 509' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 509' },
                { day: 'Jueves', start: '15:45', end: '17:15', classRoom: 'E 517', auxiliary: true }
              ]
            },
            {
              id: 48, name: 'MONTAÑO ROMERO JOSE', group: '04', days: [
                { day: 'Lunes', start: '14:15', end: '15:45', classRoom: 'E 510' },
                { day: 'Martes', start: '14:15', end: '15:45', classRoom: 'E 510' },
                { day: 'Jueves', start: '14:15', end: '15:45', classRoom: 'E 510' },
                { day: 'Viernes', start: '15:45', end: '17:15', classRoom: 'E 506', auxiliary: true }
              ]
            },
            {
              id: 49, name: 'DUERI MENDEZ MARIA ELENA', group: '10', days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 105' },
                { day: 'Miércoles', start: '15:45', end: '17:15', classRoom: 'E 546' },
                { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 541' }
              ]
            },
            {
              id: 50, name: 'ALBORTA SILES RAUL JOSE', group: '22', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 302' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 541' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 514' },
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 510', auxiliary: true }
              ]
            },
            {
              id: 51, name: 'VILLARROEL SOLIZ GROVER', group: '24', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 512' },
                { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 512' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 303' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 516', auxiliary: true }
              ]
            },
            {
              id: 52, name: 'MONTANO MONTANO JOSE', group: '25', days: [
                { day: 'Lunes', start: '15:45', end: '17:15', classRoom: 'E 108' },
                { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 107' },
                { day: 'Jueves', start: '15:45', end: '17:15', classRoom: 'E 108' }
              ]
            }
          ]
        }, {
          nombre: 'CONTABILIDAD II',
          docentes: [
            {
              id: 53, name: 'BALDERRAMA MAMANI JOSE ANTONIO', group: '02', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 516' },
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 542' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 510' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 514', auxiliary: true }
              ]
            },
            {
              id: 54, name: 'VILLARROEL MERCADO ALBERTO', group: '03', days: [
                { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 507' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 108' },
                { day: 'Viernes', start: '17:15', end: '18:45', classRoom: 'E 506' },
                { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E PB-1', auxiliary: true }
              ]
            },
            {
              id: 55, name: 'QUINTANA ALVAREZ JHONNY', group: '04', days: [
                { day: 'Lunes', start: '15:45', end: '17:15', classRoom: 'E 541' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 103' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 105' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 104', auxiliary: true }
              ]
            },
            {
              id: 56, name: 'QUINTANA ALVAREZ JHONNY', group: '10', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 208' },
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 306' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 306' }
              ]
            },
            {
              id: 57, name: 'BALDERRAMA MAMANI JOSE ANTONIO', group: '21', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 510' },
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 301' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 513' },
                { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E 507', auxiliary: true }
              ]
            },
            {
              id: 58, name: 'SAAVEDRA GOMEZ MILENA ELIZABETH', group: '22', days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 543' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 518' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 506' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 103', auxiliary: true }
              ]
            },
            {
              id: 59, name: 'TORRICO SANCHEZ FELIPE ROBERTO', group: '23', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 513' },
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 517' },
                { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 542' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 514', auxiliary: true }
              ]
            },
            {
              id: 60, name: 'VILLARROEL MERCADO ALBERTO', group: '24', days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 510' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 506' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 509' },
                { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E 509', auxiliary: true }
              ]
            }
          ]
        }, {
          nombre: 'DERECHO DEL TRABAJO',
          docentes: [
            {
              id: 61, name: 'TORRICO OCAMPO ENRIQUE', group: '01', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 518' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 507' }
              ]
            },
            {
              id: 62, name: 'QUIROZ GOMEZ CARMEN RITA', group: '02', days: [
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 541' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 541' }
              ]
            },
            {
              id: 63, name: 'QUINTANILLA CALVIMONTES GONZALO', group: '21', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 506' },
                { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 516' }
              ]
            },
            {
              id: 64, name: 'QUINTANILLA CALVIMONTES GONZALO', group: '22', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 506' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 516' }
              ]
            },
            {
              id: 65, name: 'AMURRIO MARQUEZ MARY', group: '23', days: [
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 205' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 106' }
              ]
            },
            {
              id: 66, name: 'JIMENEZ PINTO EDWIN', group: '24', days: [
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 541' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 543' }
              ]
            },
            {
              id: 67, name: 'JIMENEZ PINTO EDWIN', group: '25', days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 404' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 514' }
              ]
            }
          ]
        }, {
          nombre: 'ECONOMÍA GENERAL',
          docentes: [
            {
              id: 6811, name: 'MALLCU LUPE ALEX YASMANI', group: '02', days: [
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 501' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E PB-4' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 512' }
              ]
            },
            {
              id: 68, name: 'GRIGORIU MONROY FRANCISCO PABLO', group: '03', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 308' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 308' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 308' }
              ]
            },
            {
              id: 69, name: 'ARAUJO COSSIO ALDO ROMEL', group: '04', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 310' },
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 310' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 310' }
              ]
            },
            {
              id: 70, name: 'ASCARRAGA SEJAS WILMAR HENRY', group: '21', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E PB-4' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 309' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E PB-2' }
              ]
            },
            {
              id: 71, name: 'MERCADO SORIA JESUS BERNARDO', group: '22', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 518' },
                { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 514' },
                { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 508' }
              ]
            },
            {
              id: 72, name: 'HUMEREZ MONTALVO ALBERTO', group: '23', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 106' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 109' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 106' }
              ]
            },
            {
              id: 73, name: 'QUISPE CONDORI RODRIGO ALVARO', group: '24', days: [
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 309' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 309' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 309' }
              ]
            }
          ]
        }, {
          nombre: 'SISTEMAS ADMINISTRATIVOS',
          docentes: [
            {
              id: 74, name: 'SEVILLA CESPEDES CLAUDIA', group: '01', days: [
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 541' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 510' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 541' }
              ]
            },
            {
              id: 75, name: 'MALDONADO ROJAS RAMIRO', group: '03', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 309' },
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 101' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 310' }
              ]
            },
            {
              id: 76, name: 'ROCHA CHAVEZ LILIAN MARCELA', group: '22', days: [
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 520' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 206' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 207' }
              ]
            },
            {
              id: 77, name: 'ROCHA CHAVEZ LILIAN MARCELA', group: '23', days: [
                { day: 'Lunes', start: '12:45', end: '14:15', classRoom: 'E 202' },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 207' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 206' }
              ]
            }
          ]
        }, {
          nombre: 'SEMINARIO BÁSICO',
          docentes: [
            {
              id: 78, name: 'ANTEZANA LA FUENTE JORGE CARLOS', group: '02', days: [
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 511' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 506' }
              ]
            },
            {
              id: 79, name: 'GUZMAN RODRIGUEZ JESUS', group: '03', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 512' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 517' }
              ]
            },
            {
              id: 80, name: 'ANTEZANA LA FUENTE JORGE CARLOS', group: '05', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 517' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 108' }
              ]
            },
            {
              id: 81, name: 'ESCALERA MELGAR ALBERTO', group: '21', days: [
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 104' },
                { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E 103' }
              ]
            },
            {
              id: 82, name: 'INCA QUISPE RONALD DAVID', group: '24', days: [
                { day: 'Lunes', start: '12:45', end: '14:15', classRoom: 'E 510' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 509' }
              ]
            }
          ]
        }
      ]


    },
    {
      nombre: 'TERCER SEMESTRE',
      materias: [
        {
          nombre: 'CONTABILIDAD III',
          docentes: [
            {
              id: 83, name: 'QUINTANA ALVAREZ JHONNY', group: '10', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 543' },
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 109' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 105' }
              ]
            },
            {
              id: 84, name: 'CUIZA BARRENECHEA LOURDES', group: '21', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 511' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 542' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 209' },
                { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 509', auxiliary: true }
              ]
            },
            {
              id: 85, name: 'CUIZA BARRENECHEA LOURDES', group: '22', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 307' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 517' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 518' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 516', auxiliary: true }
              ]
            },
            {
              id: 86, name: 'MONTAÑO VARGAS OSCAR', group: '23', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 514' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 509' },
                { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E 510' },
                { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 514', auxiliary: true }
              ]
            },
            {
              id: 87, name: 'CUIZA BARRENECHEA LOURDES', group: '24', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 510' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 108' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 201' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E 108', auxiliary: true }
              ]
            },
            {
              id: 88, name: 'LAZARTE MALDONADO GROVER ANGEL', group: '25', days: [
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 518' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 202' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 208' }
              ]
            }
          ]
        }, {
          nombre: 'MICROECONOMÍA',
          docentes: [
            {
              id: 89, name: 'HUMEREZ MONTALVO ALBERTO', group: '01', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 107' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 106' }
              ]
            },
            {
              id: 90, name: 'HUMEREZ MONTALVO ALBERTO', group: '02', days: [
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 107' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 110' }
              ]
            },
            {
              id: 91, name: 'ZUBIETA FLORIDO FREDDY', group: '03', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 108' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 523' }
              ]
            },
            {
              id: 92, name: 'CABERO CALATAYUD CARLOS F.', group: '04', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 518' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E PB-2' }
              ]
            }
          ]
        }, {
          nombre: 'ESTADÍSTICA I',
          docentes: [
            {
              id: 93, name: 'MONTANO QUIROGA CLAUDIA CAROLA', group: '01', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 514' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 524' }
              ]
            },
            {
              id: 94, name: 'BUSTAMANTE MALDONADO FERNANDO', group: '02', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 526' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 108' }
              ]
            },
            {
              id: 95, name: 'BUSTAMANTE MALDONADO FERNANDO', group: '04', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 104' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 529' }
              ]
            },
            {
              id: 96, name: 'SEMPERTEGUI ZEBALLOS SANDRA MA', group: '05', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 106' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 541' }
              ]
            },
            {
              id: 97, name: 'APAZA COLQUE FELIX JUAN', group: '06', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 107' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 303' }
              ]
            },
            {
              id: 98, name: 'ALBORTA SILES RAUL JOSE', group: '22', days: [
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 518' },
                { day: 'Sabádo', start: '11:15', end: '12:45', classRoom: 'E 506' }
              ]
            }
          ]
        }, {
          nombre: 'INVESTIGACIÓN OPERATIVA',
          docentes: [
            {
              id: 99, name: 'HINOJOSA DE IRAOLA MARCELO', group: '01', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 204' },
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 511' }
              ]
            },
            {
              id: 100, name: 'HINOJOSA DE IRAOLA MARCELO', group: '02', days: [
                { day: 'Lunes', start: '12:45', end: '14:15', classRoom: 'E 204' },
                { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E 106' }
              ]
            },
            {
              id: 101, name: 'ALIENDRE LAFUENTE ROMER SIMON', group: '05', days: [
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 408' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 513' }
              ]
            },
            {
              id: 102, name: 'HINOJOSA DE IRAOLA MARCELO', group: '07', days: [
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 524' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 541' }
              ]
            },
            {
              id: 103, name: 'ALIENDRE LAFUENTE ROMER SIMON', group: '21', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 512' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 517' }
              ]
            },
            {
              id: 104, name: 'ZUBIETA FLORIDO FREDDY', group: '22', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 510' },
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 513' }
              ]
            },
            {
              id: 105, name: 'MERCADO SORIA JESUS BERNARDO', group: '23', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E PB-1' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 516' }
              ]
            }
          ]
        }, {
          nombre: 'MACROECONOMÍA',
          docentes: [
            {
              id: 106, name: 'MANSILLA HEREDIA ALFREDO EDUARDO', group: '01', days: [
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 301' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 110' }
              ]
            },
            {
              id: 107, name: 'HUMEREZ MONTALVO ALBERTO', group: '02', days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 110' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 108' }
              ]
            },
            {
              id: 108, name: 'HUMEREZ MONTALVO ALBERTO', group: '03', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 107' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 106' }
              ]
            },
            {
              id: 109, name: 'VALDIVIEZO MALDONADO LINO JUAN CARLOS', group: '04', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 301' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 105' }
              ]
            },
            {
              id: 110, name: 'CONDORI ARIAS HERMOGENES', group: '21', days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 108' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 301' }
              ]
            },
            {
              id: 111, name: 'MANSILLA HEREDIA ALFREDO EDUARDO', group: '23', days: [
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 205' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E 102' }
              ]
            }
          ]
        }
      ]
    }, {
      nombre: 'CUARTO SEMESTRE',
      materias: [
        {
          nombre: 'CONTABILIDAD DE BANCOS Y ENTIDADES FINANCIERA',
          docentes: [
            {
              id: 112, name: 'PEREZ AMADOR JOSE ELMER PETER', group: '01', days: [
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 543' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 543' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 543' }
              ]
            },
            {
              id: 113, name: 'PAREDES JALDIN EDUARDO JOAQUIN', group: '10', days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 301' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 543' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 301' }
              ]
            },
            {
              id: 114, name: 'PEREZ AMADOR JOSE ELMER PETER', group: '21', days: [
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 543' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 543' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 543' }
              ]
            },
            {
              id: 115, name: 'CACERES MONTERO JAIME', group: '22', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 521' },
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 507' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 513' }
              ]
            },
            {
              id: 116, name: 'CACERES MONTERO JAIME', group: '26', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 108' },
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 508' },
                { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 508' }
              ]
            }
          ]
        },
        {
          nombre: 'ESTADÍSTICA II',
          docentes: [
            {
              id: 117, name: 'URQUIDI BELLIDO SONIA', group: '01', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 516' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 406' }
              ]
            },
            {
              id: 118, name: 'TABORGA ACHA FIDEL', group: '02', days: [
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 509' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 513' }
              ]
            },
            {
              id: 119, name: 'CAMACHO VILLARROEL MIRIAM DEL ROSARIO', group: '03', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 304' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 506' }
              ]
            },
            {
              id: 120, name: 'JALDIN QUIROZ RENE', group: '04', days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 546' },
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 546' }
              ]
            },
            {
              id: 121, name: 'APAZA COLQUE FELIX JUAN', group: '21', days: [
                { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 517' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 512' }
              ]
            },
            {
              id: 122, name: 'VALDIVIEZO MALDONADO LINO JUAN CARLOS', group: '22', days: [
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 509' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 518' }
              ]
            }
          ]
        },
        {
          nombre: 'ADM. DE PERSONAL',
          docentes: [
            {
              id: 123, name: 'CRESPO FLORES RENE CARLOS', group: '02', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 523' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 523' },
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 205', auxiliary: true }
              ]
            },
            {
              id: 124, name: 'TORRES ARANDIA WILLIAM', group: '03', days: [
                { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 305' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 303' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 508', auxiliary: true }
              ]
            },
            {
              id: 125, name: 'TORRES ARANDIA WILLIAM', group: '21', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 516', auxiliary: true },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 303' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 303' }
              ]
            },
            {
              id: 126, name: 'TORREZ AGUILAR JOSE', group: '22', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 541' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 520' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 514', auxiliary: true }
              ]
            },
            {
              id: 127, name: 'SARMIENTO JALDIN RODOLFO', group: '23', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 508' },
                { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 512' },
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 517', auxiliary: true }
              ]
            }
          ]
        },
        {
          nombre: 'COSTOS I',
          docentes: [
            {
              id: 128, name: 'RIVERA MICHEL HENRY', group: '01', days: [
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 508' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 517' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 517' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 304', auxiliary: true }
              ]
            },
            {
              id: 129, name: 'CHOQUEPALPA RIOZ ORLANDO DANIEL', group: '02', days: [
                { day: 'Martes', start: '15:45', end: '17:15', classRoom: 'E 507', auxiliary: true },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 511' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 511' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 512' }
              ]
            },
            {
              id: 130, name: 'CRESPO ZAMBRANA PETER IVAN', group: '10', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 107' },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 511' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 208' }
              ]
            },
            {
              id: 131, name: 'CHOQUEPALPA RIOZ ORLANDO DANIEL', group: '21', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 516', auxiliary: true },
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 516' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 508' },
                { day: 'Viernes', start: '17:15', end: '18:45', classRoom: 'E 507' }
              ]
            },
            {
              id: 132, name: 'MORALES GUZMAN CESAR', group: '22', days: [
                { day: 'Lunes', start: '12:45', end: '14:15', classRoom: 'E 203' },
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 203' },
                { day: 'Viernes', start: '17:15', end: '18:45', classRoom: 'E 103' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 207', auxiliary: true }
              ]
            },
            {
              id: 133, name: 'RIVERA CLAROS WILDER OMAR', group: '23', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 542' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 101' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 207' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 106', auxiliary: true }
              ]
            }
          ]
        },
        {
          nombre: 'INFORMÁTICA I',
          docentes: [
            {
              id: 134, name: 'SEMPERTEGUI ZEBALLOS SANDRA MA', group: '02', days: [
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 407' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 407' }
              ]
            },
            {
              id: 135, name: 'SEMPERTEGUI ZEBALLOS SANDRA MA', group: '03', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 402' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 407' }
              ]
            },
            {
              id: 136, name: 'CAMACHO DEL CASTILLO INDIRA', group: '04', days: [
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 407' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 407' }
              ]
            },
            {
              id: 137, name: 'ARAMAYO ANTEZANA JAIME ANTONIO', group: '21', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 401' },
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 550' }
              ]
            },
            {
              id: 138, name: 'VELARDE POMA JUAN CARLOS', group: '22', days: [
                { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 401' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 402' }
              ]
            },
            {
              id: 139, name: 'GUEVARA ESPINOZA JORGE', group: '23', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 406' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 406' }
              ]
            },
            {
              id: 140, name: 'ARAMAYO ANTEZANA JAIME ANTONIO', group: '24', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 550' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 407' }
              ]
            },
            {
              id: 141, name: 'ZAMORANO ESCALANTE JAIME', group: '25', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 401' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 401' }
              ]
            },
            {
              id: 142, name: 'LOPEZ LOPEZ JAIME', group: '26', days: [
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 407' },
                { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 407' }
              ]
            },
            {
              id: 143, name: 'ZAMORANO ESCALANTE JAIME', group: '27', days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 407' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 407' }
              ]
            }
          ]
        },
        {
          nombre: 'GESTION DE RIESGOS',
          docentes: [
            {
              id: 144, name: 'VALDEZ ESCOBAR JORGE', group: '01', days: [
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 508' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 510' }
              ]
            },
            {
              id: 145, name: 'ALIENDRE LAFUENTE ROMER SIMON', group: '02', days: [
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 514' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 509' }
              ]
            },
            {
              id: 146, name: 'FERREIRA MONTES VICTOR HUGO', group: '03', days: [
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 506' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 513' }
              ]
            },
            {
              id: 147, name: 'PAREDES JALDIN EDUARDO JOAQUIN', group: '04', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 303' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 310' }
              ]
            },
            {
              id: 148, name: 'ALIENDRE LAFUENTE ROMER SIMON', group: '21', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 507' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E 512' }
              ]
            }
          ]
        }
      ]
    }, {
      nombre: 'QUINTO SEMESTRE',
      materias: [
        {
          nombre: 'DERECHO TRIBUTARIO',
          docentes: [
            {
              id: 149, name: 'JIMENEZ PINTO EDWIN', group: '01', days: [
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 107' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 546' }
              ]
            },
            {
              id: 150, name: 'CARVAJAL SORIA LUIS GERARDO', group: '10', days: [
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 107' },
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 107' }
              ]
            },
            {
              id: 151, name: 'QUIROZ GOMEZ CARMEN RITA', group: '21', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 542' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 514' }
              ]
            },
            {
              id: 152, name: 'JIMENEZ PINTO EDWIN', group: '22', days: [
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 511' },
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 541' }
              ]
            },
            {
              id: 153, name: 'POR DESIGNAR DOCENTE', group: '23', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 509' },
                { day: 'Viernes', start: '17:15', end: '18:45', classRoom: 'E 542' }
              ]
            },
            {
              id: 154, name: 'CABRERA ROMAN CESAR', group: '24', days: [
                { day: 'Lunes', start: '12:45', end: '14:15', classRoom: 'E 507' },
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 508' }
              ]
            },
            {
              id: 155, name: 'CARVAJAL SORIA LUIS GERARDO', group: '25', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 517' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 517' }
              ]
            }
          ]
        }, {
          nombre: 'CONTABILIDAD PETROLERA Y MINERA',
          docentes: [
            {
              id: 156, name: 'MALDONADO ULUNQUE VICTOR HUGO', group: '01', days: [
                { day: 'Lunes', start: '15:45', end: '17:15', classRoom: 'E 542' },
                { day: 'Miércoles', start: '15:45', end: '17:15', classRoom: 'E 544' },
                { day: 'Jueves', start: '15:45', end: '17:15', classRoom: 'E 104' }
              ]
            },
            {
              id: 157, name: 'MALDONADO ULUNQUE VICTOR HUGO', group: '02', days: [
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 204' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 104' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 101' }
              ]
            },
            {
              id: 158, name: 'MALDONADO ULUNQUE VICTOR HUGO', group: '21', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 104' },
                { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 104' },
                { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 101' }
              ]
            },
            {
              id: 159, name: 'LEYTON GUTIERREZ SONIA', group: '22', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 513' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E PB-2' },
                { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E 513' }
              ]
            }
          ]
        }, {
          nombre: 'CONTABILIDAD DE SERVICIOS',
          docentes: [
            {
              id: 160, name: 'VILLARROEL MERCADO ALBERTO', group: '01', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 511', auxiliary: true },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 510' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 510' }
              ]
            },
            {
              id: 161, name: 'VILLARROEL MERCADO ALBERTO', group: '21', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 106' },
                { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 106' },
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 512', auxiliary: true }
              ]
            },
            {
              id: 162, name: 'VILLARROEL MERCADO ALBERTO', group: '22', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 514' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 507' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 107', auxiliary: true }
              ]
            },
            {
              id: 163, name: 'SILES RODRIGUEZ ADOLFO JORGE', group: '23', days: [
                { day: 'Lunes', start: '12:45', end: '14:15', classRoom: 'E 104' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 104' },
                { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 507', auxiliary: true }
              ]
            },
            {
              id: 164, name: 'GUZMAN RODRIGUEZ JESUS', group: '24', days: [
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 301' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 302' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 520', auxiliary: true }
              ]
            }
          ]
        }, {
          nombre: 'COSTOS II',
          docentes: [
            {
              id: 165, name: 'POR DESIGNAR DOCENTE', group: '02', days: [
                { day: 'Martes', start: '15:45', end: '17:15', classRoom: 'E 512', auxiliary: true },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 516' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 510' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 510' }
              ]
            },
            {
              id: 166, name: 'INCA QUISPE RONALD DAVID', group: '10', days: [
                { day: 'Martes', start: '14:15', end: '15:45', classRoom: 'E 542' },
                { day: 'Miércoles', start: '14:15', end: '15:45', classRoom: 'E 542' },
                { day: 'Jueves', start: '14:15', end: '15:45', classRoom: 'E 542' }
              ]
            },
            {
              id: 167, name: 'CHOQUEPALPA RIOZ ORLANDO DANIEL', group: '21', days: [
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 205', auxiliary: true },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 507' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 508' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 506' }
              ]
            },
            {
              id: 168, name: 'INCA QUISPE RONALD DAVID', group: '22', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 546' },
                { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 508' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 546' },
                { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E 102', auxiliary: true }
              ]
            },
            {
              id: 169, name: 'VILLARROEL ANTEZANA LENNY', group: '23', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 509' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 508' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E 506' },
                { day: 'Viernes', start: '17:15', end: '18:45', classRoom: 'E 508', auxiliary: true }
              ]
            }
          ]
        }, {
          nombre: 'CONTAB. AGROPECUARIA',
          docentes: [
            {
              id: 170, name: 'LEDEZMA SANDOVAL FEDERICO', group: '03', days: [
                { day: 'Lunes', start: '14:15', end: '15:45', classRoom: 'E 507' },
                { day: 'Miércoles', start: '15:45', end: '17:15', classRoom: 'E 506' },
                { day: 'Viernes', start: '14:15', end: '15:45', classRoom: 'E 507' }
              ]
            },
            {
              id: 171, name: 'LOPEZ VALENZUELA JOSE WALTER', group: '21', days: [
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 518' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 510' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 514' }
              ]
            },
            {
              id: 172, name: 'LOPEZ VALENZUELA JOSE WALTER', group: '22', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 512' },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 542' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 514' }
              ]
            },
            {
              id: 173, name: 'LEDEZMA SANDOVAL FEDERICO', group: '25', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 518' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 514' },
                { day: 'Viernes', start: '15:45', end: '17:15', classRoom: 'E 510' }
              ]
            }
          ]
        }, {
          nombre: 'INFORMATICA II',
          docentes: [
            {
              id: 174, name: 'AVILA MAMANI HECTOR JOSE', group: '01', days: [
                { day: 'Miércoles', start: '12:15', end: '14:15', classRoom: 'E 407' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 407' }
              ]
            },
            {
              id: 175, name: 'CAMACHO DEL CASTILLO INDIRA', group: '03', days: [
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 407' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 407' }
              ]
            },
            {
              id: 176, name: 'SEMPERTEGUI ZEBALLOS SANDRA MA', group: '04', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 407' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 402' }
              ]
            },
            {
              id: 177, name: 'ZAMORANO ESCALANTE JAIME', group: '10', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 402' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 402' }
              ]
            },
            {
              id: 178, name: 'AVILA MAMANI HECTOR JOSE', group: '22', days: [
                { day: 'Lunes', start: '12:45', end: '14:15', classRoom: 'E 407' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E 407' }
              ]
            },
            {
              id: 179, name: 'ARAMAYO ANTEZANA JAIME ANTONIO', group: '23', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 407' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 407' }
              ]
            },
            {
              id: 180, name: 'AVILA MAMANI HECTOR JOSE', group: '24', days: [
                { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 402' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 407' }
              ]
            },
            {
              id: 181, name: 'AVILA MAMANI HECTOR JOSE', group: '25', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 407' },
                { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 402' }
              ]
            }
          ]
        }
      ]
    }, {
      nombre: 'SEXTO SEMESTRE',
      materias: [
        {
          nombre: 'GABINETE DE CONTABILIDAD',
          docentes: [
            {
              id: 182, name: 'CORNEJO PARRA JAIME', group: '01', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 507' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 508' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 516' }
              ]
            },
            {
              id: 183, name: 'TORREZ AGUILAR JOSE', group: '02', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 513' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 523' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 511' }
              ]
            },
            {
              id: 184, name: 'TORREZ AGUILAR JOSE', group: '21', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 102' },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 513' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 512' }
              ]
            },
            {
              id: 185, name: 'CORNEJO PARRA JAIME', group: '22', days: [
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 546' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 307' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 106' }
              ]
            },
            {
              id: 186, name: 'RIVERA CLAROS WILDER OMAR', group: '23', days: [
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 543' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 104' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E PB-1' }
              ]
            }
          ]
        },
        {
          nombre: 'PRESUPUESTOS EMPRESARIALES',
          docentes: [
            {
              id: 187, name: 'MARTINEZ ALPIRI ANAHI MONICA', group: '01', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 510' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 541' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 107' }
              ]
            },
            {
              id: 188, name: 'TORRICO LARA ALEX', group: '02', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 408' },
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 510' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 408' }
              ]
            },
            {
              id: 189, name: 'VARGAS OROSCO FREDDY', group: '21', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 510' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 517' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 517' }
              ]
            },
            {
              id: 190, name: 'VARGAS OROSCO FREDDY', group: '23', days: [
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 108' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 512' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 508' }
              ]
            }
          ]
        },
        {
          nombre: 'TALLER DE COSTOS',
          docentes: [
            {
              id: 191, name: 'POR DESIGNAR DOCENTE', group: '01', days: [
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 307' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 307' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 307' }
              ]
            },
            {
              id: 192, name: 'GARCIA TORDOYA RICARDO', group: '21', days: [
                { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 308' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 309' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 205' }
              ]
            },
            {
              id: 193, name: 'POR DESIGNAR DOCENTE', group: '22', days: [
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 307' },
                { day: 'Viernes', start: '11:15', end: '12:45', classRoom: 'E 307' },
                { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 307' }
              ]
            },
            {
              id: 194, name: 'ARAMAYO ANTEZANA JAIME ANTONIO', group: '23', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 550' },
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 207' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 402' }
              ]
            },
            {
              id: 195, name: 'POR DESIGNAR DOCENTE', group: '24', days: [
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 307' },
                { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E 307' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 307' }
              ]
            },
            {
              id: 196, name: 'CORNEJO PARRA MIRKO DARIO', group: '25', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 305' },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 302' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 307' }
              ]
            }
          ]
        },
        {
          nombre: 'ANALISIS E INTERP. DE E.F.',
          docentes: [
            {
              id: 197, name: 'RIVERA MICHEL HENRY', group: '01', days: [
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 507' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 510' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 509' }
              ]
            },
            {
              id: 198, name: 'MORALES ROJAS ARTURO JOSE L.', group: '02', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 510' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 506' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 510' }
              ]
            },
            {
              id: 199, name: 'GARCIA TORDOYA RICARDO', group: '21', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 305' },
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 503' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 503' }
              ]
            },
            {
              id: 200, name: 'LOPEZ LOPEZ JAIME', group: '23', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 513' },
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 506' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 511' }
              ]
            }
          ]
        },
        {
          nombre: 'ORGANIZACIÓN Y MÉTODOS',
          docentes: [
            {
              id: 201, name: 'NAVIA QUIROGA GUSTAVO', group: '01', days: [
                { day: 'Martes', start: '14:15', end: '15:45', classRoom: 'E 508' },
                { day: 'Jueves', start: '14:15', end: '15:45', classRoom: 'E 507' },
                { day: 'Viernes', start: '14:15', end: '15:45', classRoom: 'E 508' }
              ]
            },
            {
              id: 202, name: 'GUZMAN DURAN GONZALO', group: '21', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 514' },
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 107' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 511' }
              ]
            },
            {
              id: 203, name: 'SARMIENTO JALDIN RODOLFO', group: '22', days: [
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 110' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 508' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 102' }
              ]
            },
            {
              id: 204, name: 'VALDEZ ZEGARRA RAFAEL A.', group: '23', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 104' },
                { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 517' },
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 513' }
              ]
            }
          ]
        }

      ]
    }, {
      nombre: 'SEPTIMO SEMESTRE',
      materias: [
        {
          nombre: 'ECONOMÍA FISCAL',
          docentes: [
            {
              id: 205, name: 'REYNAGA ARCE HENRY RUKNER', group: '01', days: [
                { day: 'Lunes', start: '14:15', end: '15:45', classRoom: 'E 106' },
                { day: 'Miércoles', start: '14:15', end: '15:45', classRoom: 'E 106' },
                { day: 'Viernes', start: '14:15', end: '15:45', classRoom: 'E 106' }
              ]
            },
            {
              id: 206, name: 'CARRASCO BRANEZ OSCAR', group: '02', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 110' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 108' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 510' }
              ]
            },
            {
              id: 207, name: 'TORREZ GALARZA ANDRES REYNALDO', group: '03', days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 518' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 523' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 514' }
              ]
            },
            {
              id: 208, name: 'CARRASCO BRANEZ OSCAR', group: '21', days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 508' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 543' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 541' }
              ]
            },
            {
              id: 209, name: 'CARRASCO BRANEZ OSCAR', group: '23', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 543' },
                { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 541' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 507' }
              ]
            }
          ]
        },
        {
          nombre: 'PREP. Y EVAL. DE PROYECTOS',
          docentes: [
            {
              id: 210, name: 'MENDOZA CRESPO JOSE ANTONIO', group: '01', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 201' },
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E PB-2' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 203' }
              ]
            },
            {
              id: 211, name: 'OLIVERA TAPIA JUAN CARLOS', group: '02', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 208' },
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 306' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 310' }
              ]
            },
            {
              id: 212, name: 'CRESPO ZAMBRANA PETER IVAN', group: '21', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 207' },
                { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 105' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 106' }
              ]
            },
            {
              id: 213, name: 'VILLAZON ARANDIA RICARDO IVAN', group: '22', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 305' },
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 302' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 302' }
              ]
            }
          ]
        },
        {
          nombre: 'PRESUPUESTOS FISCALES',
          docentes: [
            {
              id: 214, name: 'VARGAS JIMENEZ GROVER RULER', group: '01', days: [
                { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 102' },
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 102' },
                { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 511' }
              ]
            },
            {
              id: 215, name: 'CORNEJO PARRA JAIME', group: '02', days: [
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 408' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 110' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 521' }
              ]
            },
            {
              id: 216, name: 'GARCIA ZAMORANO JESUS CESAR', group: '21', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 407' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 401' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 407' }
              ]
            }
          ]
        },
        {
          nombre: 'AUDITORÍA I',
          docentes: [
            {
              id: 217, name: 'LAZARTE MALDONADO GROVER ANGEL', group: '02', days: [
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 304' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 104' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 205' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 516', auxiliary: true }
              ]
            },
            {
              id: 218, name: 'PEREZ VILLANUEVA MARCIAL', group: '21', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 513' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 511' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 508' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 103', auxiliary: true }
              ]
            },
            {
              id: 219, name: 'MENDIZABAL VEGA VICTOR HUGO', group: '22', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 104' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 107' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 107' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 302', auxiliary: true }
              ]
            },
            {
              id: 220, name: 'MENDIZABAL VEGA VICTOR HUGO', group: '24', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 508' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 510' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E 511' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 518', auxiliary: true }
              ]
            }
          ]
        },
        {
          nombre: 'ECONOMÍA MONETARIA',
          docentes: [
            {
              id: 221, name: 'CARRASCO BRANEZ OSCAR', group: '01', days: [
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 110' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 404' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 509' }
              ]
            },
            {
              id: 222, name: 'LEDEZMA RIVERA JHONNY LIMBERT', group: '21', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 545' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 110' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 110' }
              ]
            },
            {
              id: 223, name: 'CARRASCO BRANEZ OSCAR', group: '23', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 509' },
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 510' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 516' }
              ]
            },
            {
              id: 224, name: 'LEDEZMA RIVERA JHONNY LIMBERT', group: '24', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 506' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 546' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 542' }
              ]
            }
          ]
        }

      ]
    }, {
      nombre: 'OCTAVO SEMESTRE',
      materias: [
        {
          nombre: 'AUDITORIA TRIBUTARIA I',
          docentes: [
            {
              id: 225, name: 'VILLARROEL ANTEZANA LENNY', group: '01', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 509' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 507' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 507' }
              ]
            },
            {
              id: 226, name: 'VILLACORTA GUZMAN ROSMERY', group: '21', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 507' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 507' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 544' }
              ]
            },
            {
              id:227, name: 'VILLACORTA GUZMAN ROSMERY', group: '22', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 507' },
                { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 506' },
                { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 506' }
              ]
            },
            {
              id: 228, name: 'CUIZA BARRENECHEA LOURDES', group: '23', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 108' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 517' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 517' }
              ]
            }
          ]
        },
        {
          nombre: 'SEMINARIO SUPERIOR',
          docentes: [
            {
              id: 229, name: 'ROCHA CLAROS JUAN', group: '10', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E PB-2' },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 514' },
                { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 106' }
              ]
            },
            {
              id: 230, name: 'VARGAS JIMENEZ GROVER RULER', group: '21', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 516' },
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 103' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 510' }
              ]
            },
            {
              id: 231, name: 'PEREZ VILLANUEVA MARCIAL', group: '22', days: [
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 543' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 507' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 545' }
              ]
            },
            {
              id: 323, name: 'TORRICO SANCHEZ FELIPE ROBERTO', group: '23', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 517' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 104' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 518' }
              ]
            },
            {
              id: 324, name: 'ROCHA CLAROS JUAN', group: '24', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 542' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E PB-2' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 302' }
              ]
            }
          ]
        },
        {
          nombre: 'AUDITORÍA II',
          docentes: [
            {
              id: 325, name: 'PEREZ VILLANUEVA MARCIAL', group: '21', days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 308' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 512' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 511' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 511', auxiliary: true }
              ]
            },
            {
              id: 326, name: 'POR DESIGNAR DOCENTE', group: '22', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 303', auxiliary: true },
                { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 105' },
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 105' },
                { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 104' }
              ]
            },
            {
              id: 327, name: 'CORTEZ VALLEJO WALTER', group: '24', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 513' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 516' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 513' },
                { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 541', auxiliary: true }
              ]
            }
          ]
        },
        {
          nombre: 'COMERCIO INTERNACIONAL',
          docentes: [
            {
              id: 328, name: 'IRIARTE DE LA FUENTE MARCELA', group: '01', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 512' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 513' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 512' }
              ]
            },
            {
              id: 329, name: 'IRIARTE DE LA FUENTE MARCELA', group: '03', days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 513' },
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 512' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 513' }
              ]
            },
            {
              id: 330, name: 'AYALA LEAÑO WALTER DANIEL', group: '22', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E PB-1' },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 516' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 506' }
              ]
            },
            {
              id: 331, name: 'MERCADO SORIA JESUS BERNARDO', group: '24', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 508' },
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 511' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 514' }
              ]
            }
          ]
        },
        {
          nombre: 'CONTABILIDAD INTEGRADA',
          docentes: [
            {
              id: 332, name: 'LAFUENTE ARANIBAR JIMMY ROBERTO', group: '10', days: [
                { day: 'Lunes', start: '12:45', end: '14:15', classRoom: 'E 509' },
                { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E 550' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 550' }
              ]
            },
            {
              id: 333, name: 'GARCIA ZAMORANO JESUS CESAR', group: '12', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 401' },
                { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 401' },
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 401' }
              ]
            },
            {
              id: 334, name: 'LAFUENTE ARANIBAR JIMMY ROBERTO', group: '21', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 550' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 518' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 550' }
              ]
            },
            {
              id: 335, name: 'VARGAS JIMENEZ GROVER RULER', group: '22', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 512' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 509' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E 514' }
              ]
            },
            {
              id: 336, name: 'VARGAS JIMENEZ GROVER RULER', group: '23', days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 512' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 511' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 511' }
              ]
            },
            {
              id: 337, name: 'LAFUENTE ARANIBAR JIMMY ROBERTO', group: '24', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 304' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 550' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 550' }
              ]
            }
          ]
        }

      ]
    }, {
      nombre: 'NOVENO SEMESTRE',
      materias: [
        {
          nombre: 'AUDITORIA TRIBUTARIA II',
          docentes: [
            {
              id: 338, name: 'VILLARROEL ANTEZANA LENNY', group: '01', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 506' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 508' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 506' }
              ]
            },
            {
              id: 339, name: 'VILLACORTA GUZMAN ROSMERY', group: '03', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 303' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 508' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 209' }
              ]
            },
            {
              id: 340, name: 'CUIZA BARRENECHEA LOURDES', group: '21', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 105' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 105' },
                { day: 'Viernes', start: '17:15', end: '18:45', classRoom: 'E 517' }
              ]
            },
            {
              id: 341, name: 'VILLACORTA GUZMAN ROSMERY', group: '22', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 507' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 506' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 544' }
              ]
            }
          ]
        },
        {
          nombre: 'METODOS Y TEC. DE INVEST.',
          docentes: [
            {
              id: 342, name: 'MANZANO ANZALDO NELSON TITO', group: '01', days: [
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 509' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 507' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 541' }
              ]
            },
            {
              id: 343, name: 'LOPEZ VALENZUELA JOSE WALTER', group: '21', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 518' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 107' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 107' }
              ]
            },
            {
              id: 344, name: 'VILLARROEL DAZA MARIA HELEN', group: '23', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 302' },
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 302' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 302' }
              ]
            },
            {
              id: 345, name: 'SEVILLA CESPEDES CLAUDIA', group: '27', days: [
                { day: 'Lunes', start: '12:45', end: '14:15', classRoom: 'E 110' },
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 110' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 110' }
              ]
            }
          ]
        },
        {
          nombre: 'ADMINISTRACIÓN FINANCIERA',
          docentes: [
            {
              id: 346, name: 'LEYTON GUTIERREZ SONIA', group: '01', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 513' },
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 513' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 513' }
              ]
            },
            {
              id: 347, name: 'GARCIA TORDOYA RICARDO', group: '21', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 404' },
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 105' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 109' }
              ]
            },
            {
              id: 348, name: 'LOPEZ LOPEZ JAIME', group: '23', days: [
                { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 543' },
                { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 543' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E 513' }
              ]
            }
          ]
        },
        {
          nombre: 'GABINETE DE AUDITORÍA',
          docentes: [
            {
              id: 349, name: 'ROCHA CLAROS JUAN', group: '22', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 514' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 513' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E 516' }
              ]
            },
            {
              id: 350, name: 'ROCHA CLAROS JUAN', group: '23', days: [
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 516' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 108' },
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 507' }
              ]
            },
            {
              id: 351, name: 'CORNEJO PARRA JAIME', group: '24', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 514' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 517' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 107' }
              ]
            }
          ]
        },
        {
          nombre: 'AUDITORIA FORENSE',
          docentes: [
            {
              id: 352, name: 'PEREZ VILLANUEVA MARCIAL', group: '21', days: [
                { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 511' },
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 542' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E 545' }
              ]
            },
            {
              id: 353, name: 'TORREZ BRAVO CARLOS ALFREDO', group: '22', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 541' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 509' },
                { day: 'Viernes', start: '17:15', end: '18:45', classRoom: 'E 541' }
              ]
            },
            {
              id: 354, name: 'TORREZ BRAVO CARLOS ALFREDO', group: '23', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 541' },
                { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 510' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 507' }
              ]
            }
          ]
        }, {
          nombre: 'AUDITORIA DE GESTION',
          docentes: [
            {
              id: 355, name: 'ESPADA FLORES JUAN RAMIRO', group: '21', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 516' },
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 507' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 513' }
              ]
            },
            {
              id: 356, name: 'ESPADA FLORES JUAN RAMIRO', group: '22', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 516' },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 507' },
                { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 513' }
              ]
            },
            {
              id: 357, name: 'ARAMAYO ANTEZANA JAIME ANTONIO', group: '23', days: [
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 544' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 548' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 550' }
              ]
            }
          ]
        }

      ]
    }
  ];


  days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  hours = ['06:45', '08:15', '09:45', '11:15', '12:45', '14:15', '15:45', '16:30', '17:15', '18:45', '20:15', '21:45'];



  selectedSubjects: any[] = [];

  toggleSubject(subject: any, event: any, subjectName: any) {
    if (event.target.checked) {
      let color = this.colors[0];
      this.inUse.push(color);
      let index = this.colors.findIndex((colorArr) => { return colorArr == color });
      this.colors.splice(index, 1);
      if (subject.days.length > 0) {
        subject.color = color;
        for (let day of subject.days) {
          this.selectedSubjects.push({ idGroup: subject.id, ...day, name: subject.name, group: subject.group, color: color, subjectName: subjectName });
          console.log(this.selectedSubjects)
        }
      }
      this.selectedSubjects.push(subject);
    } else {
      this.colors.push(subject.color)
      this.selectedSubjects = this.selectedSubjects.filter(s => s.idGroup !== subject.id);
    }
  }

  getSubjectsForCell(day: string, hour: string) {
    if (this.selectedSubjects.length > 0) console.log('materias', this.selectedSubjects);
    return this.selectedSubjects.filter(subject => subject.day === day && subject.start === hour);
  }
  async loadImage(src: string): Promise<string> {
    const img = new Image();
    img.src = src;
    img.crossOrigin = "anonymous";
    await new Promise(resolve => img.onload = resolve);
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx?.drawImage(img, 0, 0);
    return canvas.toDataURL("image/png");
  }
  async generatePDF() {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: [210, 297]

    });

    doc.setFont("times", "bold");
    doc.text('HORARIO - SIAT',70,15)
    const imgData = await this.loadImage('assets/img/aguila.png');
    doc.addImage(imgData, 'PNG',120, 5, 18, 18)

    const columns = ['Hora','Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const data = [['06:45'], ['08:15'], ['09:45'], ['11:15'], ['12:45'], ['14:15'], ['15:45'], ['16:30'], ['17:15'], ['18:45'], ['20:15'], ['21:45']];;

    doc.autoTable({
      headStyles: {
        fillColor: "#1864f9",
      },
      startY: 25,
      head: [columns],
      body: data,
    });
    doc.save('HORARIO SIAT.pdf');
  }
  async generateImage(){
    Swal.fire({
      title: 'Generando imagen...',
      html: 'Por favor, espera un momento.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
    await new Promise(resolve => setTimeout(resolve, 100));
    const element = this.contenido.nativeElement;
    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'HORARIO-SIAT.png';
      Swal.fire({
        icon: 'success',
        title: '¡Completado!',
        text: '',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#3085d6'
      });
      link.click();
    });
  }


  async downloadScheduleAsImage() {
    alert('click')
    try {
      // Importar html2canvas dinámicamente
      const html2canvas = await import('html2canvas');

      // Crear canvas de la tabla
      const canvas = await html2canvas.default(this.contenido.nativeElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: this.contenido.nativeElement.offsetWidth,
        height: this.contenido.nativeElement.offsetHeight
      });

      // Convertir canvas a blob y descargar
      canvas.toBlob((blob) => {
        if (blob) {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `horario-${new Date().toISOString().split('T')[0]}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        }
      }, 'image/png');

    } catch (error) {
      console.error('Error al descargar la imagen:', error);
      alert('Error al generar la imagen del horario');
    }
  }

  async downloadScheduleAsWallpaper() {
    try {
      // Importar html2canvas dinámicamente
      const html2canvas = await import('html2canvas');

      // Obtener dimensiones reales del dispositivo
      const dpr = window.devicePixelRatio || 1;
      const wallpaperWidth = window.screen.width * dpr;
      const wallpaperHeight = window.screen.height * dpr;

      // Márgenes seguros (5% arriba y abajo)
      const marginTop = wallpaperHeight * 0.05;
      const marginBottom = wallpaperHeight * 0.05;
      const maxWidth = wallpaperWidth * 0.9;
      const maxHeight = wallpaperHeight - marginTop - marginBottom;

      // Calcular escala para html2canvas según tamaño de tabla
      const tableEl = this.contenido.nativeElement;
      const scale = Math.min(maxWidth / tableEl.offsetWidth, maxHeight / tableEl.offsetHeight);

      // Crear canvas de la tabla con html2canvas
      const canvas = await html2canvas.default(tableEl, {
        scale: scale,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });

      // Crear canvas final del tamaño de pantalla
      const wallpaperCanvas = document.createElement('canvas');
      const ctx = wallpaperCanvas.getContext('2d')!;
      wallpaperCanvas.width = wallpaperWidth;
      wallpaperCanvas.height = wallpaperHeight;

      // Fondo blanco
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, wallpaperWidth, wallpaperHeight);

      // Calcular dimensiones de la tabla para centrarla
      const tableAspectRatio = canvas.width / canvas.height;
      let finalWidth, finalHeight;

      if (maxWidth / tableAspectRatio <= maxHeight) {
        finalWidth = maxWidth;
        finalHeight = maxWidth / tableAspectRatio;
      } else {
        finalHeight = maxHeight;
        finalWidth = maxHeight * tableAspectRatio;
      }

      const x = (wallpaperWidth - finalWidth) / 2;
      const y = marginTop + (maxHeight - finalHeight) / 2;

      // Dibujar la tabla centrada
      ctx.drawImage(canvas, x, y, finalWidth, finalHeight);

      // Agregar título opcional arriba de la tabla
      ctx.fillStyle = '#333333';
      ctx.font = `${Math.floor(dpr * 40)}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('Mi Horario', wallpaperWidth / 2, y - 50);

      // Convertir a blob y descargar
      wallpaperCanvas.toBlob((blob) => {
        if (blob) {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `horario-wallpaper-${new Date().toISOString().split('T')[0]}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        }
      }, 'image/png', 0.95);

    } catch (error) {
      console.error('Error al descargar la imagen:', error);
      alert('Error al generar el fondo de pantalla');
    }
  }

}
