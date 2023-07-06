import { lib } from "winmojilib";
import type { Emoji, Group, Subgroup } from "./types";
import { getArraysIntersection, randomFromArray } from "./utils";

export const emojis: Emoji[] = Object.assign([], Object.values(lib));

export const getRandomEmoji = (): Emoji => {
    return randomFromArray(emojis);
}

export const getEmojisMatchingEmoji = (emoji: Emoji | string): Emoji[] => {
    const e = typeof emoji === 'string' ? emojis.find((e: Emoji) => e.char === emoji) : emoji;
    if (!e) return [];
    return emojis.filter((x: Emoji) => (getArraysIntersection(e.keywords, x.keywords).length > 1) && (x.char !== e.char));
}

export const getRandomEmojiMatchingEmoji = (emoji: Emoji | string): Emoji | undefined => {
    return randomFromArray(getEmojisMatchingEmoji(emoji));
}

export const getEmojisMatchingKeyword = (keyword: string): Emoji[] => {
    return emojis.filter((emoji: Emoji) => emoji.keywords.includes(keyword));
}

export const getRandomEmojiMatchingKeyword = (keyword: string): Emoji | undefined => {
    return randomFromArray(getEmojisMatchingKeyword(keyword));
}

export const getEmojisMatchingKeywords = (keywords: string[]): Emoji[] => {
    return emojis.filter((emoji: Emoji) => keywords.every((keyword: string) => emoji.keywords.includes(keyword)));
}

export const getRandomEmojiMatchingKeywords = (keywords: string[]): Emoji | undefined => {
    return randomFromArray(getEmojisMatchingKeywords(keywords));
}

export const getEmojisFromGroup = (group: Group): Emoji[] => {
    return emojis.filter((emoji: Emoji) => emoji.group === group);
}

export const getRandomEmojiFromGroup = (group: Group): Emoji => {
    const filtered = emojis.filter((emoji: Emoji) => emoji.group === group);
    return randomFromArray(filtered);
}

export const getEmojisFromSubgroup = (subgroup: Subgroup): Emoji[] => {
    return emojis.filter((emoji: Emoji) => emoji.subgroup === subgroup);
}

export const getRandomEmojiFromSubgroup = (subgroup: Subgroup): Emoji => {
    const filtered = emojis.filter((emoji: Emoji) => emoji.subgroup === subgroup);
    return randomFromArray(filtered);
}