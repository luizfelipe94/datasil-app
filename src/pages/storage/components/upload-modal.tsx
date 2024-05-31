import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Progress, useToast } from "@chakra-ui/react";
import { useRef, useState } from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import api from "@/services/api";
import { useQueryClient } from "@tanstack/react-query";

const FileCard = styled.div`
  width: 100%;
  border: 1px solid #d6d6d6;
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-radius: 5px;
`;

const FileCardTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

type File = {
  file: any;
  progress: number;
};

export const UploadModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const inputRef = useRef<any>();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const onFilesChange = (event: any) => {
    if (event.target.files) {
      if (event.target.files.length > 10) {
        toast({
          title: "Max 10 files at a time",
          duration: 5000,
          status: "warning"
        });
        return;
      }
      setSelectedFiles(Object.values(event.target.files).map((file) => ({ file, progress: 0 })));
    }
  };

  const onChooseFiles = () => {
    inputRef.current.click();
  };

  const onRemoveFile = (toRemove: File) => {
    setSelectedFiles(selectedFiles.filter(({ file }) => file !== toRemove));
  };

  const onSubmitFiles = async () => {
    if (!selectedFiles.length) return;
    setIsUploading(true);
    await Promise.all(selectedFiles.map((file) => submitFile(file)))
      .catch(() => {
        toast({
          title: "Error",
          duration: 5000,
          status: "error"
        });
      })
      .finally(() => {
        toast({
          title: "Files uploaded successfully",
          duration: 5000,
          status: "success"
        });
        queryClient.invalidateQueries({ queryKey: ["list-files"] });
        queryClient.invalidateQueries({ queryKey: ["get-stats"] });
        close();
      });
  };

  const close = () => {
    onClose();
    setIsUploading(false);
    setSelectedFiles([]);
  };

  const submitFile = (file: File) => {
    const formData = new FormData();
    formData.append("file", file.file);
    return api.post("/storage/files", formData, {
      onUploadProgress: (e) => {
        if (e.total) {
          file.progress = Math.round((e.loaded * 100) / e.total);
          setSelectedFiles(selectedFiles.map((f) => f !== file ? f : file));
        }
      }
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Upload Files</ModalHeader>
        <ModalBody>
          <div style={{ padding: "10px", maxHeight: "60vh", overflowY: "auto" }}>
            <input 
              ref={inputRef}
              style={{ display: "none" }}
              type="file" 
              multiple 
              onChange={onFilesChange}
            />
            {!selectedFiles.length && (
              <Button onClick={onChooseFiles}>Select</Button>
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {selectedFiles.length && (
                selectedFiles.map(({ file, progress }: File, i) => (
                  <FileCard key={i}>
                    <FileCardTitle>
                      <span>{file.name}</span>
                      {!isUploading && (
                        <div style={{ cursor: "pointer" }} onClick={() => onRemoveFile(file)}>
                          <MdDelete color="#ff0000" size={20}/>
                        </div>
                      )}
                    </FileCardTitle>
                    <Progress hasStripe value={progress} size='sm'/>
                  </FileCard>
                ))
              )}
            </div>
          </div>
        </ModalBody>        
        <ModalFooter>
          {!isUploading && (
            <Button variant='ghost'  mr={3} onClick={() => close()} >
              Close
            </Button>
          )}
          <Button 
            colorScheme='blue' 
            onClick={() => onSubmitFiles()}
            isLoading={isUploading}
            loadingText="Submitting"
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
