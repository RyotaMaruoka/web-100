'use client';

import { NextPage } from 'next';
import { userCollectionState } from '../_features/hooks/state/UserCollectionState';
import { useRecoilState } from 'recoil';
import { Box, Container, Drawer, Modal, Stack } from '@mui/material';
import { Button, IconButton, Typography } from '@material-tailwind/react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { ReactNode, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SearchIcon from '@mui/icons-material/Search';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from 'next/navigation';

const menuArray: {
  label: string;
  path: string;
  icon?: ReactNode;
}[] = [
  {
    label: 'Look Car',
    path: '',
    icon: <DirectionsCarIcon />,
  },
  {
    label: 'Look NFT',
    path: '',
    icon: <SearchIcon />,
  },
  {
    label: 'NFT Market',
    path: '',
    icon: <StorefrontIcon />,
  },
];

const ConsolePage: NextPage = () => {
  const router = useRouter();
  const [user, setUser] = useRecoilState(userCollectionState);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState<boolean>(false);
  const handleDisclose = () => {
    setIsBuyModalOpen((prev) => !prev);
  };
  const [isSnipperOpen, setIsSnipperOpen] = useState<boolean>(true);
  const handleSnipperDisclose = () => {
    setIsSnipperOpen((prev) => !prev);
  };

  // const isHavingNFT = user.isHavingNFT;
  const isHavingNFT = true;

  return (
    <>
      <Container
        maxWidth="sm"
        style={{
          paddingTop: '15px',
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={{ marginTop: 20, marginBottom: 30 }}
        >
          <Typography variant="h4">Your NFT Key</Typography>
          <Stack direction="row" spacing={1}>
            <IconButton
              style={{
                borderRadius: '10px',
              }}
            >
              <AccountCircleIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                router.push('/');
              }}
              style={{
                borderRadius: '10px',
              }}
            >
              <HomeIcon />
            </IconButton>
          </Stack>
        </Stack>
        <img
          src={isHavingNFT ? 'keyimg.jpeg' : 'noitem.jpeg'}
          alt="Yor NFT image"
          style={{
            width: '100vw',
            borderRadius: '20px',
          }}
        />
        {isHavingNFT ? (
          <></>
        ) : (
          <Stack alignItems="center" sx={{ mt: 3 }}>
            <Button
              onClick={() => {
                setUser({
                  ...user,
                  isHavingNFT: true,
                });
                handleDisclose;
              }}
            >
              NFT Key を購入する
            </Button>
          </Stack>
        )}
      </Container>
      <Modal open={isBuyModalOpen} onClose={handleDisclose}>
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '5px',
            boxShadow: 24,
            p: 2,
            bgcolor: 'white',
          }}
        >
          <iframe
            style={{
              width: '85vw',
              height: '80vh',
            }}
            src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0xD3Bb93A400aaaabfF580da61D2b7ABdcFAe83f96&chain=%7B%22name%22%3A%22Sepolia%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fsepolia.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Sepolia+Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22sep%22%2C%22chainId%22%3A11155111%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22sepolia%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fethereum%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=adb64b1a9499710b286167b6e428741b&theme=light&primaryColor=green"
          />
        </Box>
      </Modal>
      {isSnipperOpen ? (
        <Drawer anchor="bottom" open={isSnipperOpen} onClose={handleSnipperDisclose} hideBackdrop>
          <Stack
            spacing={1}
            sx={{
              p: 2,
              pb: 5,
            }}
          >
            <button
              onClick={handleSnipperDisclose}
              style={{
                marginBottom: '5px',
              }}
            >
              <KeyboardArrowDownIcon fontSize="large" />
            </button>
            {menuArray.map((menu) => {
              const isIcon = menu.icon ? true : false;
              return (
                <button key={menu.label}>
                  <Stack
                    spacing={1}
                    direction="row"
                    alignItems="center"
                    sx={{
                      p: 2,
                      borderRadius: '3px',
                      border: '0.5px solid gray',
                    }}
                  >
                    {isIcon && menu.icon}
                    <Typography variant="h6">{menu.label}</Typography>
                  </Stack>
                </button>
              );
            })}
          </Stack>
        </Drawer>
      ) : (
        isHavingNFT && (
          <Stack
            alignItems="center"
            sx={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              width: '100vw',
              borderTopLeftRadius: '20px',
              borderStartEndRadius: '20px',
              boxShadow: 24,
              p: 2,
              bgcolor: 'white',
            }}
          >
            <button onClick={handleSnipperDisclose}>
              <KeyboardArrowUpIcon fontSize="large" />
            </button>
          </Stack>
        )
      )}
    </>
  );
};

export default ConsolePage;
