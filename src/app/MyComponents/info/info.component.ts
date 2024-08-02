import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Workout {
  type: string;
  minutes: number;
}

interface Info {
  name: string;
  workouts: Workout[];
}

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  infos: Info[] = [];
  pagedInfos: Info[] = [];
  filteredInfos: Info[] = [];
  currentPage: number = 1;
  pageSize: number = 5;

  constructor() { }

  ngOnInit() {
    this.loadInfos();
    this.updatePagedInfos();
  }

  loadInfos() {
    const savedInfos = localStorage.getItem('infos');
    if (savedInfos) {
      this.infos = JSON.parse(savedInfos);
      this.filteredInfos = this.infos;
      this.updatePagedInfos();
    }
  }

  saveInfos() {
    localStorage.setItem('infos', JSON.stringify(this.infos));
    this.filteredInfos = this.infos;
    this.updatePagedInfos();
  }

  addInfo() {
    const newName = (document.getElementById('name') as HTMLInputElement).value;
    const workoutType = (document.getElementById('type') as HTMLInputElement).value;
    const workoutMinutes = parseInt((document.getElementById('time') as HTMLInputElement).value, 10);

    const newWorkout = { type: workoutType, minutes: workoutMinutes };
    let existingInfo = this.infos.find(info => info.name === newName);

    if (existingInfo) {
      existingInfo.workouts.push(newWorkout);
    } else {
      this.infos.push({ name: newName, workouts: [newWorkout] });
    }

    this.saveInfos();

    (document.getElementById('name') as HTMLInputElement).value = '';
    (document.getElementById('type') as HTMLInputElement).value = '';
    (document.getElementById('time') as HTMLInputElement).value = '';
  }

  deleteInfo(infoToDelete: Info) {
    const currentPageInfoCount = this.pagedInfos.length;

    this.infos = this.infos.filter(info => info !== infoToDelete);
    this.saveInfos();

    if (currentPageInfoCount === 1) {
      if (this.currentPage > 1) {
        this.goToPage(this.currentPage - 1);
      } else {
        this.updatePagedInfos();
      }
    } else {
      this.updatePagedInfos();
    }
  }

  updatePagedInfos() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedInfos = this.filteredInfos.slice(startIndex, endIndex);
  }

  goToPage(pageNumber: number) {
    if (pageNumber < 1) {
      pageNumber = 1;
    } else if (pageNumber > this.totalPages) {
      pageNumber = this.totalPages;
    }

    this.currentPage = pageNumber;
    this.updatePagedInfos();
  }

  get totalPages(): number {
    return Math.ceil(this.filteredInfos.length / this.pageSize);
  }

  searchInfo() {
    const searchName = (document.getElementById('search') as HTMLInputElement).value.toLowerCase();
    if (searchName) {
      this.filteredInfos = this.infos.filter(info => info.name.toLowerCase().includes(searchName));
    } else {
      this.filteredInfos = this.infos;
    }
    this.currentPage = 1;
    this.updatePagedInfos();
  }

  filterByWorkout() {
    const searchWorkout = (document.getElementById('searchWorkout') as HTMLInputElement).value.toLowerCase();

    if (searchWorkout) {
      this.filteredInfos = this.infos.filter(info =>
        info.workouts.some(workout => workout.type.toLowerCase().includes(searchWorkout))
      );
    } else {
      this.filteredInfos = this.infos;
    }

    this.currentPage = 1;
    this.updatePagedInfos();
  }
}
