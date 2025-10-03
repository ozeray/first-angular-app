import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  
  get imagePath() { return 'assets/users/' + this.avatar }
}
