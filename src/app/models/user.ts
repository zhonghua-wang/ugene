import {Job} from "./job";

export class User {

  constructor(
    public id?: string,
    public  username?: string,
    public first_name?: string,
    public last_name?: string,
    public email?: string,
    public birth_date?: string,
    public job_set?: Job[] | string[],
  ){}
  get_full_cn_name(){
      return this.last_name + this.first_name || this.username;
  }
}
