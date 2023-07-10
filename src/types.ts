import { Groups, Subgroups } from "./enums";

export type Group = `${Groups}`;

export type Subgroup = `${Subgroups}`;

export interface Emoji {
    char: string
    keywords: string[]
    name: string
    group: Group
    subgroup: Subgroup
    hexcode: string
}

export interface SimilarEmoji {
    emoji: Emoji,
    similarity: number
}

export type EmojiResolvable = string | Emoji;