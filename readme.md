# `winemoji`

[![NPM Version](https://img.shields.io/npm/v/winemoji.svg?style=flat-square)](https://www.npmjs.com/package/winemoji)
[![NPM Downloads](https://img.shields.io/npm/dm/winemoji.svg?style=flat-square)](https://www.npmjs.com/package/winemoji)
![GitHub](https://img.shields.io/github/license/emigrek/winemoji)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/emigrek/winemoji)

Collection of utility functions wrapped around emojis supported by Windows. Built with emoji data from [winmojilib](https://github.com/ryanSN/winmojilib) package.

## Installation

```bash
npm install winemoji
```

## Usage

### Variables
```ts
import { emojis } from 'winemoji';

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
### Enums
```ts
import { Groups } from 'winemoji';

Groups
/*
    {
        AnimalsAndNature = 'animals-nature',
        SmileysAndEmotion = 'smileys-emotion',
        FoodAndDrink = 'food-drink',
        ...
    }
*/
```
```ts
import { Subgroups } from 'winemoji';

Subgroups
/*
    {
        Drink = 'drink',
        Clothing = 'clothing',
        HairStyle = 'hair-style',
        ...
    }
*/
```
### Functions
```ts
import { resolveEmoji } from "winemoji";

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
import { getRandomEmoji } from "winemoji";

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
import { getSimilarEmojis } from "winemoji";

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
import { getRandomSimilarEmoji } from "winemoji";

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
import { getEmojisMatchingKeyword } from "winemoji";

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
import { getEmojisMatchingKeywords } from "winemoji";

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
import { getEmojisFromGroup, Groups } from "winemoji";

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
import { getEmojisFromSubgroup, Subgroups } from "winemoji";

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