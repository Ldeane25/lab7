import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, CommonModule, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle
  ], // Import necessary Ionic components for UI rendering
})
export class HomePage implements OnInit {
  myMovies: any[] = []; // Stores movie data fetched from the API

  constructor(private ms: MovieService) {} // Inject the MovieService to fetch movie data

  ngOnInit(): void {
    // Fetch movie data when the component initializes
    this.ms.getMovieData().subscribe(
      (data) => {
        this.myMovies = data.Search; // Assign API response to myMovies array
      },
      (error) => {
        console.error('Error fetching movie data:', error); // Log errors if the API request fails
      }
    );
  }
}

