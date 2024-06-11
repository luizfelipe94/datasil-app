import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";

export const CreateFolderModal = ({ isOpen, onClose, path }: { isOpen: boolean, onClose: () => void, path: string }) => {
  const queryClient = useQueryClient();
  // const toast = useToast();
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Upload Files</ModalHeader>
        <ModalBody>
          
        </ModalBody>
        <ModalFooter>
          <Button variant='ghost' mr={3} onClick={() => close()} >
            Close
          </Button>
          <Button
            colorScheme='blue'
            // onClick={() => onSubmitFiles()}
            // isLoading={isUploading}
            loadingText="Submitting"
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};