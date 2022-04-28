// Button.stories.js|jsx

import React from "react";
import { rest } from "msw";

import { Example } from "./Example";

export default {
  title: "Example Component",
  component: Example,
};

export const Success = () => <Example />;
Success.parameters = {
  msw: {
    handlers: [
      rest.get("/api/hello", (req, res, ctx) => {
        return res(
          ctx.json({
            name: "John Doe",
          })
        );
      }),
    ],
  },
};

export const Error = () => <Example />;
Error.parameters = {
  msw: {
    handlers: [
      rest.get("/api/hello", (req, res, ctx) => {
        return res(ctx.status(404));
      }),
    ],
  },
};
