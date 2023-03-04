import { Flex, Image, Input } from '@chakra-ui/react';
import { PictureIcon } from '@app/components/ui/icons';
import { fileInputStyles } from '@app/components/ui/file-input/FileInputStyles';
import { ChangeEventHandler, FC, useState } from 'react';

interface IFileInputProps {
  isRounded?: boolean;
}

export const FileInput: FC<IFileInputProps> = ({ isRounded }) => {
  const [selectedImage, setSelectedImage] = useState<File | Blob | null>(null);

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = e => {
    if (!e.target.files) {
      return;
    }
    setSelectedImage(e.target.files[0]);
  };

  return (
    <Flex sx={fileInputStyles(isRounded)}>
      {selectedImage ? (
        <Image className="preview" alt="preview" src={URL.createObjectURL(selectedImage)} />
      ) : (
        <PictureIcon className="icon" />
      )}
      <Input type="file" aria-hidden={true} accept="image/*" onChange={onChangeHandler} />
    </Flex>
  );
};
