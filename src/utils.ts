/**
 * Returns a random element from the given array.
 * @param {T[]} array
 * @returns {T}
 */
export const randomFromArray = <T>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * Returns intersection elements of two arrays.
 * @param {T[]} first
 * @param {T[]} second
 * @returns {T[]} intersection
 */
export const getArraysIntersection = <T>(first: T[], second: T[]): T[] => {
    return first.filter((value: T) => second.includes(value));
}