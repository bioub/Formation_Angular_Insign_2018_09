export class Todo {
  public id?: number;
  public text: string;
  public done?: boolean;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
