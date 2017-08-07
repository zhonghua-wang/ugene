import {User} from "./user";
import {Mutant} from "./mutant";

export class Job {
  constructor(public gene_sequence?: string,
              public gene_name?: string,
              public name?: string,
              public id?: string,
              public created_at?: string,
              public status?: boolean,
              public mutant_set?: number[] | Mutant[],
              public user?: string | User) {
  }
}
