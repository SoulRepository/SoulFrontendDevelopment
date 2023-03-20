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

  const errorToast = (
    options: { title?: string; description?: string } = {
      title: 'Error',
      description: 'something went wrong',
    },
  ) => {
    const { title, description } = options;

    return getDefaultToast({
      title,
      description,
      status: 'error',
    });
  };

  const walletToast = () =>
    getDefaultToast({
      title: 'Wallet',
      description: 'User rejected signing',
      status: 'warning',
    });

  const infoToast = ({ title = 'Copy', description = 'description' }) =>
    getDefaultToast({
      title,
      description,
      status: 'info',
    });

  const successToast = () =>
    getDefaultToast({
      title: 'Edit',
      description: 'Your data has been successfully updated.',
      status: 'success',
    });

  return { networkErrorToast, searchToast, errorToast, walletToast, infoToast, successToast };
};
