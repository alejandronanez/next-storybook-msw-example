import "@testing-library/jest-dom/extend-expect";
import { server } from "./mocks/server.js";
import "whatwg-fetch";

/**
 * @storybook/testing-react configuration
 */
import { setGlobalConfig } from "@storybook/testing-react";
import * as globalStorybookConfig from "./.storybook/preview"; // path of your preview.js file

setGlobalConfig(globalStorybookConfig);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
