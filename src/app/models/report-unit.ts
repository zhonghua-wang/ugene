import {Report} from "./report";
export class ReportUnit {
  constructor(
    public id?: number,
    public report?: Report | number,
    public index?: number,
    public image?: string,
    public data?: string,
    public caption?: string,
    public created_at?: string
  ){

  }
}
