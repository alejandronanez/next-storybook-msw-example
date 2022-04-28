import { render, screen, waitFor } from "@testing-library/react";
import { rest, server } from "../mocks/server";
import { Example } from "./Example";

describe("Example component", () => {
  it("should work when /api/hello works", async () => {
    server.use(
      rest.get("/api/hello", (req, res, ctx) => {
        return res(ctx.json({ name: "John Doe" }));
      })
    );

    render(<Example />);

    await waitFor(() => {
      expect(screen.queryByText(/john doe/i)).toBeInTheDocument();
    });
  });

  it("should work when /api/hello works", async () => {
    server.use(
      rest.get("/api/hello", (req, res, ctx) => {
        return res(ctx.status(404));
      })
    );

    render(<Example />);

    await waitFor(() => {
      expect(screen.queryByText(/something bad happened/i)).toBeInTheDocument();
    });
  });
});
