// Button.stories.js|jsx

import React from "react";

import { Example } from "./Example";

export default {
  title: "Example Component",
  component: Example,
};

export const Success = () => <Example />;
export const Error = () => <Example />;
