import { Injectable } from '@angular/core';

export interface UserToken {
  id: string;
  name: string;
  email: string;
  teams: string[];
}

@Injectable()
export class PermissionsService {
  currentUser: UserToken;

  constructor() {
    this.currentUser = {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      teams: ['1', '2', '3'],
    };
  }
  canActivate(teamId: string): boolean {
    console.log('canActivate', teamId, this.currentUser.teams.includes(teamId));
    return this.currentUser.teams.includes(teamId);
  }

  canMatch(teamId: string): boolean {
    console.log('canMatch', teamId, !this.currentUser.teams.includes(teamId));
    return !this.currentUser.teams.includes(teamId);
  }
}

@Injectable()
export class Service1 {
  value = 'Service One';
  constructor() {
    this.value = this.value + ' Id: ' + Math.floor(Math.random() * 500);
  }
}

@Injectable()
export class Service2 {
  value = 'Service Two';
  constructor() {
    this.value = this.value + ' Id: ' + Math.floor(Math.random() * 500);
  }
}

@Injectable()
export class Service3 {
  value = 'Service Three';
  constructor() {
    this.value = this.value + ' Id: ' + Math.floor(Math.random() * 500);
  }
}

@Injectable()
export class Service4 {
  value = 'Service Four';
  constructor() {
    this.value = this.value + ' Id: ' + Math.floor(Math.random() * 500);
  }
}
