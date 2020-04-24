import { v4 as uuid } from 'uuid';

export class User {
  id: string
  name: string

  constructor(name: string) {
    this.id = uuid()
    this.name = name
  }
}