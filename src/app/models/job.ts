import {User} from "./user";

export class Job {
  constructor(public gene_sequence?: string,
              public gene_name?: string,
              public name?: string,
              public id?: number,
              public created_at?: string,
              public status?: boolean,
              public user?: number | User) {
  }
}
