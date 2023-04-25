import { NumberChkPipe } from './number-chk.pipe';

describe('NumberChkPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberChkPipe();
    expect(pipe).toBeTruthy();
  });
});
