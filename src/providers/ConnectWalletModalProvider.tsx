import { createContext, FC, PropsWithChildren, useContext } from 'react';
import Image from 'next/image';
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SystemStyleObject,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import type { Connectors, IWalletConnect } from '@app/types/web3Types';
import { connectorsName, walletsData } from '@app/api/web3/connectors';
import { useWallet } from '@app/api/web3/providers/WalletProvider';

const walletConnectDefaultState: IWalletConnect = {
  onToggle: () => void 0,
  onClose: () => void 0,
  onOpen: () => void 0,
};

interface IWalletConnectModalProps {
  onClose: () => void;
  isOpen: boolean;
}

export const WalletConnectModalStyles: SystemStyleObject = {
  '.modal': { bgColor: '#f3f6f9' },
  '.title': {
    fontSize: '24px',
  },
  '.wallets': {
    mb: '30px',
    flexDirection: 'column',
    '.wallet': {
      mb: '10px',
      bgColor: '#343434',
      p: '20px',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'all .3s',
      _hover: { bgColor: '#5f5f5f' },
    },
  },
};

const WalletConnectModal: FC<IWalletConnectModalProps> = ({ onClose, isOpen }) => {
  const { activate } = useWallet();

  const login = async (connector: Connectors, connectorName: connectorsName) => {
    await activate(connector, connectorName);
    onClose();
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered preserveScrollBarGap>
      <Box sx={WalletConnectModalStyles}>
        <ModalOverlay />
        <ModalContent className="modal">
          <ModalHeader className="title">Connect Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="choose-wallet">
            Choose one of available wallet providers or create a new wallet.
            <VStack className="wallets">
              {walletsData.map(wallet => (
                <Box
                  key={wallet.name}
                  className="wallet"
                  onClick={() => login(wallet.connector, wallet.name)}
                >
                  <Image width={150} height={24} src={wallet.icon} alt={wallet.name} />
                </Box>
              ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Box>
    </Modal>
  );
};

const ConnectWalletModalContext = createContext(walletConnectDefaultState);

export const useConnectWalletModal = () => useContext(ConnectWalletModalContext);

export const ConnectWalletModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, onToggle, onClose, onOpen } = useDisclosure();

  const value = { isOpen, onToggle, onClose, onOpen };

  return (
    <ConnectWalletModalContext.Provider value={value}>
      {children}
      <WalletConnectModal isOpen={isOpen} onClose={onClose} />
    </ConnectWalletModalContext.Provider>
  );
};
