import { Component } from '@angular/core';
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
        }, {
          nombre: 'DERECHO DEL TRABAJO',
          docentes: [
            {
              id: 1, name: 'TORRICO OCAMPO ENRIQUE', group: '01', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 518' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 507' }
              ]
            },
            {
              id: 2, name: 'QUIROZ GOMEZ CARMEN RITA', group: '02', days: [
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 541' },
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
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 504' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 514' }
              ]
            },
            {
              id: 7, name: 'JIMENEZ PINTO EDWIN', group: '25', days: [
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 545' },
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
        }, {
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
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E PB-2' }
              ]
            }
          ]
        }, {
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
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 541' }
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
        }, {
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
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 518' }
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
        }, {
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
    }, {//dragon
      nombre: 'CUARTO SEMESTRE',
      materias: [
        {
          nombre: 'CONTABILIDAD DE BANCOS Y ENTIDADES FINANCIERA',
          docentes: [
            {
              id: 1, name: 'PEREZ AMADOR JOSE ELMER PETER', group: '01', days: [
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 543' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 543' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 503' }
              ]
            },
            {
              id: 2, name: 'PAREDES JALDIN EDUARDO JOAQUIN', group: '10', days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 301' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 543' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 301' }
              ]
            },
            {
              id: 3, name: 'PEREZ AMADOR JOSE ELMER PETER', group: '21', days: [
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 543' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 543' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 543' }
              ]
            },
            {
              id: 4, name: 'CACERES MONTERO JAIME', group: '22', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 521' },
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 507' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 513' }
              ]
            },
            {
              id: 5, name: 'CACERES MONTERO JAIME', group: '26', days: [
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
              id: 1, name: 'URQUIDI BELLIDO SONIA', group: '01', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 516' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 406' }
              ]
            },
            {
              id: 2, name: 'TABORGA ACHA FIDEL', group: '02', days: [
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 509' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 513' }
              ]
            },
            {
              id: 3, name: 'CAMACHO VILLARROEL MIRIAM DEL ROSARIO', group: '03', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 304' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 506' }
              ]
            },
            {
              id: 4, name: 'JALDIN QUIROZ RENE', group: '04', days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 546' },
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 546' }
              ]
            },
            {
              id: 5, name: 'APAZA COLQUE FELIX JUAN', group: '21', days: [
                { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 517' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 512' }
              ]
            },
            {
              id: 6, name: 'VALDIVIEZO MALDONADO LINO JUAN CARLOS', group: '22', days: [
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
              id: 1, name: 'CRESPO FLORES RENE CARLOS', group: '02', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 523' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 523' },
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 205', auxiliary: true }
              ]
            },
            {
              id: 2, name: 'TORRES ARANDIA WILLIAM', group: '03', days: [
                { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 305' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 303' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 508', auxiliary: true }
              ]
            },
            {
              id: 3, name: 'TORRES ARANDIA WILLIAM', group: '21', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 516', auxiliary: true },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 303' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 303' }
              ]
            },
            {
              id: 4, name: 'TORREZ AGUILAR JOSE', group: '22', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 541' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 520' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 514', auxiliary: true }
              ]
            },
            {
              id: 5, name: 'SARMIENTO JALDIN RODOLFO', group: '23', days: [
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
              id: 1, name: 'RIVERA MICHEL HENRY', group: '01', days: [
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 508' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 517' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 517' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 304', auxiliary: true }
              ]
            },
            {
              id: 2, name: 'CHOQUEPALPA RIOZ ORLANDO DANIEL', group: '02', days: [
                { day: 'Martes', start: '15:45', end: '17:15', classRoom: 'E 507', auxiliary: true },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 511' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 511' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 512' }
              ]
            },
            {
              id: 3, name: 'CRESPO ZAMBRANA PETER IVAN', group: '10', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 107' },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 511' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 208' }
              ]
            },
            {
              id: 4, name: 'CHOQUEPALPA RIOZ ORLANDO DANIEL', group: '21', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 516', auxiliary: true },
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 516' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 508' },
                { day: 'Viernes', start: '17:15', end: '18:45', classRoom: 'E 507' }
              ]
            },
            {
              id: 5, name: 'MORALES GUZMAN CESAR', group: '22', days: [
                { day: 'Lunes', start: '12:45', end: '14:15', classRoom: 'E 203' },
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 203' },
                { day: 'Viernes', start: '17:15', end: '18:45', classRoom: 'E 103' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 207', auxiliary: true }
              ]
            },
            {
              id: 6, name: 'RIVERA CLAROS WILDER OMAR', group: '23', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 542' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 101' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 207' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 106', auxiliary: true }
              ]
            }
          ]
        },
        {
          nombre: 'INFORMÁTICA II',
          docentes: [
            {
              id: 1, name: 'SEMPERTEGUI ZEBALLOS SANDRA MA', group: '02', days: [
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 407' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 407' }
              ]
            },
            {
              id: 2, name: 'SEMPERTEGUI ZEBALLOS SANDRA MA', group: '03', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 402' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 407' }
              ]
            },
            {
              id: 3, name: 'CAMACHO DEL CASTILLO INDIRA', group: '04', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 402' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 407' }
              ]
            },
            {
              id: 4, name: 'ARAMAYO ANTEZANA JAIME ANTONIO', group: '21', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 401' },
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 550' }
              ]
            },
            {
              id: 5, name: 'VELARDE POMA JUAN CARLOS', group: '22', days: [
                { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 401' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 402' }
              ]
            },
            {
              id: 6, name: 'GUEVARA ESPINOZA JORGE', group: '23', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 406' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 406' }
              ]
            },
            {
              id: 7, name: 'ARAMAYO ANTEZANA JAIME ANTONIO', group: '24', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 550' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 407' }
              ]
            },
            {
              id: 8, name: 'ZAMORANO ESCALANTE JAIME', group: '25', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 401' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 401' }
              ]
            },
            {
              id: 9, name: 'LOPEZ LOPEZ JAIME', group: '26', days: [
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 407' },
                { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 407' }
              ]
            },
            {
              id: 10, name: 'ZAMORANO ESCALANTE JAIME', group: '27', days: [
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
              id: 1, name: 'VALDEZ ESCOBAR JORGE', group: '01', days: [
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 508' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 510' }
              ]
            },
            {
              id: 2, name: 'ALIENDRE LAFUENTE ROMER SIMON', group: '02', days: [
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 514' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 509' }
              ]
            },
            {
              id: 3, name: 'FERREIRA MONTES VICTOR HUGO', group: '03', days: [
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 506' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 513' }
              ]
            },
            {
              id: 4, name: 'PAREDES JALDIN EDUARDO JOAQUIN', group: '04', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 303' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 310' }
              ]
            },
            {
              id: 5, name: 'ALIENDRE LAFUENTE ROMER SIMON', group: '21', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 507' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E 512' }
              ]
            }
          ]
        }
      ]
    }, {//dragon
      nombre: 'QUINTO SEMESTRE',
      materias: [
        {
          nombre: 'DERECHO TRIBUTARIO',
          docentes: [
            {
              id: 1, name: 'JIMENEZ PINTO EDWIN', group: '01', days: [
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 107' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 546' }
              ]
            },
            {
              id: 2, name: 'CARVAJAL SORIA LUIS GERARDO', group: '10', days: [
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 107' },
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 107' }
              ]
            },
            {
              id: 3, name: 'QUIROZ GOMEZ CARMEN RITA', group: '21', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 542' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 514' }
              ]
            },
            {
              id: 4, name: 'JIMENEZ PINTO EDWIN', group: '22', days: [
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 511' },
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 541' }
              ]
            },
            {
              id: 5, name: 'POR DESIGNAR DOCENTE', group: '23', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 509' },
                { day: 'Viernes', start: '17:15', end: '18:45', classRoom: 'E 542' }
              ]
            },
            {
              id: 6, name: 'CABRERA ROMAN CESAR', group: '24', days: [
                { day: 'Lunes', start: '12:45', end: '14:15', classRoom: 'E 507' },
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 508' }
              ]
            },
            {
              id: 7, name: 'CARVAJAL SORIA LUIS GERARDO', group: '25', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 517' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 517' }
              ]
            }
          ]
        }, {
          nombre: 'CONTABILIDAD PETROLERA Y MINERA',
          docentes: [
            {
              id: 1, name: 'MALDONADO ULUNQUE VICTOR HUGO', group: '01', days: [
                { day: 'Lunes', start: '15:45', end: '17:15', classRoom: 'E 542' },
                { day: 'Miércoles', start: '15:45', end: '17:15', classRoom: 'E 544' },
                { day: 'Jueves', start: '15:45', end: '17:15', classRoom: 'E 104' }
              ]
            },
            {
              id: 2, name: 'MALDONADO ULUNQUE VICTOR HUGO', group: '02', days: [
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 204' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 104' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 101' }
              ]
            },
            {
              id: 3, name: 'MALDONADO ULUNQUE VICTOR HUGO', group: '21', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 104' },
                { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 104' },
                { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 101' }
              ]
            },
            {
              id: 4, name: 'LEYTON GUTIERREZ SONIA', group: '22', days: [
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
              id: 1, name: 'VILLARROEL MERCADO ALBERTO', group: '01', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 511', auxiliary: true },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 510' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 510' }
              ]
            },
            {
              id: 2, name: 'VILLARROEL MERCADO ALBERTO', group: '21', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 106' },
                { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 106' },
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 512', auxiliary: true }
              ]
            },
            {
              id: 3, name: 'VILLARROEL MERCADO ALBERTO', group: '22', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 514' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 507' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 107', auxiliary: true }
              ]
            },
            {
              id: 4, name: 'SILES RODRIGUEZ ADOLFO JORGE', group: '23', days: [
                { day: 'Lunes', start: '12:45', end: '14:15', classRoom: 'E 104' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 104' },
                { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 507', auxiliary: true }
              ]
            },
            {
              id: 5, name: 'GUZMAN RODRIGUEZ JESUS', group: '24', days: [
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
              id: 1, name: 'POR DESIGNAR DOCENTE', group: '02', days: [
                { day: 'Martes', start: '15:45', end: '17:15', classRoom: 'E 512', auxiliary: true },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 516' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 510' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 510' }
              ]
            },
            {
              id: 2, name: 'INCA QUISPE RONALD DAVID', group: '10', days: [
                { day: 'Martes', start: '14:15', end: '15:45', classRoom: 'E 542' },
                { day: 'Miércoles', start: '14:15', end: '15:45', classRoom: 'E 542' },
                { day: 'Jueves', start: '14:15', end: '15:45', classRoom: 'E 542' }
              ]
            },
            {
              id: 3, name: 'CHOQUEPALPA RIOZ ORLANDO DANIEL', group: '21', days: [
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 205', auxiliary: true },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 507' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 508' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 506' }
              ]
            },
            {
              id: 4, name: 'INCA QUISPE RONALD DAVID', group: '22', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 546' },
                { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 508' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 546' },
                { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E 102', auxiliary: true }
              ]
            },
            {
              id: 5, name: 'VILLARROEL ANTEZANA LENNY', group: '23', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 509' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 508' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E 506' },
                { day: 'Viernes', start: '17:15', end: '18:45', classRoom: 'E 508', auxiliary: true }
              ]
            }
          ]
        }, {
          nombre: 'COSTOS II',
          docentes: [
            {
              id: 1, name: 'LEDEZMA SANDOVAL FEDERICO', group: '03', days: [
                { day: 'Lunes', start: '14:15', end: '15:45', classRoom: 'E 507' },
                { day: 'Miércoles', start: '15:45', end: '17:15', classRoom: 'E 506' },
                { day: 'Viernes', start: '14:15', end: '15:45', classRoom: 'E 507' }
              ]
            },
            {
              id: 2, name: 'LOPEZ VALENZUELA JOSE WALTER', group: '21', days: [
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 518' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 510' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 514' }
              ]
            },
            {
              id: 3, name: 'LOPEZ VALENZUELA JOSE WALTER', group: '22', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 512' },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 542' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 514' }
              ]
            },
            {
              id: 4, name: 'LEDEZMA SANDOVAL FEDERICO', group: '25', days: [
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
              id: 1, name: 'AVILA MAMANI HECTOR JOSE', group: '01', days: [
                { day: 'Miércoles', start: '12:15', end: '14:15', classRoom: 'E 407' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 407' }
              ]
            },
            {
              id: 2, name: 'CAMACHO DEL CASTILLO INDIRA', group: '03', days: [
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 407' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 407' }
              ]
            },
            {
              id: 3, name: 'SEMPERTEGUI ZEBALLOS SANDRA MA', group: '04', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 407' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 402' }
              ]
            },
            {
              id: 4, name: 'ZAMORANO ESCALANTE JAIME', group: '10', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 402' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 402' }
              ]
            },
            {
              id: 5, name: 'AVILA MAMANI HECTOR JOSE', group: '22', days: [
                { day: 'Lunes', start: '12:45', end: '14:15', classRoom: 'E 407' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E 407' }
              ]
            },
            {
              id: 6, name: 'ARAMAYO ANTEZANA JAIME ANTONIO', group: '23', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 407' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 407' }
              ]
            },
            {
              id: 7, name: 'AVILA MAMANI HECTOR JOSE', group: '24', days: [
                { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 402' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 407' }
              ]
            },
            {
              id: 8, name: 'AVILA MAMANI HECTOR JOSE', group: '25', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 407' },
                { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 402' }
              ]
            }
          ]
        }
      ]
    }, {//dragon
      nombre: 'SEXTO SEMESTRE',
      materias: [
        {
          nombre: 'DERECHO TRIBUTARIO',
          docentes: [
            {
              id: 1, name: 'CORNEJO PARRA JAIME', group: '01', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 507' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 508' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 516' }
              ]
            },
            {
              id: 2, name: 'TORREZ AGUILAR JOSE', group: '02', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 513' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 523' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 511' }
              ]
            },
            {
              id: 3, name: 'TORREZ AGUILAR JOSE', group: '21', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 102' },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 513' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 512' }
              ]
            },
            {
              id: 4, name: 'CORNEJO PARRA JAIME', group: '22', days: [
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 546' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 307' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 106' }
              ]
            },
            {
              id: 5, name: 'RIVERA CLAROS WILDER OMAR', group: '23', days: [
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
              id: 1, name: 'MARTINEZ ALPIRI ANAHI MONICA', group: '01', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 510' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 541' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 107' }
              ]
            },
            {
              id: 2, name: 'TORRICO LARA ALEX', group: '02', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 408' },
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 510' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 408' }
              ]
            },
            {
              id: 3, name: 'VARGAS OROSCO FREDDY', group: '21', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 510' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 517' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 517' }
              ]
            },
            {
              id: 4, name: 'VARGAS OROSCO FREDDY', group: '23', days: [
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
              id: 1, name: 'POR DESIGNAR DOCENTE', group: '01', days: [
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 307' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 307' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 307' }
              ]
            },
            {
              id: 2, name: 'GARCIA TORDOYA RICARDO', group: '21', days: [
                { day: 'Martes', start: '17:15', end: '18:45', classRoom: 'E 308' },
                { day: 'Miércoles', start: '17:15', end: '18:45', classRoom: 'E 309' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 205' }
              ]
            },
            {
              id: 3, name: 'POR DESIGNAR DOCENTE', group: '22', days: [
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 307' },
                { day: 'Viernes', start: '11:15', end: '12:45', classRoom: 'E 307' },
                { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 307' }
              ]
            },
            {
              id: 4, name: 'ARAMAYO ANTEZANA JAIME ANTONIO', group: '23', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 550' },
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 207' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 402' }
              ]
            },
            {
              id: 5, name: 'POR DESIGNAR DOCENTE', group: '24', days: [
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 307' },
                { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E 307' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 307' }
              ]
            },
            {
              id: 6, name: 'CORNEJO PARRA MIRKO DARIO', group: '25', days: [
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
              id: 1, name: 'RIVERA MICHEL HENRY', group: '01', days: [
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 507' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 510' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 509' }
              ]
            },
            {
              id: 2, name: 'MORALES ROJAS ARTURO JOSE L.', group: '02', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 510' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 506' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 510' }
              ]
            },
            {
              id: 3, name: 'GARCIA TORDOYA RICARDO', group: '21', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 305' },
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 503' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 503' }
              ]
            },
            {
              id: 4, name: 'LOPEZ LOPEZ JAIME', group: '23', days: [
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
              id: 1, name: 'NAVIA QUIROGA GUSTAVO', group: '01', days: [
                { day: 'Martes', start: '14:15', end: '15:45', classRoom: 'E 508' },
                { day: 'Jueves', start: '14:15', end: '15:45', classRoom: 'E 507' },
                { day: 'Viernes', start: '14:15', end: '15:45', classRoom: 'E 508' }
              ]
            },
            {
              id: 2, name: 'GUZMAN DURAN GONZALO', group: '21', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 514' },
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 107' },
                { day: 'Miércoles', start: '12:45', end: '14:15', classRoom: 'E 511' }
              ]
            },
            {
              id: 3, name: 'SARMIENTO JALDIN RODOLFO', group: '22', days: [
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 110' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 508' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 102' }
              ]
            },
            {
              id: 4, name: 'VALDEZ ZEGARRA RAFAEL A.', group: '23', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 104' },
                { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 517' },
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 513' }
              ]
            }
          ]
        }

      ]
    }, {//dragon
      nombre: 'SEPTIMO SEMESTRE',
      materias: [
        {
          nombre: 'ECONOMÍA FISCAL',
          docentes: [
            {
              id: 1, name: 'REYNAGA ARCE HENRY RUKNER', group: '01', days: [
                { day: 'Lunes', start: '14:15', end: '15:45', classRoom: 'E 106' },
                { day: 'Miércoles', start: '14:15', end: '15:45', classRoom: 'E 106' },
                { day: 'Viernes', start: '14:15', end: '15:45', classRoom: 'E 106' }
              ]
            },
            {
              id: 2, name: 'CARRASCO BRANEZ OSCAR', group: '02', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 110' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 108' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 510' }
              ]
            },
            {
              id: 3, name: 'TORREZ GALARZA ANDRES REYNALDO', group: '03', days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 518' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 523' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 514' }
              ]
            },
            {
              id: 4, name: 'CARRASCO BRANEZ OSCAR', group: '21', days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 508' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 543' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 541' }
              ]
            },
            {
              id: 5, name: 'CARRASCO BRANEZ OSCAR', group: '23', days: [
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
              id: 1, name: 'MENDOZA CRESPO JOSE ANTONIO', group: '01', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 201' },
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E PB-2' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 203' }
              ]
            },
            {
              id: 2, name: 'OLIVERA TAPIA JUAN CARLOS', group: '02', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 208' },
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 306' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 310' }
              ]
            },
            {
              id: 3, name: 'CRESPO ZAMBRANA PETER IVAN', group: '21', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 207' },
                { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 105' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 106' }
              ]
            },
            {
              id: 4, name: 'VILLAZON ARANDIA RICARDO IVAN', group: '22', days: [
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
              id: 1, name: 'VARGAS JIMENEZ GROVER RULER', group: '01', days: [
                { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 102' },
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 102' },
                { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 511' }
              ]
            },
            {
              id: 2, name: 'CORNEJO PARRA JAIME', group: '02', days: [
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 408' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 110' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 521' }
              ]
            },
            {
              id: 3, name: 'GARCIA ZAMORANO JESUS CESAR', group: '21', days: [
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
              id: 1, name: 'LAZARTE MALDONADO GROVER ANGEL', group: '02', days: [
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 304' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 104' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 205' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 516', auxiliary: true }
              ]
            },
            {
              id: 2, name: 'PEREZ VILLANUEVA MARCIAL', group: '21', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 513' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 511' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 508' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 103', auxiliary: true }
              ]
            },
            {
              id: 3, name: 'MENDIZABAL VEGA VICTOR HUGO', group: '22', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 104' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 107' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 107' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 302', auxiliary: true }
              ]
            },
            {
              id: 4, name: 'MENDIZABAL VEGA VICTOR HUGO', group: '24', days: [
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
              id: 1, name: 'CARRASCO BRANEZ OSCAR', group: '01', days: [
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 110' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 404' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 509' }
              ]
            },
            {
              id: 2, name: 'LEDEZMA RIVERA JHONNY LIMBERT', group: '21', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 545' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 110' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 110' }
              ]
            },
            {
              id: 3, name: 'CARRASCO BRANEZ OSCAR', group: '23', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 509' },
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 510' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 516' }
              ]
            },
            {
              id: 4, name: 'LEDEZMA RIVERA JHONNY LIMBERT', group: '24', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 506' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 546' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 542' }
              ]
            }
          ]
        }

      ]
    }, {//dragon
      nombre: 'OCTAVO SEMESTRE',
      materias: [
        {
          nombre: 'AUDITORIA TRIBUTARIA I',
          docentes: [
            {
              id: 1, name: 'VILLARROEL ANTEZANA LENNY', group: '01', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 509' },
                { day: 'Miércoles', start: '08:15', end: '09:45', classRoom: 'E 507' },
                { day: 'Viernes', start: '08:15', end: '09:45', classRoom: 'E 507' }
              ]
            },
            {
              id: 2, name: 'VILLACORTA GUZMAN ROSMERY', group: '21', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 507' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 507' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 544' }
              ]
            },
            {
              id: 3, name: 'VILLACORTA GUZMAN ROSMERY', group: '22', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 507' },
                { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 506' },
                { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 506' }
              ]
            },
            {
              id: 4, name: 'CUIZA BARRENECHEA LOURDES', group: '23', days: [
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
              id: 1, name: 'ROCHA CLAROS JUAN', group: '10', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E PB-2' },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 514' },
                { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 106' }
              ]
            },
            {
              id: 2, name: 'VARGAS JIMENEZ GROVER RULER', group: '21', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 516' },
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 103' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 510' }
              ]
            },
            {
              id: 3, name: 'PEREZ VILLANUEVA MARCIAL', group: '22', days: [
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 543' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 507' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 545' }
              ]
            },
            {
              id: 4, name: 'TORRICO SANCHEZ FELIPE ROBERTO', group: '23', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 517' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 104' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 518' }
              ]
            },
            {
              id: 5, name: 'ROCHA CLAROS JUAN', group: '24', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 542' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E PB-2' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 302' }
              ]
            }
          ]
        },
        {
          nombre: 'AUDIATORÍA II',
          docentes: [
            {
              id: 1, name: 'PEREZ VILLANUEVA MARCIAL', group: '21', days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 308' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 512' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 511' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 511', auxiliary: true }
              ]
            },
            {
              id: 2, name: 'POR DESIGNAR DOCENTE', group: '22', days: [
                { day: 'Martes', start: '12:45', end: '14:15', classRoom: 'E 303', auxiliary: true },
                { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 105' },
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 105' },
                { day: 'Sábado', start: '11:15', end: '12:45', classRoom: 'E 104' }
              ]
            },
            {
              id: 3, name: 'CORTEZ VALLEJO WALTER', group: '24', days: [
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
              id: 1, name: 'IRIARTE DE LA FUENTE MARCELA', group: '01', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 512' },
                { day: 'Miércoles', start: '09:45', end: '11:15', classRoom: 'E 513' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 512' }
              ]
            },
            {
              id: 2, name: 'IRIARTE DE LA FUENTE MARCELA', group: '03', days: [
                { day: 'Lunes', start: '09:45', end: '11:15', classRoom: 'E 513' },
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 512' },
                { day: 'Miércoles', start: '11:15', end: '12:45', classRoom: 'E 513' }
              ]
            },
            {
              id: 3, name: 'AYALA LEAÑO WALTER DANIEL', group: '22', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E PB-1' },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 516' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 506' }
              ]
            },
            {
              id: 4, name: 'MERCADO SORIA JESUS BERNARDO', group: '24', days: [
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
              id: 1, name: 'LAFUENTE ARANIBAR JIMMY ROBERTO', group: '10', days: [
                { day: 'Lunes', start: '12:45', end: '14:15', classRoom: 'E 509' },
                { day: 'Jueves', start: '12:45', end: '14:15', classRoom: 'E 550' },
                { day: 'Viernes', start: '12:45', end: '14:15', classRoom: 'E 550' }
              ]
            },
            {
              id: 2, name: 'GARCIA ZAMORANO JESUS CESAR', group: '12', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 401' },
                { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 401' },
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 401' }
              ]
            },
            {
              id: 3, name: 'LAFUENTE ARANIBAR JIMMY ROBERTO', group: '21', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 550' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 518' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 550' }
              ]
            },
            {
              id: 4, name: 'VARGAS JIMENEZ GROVER RULER', group: '22', days: [
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 512' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 509' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E 514' }
              ]
            },
            {
              id: 5, name: 'VARGAS JIMENEZ GROVER RULER', group: '23', days: [
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 512' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 511' },
                { day: 'Sábado', start: '09:45', end: '11:15', classRoom: 'E 511' }
              ]
            },
            {
              id: 6, name: 'LAFUENTE ARANIBAR JIMMY ROBERTO', group: '24', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 304' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 550' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 550' }
              ]
            }
          ]
        }

      ]
    }, {//dragon
      nombre: 'NOVENO SEMESTRE',
      materias: [
        {
          nombre: 'AUDITORIA TRIBUTARIA II',
          docentes: [
            {
              id: 1, name: 'VILLARROEL ANTEZANA LENNY', group: '01', days: [
                { day: 'Martes', start: '08:15', end: '09:45', classRoom: 'E 506' },
                { day: 'Jueves', start: '08:15', end: '09:45', classRoom: 'E 508' },
                { day: 'Sábado', start: '08:15', end: '09:45', classRoom: 'E 506' }
              ]
            },
            {
              id: 2, name: 'VILLACORTA GUZMAN ROSMERY', group: '03', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 303' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 508' },
                { day: 'Jueves', start: '06:45', end: '08:15', classRoom: 'E 209' }
              ]
            },
            {
              id: 3, name: 'CUIZA BARRENECHEA LOURDES', group: '21', days: [
                { day: 'Lunes', start: '17:15', end: '18:45', classRoom: 'E 105' },
                { day: 'Jueves', start: '17:15', end: '18:45', classRoom: 'E 105' },
                { day: 'Viernes', start: '17:15', end: '18:45', classRoom: 'E 517' }
              ]
            },
            {
              id: 4, name: 'VILLACORTA GUZMAN ROSMERY', group: '22', days: [
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
              id: 1, name: 'MANZANO ANZALDO NELSON TITO', group: '01', days: [
                { day: 'Martes', start: '09:45', end: '11:15', classRoom: 'E 509' },
                { day: 'Jueves', start: '09:45', end: '11:15', classRoom: 'E 507' },
                { day: 'Viernes', start: '09:45', end: '11:15', classRoom: 'E 541' }
              ]
            },
            {
              id: 2, name: 'LOPEZ VALENZUELA JOSE WALTER', group: '21', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 518' },
                { day: 'Jueves', start: '18:45', end: '20:15', classRoom: 'E 107' },
                { day: 'Viernes', start: '18:45', end: '20:15', classRoom: 'E 107' }
              ]
            },
            {
              id: 3, name: 'VILLARROEL DAZA MARIA HELEN', group: '23', days: [
                { day: 'Lunes', start: '11:15', end: '12:45', classRoom: 'E 302' },
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 302' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 302' }
              ]
            },
            {
              id: 4, name: 'SEVILLA CESPEDES CLAUDIA', group: '27', days: [
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
              id: 1, name: 'LEYTON GUTIERREZ SONIA', group: '01', days: [
                { day: 'Lunes', start: '08:15', end: '09:45', classRoom: 'E 513' },
                { day: 'Martes', start: '11:15', end: '12:45', classRoom: 'E 513' },
                { day: 'Jueves', start: '11:15', end: '12:45', classRoom: 'E 513' }
              ]
            },
            {
              id: 2, name: 'GARCIA TORDOYA RICARDO', group: '21', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 404' },
                { day: 'Martes', start: '06:45', end: '08:15', classRoom: 'E 105' },
                { day: 'Miércoles', start: '06:45', end: '08:15', classRoom: 'E 109' }
              ]
            },
            {
              id: 3, name: 'LOPEZ LOPEZ JAIME', group: '23', days: [
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
              id: 1, name: 'ROCHA CLAROS JUAN', group: '22', days: [
                { day: 'Lunes', start: '06:45', end: '08:15', classRoom: 'E 514' },
                { day: 'Viernes', start: '06:45', end: '08:15', classRoom: 'E 513' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E 516' }
              ]
            },
            {
              id: 2, name: 'ROCHA CLAROS JUAN', group: '23', days: [
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 516' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 108' },
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 507' }
              ]
            },
            {
              id: 3, name: 'CORNEJO PARRA JAIME', group: '24', days: [
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
              id: 1, name: 'PEREZ VILLANUEVA MARCIAL', group: '21', days: [
                { day: 'Jueves', start: '20:15', end: '21:45', classRoom: 'E 511' },
                { day: 'Viernes', start: '20:15', end: '21:45', classRoom: 'E 542' },
                { day: 'Sábado', start: '06:45', end: '08:15', classRoom: 'E 545' }
              ]
            },
            {
              id: 2, name: 'TORREZ BRAVO CARLOS ALFREDO', group: '22', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 541' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 509' },
                { day: 'Viernes', start: '17:15', end: '18:45', classRoom: 'E 541' }
              ]
            },
            {
              id: 3, name: 'TORREZ BRAVO CARLOS ALFREDO', group: '23', days: [
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
              id: 1, name: 'ESPADA FLORES JUAN RAMIRO', group: '21', days: [
                { day: 'Lunes', start: '18:45', end: '20:15', classRoom: 'E 516' },
                { day: 'Martes', start: '20:15', end: '21:45', classRoom: 'E 507' },
                { day: 'Miércoles', start: '18:45', end: '20:15', classRoom: 'E 513' }
              ]
            },
            {
              id: 2, name: 'ESPADA FLORES JUAN RAMIRO', group: '22', days: [
                { day: 'Lunes', start: '20:15', end: '21:45', classRoom: 'E 516' },
                { day: 'Martes', start: '18:45', end: '20:15', classRoom: 'E 507' },
                { day: 'Miércoles', start: '20:15', end: '21:45', classRoom: 'E 513' }
              ]
            },
            {
              id: 3, name: 'ARAMAYO ANTEZANA JAIME ANTONIO', group: '23', days: [
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
}
