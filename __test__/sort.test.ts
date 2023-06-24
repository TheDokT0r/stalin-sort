import sort from '../src/index';

describe('sort', () => {
    it('should sort an array of numbers', () => {
        const arr = [2, 1];
        const result = sort(arr);

        expect(result).toEqual([]);
    });
});