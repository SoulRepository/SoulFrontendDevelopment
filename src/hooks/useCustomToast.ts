import { useToast, UseToastOptions } from '@chakra-ui/react';
import { useCallback } from 'react';

const config: UseToastOptions = {
  duration: 5000,
  isClosable: true,
  position: 'top-left',
  colorScheme: 'whatsapp',
};

export const useCustomToast = () => {
  const toast = useToast();

  const getDefaultToast = useCallback(
    (options?: UseToastOptions) => toast({ ...config, ...options }),
    [toast],
  );

  const networkErrorToast = () =>
    getDefaultToast({
      title: 'Network error',
      description: `You need to switch to Mumbai network`,
      status: 'error',
    });

  const searchToast = (query: string) =>
    getDefaultToast({
      title: 'Search',
      description: `Company ${query} not found`,
      status: 'warning',
    });

  const errorToast = () =>
    getDefaultToast({
      title: 'Error',
      description: `something went wrong`,
      status: 'error',
    });

  const walletToast = () =>
    getDefaultToast({
      title: 'Wallet',
      description: 'User rejected signing',
      status: 'warning',
    });

  const infoToast = ({ title = 'Copy', description = 'description' }) =>
    toast({
      title,
      description,
      status: 'info',
      duration: 5000,
      isClosable: true,
      position: 'top-left',
      colorScheme: 'whatsapp',
    });

  return { networkErrorToast, searchToast, errorToast, walletToast, infoToast };
};
