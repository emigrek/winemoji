import { lib } from "winmojilib";
import { Group, Emoji } from "@/types";

const emojis = Object.assign([], Object.values(lib));

const getRandomEmojiFromGroup = (group: Group): Emoji => {
    const filtered = emojis.filter((emoji: Emoji) => emoji.group === group);
    return filtered[Math.floor(Math.random() * filtered.length)];
}

export { getRandomEmojiFromGroup };