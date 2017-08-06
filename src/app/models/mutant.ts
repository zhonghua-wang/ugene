import {Job} from "./job";
export class Mutant {
  constructor(

    public position?: number,
    public original?: string,
    public mutation?: string,
    public job?: Job | number,
    public id?: number
  ){}
}
