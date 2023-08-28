import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})

export class KeyboardService {
  public static readonly KEY_SPACE = 32;
  public static readonly KEY_LEFT = 37;
  public static readonly KEY_UP = 38;
  public static readonly KEY_RIGHT = 39;
  public static readonly KEY_DOWN = 40;
  public static readonly KEY_ESC = 27;

  private keyCodeStates: boolean[];

  constructor() {
    this.keyCodeStates = new Array<boolean>();
    window.addEventListener("keydown", this.keyDown);
    window.addEventListener("keyup", this.keyUp);
  }

  public isKeyDown(keyCode: number): boolean {
    return this.keyCodeStates[keyCode] === true;
  }

  private keyDown = (ev: KeyboardEvent) => {
    this.keyCodeStates[ev.keyCode] = true;
  };

  private keyUp = (ev: KeyboardEvent) => {
    this.keyCodeStates[ev.keyCode] = false;
  };
}
