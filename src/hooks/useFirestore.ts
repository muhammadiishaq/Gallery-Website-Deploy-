import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';

// Define the image type
interface Image {
  url: string;
  createdAt: Date;
  userEmail: string;
  id?: string;
}

const useFirestore = (collectionName: string) => {
  const [docs, setDocs] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const q = query(collection(db, collectionName), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        let images: Image[] = [];
        querySnapshot.forEach((doc) => {
        //   images.push({ ...doc.data(), id: doc.id } as Image);
        //   console.log(doc.data());
        const imageUrl = doc.data().imageUrl;
        const createdAt = doc.data().createdAt.toDate();
        const userEmail = doc.data().userEmail;
        images.push({ url: imageUrl, createdAt, userEmail });
        console.log("data fetched succesfully")
        });
        setDocs(images);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    getData();
  }, [collectionName]);

  return {
    docs,
    isLoading
  };
};

export default useFirestore;
 