export class App {
  private greeting: string = "Hello, World!";

  constructor() {
    console.info("App initialized.");
  }

  sayHello = (): void => {
    console.info(this.greeting);
  };
}
