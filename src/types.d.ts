export enum Groups {
    AnimalsAndNature = 'animals-nature',
    SmileysAndEmotion = 'smileys-emotion',
    FoodAndDrink = 'food-drink',
    TravelAndPlaces = 'travel-places',
    Activities = 'activities',
    Objects = 'objects',
    Symbols = 'symbols',
    Flags = 'flags',
}

export type Group = Groups.AnimalsAndNature | Groups.SmileysAndEmotion | Groups.FoodAndDrink | Groups.TravelAndPlaces | Groups.Activities | Groups.Objects | Groups.Symbols | Groups.Flags;

export interface Emoji {
    char: string
    keywords: string[]
    name: string
    group: Group
    subgroup: string
    hexcode: string
}