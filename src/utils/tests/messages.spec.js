import expect from 'expect';

import { formatMessage } from '../messages';

describe('Messages functions', () => {
  describe('formatMessage', ()=> {
    it('should format a message', () => {
      const world = 'World';
      let actual = formatMessage`Hello ${world}`;
      let expected = 'Hello World';
      expect(actual).toEqual(expected);
    });
    it('should format multiple tokens', () => {
      const name = 'Dave';
      const emotion = 'sorry';
      let actual = formatMessage`I'm ${emotion} ${name}, I'm afraid I can't do that`;
      let expected = 'I\'m sorry Dave, I\'m afraid I can\'t do that';
      expect(actual).toEqual(expected);
    });
  });
});
