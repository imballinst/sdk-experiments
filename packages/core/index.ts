class Sdk {
  token: string;

  constructor(token: string) {
    this.token = token;
  }

  extend<Input extends object>(input: Input): Sdk & Input {
    const output: any = this;
    for (const key in input) {
      output[key] = input[key];
    }

    return output;
  }
}

export const sdk = new Sdk("test-token");
