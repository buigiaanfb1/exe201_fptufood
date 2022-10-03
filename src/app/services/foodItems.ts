import { db } from "../firebase/firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { FOOD_COLLECTION } from "../util/constant";
import { FoodItemModel } from "../models/FoodItem";

const usersCollectionRef = collection(db, FOOD_COLLECTION);
const getItems = async (): Promise<FoodItemModel[]> => {
    const data = await getDocs(usersCollectionRef);
    var listItem: FoodItemModel[] = []
    data.docs.map((doc) => listItem.push(({ data:{ ...doc.data() }, id: doc.id })))
    return listItem
}
export const foodItemsService = {
    getItems
}