import { Component } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent {
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
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 103' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 530' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 530' }
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
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 206' },
                { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 110' }
              ]
            },
            {
              id: 5, name: 'SARMIENTO JALDIN RODOLFO', group: '06', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 303' },
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 108' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 308' }
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
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 208' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 206' }
              ]
            },
            {
              id: 8, name: 'SANCHEZ CASTELLON JUAN FELIX', group: '23', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 107' },
                { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 509' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 107' }
              ]
            },
          ]
        }, {
          nombre: 'ALGEBRA',
          docentes: [
            {
              id: 1, name: 'IRIARTE MERCADO EDGAR ALBERTO', group: '01', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 542' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E PB-2' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 507' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E 507', auxiliary: true }
              ]
            },
            {
              id: 2, name: 'MONTAÑO ROMERO JOSE', group: '02', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 507', auxiliary: true },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 508' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 541' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 542' }
              ]
            },
            {
              id: 3, name: 'TABORGA ACHA FIDEL', group: '03', days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 507' },
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 507' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 513' },
                { day: 'Martes', start: '11:15', end: '12:15', classRoom: 'E 512', auxiliary: true }
              ]
            },
            {
              id: 4, name: 'TAYLOR TERRAZAS DARLONG HOWARD', group: '04', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E PB-2' },
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 503' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 503' },
                { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 517', auxiliary: true }
              ]
            },
            {
              id: 5, name: 'PATINO TITO RONALD EDGAR', group: '06', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 109' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 307' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 306' }
              ]
            },
            {
              id: 6, name: 'HINOJOSA DE IRAOLA MARCELO', group: '21', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 546' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 546' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 541' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 306', auxiliary: true }
              ]
            },
            {
              id: 7, name: 'MONTANO MONTANO JOSE', group: '22', days: [
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 512' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 512' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 543' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 518', auxiliary: true }
              ]
            },
            {
              id: 8, name: 'JALDIN QUIROZ RENE', group: '23', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 543' },
                { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 544' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 545' },
                { day: 'Viernes', start: '14:15', end: '15:45', classRoom: 'E 101', auxiliary: true }
              ]
            },
            {
              id: 8, name: 'PATINO TITO RONALD EDGAR', group: '24', days: [
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
              id: 1, name: 'VILLARROEL DAZA SILVIA', group: '01', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 546' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 303' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 541' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 508', auxiliary: true }
              ]
            },
            {
              id: 2, name: 'LEDEZMA BELTRAN GUSTAVO', group: '02', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 541' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 102' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 543' },
                { day: 'Miércoles', start: '15:45', end: '17:15', classRoom: 'E 205', auxiliary: true }
              ]
            },
            {
              id: 3, name: 'SANDOVAL CAMACHO MARCELO', group: '03', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 508' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 102' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 544' },
                { day: 'Martes', start: '14:15', end: '15:45', classRoom: 'E 506', auxiliary: true }
              ]
            },
            {
              id: 4, name: 'VILLARROEL DAZA SILVIA', group: '04', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 522' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 208' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 546' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 101', auxiliary: true }
              ]
            },
            {
              id: 5, name: 'VILLARROEL DAZA SILVIA', group: '05', days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 542' },
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 545' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 202' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 512', auxiliary: true }
              ]
            },
            {
              id: 6, name: 'LEDEZMA BELTRAN GUSTAVO', group: '21', days: [
                { day: 'Lunes', start: '12:45', end: '14:15', classRoom: 'E 306', auxiliary: true },
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 209' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 103' },
                { day: 'Viernes', start: '11:15', end: '12:45', classRoom: 'E 543' }
              ]
            },
            {
              id: 7, name: 'PEREZ AMADOR MARIO', group: '22', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 514', auxiliary: true },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 513' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 546' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 541' }
              ]
            },
            {
              id: 8, name: 'SILES RODRIGUEZ ADOLFO JORGE', group: '23', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 512', auxiliary: true },
                { day: 'Miércoles', start: '14:15', end: '15:45', classRoom: 'E 204' },
                { day: 'Jueves', start: '14:15', end: '15:45', classRoom: 'E 204' },
                { day: 'Viernes', start: '15:45', end: '17:15', classRoom: 'E 205' }
              ]
            },
            {
              id: 8, name: 'SANDOVAL CAMACHO MARCELO', group: '24', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 101' },
                { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 306' },
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 507' },
                { day: 'Martes', start: '15:45', end: '17:15', classRoom: 'E 514', auxiliary: true },
              ]
            },
          ]
        }, {
          nombre: 'DERECHO COMERCIAL',
          docentes: [
            {
              id: 1, name: 'DUCHEN SALVATIERRA CARLOS ALBERTO', group: '01', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 308' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 109' }
              ]
            },
            {
              id: 2, name: 'AYALA MENDOZA AMILCAR', group: '02', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 107' },
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 202' }
              ]
            },
            {
              id: 3, name: 'QUINTANILLA CALVIMONTES GONZALO', group: '03', days: [
                { day: 'Lunes', start: '14:15', end: '15:45', classRoom: 'E 543' },
                { day: 'Viernes', start: '14:15', end: '15:45', classRoom: 'E 543' }
              ]
            },
            {
              id: 4, name: 'QUIROZ GOMEZ CARMEN RITA', group: '04', days: [
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 520' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 512' }
              ]
            },
            {
              id: 5, name: 'VILLARROEL FRANCO CESAR VLADIMIR', group: '06', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 507' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 508' }
              ]
            },
            {
              id: 6, name: 'QUINTANILLA CALVIMONTES GONZALO', group: '21', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 543' },
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 542' }
              ]
            },
            {
              id: 7, name: 'QUINTANILLA CALVIMONTES GONZALO', group: '22', days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 509' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 514' }
              ]
            },
            {
              id: 8, name: 'QUINTANILLA CALVIMONTES GONZALO', group: '23', days: [
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 542', auxiliary: true },
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 510' }
              ]
            }
          ]
        }, {
          nombre: 'MATEMÁTICA FINANCIERA',
          docentes: [
            {
              id: 1, name: 'FERREIRA MONTES VICTOR HUGO', group: '01', days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 543' },
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 516' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 408' },
              ]
            },
            {
              id: 2, name: 'CRESPO ZAMBRANA PETER IVAN', group: '02', days: [
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 105' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 108' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 108' },
              ]
            },
            {
              id: 3, name: 'VARGAS PEREDO EMIR FELIX', group: '03', days: [
                { day: 'Jueves', start: '15:45', end: '17:15', classRoom: 'E 102' },
                { day: 'Viernes', start: '15:45', end: '17:15', classRoom: 'E 101' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 301' }
              ]
            },
            {
              id: 4, name: 'SEMPERTEGUI ZEBALLOS SANDRA MA', group: '04', days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 545' },
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 542' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 507' }
              ]
            },
            {
              id: 5, name: 'FERREIRA MONTES VICTOR HUGO', group: '05', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 5014' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 303' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 509' }
              ]
            },
            {
              id: 6, name: 'BUSTAMANTE MALDONADO FERNANDO', group: '06', days: [
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 517' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 514' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 514' }
              ]
            },
            {
              id: 7, name: 'CLAURE FUENTES SHIRLEY CONSUELO', group: '10', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 507' },
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 306' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 546' }
              ]
            },
            {
              id: 8, name: 'MOYA ALBARRACIN MARTIN', group: '21', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 529' },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 506' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 510' }
              ]
            },
            {
              id: 9, name: 'TORREZ GALARZA ANDRES REYNALDO', group: '25', days: [
                { day: 'Lunes', start: '12:45', end: '14:15', classRoom: 'E 207' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 202' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 106' }
              ]
            },
            {
              id: 10, name: 'MANSILLA HEREDIA ALFREDO EDUARDO', group: '26', days: [
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 301' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 202' },
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
              id: 1, name: 'CONDORI ARIAS HERMOGENES', group: '01', days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 303', auxiliary: true },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 512' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 518' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 107' }
              ]
            },
            {
              id: 2, name: 'DIAZ MONZON EDMUNDO', group: '02', days: [
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 542' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 542' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 542' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E PB-2', auxiliary: true }
              ]
            },
            {
              id: 3, name: 'MORALES ROJAS ARTURO JOSE L.', group: '03', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 511' },
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 509' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 509' },
                { day: 'Jueves', start: '15:45', end: '17:15', classRoom: 'E 517', auxiliary: true }
              ]
            },
            {
              id: 4, name: 'MONTAÑO ROMERO JOSE', group: '04', days: [
                { day: 'Lunes', start: '14:15', end: '15:45', classRoom: 'E 510' },
                { day: 'Martes', start: '14:15', end: '15:45', classRoom: 'E 510' },
                { day: 'Jueves', start: '14:15', end: '15:45', classRoom: 'E 510' },
                { day: 'Viernes', start: '15:45', end: '17:15', classRoom: 'E 506', auxiliary: true }
              ]
            },
            {
              id: 5, name: 'DUERI MENDEZ MARIA ELENA', group: '10', days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 105' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 543' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 542' }
              ]
            },
            {
              id: 6, name: 'ALBORTA SILES RAUL JOSE', group: '22', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 302' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 541' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 514' },
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 510', auxiliary: true }
              ]
            },
            {
              id: 7, name: 'VILLARROEL SOLIZ GROVER', group: '24', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 512' },
                { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 512' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 303' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 516', auxiliary: true }
              ]
            },
            {
              id: 8, name: 'MONTANO MONTANO JOSE', group: '25', days: [
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
              id: 1, name: 'BALDERRAMA MAMANI JOSE ANTONIO', group: '02', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 516' },
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 542' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 510' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 514', auxiliary: true }
              ]
            },
            {
              id: 2, name: 'VILLARROEL MERCADO ALBERTO', group: '03', days: [
                { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 507' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 108' },
                { day: 'Viernes', start: '17:15', end: '18:45', classRoom: 'E 506' },
                { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E PB-1', auxiliary: true }
              ]
            },
            {
              id: 3, name: 'QUINTANA ALVAREZ JHONNY', group: '04', days: [
                { day: 'Lunes', start: '15:45', end: '17:15', classRoom: 'E 541' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 105' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 516' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 104', auxiliary: true }
              ]
            },
            {
              id: 4, name: 'QUINTANA ALVAREZ JHONNY', group: '10', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 208' },
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 306' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 306' }
              ]
            },
            {
              id: 5, name: 'BALDERRAMA MAMANI JOSE ANTONIO', group: '21', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 510' },
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 301' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 513' },
                { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E 507', auxiliary: true }
              ]
            },
            {
              id: 6, name: 'SAAVEDRA GOMEZ MILENA ELIZABETH', group: '22', days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 543' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 518' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 506' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 103', auxiliary: true }
              ]
            },
            {
              id: 7, name: 'TORRICO SANCHEZ FELIPE ROBERTO', group: '23', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 513' },
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 517' },
                { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 542' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 514', auxiliary: true }
              ]
            },
            {
              id: 8, name: 'VILLARROEL MERCADO ALBERTO', group: '24', days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 510' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 506' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 509' },
                { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E 509', auxiliary: true }
              ]
            }
          ]
        },{ nombre: 'DERECHO DEL TRABAJO',
        docentes: [
        {
          id: 1, name: 'TORRICO OCAMPO ENRIQUE', group: '01', days: [
            { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 518'},
            { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 507' }
          ]
        },
        {
          id: 2, name: 'QUIROZ GOMEZ CARMEN RITA', group: '02', days: [
            { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 541'},
            { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 541' }
          ]
        },
        {
          id: 3, name: 'QUINTANILLA CALVIMONTES GONZALO', group: '21', days: [
            { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 506' },
            { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 516' }
          ]
        },
        {
          id: 4, name: 'QUINTANILLA CALVIMONTES GONZALO', group: '22', days: [
            { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 506' },
            { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 516' }
          ]
        },
        {
          id: 5, name: 'AMURRIO MARQUEZ MARY', group: '23', days: [
            { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 205' },
            { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 106' }
          ]
        },
        {
          id: 6, name: 'JIMENEZ PINTO EDWIN', group: '24', days: [
            { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 504'},
            { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 514' }
          ]
        },
        {
          id: 7, name: 'JIMENEZ PINTO EDWIN', group: '25', days: [
            { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 545'},
            { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 543' }
          ]
        }
      ]
    }, {
      nombre: 'ECONOMÍA GENERAL',
      docentes: [
        {
          id: 1, name: 'GRIGORIU MONROY FRANCISCO PABLO', group: '03', days: [
            { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 308' },
            { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 308' },
            { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 308' }
          ]
        },
        {
          id: 2, name: 'ARAUJO COSSIO ALDO ROMEL', group: '04', days: [
            { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 310' },
            { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 310' },
            { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 310' }
          ]
        },
        {
          id: 3, name: 'ASCARRAGA SEJAS WILMAR HENRY', group: '21', days: [
            { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E PB-4' },
            { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 309' },
            { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E PB-2' }
          ]
        },
        {
          id: 4, name: 'MERCADO SORIA JESUS BERNARDO', group: '22', days: [
            { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 518' },
            { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 514' },
            { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 508' }
          ]
        },
        {
          id: 5, name: 'HUMEREZ MONTALVO ALBERTO', group: '23', days: [
            { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 109' },
            { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 106' },
            { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 109' }
          ]
        },
        {
          id: 6, name: 'QUISPE CONDORI RODRIGO ALVARO', group: '24', days: [
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
          id: 1, name: 'SEVILLA CESPEDES CLAUDIA', group: '01', days: [
            { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 541' },
            { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 510' },
            { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 541' }
          ]
        },
        {
          id: 2, name: 'SEVILLA CESPEDES CLAUDIA', group: '03', days: [
            { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 309' },
            { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 101' },
            { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 310' }
          ]
        },
        {
          id: 3, name: 'ROCHA CHAVEZ LILIAN MARCELA', group: '22', days: [
            { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 520' },
            { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 206' },
            { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 207' }
          ]
        },
        {
          id: 4, name: 'ROCHA CHAVEZ LILIAN MARCELA', group: '23', days: [
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
          id: 1, name: 'ANTEZANA LA FUENTE JORGE CARLOS', group: '02', days: [
            { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 511' },
            { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 506' }
          ]
        },
        {
          id: 2, name: 'GUZMAN RODRIGUEZ JESUS', group: '03', days: [
            { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 512' },
            { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 517' }
          ]
        },
        {
          id: 3, name: 'ANTEZANA LA FUENTE JORGE CARLOS', group: '05', days: [
            { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 517' },
            { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 108' }
          ]
        },
        {
          id: 4, name: 'ESCALERA MELGAR ALBERTO', group: '21', days: [
            { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 104' },
            { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E 103' }
          ]
        },
        {
          id: 4, name: 'INCA QUISPE RONALD DAVID', group: '24', days: [
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
              id: 1, name: 'QUINTANA ALVAREZ JHONNY', group: '10', days: [
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 543' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 101' },
                { day: 'Viernes', start: '11:15', end: '12:45', classRoom: 'E 205' }
              ]
            },
            {
              id: 2, name: 'CUIZA BARRENECHEA LOURDES', group: '21', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 511' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 542' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 209' },
                { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 509', auxiliary: true }
              ]
            },
            {
              id: 3, name: 'CUIZA BARRENECHEA LOURDES', group: '22', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 307' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 517' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 518' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 516', auxiliary: true }
              ]
            },
            {
              id: 4, name: 'MONTAÑO VARGAS OSCAR', group: '23', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 514' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 509' },
                { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E 510' },
                { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 514', auxiliary: true }
              ]
            },
            {
              id: 5, name: 'CUIZA BARRENECHEA LOURDES', group: '24', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 510' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 108' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 201' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E 108', auxiliary: true }
              ]
            },
            {
              id: 6, name: 'LAZARTE MALDONADO GROVER ANGEL', group: '25', days: [
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 518' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 202' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 208' }
              ]
            }
          ]
        },{
          nombre: 'MICROECONOMÍA',
          docentes: [
            {
              id: 3, name: 'HUMEREZ MONTALVO ALBERTO', group: '01', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 107' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 106' }
              ]
            },
            {
              id: 4, name: 'HUMEREZ MONTALVO ALBERTO', group: '02', days: [
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 107' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 110' }
              ]
            },
            {
              id: 5, name: 'ZUBIETA FLORIDO FREDDY', group: '03', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 108' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 523' }
              ]
            },
            {
              id: 6, name: 'CABERO CALATAYUD CARLOS F.', group: '04', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 518' },
                { day: 'Miercoles', start: '11:15', end: '12:45', classRoom: 'E PB-2' }
              ]
            }
          ]
        },{
          nombre: 'ESTADÍSTICA I',
          docentes: [
            {
              id: 1, name: 'MONTANO QUIROGA CLAUDIA CAROLA', group: '01', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 514' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 524' }
              ]
            },
            {
              id: 2, name: 'BUSTAMANTE MALDONADO FERNANDO', group: '02', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 526' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 108' }
              ]
            },
            {
              id: 3, name: 'BUSTAMANTE MALDONADO FERNANDO', group: '04', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 104' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 529' }
              ]
            },
            {
              id: 4, name: 'SEMPERTEGUI ZEBALLOS SANDRA MA', group: '05', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 106' },
                { day: 'Miercoles', start: '06:45', end: '08:15', classRoom: 'E 541' }
              ]
            },
            {
              id: 5, name: 'APAZA COLQUE FELIX JUAN', group: '06', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 107' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 303' }
              ]
            },
            {
              id: 6, name: 'ALBORTA SILES RAUL JOSE', group: '22', days: [
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 518' },
                { day: 'Sabádo', start: '11:15', end: '12:45', classRoom: 'E 506' }
              ]
            }
          ]
        },{
          nombre: 'INVESTIGACIÓN OPERATIVA',
          docentes: [
            {
              id: 1, name: 'HINOJOSA DE IRAOLA MARCELO', group: '01', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 511' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 524' }
              ]
            },
            {
              id: 2, name: 'HINOJOSA DE IRAOLA MARCELO', group: '02', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 523' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 546' }
              ]
            },
            {
              id: 3, name: 'ALIENDRE LAFUENTE ROMER SIMON', group: '05', days: [
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 408' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 513' }
              ]
            },
            {
              id: 4, name: 'HINOJOSA DE IRAOLA MARCELO', group: '07', days: [
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 544' },
                { day: 'Miercoles', start: '09:45', end: '11:15', classRoom: 'E 518' }
              ]
            },
            {
              id: 5, name: 'ALIENDRE LAFUENTE ROMER SIMON', group: '21', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 512' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 517' }
              ]
            },
            {
              id: 6, name: 'ZUBIETA FLORIDO FREDDY', group: '22', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 510' },
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 513' }
              ]
            },
            {
              id: 7, name: 'MERCADO SORIA JESUS BERNARDO', group: '23', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E PB-1' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 516' }
              ]
            }
          ]
        },{
          nombre: 'MACROECONOMÍA',
          docentes: [
            {
              id: 1, name: 'MANSILLA HEREDIA ALFREDO EDUARDO', group: '01', days: [
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 301' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 110' }
              ]
            },
            {
              id: 2, name: 'HUMEREZ MONTALVO ALBERTO', group: '02', days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 110' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 108' }
              ]
            },
            {
              id: 3, name: 'HUMEREZ MONTALVO ALBERTO', group: '03', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 107' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 106' }
              ]
            },
            {
              id: 4, name: 'VALDIVIEZO MALDONADO LINO JUAN CARLOS', group: '04', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 301' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 105' }
              ]
            },
            {
              id: 5, name: 'CONDORI ARIAS HERMOGENES', group: '21', days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 108' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 301' }
              ]
            },
            {
              id: 6, name: 'MANSILLA HEREDIA ALFREDO EDUARDO', group: '23', days: [
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 205' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E 102' }
              ]
            }
          ]
        }
      ]
    },{
      nombre: 'CUARTO SEMESTRE',
      materias: [
        {
          nombre: 'CONTABILIDAD DE BANCOS Y ENTIDADES FINANCIERA',
          docentes: [
            {
              id: 1, name: 'PEREZ AMADOR JOSE ELMER PETER', group: '10', days: [
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 543' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 101' },
                { day: 'Viernes', start: '11:15', end: '12:45', classRoom: 'E 205' }
              ]
            },
            {
              id: 2, name: 'CUIZA BARRENECHEA LOURDES', group: '21', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 511' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 542' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 209' },
                { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 509', auxiliary: true }
              ]
            },
            {
              id: 3, name: 'CUIZA BARRENECHEA LOURDES', group: '22', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 307' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 517' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 518' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 516', auxiliary: true }
              ]
            },
            {
              id: 4, name: 'MONTAÑO VARGAS OSCAR', group: '23', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 514' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 509' },
                { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E 510' },
                { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 514', auxiliary: true }
              ]
            },
            {
              id: 5, name: 'CUIZA BARRENECHEA LOURDES', group: '24', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 510' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 108' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 201' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E 108', auxiliary: true }
              ]
            },
            {
              id: 6, name: 'LAZARTE MALDONADO GROVER ANGEL', group: '25', days: [
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 518' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 202' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 208' }
              ]
            }
          ]
        }
      ]
    }
  ];


  days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  hours = ['06:45', '08:15', '09:45', '11:15', '12:45', '14:15', '15:45', '16:30', '17:15', '18:45', '20:15', '21:45'];

  // Materias disponibles
  subjects = [
    { id: 1, name: 'CONTABILIDAD BÁSICA', group: '623 G:1', day: 'Lunes', time: '14:15' },
    { id: 2, name: 'CONTABILIDAD BÁSICA', group: '693D G:1', day: 'Martes', time: '14:15' },
    { id: 3, name: 'CONTABILIDAD III', group: '684B G:C1', day: 'Lunes', time: '14:15' }
  ];

  selectedSubjects: any[] = [];

  toggleSubject(subject: any, event: any) {

    if (event.target.checked) {
      let color = this.colors[0];
      this.inUse.push(color);
      let index = this.colors.findIndex((colorArr) => { return colorArr == color });
      this.colors.splice(index, 1);


      if (subject.days.length > 0) {
        subject.color = color;
        for (let day of subject.days) {
          this.selectedSubjects.push({ idGroup: subject.id, ...day, name: subject.name, group: subject.group, color: color });
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
}
