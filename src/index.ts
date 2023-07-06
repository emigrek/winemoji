import { lib } from "winmojilib";
import type { Emoji, Group, Subgroup } from "./types";
import { randomFromArray } from "./utils";

export const emojis: Emoji[] = Object.assign([], Object.values(lib));

export const getRandomEmoji = (): Emoji => {
    return randomFromArray(emojis);
}

export const getEmojisMatchingKeyword = (keyword: string): Emoji[] => {
    return emojis.filter((emoji: Emoji) => emoji.keywords.includes(keyword));
}

export const getRandomEmojiFromGroup = (group: Group): Emoji => {
    const filtered = emojis.filter((emoji: Emoji) => emoji.group === group);
    return randomFromArray(filtered);
}

export const getRandomEmojiFromSubgroup = (subgroup: Subgroup): Emoji => {
    const filtered = emojis.filter((emoji: Emoji) => emoji.subgroup === subgroup);
    return randomFromArray(filtered);
}