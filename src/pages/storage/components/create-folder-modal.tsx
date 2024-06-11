import { Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "@/services/api";

const resolver = yup.object().shape({
  path: yup.string().required(),
});

const createFolder = async (path: string) => {
  return await api.post("/storage/folders", { name: path });
};

export const CreateFolderModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {

  const queryClient = useQueryClient();
  const toast = useToast();

  const form = useForm({ mode: "onSubmit", resolver: yupResolver(resolver) });

  const mutation = useMutation({
    mutationFn: (path: string) => createFolder(path),
    onSuccess: () => {
      toast({ title: "Folder created!", duration: 5000, status: "success" });
    },
    onError: () => {
      toast({ title: "Error", duration: 5000, status: "error" });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["list-files"] });
      onClose();
    }
  });

  const onSubmit = ({ path }: { path: string }) => {
    mutation.mutate(path);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Folder</ModalHeader>
        <ModalBody>
          <FormControl>
            <FormLabel>Folder</FormLabel>
            <Input {...form.register("path")} type="text" />
            <FormHelperText>You can create nested folders like this folder1/folder2/folder3</FormHelperText>
            {form.formState.errors.path && <FormErrorMessage>{form.formState.errors.path.message}</FormErrorMessage>}
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button variant='ghost' mr={3} onClick={onClose} >
            Close
          </Button>
          <Button
            colorScheme='blue'
            onClick={form.handleSubmit(onSubmit)}
            loadingText="Submitting"
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};