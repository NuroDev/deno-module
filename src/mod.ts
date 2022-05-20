import { assertEquals, assertNotEquals } from "std/testing/asserts.ts";

/**
 * Add
 *
 * @description Adds 2 provided numbers together & returns them
 *
 * @param {Number} a - First number
 * @param {Number} b - Second number
 */
export function add(a: number, b: number): number {
  return a + b;
}

Deno.test("1 + 2 = 3", () => assertEquals(add(1, 2), 3));

Deno.test("1 + 2 != 4", () => assertNotEquals(add(1, 2), 4));
