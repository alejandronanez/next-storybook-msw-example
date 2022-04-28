import { render, screen, waitFor } from "@testing-library/react";
import { rest, server } from "../mocks/server";
import * as stories from "./Example.stories";
import { composeStories } from "@storybook/testing-react";

const { Success, Error } = composeStories(stories);

describe("Example component", () => {
  it("should work when /api/hello works", async () => {
    server.use(
      rest.get("/api/hello", (req, res, ctx) => {
        return res(ctx.json({ name: "John Doe" }));
      })
    );

    render(<Success />);

    await waitFor(() => {
      expect(screen.queryByText(/john doe/i)).toBeInTheDocument();
    });
  });

  it("should work when /api/hello fails", async () => {
    server.use(
      rest.get("/api/hello", (req, res, ctx) => {
        return res(ctx.status(404));
      })
    );

    render(<Error />);

    await waitFor(() => {
      expect(screen.queryByText(/something bad happened/i)).toBeInTheDocument();
    });
  });
});
