import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

import { inputSMStyles } from '@app/components/sm-input/inputSMStyles';
import { ChangeEventHandler, FC, useEffect, useState } from 'react';
import type { socialMediaTypes } from '@app/types';
import { socialMediaMetaData } from '@app/mockData';
import { useSocialLinks } from '@app/api/http/query/useSocialLinks';
import { windowOpen } from '@app/utils';
import useLocalStorageState from 'use-local-storage-state';
import { QueryKeys } from '@app/api/http/queryKeys';

interface IInputSMProps {
  type: socialMediaTypes;
  onChange: (text: string, type: socialMediaTypes) => void;
  value?: string;
  isVerified?: boolean;
  getSignature?: () => void;
}

export const InputSM: FC<IInputSMProps> = ({ type, onChange, value, isVerified, getSignature }) => {
  const [inputText, setInputText] = useState('');
  const Icon = socialMediaMetaData[type].icon;

  const [metaData] = useLocalStorageState(
    QueryKeys.metaData,
  );

  const { data } = useSocialLinks(type);

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setInputText(value);
    onChange(value, type);
  };

  const onAuthorizationHandler = () => {
    if (!metaData) {
      getSignature?.();

      return;
    }
    data && windowOpen(data.link);

    return;
  };

  useEffect(() => {
    value && setInputText(value);
  }, [value]);

  return (
    <InputGroup sx={inputSMStyles}>
      <InputLeftElement pointerEvents="none">
        <Icon className="icon" />
      </InputLeftElement>
      <Input
        disabled={isVerified}
        value={inputText}
        onChange={onChangeHandler}
        type="text"
        placeholder={type}
      />
      {type !== 'site' &&
        (value && isVerified ? (
          <Button>Unlink</Button>
        ) : (
          <Button isDisabled={!data?.link} onClick={onAuthorizationHandler}>Authorization</Button>
        ))}
    </InputGroup>
  );
};
