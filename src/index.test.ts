import { describe, test, expect } from "@jest/globals";
import * as wemoji from "./index";

describe("function resolveEmoji should return the correct emoji", () => {
    test("when given an emoji char", () => {
        expect(wemoji.resolveEmoji('💩'))
            .toEqual({
                char: '💩',
                keywords: ['dung', 'face', 'monster', 'pile of poo', 'poo', 'poop'],
                name: 'pile_of_poo',
                group: 'smileys-emotion',
                hexcode: '1F4A9',
                subgroup: 'face-costume'
            });
    });

    test("when given an emoji name", () => {
        expect(wemoji.resolveEmoji('pile_of_poo'))
            .toEqual({
                char: '💩',
                keywords: ['dung', 'face', 'monster', 'pile of poo', 'poo', 'poop'],
                name: 'pile_of_poo',
                group: 'smileys-emotion',
                hexcode: '1F4A9',
                subgroup: 'face-costume'
            });
    });

    test("when given an emoji name without underscores", () => {
        expect(wemoji.resolveEmoji('pile of poo'))
            .toEqual({
                char: '💩',
                keywords: ['dung', 'face', 'monster', 'pile of poo', 'poo', 'poop'],
                name: 'pile_of_poo',
                group: 'smileys-emotion',
                hexcode: '1F4A9',
                subgroup: 'face-costume'
            });
    });

    test("when given an emoji hexcode", () => {
        expect(wemoji.resolveEmoji('1F4A9'))
            .toEqual({
                char: '💩',
                keywords: ['dung', 'face', 'monster', 'pile of poo', 'poo', 'poop'],
                name: 'pile_of_poo',
                group: 'smileys-emotion',
                hexcode: '1F4A9',
                subgroup: 'face-costume'
            });
    });

    test("when given an emoji object", () => {
        expect(wemoji.resolveEmoji({
            char: '💩',
            keywords: ['dung', 'face', 'monster', 'pile of poo', 'poo', 'poop'],
            name: 'pile_of_poo',
            group: 'smileys-emotion',
            hexcode: '1F4A9',
            subgroup: 'face-costume'
        }))
            .toEqual({
                char: '💩',
                keywords: ['dung', 'face', 'monster', 'pile of poo', 'poo', 'poop'],
                name: 'pile_of_poo',
                group: 'smileys-emotion',
                hexcode: '1F4A9',
                subgroup: 'face-costume'
            });
    });
});

describe("function resolveEmoji should return undefined", () => {
    test("when given an invalid emoji char", () => {
        expect(wemoji.resolveEmoji('💩💩'))
            .toBeUndefined();
    });

    test("when given an invalid emoji name", () => {
        expect(wemoji.resolveEmoji('pile_of_poo_pile_of_poo'))
            .toBeUndefined();
    });

    test("when given an invalid emoji hexcode", () => {
        expect(wemoji.resolveEmoji('1F4A91F4A9'))
            .toBeUndefined();
    });

    test("when given an invalid emoji object", () => {
        expect(wemoji.resolveEmoji({
            char: 'this',
            keywords: ['is', 'invalid'],
            name: 'emoji',
            group: 'smileys-emotion',
            hexcode: 'object',
            subgroup: 'face-costume'
        }))
            .toBeUndefined();
    });
});

describe("function getRandomEmoji should return a random emoji", () => {
    test("when given no arguments", () => {
        const randomEmoji = wemoji.getRandomEmoji();
        expect(wemoji.emojis).toContain(randomEmoji);
    })
});

describe("function getSimilarEmojis should return an array of SimilarEmojis", () => {
    test("when given an EmojiResolvable", () => {
        const similarEmojis = wemoji.getSimilarEmojis('🏈');
        expect(similarEmojis).toContainEqual({
            emoji: {
                char: '⚽',
                keywords: ['ball', 'football', 'soccer'],
                name: 'soccer_ball',
                group: 'activities',
                hexcode: '26BD',
                subgroup: 'sport'
            },
            similarity: expect.any(Number)
        });
    });
});

describe("function getSimilarEmojis should return an empty array", () => {
    test("when given an invalid EmojiResolvable", () => {
        const similarEmojis = wemoji.getSimilarEmojis('🏈🏈');
        expect(similarEmojis).toEqual([]);
    });

    test("when given an EmojiResolvable with no similar emojis", () => {
        const similarEmojis = wemoji.getSimilarEmojis('🪒');
        expect(similarEmojis).toEqual([]);
    });
});

describe("function getSimilarEmoji should return a SimilarEmoji", () => {
    test("when given an EmojiResolvable", () => {
        const similarEmoji = wemoji.getSimilarEmoji('🏈');
        expect(similarEmoji).toEqual({
            emoji: {
                char: '⚽',
                keywords: ['ball', 'football', 'soccer'],
                name: 'soccer_ball',
                group: 'activities',
                hexcode: '26BD',
                subgroup: 'sport'
            },
            similarity: expect.any(Number)
        });
    });
});

describe("function getRandomSimilarEmoji should return a random SimilarEmoji", () => {
    test("when given an EmojiResolvable", () => {
        const randomSimilarEmoji = wemoji.getRandomSimilarEmoji('🏈');
        const similarEmojis = wemoji.getSimilarEmojis('🏈');
        expect(similarEmojis).toContainEqual(randomSimilarEmoji);
    });
});

describe("function getRandomSimilarEmoji should return undefined", () => {
    test("when given an invalid EmojiResolvable", () => {
        const randomSimilarEmoji = wemoji.getRandomSimilarEmoji('🏈🏈');
        expect(randomSimilarEmoji).toBeUndefined();
    });

    test("when given an EmojiResolvable with no similar emojis", () => {
        const randomSimilarEmoji = wemoji.getRandomSimilarEmoji('🪒');
        expect(randomSimilarEmoji).toBeUndefined();
    });
});

describe("function getEmojisMatchingKeyword should return an array of Emoji", () => {
    test("when given a keyword", () => {
        const emojisMatchingKeyword = wemoji.getEmojisMatchingKeyword('soccer');
        expect(emojisMatchingKeyword).toContainEqual({
            char: '⚽',
            keywords: ['ball', 'football', 'soccer'],
            name: 'soccer_ball',
            group: 'activities',
            hexcode: '26BD',
            subgroup: 'sport'
        });
    });

    test("when given a keyword with no matching emojis", () => {
        const emojisMatchingKeyword = wemoji.getEmojisMatchingKeyword('invalid');
        expect(emojisMatchingKeyword).toEqual([]);
    });
});

describe("function getRandomEmojiMatchingKeyword should return a random Emoji", () => {
    test("when given a keyword", () => {
        const randomEmojiMatchingKeyword = wemoji.getRandomEmojiMatchingKeyword('soccer');
        const emojisMatchingKeyword = wemoji.getEmojisMatchingKeyword('soccer');
        expect(emojisMatchingKeyword).toContainEqual(randomEmojiMatchingKeyword);
    });
});

describe("function getRandomEmojiMatchingKeyword should return undefined", () => {
    test("when given a keyword with no matching emojis", () => {
        const randomEmojiMatchingKeyword = wemoji.getRandomEmojiMatchingKeyword('invalid');
        expect(randomEmojiMatchingKeyword).toBeUndefined();
    });
});

describe("function getEmojisMatchingKeywords should return an array of Emoji", () => {
    test("when given an array of keywords", () => {
        const emojisMatchingKeywords = wemoji.getEmojisMatchingKeywords(['soccer', 'ball']);
        expect(emojisMatchingKeywords).toContainEqual({
            char: '⚽',
            keywords: ['ball', 'football', 'soccer'],
            name: 'soccer_ball',
            group: 'activities',
            hexcode: '26BD',
            subgroup: 'sport'
        });
    });

    test("when given an array of keywords with no matching emojis", () => {
        const emojisMatchingKeywords = wemoji.getEmojisMatchingKeywords(['invalid', 'invalid']);
        expect(emojisMatchingKeywords).toEqual([]);
    });
});

describe("function getRandomEmojiMatchingKeywords should return a random Emoji", () => {
    test("when given an array of keywords", () => {
        const randomEmojiMatchingKeywords = wemoji.getRandomEmojiMatchingKeywords(['soccer', 'ball']);
        const emojisMatchingKeywords = wemoji.getEmojisMatchingKeywords(['soccer', 'ball']);
        expect(emojisMatchingKeywords).toContainEqual(randomEmojiMatchingKeywords);
    });
});

describe("function getRandomEmojiMatchingKeywords should return undefined", () => {
    test("when given an array of keywords with no matching emojis", () => {
        const randomEmojiMatchingKeywords = wemoji.getRandomEmojiMatchingKeywords(['invalid', 'invalid']);
        expect(randomEmojiMatchingKeywords).toBeUndefined();
    });
});

describe("function getEmojisFromGroup should return an array of Emoji", () => {
    test("when given a group", () => {
        const emojisFromGroup = wemoji.getEmojisFromGroup(wemoji.Groups.SmileysAndEmotion);
        expect(emojisFromGroup).toContainEqual({ 
            char: "😀", 
            group: "smileys-emotion", 
            hexcode: "1F600", 
            keywords: ["face", "grin", "grinning face"],
            name: "grinning_face",
            subgroup: "face-smiling" 
        });
    });
});

describe("function getRandomEmojiFromGroup should return a random Emoji", () => {
    test("when given a group", () => {
        const randomEmojiFromGroup = wemoji.getRandomEmojiFromGroup(wemoji.Groups.SmileysAndEmotion);
        const emojisFromGroup = wemoji.getEmojisFromGroup(wemoji.Groups.SmileysAndEmotion);
        expect(emojisFromGroup).toContainEqual(randomEmojiFromGroup);
    });
});

describe("function getEmojisFromSubgroup should return an array of Emoji", () => {
    test("when given a subgroup", () => {
        const emojisFromSubgroup = wemoji.getEmojisFromSubgroup(wemoji.Subgroups.FaceSmiling);
        expect(emojisFromSubgroup).toContainEqual({ 
            char: "😀", 
            group: "smileys-emotion", 
            hexcode: "1F600", 
            keywords: ["face", "grin", "grinning face"],
            name: "grinning_face",
            subgroup: "face-smiling" 
        });
    });
});

describe("function getRandomEmojiFromSubgroup should return a random Emoji", () => {
    test("when given a subgroup", () => {
        const randomEmojiFromSubgroup = wemoji.getRandomEmojiFromSubgroup(wemoji.Subgroups.FaceSmiling);
        const emojisFromSubgroup = wemoji.getEmojisFromSubgroup(wemoji.Subgroups.FaceSmiling);
        expect(emojisFromSubgroup).toContainEqual(randomEmojiFromSubgroup);
    });
});
