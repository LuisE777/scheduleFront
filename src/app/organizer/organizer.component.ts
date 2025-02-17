import { Component } from '@angular/core';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent {
  semestres:any = [
    {
      nombre: 'PRIMER SEMESTRE',
      materias: [
        { nombre: 'ADMINISTRACIÓN GENERAL',
        //{ id: 1, name: 'CONTABILIDAD BÁSICA', group: '623 G:1', day: 'Lunes', time: '14:15' }
          docentes: [
            { id: 1, name: 'TORRICO OCAMPO ENRIQUE', group: '01',days:[
              {day:'Lunes',start:'18:45', end:'20:15',classRoom:'E103'},
              {day:'Miércoles',start:'18:45', end:'20:15',classRoom:'E530'},
              {day:'Jueves',start:'18:45', end:'20:15',classRoom:'E530'}

            ], day: 'Lunes', time: '14:15',classRoom:''},
            { id: 2, name: 'MOSCOSO FORONDA DAVID', group: '02', day: 'Lunes', time: '14:15'},
            { id: 3, name: 'SARMIENTO JALDIN RODOLFO', group: '03', day: 'Lunes', time: '14:15',classRoom:''},
            { id: 4, name: 'SARMIENTO JALDIN RODOLFO', group: '04', day: 'Lunes', time: '14:15',classRoom:''},
            { id: 5, name: 'SARMIENTO JALDIN RODOLFO', group: '06', day: 'Lunes', time: '14:15',classRoom:''},
            { id: 6, name: 'MALDONADO ROJAS RAMIRO', group: '21', day: 'Lunes', time: '14:15',classRoom:''},
            { id: 7, name: 'FERRUFINO GARCIA ALEXANDER', group: '22', day: 'Lunes', time: '14:15',classRoom:''},
            { id: 8, name: 'SANCHEZ CASTELLON JUAN FELIX', group: '23', day: 'Lunes', time: '14:15',classRoom:''}
          ]
        }
        // { nombre: 'Algebra General', docentes: ['Lic. Rodríguez'] }
      ]
    },
    {
      nombre: 'Segundo Semestre',
      materias: [
        { nombre: 'Programación', docentes: ['MSc. Torres', 'Ing. López'] },
        { nombre: 'Base de Datos', docentes: ['Dr. Sánchez'] }
      ]
    }
  ];


  semester:any[]= ['ana','carla']
  days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes','Sábado'];
  hours = ['14:15', '15:45', '16:30', '17:15', '18:45','20:15','21:45'];

  // Materias disponibles
  subjects = [
    { id: 1, name: 'CONTABILIDAD BÁSICA', group: '623 G:1', day: 'Lunes', time: '14:15' },
    { id: 2, name: 'CONTABILIDAD BÁSICA', group: '693D G:1', day: 'Martes', time: '14:15' },
    { id: 3, name: 'CONTABILIDAD III', group: '684B G:C1', day: 'Lunes', time: '14:15' }
  ];

  selectedSubjects: any[] = [];

  toggleSubject(subject: any, event: any) {
    debugger
    if (event.target.checked) {
      if(subject.days.length > 0){
        for(let day of subject.days){
          this.selectedSubjects.push({idGroup:subject.id,...day,name:subject.name, group:subject.group});
          console.log(this.selectedSubjects)
        }
      }

      this.selectedSubjects.push(subject);
    } else {

      this.selectedSubjects = this.selectedSubjects.filter(s => s.idGroup !== subject.idGroup);
    }
  }

  getSubjectsForCell(day: string, hour: string) {
    if(this.selectedSubjects.length > 0)console.log('materias',this.selectedSubjects);
    return this.selectedSubjects.filter(subject => subject.day === day && subject.start === hour);
  }
}
