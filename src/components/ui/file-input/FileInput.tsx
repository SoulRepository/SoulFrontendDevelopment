import { Flex, Image, Input } from '@chakra-ui/react';
import { PictureIcon } from '@app/components/ui/icons';
import { fileInputStyles } from '@app/components/ui/file-input/FileInputStyles';
import { ChangeEventHandler, FC, useState } from 'react';

interface IFileInputProps {
  isRounded?: boolean;
  activeImgUrl?: string;
}

export const FileInput: FC<IFileInputProps> = ({ isRounded, activeImgUrl }) => {

  const [selectedImage, setSelectedImage] = useState<File | Blob | null>(null);

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = e => {
    if (!e.target.files) {
      return;
    }
    setSelectedImage(e.target.files[0]);
  };

  const previewImgUrl = selectedImage ? URL.createObjectURL(selectedImage) : activeImgUrl

  return (
    <Flex sx={fileInputStyles(isRounded)}>
      {previewImgUrl ? (
        <Image className="preview" alt="preview" src={previewImgUrl} />
      ) : (
        <PictureIcon className="icon" />
      )}
      <Input type="file" aria-hidden={true} accept="image/*" onChange={onChangeHandler} />
    </Flex>
  );
};
