import Potion from '../lib/Potion';

jest.mock('../lib/Potion.js');

import { test, expect, jest } from '@jest/globals';
import exp from 'constants';
import Player from '../lib/Player';

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.invetory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});