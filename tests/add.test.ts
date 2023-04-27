import { assertEquals, assertNotEquals } from 'std/testing/asserts.ts';

import { add } from '../mod.ts';

Deno.test('1 + 2 = 3', () => assertEquals(add(1, 2), 3));

Deno.test('1 + 2 != 4', () => assertNotEquals(add(1, 2), 4));
