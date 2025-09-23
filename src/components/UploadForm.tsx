

import React, { useState } from "react";
import { useStorage } from "../hooks/useStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UploadForm: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { startUpload } = useStorage();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedFile) {
      try {
        await startUpload(selectedFile);
        toast.success('Image uploaded successfully!');
      } catch (error: any) {
        toast.error(`Error: ${error.message}`);
      }
      setSelectedFile(null);
    }
  };

  return (
    <div className="text-center mt-10">
      <form onSubmit={handleSubmit} className="flex items-center justify-center h-19 mt-2">
        <input 
          type="file"
          onChange={handleFileChange}
          className="file-input file-input-bordered file-input-success w-full max-w-xs"
        />
        <button className="btn gap-3 bg-success" 
        // disabled={!selectedFile}
        >
          Upload <span>🚀</span>
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default UploadForm;
