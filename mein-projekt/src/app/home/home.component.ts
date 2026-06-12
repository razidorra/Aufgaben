import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name = 'Razi Dorra';
  beruf = 'Web Developer';
  email = 'RaziDorra@gmail.com';
  skills = ['Angular', 'TypeScript', 'HTML', 'CSS'];
  gelernt = [
    'Komponenten in Angular erstellen',
    'Templates mit Daten verbinden',
    'CSS für responsive Layouts nutzen',
  ];
  interessen = ['Frontend Design', 'Web Apps', 'UI/UX', 'TypeScript'];
  highlights = [
    { label: '4', text: 'Frontend Skills' },
    { label: '3', text: 'Lernziele' },
    { label: '100%', text: 'Motivation' },
  ];
  projektIdeen = [
    {
      title: 'Portfolio Website',
      text: 'Eine moderne Seite mit Projekten, Kontaktbereich und sauberem Responsive Design.',
    },
    {
      title: 'Task Manager App',
      text: 'Eine App zum Erstellen, Filtern und Abhaken von Aufgaben mit Angular State.',
    },
    {
      title: 'Weather Dashboard',
      text: 'Ein Dashboard mit Karten, Suchfeld und Datenanzeige für verschiedene Städte.',
    },
  ];
  wochenPlan = ['React üben', 'CSS Grid verbessern', 'Ein kleines Projekt bauen'];
}
