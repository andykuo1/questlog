import { expect } from '@esm-bundle/chai';

import { lerp } from './util.js';

it('lerps between 2 numbers', () => {
  expect(lerp(1, 1, 0.5)).to.eq(1);
  expect(lerp(3, 12, 0.5)).to.eq(7.5);
});
