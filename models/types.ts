export interface Category {
    id: string;
    title: string;
    color: string;
}

export interface Meal {
    id: string;
    categories: string[];
    title: string;
    affordability: 'affordable' | 'pricey' | 'luxurious';
    complexity: 'simple' | 'challenging' | 'hard';
    imageUrl: string;
    duration: number;
    ingredients: string[];
    steps: string[];
    isGlutenFree: boolean;
    isLactoseFree: boolean;
    isVegan: boolean;
    isVegetarian: boolean;
}