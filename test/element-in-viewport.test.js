import elementInViewport from "../src/element-in-viewport.js";

describe("element-in-viewport", () => {
  test("errors when a target element is not defined", async () => {
    await expect(elementInViewport(undefined, 0)).rejects.toThrow();
  });

  test("errors when a threshold is not a number", async () => {
    const div = Object.create(HTMLElement.prototype, {});
    await expect(elementInViewport(div, "str")).rejects.toThrow();
  });

  test("errors when a threshold is outside 0 to 1 inclusive", async () => {
    const div = Object.create(HTMLElement.prototype, {});
    await expect(elementInViewport(div, 2)).rejects.toThrow();
  });
});
