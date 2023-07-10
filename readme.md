# `wemoji`

Collection of utility functions wrapped around emojis supported by Windows. Built with emoji data from [winmojilib](https://github.com/ryanSN/winmojilib) package.

## Installation

```bash
npm install wemoji
```

## Usage

```ts
import { emojis } from 'wemoji';

emojis
/*
    [
        { 
            char: '😀', 
            group: 'smileys-emotion', 
            hexcode: '1F600', 
            keywords: ['face', 'grin', 'grinning face'],
            name: 'grinning_face',
            subgroup: 'face-smiling' 
        }, ...
    ]
*/
```
```ts
import { resolveEmoji } from "wemoji";

resolveEmoji("frog")
resolveEmoji("🐸")
resolveEmoji("1F438")
/*
    { 
        char: '🐸', 
        group: 'animals-nature', 
        hexcode: '1F438', 
        keywords: ['animal', 'face', 'frog'],
        name: 'frog_face',
        subgroup: 'animal-amphibian' 
    }
*/
```
```ts
import { getRandomEmoji } from "wemoji";

getRandomEmoji()
/*
    {
        char: '💜',
        keywords: [ 'purple', 'purple heart' ],
        name: 'purple_heart',
        group: 'smileys-emotion',
        hexcode: '1F49C',
        subgroup: 'emotion'
    }
*/
```
```ts
import { getSimilarEmojis } from "wemoji";

getSimilarEmojis("🍳")
/*
    [
        {
            emoji: {
                char: '🥚',
                ...
            },
            similarity: 0.4
        },
        {
            emoji: {
                char: '🥐',
                ...
            },
            similarity: 0.2
        },
        {
            emoji: {
                char: '🥯' ,
                ...
            },
            similarity: 0.2
        },
        ...
    ]
*/
```
```ts
import { getRandomSimilarEmoji } from "wemoji";

getRandomSimilarEmoji("🍳")
/*
    {
        emoji: {
            char: '🥚',
            ...
        },
        similarity: 0.4
    }
*/
```
```ts
import { getEmojisMatchingKeyword } from "wemoji";

getEmojisMatchingKeyword("ball")
/*
[
    {
        char: '⚽',
        ...
    },
    {
        char: '⚾',
        ...
    },
    {
        char: '🥎' ,
        ...
    },
    ...
]
*/
```
```ts
import { getEmojisMatchingKeywords } from "wemoji";

getEmojisMatchingKeywords(["chocolate","bar"])
/*
    [
        {
            char: '🍫',
            keywords: [ 'bar', 'chocolate', 'dessert', 'sweet' ],
            name: 'chocolate_bar',
            group: 'food-drink',
            hexcode: '1F36B',
            subgroup: 'food-sweet'
        }
    ]
*/
```
```ts
import { getEmojisFromGroup, Groups } from "wemoji";

getEmojisFromGroup(Groups.AnimalsAndNature);
/*
    [
        {
            char: '🐵',
            ...
        },
        {
            char: '🐒',
            ...
        },
        {
            char: '🦍',
            ...
        },
        ...
    ]
*/
```
```ts
import { getEmojisFromSubgroup, Subgroups } from "wemoji";

getEmojisFromSubgroup(Subgroups.Music);
/*
    [
        {
            char: '🎼',
            ...
        },
        {
            char: '🎵',
            ...
        },
        {
            char: '🎶',
            ...
        },
        ...
    ]
*/
```