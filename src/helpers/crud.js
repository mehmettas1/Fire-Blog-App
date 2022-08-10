import { useContext, useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { AuthContext } from "../contexts/AuthContext";


export const createBlog = async (info,navigate) => {
  const cardCollectionRef = collection(db, "users");

console.log(info);
try {
  await addDoc(cardCollectionRef, {
    imgurl: info.imageUrl,
    title: info.title,
    date: info.date,
    description: info.content,
    email: info.email,
  });
  navigate('/')
  console.log("consol log yüklendi");
} catch (error) {
  console.log(error.message);
}
    


};
// const dataCollectionRef = collection(db,"users")

// export const getData = async()=>{
//   const data = await getDocs(dataCollectionRef)
//   const data1 = data.docs.map(doc=>
//     ({...doc.data(),id:doc.id})
//   )

// return data1

// }
export const useData = () => {
  const [users, setUsers] = useState(null);
  const usersCollectionRef = collection(db, "users");
  const { setLoading } = useContext(AuthContext);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
        console.log("merhaba");
      } catch (error) {
        console.log(error.message);
      }
    };
    getUsers();
    // eslint-disable-next-line
  }, []);
  return { users };
};
