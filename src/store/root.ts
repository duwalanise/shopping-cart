import { observable } from "mobx";

export default class RootStore {
  @observable private a: any;
  apple() {
    console.log(this.a);
  }
}
