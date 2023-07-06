import { lib } from "winmojilib";
import type { Emoji, Group, Subgroup } from "./types";
import _ from "underscore";

const emojis: Emoji[] = Object.assign([], Object.values(lib));

const getRandomEmojiFromGroup = (group: Group): Emoji | undefined => {
    const filtered = emojis.filter((emoji: Emoji) => emoji.group === group);
    return _.sample(filtered);
}

const getRandomEmojiFromSubgroup = (subgroup: Subgroup): Emoji | undefined => {
    const filtered = emojis.filter((emoji: Emoji) => emoji.subgroup === subgroup);
    return _.sample(filtered);
}

export { getRandomEmojiFromGroup, getRandomEmojiFromSubgroup };