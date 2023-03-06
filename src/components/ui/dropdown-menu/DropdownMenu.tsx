import { FC, useRef } from 'react';
import { Flex, useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';

import { EllipsisIcon } from '@app/components/ui/icons';
import { Bullet } from '@app/components/ui';

import useOutsideClick from '@app/hooks/useOutsideClick';

import { dropdownMenuStyles } from '@app/components/ui/dropdown-menu/dropdownMenuStyles';

import type { IMenuItem } from '@app/types';

interface IDropdownMenuProps {
  menuItems: IMenuItem[];
}

export const DropdownMenu: FC<IDropdownMenuProps> = ({ menuItems }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const ref = useRef(null);
  useOutsideClick([ref], onClose);

  return (
    <Flex ref={ref} sx={dropdownMenuStyles}>
      <Bullet className="icon" onClick={onToggle}>
        <EllipsisIcon />
      </Bullet>
      {isOpen && (
        <Flex className="dropdown-menu">
          {menuItems.map(({ label, link }, i) => (
            <Link key={i} href={link}>
              <Bullet isSquare>{label}</Bullet>
            </Link>
          ))}
        </Flex>
      )}
    </Flex>
  );
};
