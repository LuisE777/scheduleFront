import { Component } from '@angular/core';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent {
  days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  hours = ['14:15', '15:45', '16:30', '17:15'];

  // Materias disponibles
  subjects = [
    { id: 1, name: 'CONTABILIDAD BÁSICA', group: '623 G:1', day: 'Lunes', time: '14:15' },
    { id: 2, name: 'CONTABILIDAD BÁSICA', group: '693D G:1', day: 'Martes', time: '14:15' },
    { id: 3, name: 'CONTABILIDAD III', group: '684B G:C1', day: 'Lunes', time: '14:15' }
  ];

  selectedSubjects: any[] = [];

  toggleSubject(subject: any, event: any) {
    if (event.target.checked) {
      this.selectedSubjects.push(subject);
    } else {
      this.selectedSubjects = this.selectedSubjects.filter(s => s.id !== subject.id);
    }
  }

  getSubjectsForCell(day: string, hour: string) {
    return this.selectedSubjects.filter(subject => subject.day === day && subject.time === hour);
  }
}
