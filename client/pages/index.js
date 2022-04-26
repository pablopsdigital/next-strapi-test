import Image from 'next/image';
import {Button, ButtonGroup} from '@chakra-ui/react';
import {PhoneIcon, AddIcon, WarningIcon} from '@chakra-ui/icons';
import BasicLayout from '../components/layouts/basicLayout/BasicLayout';

export default function Home() {
  return (
    <BasicLayout>
      <div className="home">
        <h1>Home</h1>
        <Button colorScheme="teal" size="lg" rightIcon={<AddIcon />}>
          Button
        </Button>
      </div>
    </BasicLayout>
  );
}
