// components/PdfUpload.tsx
import React, { useState } from "react";
import {
  Button,
  Box,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const PdfUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file.type !== "application/pdf") {
        setErrorMessage("Please upload a valid PDF file.");
        return;
      }
      setSelectedFile(file);
      setErrorMessage("");
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setUploadSuccess(false);
    setErrorMessage("");

    try {
      // Simulate an upload process
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // After successful upload
      setUploadSuccess(true);
    } catch (error) {
      setErrorMessage("An error occurred during upload. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h6" gutterBottom>
        Upload PDF
      </Typography>
      <input
        accept="application/pdf"
        style={{ display: "none" }}
        id="pdf-upload"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="pdf-upload">
        <Button
          variant="contained"
          color="primary"
          component="span"
          startIcon={<UploadFileIcon />}
        >
          Select PDF
        </Button>
      </label>
      {selectedFile && (
        <Typography variant="body2" gutterBottom>
          Selected file: {selectedFile.name}
        </Typography>
      )}
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      {isUploading ? (
        <CircularProgress sx={{ mt: 2 }} />
      ) : (
        selectedFile && (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleUpload}
            sx={{ mt: 2 }}
          >
            Upload
          </Button>
        )
      )}
      {uploadSuccess && (
        <Alert severity="success" sx={{ mt: 2 }}>
          Upload successful!
        </Alert>
      )}
    </Box>
  );
};

export default PdfUpload;
