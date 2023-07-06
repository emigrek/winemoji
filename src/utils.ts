export const randomFromArray = <T>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
}

export const getArraysIntersection = <T>(a: T[], b: T[]): T[] => {
    return a.filter((value: T) => b.includes(value));
}