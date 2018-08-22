
export class NavbarItem {

  private _name: string;
  private _link: string;

  constructor(name: string, link: string) {
    this._name = name;
    this._link = link;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get link(): string {
    return this._link;
  }

  set link(value: string) {
    this._link = value;
  }
}
