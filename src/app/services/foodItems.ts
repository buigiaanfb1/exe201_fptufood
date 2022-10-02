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
import { FoodItem } from "../models/FoodItem";

const usersCollectionRef = collection(db, FOOD_COLLECTION);

const getItems = async (): Promise<FoodItem[]> => {
    const data = await getDocs(usersCollectionRef);
    var listItem: FoodItem[] = []
    data.docs.map((doc) => listItem.push(({ ...doc.data(), id: doc.id })))

    return listItem
}



