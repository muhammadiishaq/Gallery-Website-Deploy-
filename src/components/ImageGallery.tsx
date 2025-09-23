// // import React from "react";
// import useFirestore from "../hooks/useFirestore";
// import { FaDownload } from "react-icons/fa";

// const ImageGallery = () => {
//   const { docs: images, isLoading } = useFirestore('images');
//   console.log(images); 

//   const downloadImage = (url: string) => {
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'image.jpg'; // You can set the default filename
//     link.click();
//   };

//   if (isLoading) {
//     console.log('loading.....');
//     return (
//       <div className="text-center mt-10">
//         <progress className="progress w-56"></progress>
//       </div>
//     );
//   }

//   return (
//     <div className="grid md:grid-cols-3 justify-center gap-4">
//       {images.map((image) => (
//         <div key={image.url} className="card card-compact bg-base-100 w-96 shadow-xl">
//           <div className="card-body">
//             <img
//               src={image.url}
//               alt="gallery"
//               className="rounded-lg w-full h-64 object-cover"
//             />
//             <figure>
//               <p className="text-center mt-2">Uploaded by: {image.userEmail}</p>
//               <div className="block mt-2">Created on: {new Date(image.createdAt).toDateString()}</div>
//             </figure>
//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={() => downloadImage(image.url)}
//                 className="btn btn-primary btn-sm"
//                 title="Download Image"
//               >
//                 <FaDownload className="mr-2" />
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageGallery;

import useFirestore from "../hooks/useFirestore";
import { FaDownload } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const ImageGallery = () => {
  const { docs: images, isLoading } = useFirestore('images');
  console.log(images); 


  const downloadImage = (url: string) => {
    try {
      const link = document.createElement('a');
      link.href = url;
      link.download = url.split('/').pop() || 'download.jpg';
  
      // Append the link to the DOM
      document.body.appendChild(link);
  
      // Trigger the download
      link.click();
  
      // Clean up
      document.body.removeChild(link);
      toast.success('Image downloaded successfully');
      // alert('Image downloaded successfully');
    } catch (error) {
      console.error('Download failed:', error);
      toast.error('Failed to download the image.');
      // alert('Failed to download the image.');
    }
  };
  


  if (isLoading) {
    console.log('loading.....');
    return (
      <div className="text-center mt-10">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  return (
    <div> <ToastContainer />
   
    <div className="grid md:grid-cols-3 justify-center gap-4">
      {images.map((image) => (
        <div key={image.url} className="card card-compact bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <img
              src={image.url}
              alt="gallery"
              className="rounded-lg w-full h-64 object-cover"
            />
            <div className="absolute bottom-4 left-5">
              <button
                onClick={() => downloadImage(image.url)}
                className="bg-green-500 text-white p-2 rounded-full hover:bg-blue-600 "
                // title="Download Image"
              >
                <FaDownload />
              </button>
            </div>
            <figure>
              <p className="text-center mt-3 text-xs">Shared by: {image.userEmail}</p>
              <span className="block mt-2 text-xs">Date: {new Date(image.createdAt).toDateString()}</span>
            </figure>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ImageGallery;
