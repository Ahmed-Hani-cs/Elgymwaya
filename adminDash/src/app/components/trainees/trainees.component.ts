import { Component, OnInit } from '@angular/core';
import { TraineesService } from '../../services/trainees/trainees.service';

@Component({
  selector: 'app-trainees',
  standalone: true,
  imports: [],
  templateUrl: './trainees.component.html',
  styleUrl: './trainees.component.scss',
})
export class TraineesComponent implements OnInit {
  trainees: any;
  constructor(private traineesSer: TraineesService) {}
  ngOnInit(): void {
    this.traineesSer.getTrainees().subscribe((data) => {
      this.trainees = data;
      console.log(this.trainees)
    });
  }
}
