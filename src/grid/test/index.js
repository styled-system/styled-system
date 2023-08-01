import { objectContaining } from 'expect';
import grid from '..';
import { config } from '..';

test('returns grid styles', () => {
  const style = grid({
    gridGap: 32,
  });
  expect(style).toEqual(
    objectContaining({
      'gap': 32,
    }),
  );
});
