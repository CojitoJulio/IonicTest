import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileId: string | null;
  personaje: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    this.profileId = '';
  }

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id');

    this.http
      .get('https://rickandmortyapi.com/api/character/' + this.profileId)
      .subscribe((res) => {
        console.log(res);
        this.personaje = res;
      });
  }
}
