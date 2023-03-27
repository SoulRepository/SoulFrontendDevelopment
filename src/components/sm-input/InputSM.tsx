import { ChangeEventHandler, FC, memo, useEffect, useState } from 'react';
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';

import { inputSMStyles } from '@app/components/sm-input/inputSMStyles';
import { socialMediaMetaData } from '@app/mockData';
import { windowOpen } from '@app/utils';

import { useSocialLinks } from '@app/api/http/query/useSocialLinks';

import type { socialMediaTypes } from '@app/types';
import type { ISocialLink } from '@app/types/httpTypes';

interface IInputSMProps {
  type: socialMediaTypes;
  onChange: (text: string, type: socialMediaTypes) => void;
  getSignature?: () => void;
  getInitData: (type: socialMediaTypes) => ISocialLink | undefined;
}

const InputSM: FC<IInputSMProps> = ({ type, onChange, getSignature, getInitData }) => {
  const initData = getInitData(type)

  const [inputText, setInputText] = useState(initData?.url);
  const [isVerif, setIsVerif] = useState(initData?.verified);


  const Icon = socialMediaMetaData[type].icon;

  const { data } = useSocialLinks(type);

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setInputText(value);
    onChange(value, type);
  };

  const onUnlinkHandler = () => {
    onChange('', type);
    setInputText('');
    setIsVerif(false);
  };

  const onAuthorizationHandler = async () => {
    const meta = await getSignature?.();

    if (!meta) {
      return;
    }

    data && windowOpen(data.link);

    return;
  };

  useEffect(() => {
    setInputText(initData?.url);
    setIsVerif(initData?.verified);
  }, [initData?.url, initData?.verified]);

  return (
    <Flex sx={inputSMStyles}>
      <InputGroup className="input-group">
        <InputLeftElement pointerEvents="none">
          <Icon className="icon" />
        </InputLeftElement>
        <Input
          disabled={isVerif}
          value={inputText}
          onChange={onChangeHandler}
          type="text"
          placeholder={type}
        />
        {isVerif && (
          <InputRightElement>
            <Flex className="verified">Verified</Flex>
          </InputRightElement>
        )}
      </InputGroup>
      {type !== 'site' &&
        (isVerif ? (
          <Button onClick={onUnlinkHandler}>Unlink</Button>
        ) : (
          <Button isDisabled={isVerif || !data?.link} onClick={onAuthorizationHandler}>
            Authorization
          </Button>
        ))}
    </Flex>
  );
};

export default memo(InputSM);
