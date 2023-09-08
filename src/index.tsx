import * as React from "react";
import { render, Text, useInput } from "ink";

function waitForPress() {
  return new Promise<void>((resolve) => {
    function done() {
      resolve();
      clear();
      unmount();
    }
    function Press() {
      useInput((_input, key) => {
        if (key.return) {
          console.log("Pressed");
          done();
        }
      });
      return <Text>Waiting to Press enter</Text>;
    }
    const { unmount, clear } = render(<Press />);
  });
}

async function run() {
  console.log("1. Press enter");

  await waitForPress();

  console.log("2. Press enter");

  await waitForPress();

  console.log("3. Press enter");

  await waitForPress();

  console.log("We got to the end!");
}

run().catch((error) => {
  console.error(error);
});
