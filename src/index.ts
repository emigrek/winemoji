import { lib } from "winmojilib";
import type { CombinationEmoji, Emoji, EmojiResolvable, Group, Subgroup } from "./types";
import { getArraysIntersection, randomFromArray } from "./utils";

/**
* Holds all emojis from winmojilib
* @type {Emoji[]}
*/
export const emojis: Emoji[] = Object.assign([], Object.values(lib));

/**
* Resolves an EmojiResolvable to an Emoji object.
* Returns undefined if no emoji is found.
* @param {EmojiResolvable} emoji Could be Emoji object itself or it's char, name or hexcode.
* @returns {Emoji | undefined}
*/
export const resolveEmoji = (emoji: EmojiResolvable): Emoji | undefined => {
    if (typeof emoji !== 'string') return emoji as Emoji;
    return emojis.find((x: Emoji) => 
        x.char === emoji || 
        x.name === emoji || 
        x.hexcode === emoji ||
        x.name.split("_").join(" ") === emoji || 
        x.keywords.includes(emoji)
    );
}

/**
* Returns a random emoji
* @returns {Emoji}
*/
export const getRandomEmoji = (): Emoji => {
    return randomFromArray(emojis);
}

/**
* Returns an array of emojis that are similar to the given emoji.
* @param {EmojiResolvable} emoji Could be Emoji object itself or it's char, name or hexcode.
* @returns {CombinationEmoji[]}
*/
export const getCombinationEmojis = (emoji: EmojiResolvable): CombinationEmoji[] => {
    const e = typeof emoji === 'string' ? resolveEmoji(emoji) : emoji;
    if (!e) return [];

    return emojis
        .filter((x: Emoji) => x.char !== e.char)
        .map((x: Emoji) => (
            {
                emoji: x,
                intersection: getArraysIntersection(e.keywords, x.keywords).length,
            }
        ))
        .filter((x) => x.intersection > 0)
        .map((x) => (
            {
                emoji: x.emoji,
                keywordsCoverage: x.intersection / e.keywords.length,
            }
        ))
        .sort((a, b) => b.keywordsCoverage - a.keywordsCoverage);
}

/**
* Returns a random emoji that is similar to the given emoji.
* Returns undefined if no emoji is found.
* @param {EmojiResolvable} emoji Could be Emoji object itself or it's char, name or hexcode.
* @returns {CombinationEmoji | undefined}
*/
export const getRandomCombinationEmoji = (emoji: EmojiResolvable): CombinationEmoji | undefined => {
    return randomFromArray(getCombinationEmojis(emoji));
}

/**
* Returns an array of emojis that contain the given keyword.
* @param {string} keyword
* @returns {Emoji[]}
*/
export const getEmojisMatchingKeyword = (keyword: string): Emoji[] => {
    return emojis.filter((emoji: Emoji) => emoji.keywords.includes(keyword));
}

/**
* Returns a random emoji that contains the given keyword.
* Returns undefined if no emoji is found.
* @param {string} keyword
* @returns {Emoji | undefined}
*/
export const getRandomEmojiMatchingKeyword = (keyword: string): Emoji | undefined => {
    return randomFromArray(getEmojisMatchingKeyword(keyword));
}

/**
* Returns an array of emojis that contain all of the given keywords.
* @param {string[]} keywords
* @returns {Emoji[]}
*/
export const getEmojisMatchingKeywords = (keywords: string[]): Emoji[] => {
    return emojis.filter((emoji: Emoji) => keywords.every((keyword: string) => emoji.keywords.includes(keyword)));
}

/**
* Returns a random emoji that contains all of the given keywords.
* Returns undefined if no emoji is found.
* @param {string[]} keywords
* @returns {Emoji | undefined}
*/
export const getRandomEmojiMatchingKeywords = (keywords: string[]): Emoji | undefined => {
    return randomFromArray(getEmojisMatchingKeywords(keywords));
}

/**
* Returns an array of emojis from the given group.
* @param {Group} group
* @returns {Emoji[]}
*/
export const getEmojisFromGroup = (group: Group): Emoji[] => {
    return emojis.filter((emoji: Emoji) => emoji.group === group);
}

/**
* Returns a random emoji from the given group.
* @param {Group} group
* @returns {Emoji}
*/
export const getRandomEmojiFromGroup = (group: Group): Emoji => {
    const filtered = emojis.filter((emoji: Emoji) => emoji.group === group);
    return randomFromArray(filtered);
}

/**
* Returns an array of emojis from the given subgroup.
* @param {Subgroup} subgroup
* @returns {Emoji[]}
*/
export const getEmojisFromSubgroup = (subgroup: Subgroup): Emoji[] => {
    return emojis.filter((emoji: Emoji) => emoji.subgroup === subgroup);
}

/**
* Returns a random emoji from the given subgroup.
* @param {Subgroup} subgroup
* @returns {Emoji}
*/
export const getRandomEmojiFromSubgroup = (subgroup: Subgroup): Emoji => {
    const filtered = emojis.filter((emoji: Emoji) => emoji.subgroup === subgroup);
    return randomFromArray(filtered);
}