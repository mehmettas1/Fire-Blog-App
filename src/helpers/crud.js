import { useContext, useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import { addDoc} from "firebase/firestore";
import { AuthContext } from "../contexts/AuthContext";
import { async } from "@firebase/util";

// export const createBlog = (info) => {
//   const cardCollectionRef = collection(db, "users");
//   const createCard = async () => {
//     await addDoc(cardCollectionRef, {
//       imageUrl: info.imageUrl,
//       title: info.title,
//       date: info.date,
//       content: info.content,
//       email: info.email,
//     });
//   };
//   createCard();
// };
const dataCollectionRef = collection(db,"users")

export const getData = async()=>{
  const data = await getDocs(dataCollectionRef)
  const data1 = data.docs.map(doc=>
    ({...doc.data(),id:doc.id})
  )

return data1

}