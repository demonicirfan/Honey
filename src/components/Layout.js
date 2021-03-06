import { Center, Container } from '@chakra-ui/react';
import React from 'react';
import Featured from './Featured';
import Hero from './Hero';
import HeroPattern from './HeroPattern';
import Navbar from './Navbar';
import Borrow from './Borrow';
import Features from './Features';
import NFTdetails from './NFTdetails/Index';
import BGpattern from './BGpattern';
import Head from 'next/head';

const Layout = () => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:title' content='Honey' key='ogtitle' />

        <meta property='og:url' content='https://honey-one.vercel.app/' />
        <meta property='og:title' content='Honey Finance' />
        <meta
          property='og:description'
          content='We are a decentralised protocol and liquidity solution, we will help you to unlock liquidity kept in non-fungible assets to be used in DeFi. '
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/demoniirfan/image/upload/v1656839040/Honey/Frame_10192_3_f6hxtk.png'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='honey-one.vercel.app' />
        <meta property='twitter:url' content='https://honey-one.vercel.app/' />
        <meta name='twitter:title' content='Honey Finance' />
        <meta
          name='twitter:description'
          content='We are a decentralised protocol and liquidity solution, we will help you to unlock liquidity kept in non-fungible assets to be used in DeFi. '
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/demoniirfan/image/upload/v1656839040/Honey/Frame_10192_3_f6hxtk.png'
        />
        <meta charSet='utf-8' />
        <title>Honey</title>
      </Head>
      <Container maxW='full' p='0'>
        <Container
          opacity='0.03'
          position='fixed'
          bg='white'
          maxW='100vw'
          overflow='hidden'
          p='0'
        >
          <BGpattern />
          <BGpattern />
          <BGpattern />
        </Container>
        <Container maxW='full' color='black' p='0' bg='#fffffff7'>
          <Container
            border=''
            bg='white'
            position='absolute'
            maxW='100vw'
            h='110vh'
            overflow='hidden'
            p='0'
          >
            <HeroPattern />
          </Container>
          <Container
            position='absolute'
            maxW='full'
            p='0'
            display='flex'
            flexDirection={'column'}
          >
            <Navbar />
            <Hero />
            <Featured />
            <Borrow />
            <Features />
            <NFTdetails />
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Layout;
