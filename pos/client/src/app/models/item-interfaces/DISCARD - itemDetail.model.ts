import { IIngredient } from "./ingredient.model";
import { IOption } from "./option.model";

export interface IItemDetailPosInput {
    itemId: number;
    itemName: string;
    discount: number;   //extra added by Skeleton
    isDisabled: boolean;    //extra added by Skeleton
    itemPrice: number;
    itemCalories: number;
    itemImage: string;      //web link string, grab from cloud
    timeOfDay: string[];    //mealTimeId not needed anymore
    itemProfileTastyTags: string[];
    itemPortionSize: string;
    itemPreparationTime: number;
    itemLastingTime: number;
    typeOfFoods: string[]; //options 'delivery only', 'eat only', 'pickup only', 'all'
    servingTemperature: number;
    itemDietaryRestrictions: string[];
    ingredients: IIngredient[];
    itemPackingType: string;  
    options: { add: IOption[]; no: IOption[] };
}

export interface IItemDetailPosOutput extends IItemDetailPosInput{
    itemQuantity?: number;   //Field added when sending from POS to Skeleton
    optionalNotes?: string;  //Field added when sending from POS to Skeleton
    chosenOptions?: { add: IOption[]; no: IOption[] }; 
}