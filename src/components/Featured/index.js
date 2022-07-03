import { Center, Container, Text, Wrap } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Featured = () => {
  return (
    <Container mt='4rem' p='3rem 0rem' maxW='100vw' bg='#FAFAFA'>
      <Text
        mx='auto'
        fontSize={{ base: '14px', md: '18px' }}
        textAlign={'center'}
      >
        AS FEATURED IN
      </Text>
      <Center mx='auto' maxW='8xl' w='full'>
        <Wrap
          alignItems={'center'}
          justify={{ base: 'center', lg: 'space-between' }}
          alignContent={'center'}
          w='full'
          spacing='2rem'
          p='2rem'
        >
          <Center w={{ base: '7rem', md: '14rem' }}>
            <svg
              viewBox='0 0 193 28'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M67.7728 21.2281C66.2366 21.2281 64.8824 20.8946 63.71 20.2276C62.5377 19.5606 61.6079 18.6308 60.9207 17.4383C60.2537 16.2457 59.9202 14.8814 59.9202 13.3452C59.9202 11.8091 60.2537 10.4447 60.9207 9.25215C61.6079 8.0596 62.5377 7.12982 63.71 6.46281C64.8824 5.79579 66.2366 5.46228 67.7728 5.46228C69.693 5.46228 71.31 5.9676 72.6238 6.97823C73.9376 7.96865 74.7765 9.34311 75.1403 11.1016H71.0472C70.8451 10.374 70.4408 9.808 69.8345 9.40374C69.2483 8.97928 68.551 8.76705 67.7425 8.76705C66.6712 8.76705 65.7616 9.1713 65.0138 9.97981C64.2659 10.7883 63.892 11.9101 63.892 13.3452C63.892 14.7803 64.2659 15.9021 65.0138 16.7106C65.7616 17.5191 66.6712 17.9234 67.7425 17.9234C68.551 17.9234 69.2483 17.7212 69.8345 17.317C70.4408 16.9127 70.8451 16.3367 71.0472 15.5888H75.1403C74.7765 17.2867 73.9376 18.651 72.6238 19.6819C71.31 20.7127 69.693 21.2281 67.7728 21.2281Z'
                fill='#0B0B2C'
              />
              <path
                d='M85.1943 21.2281C83.739 21.2281 82.4252 20.8946 81.2529 20.2276C80.1008 19.5606 79.1811 18.6409 78.4938 17.4686C77.8268 16.276 77.4933 14.9016 77.4933 13.3452C77.4933 11.7888 77.8369 10.4245 78.5242 9.25215C79.2114 8.0596 80.1311 7.12982 81.2832 6.46281C82.4555 5.79579 83.7693 5.46228 85.2247 5.46228C86.6598 5.46228 87.9534 5.79579 89.1055 6.46281C90.2778 7.12982 91.1975 8.0596 91.8645 9.25215C92.5517 10.4245 92.8954 11.7888 92.8954 13.3452C92.8954 14.9016 92.5517 16.276 91.8645 17.4686C91.1975 18.6409 90.2778 19.5606 89.1055 20.2276C87.9332 20.8946 86.6294 21.2281 85.1943 21.2281ZM85.1943 17.8627C86.205 17.8627 87.0842 17.4888 87.8321 16.7409C88.58 15.9729 88.9539 14.8409 88.9539 13.3452C88.9539 11.8495 88.58 10.7277 87.8321 9.97981C87.0842 9.21172 86.2151 8.82769 85.2247 8.82769C84.1938 8.82769 83.3045 9.21172 82.5566 9.97981C81.8289 10.7277 81.4651 11.8495 81.4651 13.3452C81.4651 14.8409 81.8289 15.9729 82.5566 16.7409C83.3045 17.4888 84.1837 17.8627 85.1943 17.8627Z'
                fill='#0B0B2C'
              />
              <path
                d='M95.7588 20.8643V5.82611H99.1849L99.5184 7.85748C100.003 7.12982 100.64 6.55376 101.428 6.1293C102.237 5.68462 103.167 5.46228 104.218 5.46228C106.542 5.46228 108.19 6.36174 109.16 8.16067C109.706 7.33195 110.433 6.67504 111.343 6.18993C112.273 5.70483 113.283 5.46228 114.375 5.46228C116.335 5.46228 117.841 6.04845 118.892 7.22078C119.943 8.39311 120.469 10.1112 120.469 12.375V20.8643H116.588V12.7388C116.588 11.4452 116.335 10.4548 115.83 9.76757C115.345 9.08034 114.587 8.73673 113.556 8.73673C112.505 8.73673 111.656 9.12077 111.009 9.88885C110.383 10.6569 110.069 11.7282 110.069 13.1027V20.8643H106.189V12.7388C106.189 11.4452 105.936 10.4548 105.431 9.76757C104.925 9.08034 104.147 8.73673 103.096 8.73673C102.065 8.73673 101.226 9.12077 100.58 9.88885C99.953 10.6569 99.6397 11.7282 99.6397 13.1027V20.8643H95.7588Z'
                fill='#0B0B2C'
              />
              <path
                d='M123.547 27.5345V5.82611H127.003L127.428 7.97875C127.913 7.31174 128.55 6.72557 129.338 6.22025C130.146 5.71494 131.187 5.46228 132.461 5.46228C133.876 5.46228 135.139 5.80589 136.251 6.49312C137.362 7.18035 138.241 8.12024 138.888 9.31279C139.535 10.5053 139.858 11.8596 139.858 13.3755C139.858 14.8915 139.535 16.2457 138.888 17.4383C138.241 18.6106 137.362 19.5404 136.251 20.2276C135.139 20.8946 133.876 21.2281 132.461 21.2281C131.329 21.2281 130.338 21.0159 129.489 20.5914C128.64 20.167 127.953 19.5707 127.428 18.8026V27.5345H123.547ZM131.642 17.8324C132.875 17.8324 133.896 17.4181 134.704 16.5893C135.513 15.7606 135.917 14.6894 135.917 13.3755C135.917 12.0617 135.513 10.9803 134.704 10.1314C133.896 9.28247 132.875 8.858 131.642 8.858C130.389 8.858 129.358 9.28247 128.55 10.1314C127.761 10.9601 127.367 12.0314 127.367 13.3452C127.367 14.659 127.761 15.7404 128.55 16.5893C129.358 17.4181 130.389 17.8324 131.642 17.8324Z'
                fill='#0B0B2C'
              />
              <path
                d='M147.903 21.2281C146.61 21.2281 145.549 21.026 144.72 20.6218C143.891 20.1973 143.275 19.6414 142.87 18.9542C142.466 18.267 142.264 17.509 142.264 16.6803C142.264 15.2856 142.81 14.1537 143.901 13.2846C144.993 12.4154 146.63 11.9809 148.813 11.9809H152.633V11.617C152.633 10.5862 152.34 9.82821 151.754 9.34311C151.168 8.858 150.44 8.61545 149.571 8.61545C148.783 8.61545 148.095 8.80747 147.509 9.19151C146.923 9.55534 146.559 10.1011 146.418 10.8287H142.628C142.729 9.73725 143.093 8.78726 143.719 7.97875C144.366 7.17025 145.195 6.55376 146.206 6.1293C147.216 5.68462 148.348 5.46228 149.601 5.46228C151.744 5.46228 153.432 5.99791 154.665 7.06918C155.898 8.14045 156.514 9.6564 156.514 11.617V20.8643H153.209L152.845 18.4388C152.401 19.2473 151.774 19.9143 150.966 20.4398C150.177 20.9654 149.157 21.2281 147.903 21.2281ZM148.783 18.1962C149.894 18.1962 150.753 17.8324 151.36 17.1048C151.986 16.3771 152.381 15.4776 152.542 14.4064H149.237C148.207 14.4064 147.469 14.5984 147.024 14.9824C146.58 15.3463 146.357 15.801 146.357 16.3468C146.357 16.933 146.58 17.3877 147.024 17.7111C147.469 18.0345 148.055 18.1962 148.783 18.1962Z'
                fill='#0B0B2C'
              />
              <path
                d='M159.611 20.8643V5.82611H163.037L163.34 8.3729C163.805 7.48354 164.472 6.7761 165.341 6.25057C166.231 5.72504 167.272 5.46228 168.464 5.46228C170.324 5.46228 171.769 6.04845 172.8 7.22078C173.831 8.39311 174.346 10.1112 174.346 12.375V20.8643H170.465V12.7388C170.465 11.4452 170.202 10.4548 169.677 9.76757C169.151 9.08034 168.333 8.73673 167.221 8.73673C166.13 8.73673 165.23 9.12077 164.523 9.88885C163.835 10.6569 163.492 11.7282 163.492 13.1027V20.8643H159.611Z'
                fill='#0B0B2C'
              />
              <path
                d='M178.827 27.5345L182.314 19.8638H181.404L175.553 5.82611H179.767L183.981 16.4074L188.378 5.82611H192.501L182.95 27.5345H178.827Z'
                fill='#0B0B2C'
              />
              <path
                d='M15.6026 25.0062C14.6355 25.9732 13.0673 25.9718 12.1019 25.0032L2.24283 15.1102C1.27981 14.1439 1.28115 12.5802 2.24582 11.6155L12.1049 1.75644C13.0696 0.791768 14.6332 0.790427 15.5996 1.75345L25.4925 11.6125C26.4612 12.5779 26.4626 14.1462 25.4955 15.1132L15.6026 25.0062Z'
                fill='#E7B400'
              />
              <path
                d='M28.9963 25.0016C28.031 25.9703 26.4627 25.9716 25.4957 25.0046L15.6027 15.1116C14.6357 14.1446 14.637 12.5763 15.6057 11.611L25.4987 1.75186C26.465 0.788839 28.0287 0.79018 28.9933 1.75486L38.8524 11.614C39.8171 12.5786 39.8185 14.1423 38.8554 15.1086L28.9963 25.0016Z'
                fill='#0B0B2C'
              />
              <path
                d='M38.9247 25.0035C37.9585 25.9711 36.3904 25.9711 35.4243 25.0035L25.5465 15.1102C24.5813 14.1435 24.5827 12.5774 25.5495 11.6123L35.4273 1.75297C36.3927 0.789294 37.9562 0.789296 38.9217 1.75297L48.7994 11.6123C49.7662 12.5774 49.7676 14.1435 48.8024 15.1102L38.9247 25.0035Z'
                fill='#E7B400'
              />
            </svg>
          </Center>
          <Center w={{ base: '7rem', md: '10rem' }}>
            <svg
              viewBox='0 0 640 206'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M488.5 1.9C484.5 4.3 482.4 6.8 480.5 11.3C478.4 16.4 478.3 88.4 480.4 94.3C482.2 99.1 484.5 101.7 489.2 104.1C492.7 105.9 496.1 106 559.6 106C625.5 106 626.4 106 630.7 103.9C633.1 102.7 636.2 100.2 637.5 98.2L640 94.5V52.9V11.3L637.7 7.9C636.5 6.1 633.9 3.5 632.1 2.3L628.7 -1.57952e-06H560.1C495.1 -1.57952e-06 491.3 0.0999984 488.5 1.9ZM629.1 11.8L632.1 15.1L631.8 53.6L631.5 92.2L628.7 94.6L625.9 97H559.9H493.8L490.9 94.1L488 91.2V53.6C488 26.1 488.3 15.4 489.2 13.4C491.7 8 491.1 8 561.3 8.3L626.2 8.5L629.1 11.8Z'
                fill='black'
              />
              <path
                d='M595.8 30.9999C585.7 32.8999 579.8 40.9999 579.8 52.9999C579.8 62.8999 583.6 69.2999 591.7 73.3999C596.5 75.7999 605.6 75.4999 610.5 72.6999C614.9 70.1999 619 63.9999 619 59.6999C619 57.0999 618.8 56.9999 614.1 56.9999C609.6 56.9999 609.1 57.1999 608.2 59.8999C606.7 64.0999 602.8 66.3999 598.5 65.5999C586.5 63.2999 588.2 39.8999 600.4 39.9999C603.9 40.0999 606.1 41.4999 607.9 44.6999C608.9 46.5999 609.9 46.9999 614 46.9999C619.4 46.9999 619.9 46.3999 617.9 41.2999C614.9 33.3999 605.7 29.0999 595.8 30.9999Z'
                fill='black'
              />
              <path
                d='M500 52.5V74H505.5H511V61.8V49.5L518.6 61.8L526.2 74H531.6H537V52.5V31H532H527V44.2V57.5L518.9 44.2L510.7 31H505.4H500V52.5Z'
                fill='black'
              />
              <path
                d='M539 32.2C539 32.9 542.2 38.7 546 45.1L553 56.8V65.4V74H559H565V65.4V56.9L572.5 44.6C576.6 37.8 580 32 580 31.6C580 31.3 577.3 31 574.1 31H568.1L563.9 38.5C561.6 42.6 559.3 45.7 559 45.5C558.6 45.2 556.4 41.9 554.1 38L549.9 31H544.5C540.8 31 539 31.4 539 32.2Z'
                fill='black'
              />
              <path
                d='M18.5 30.6C11.4 32.4 6.4 34.6 3.4 37.2L0 40.2V116.7C0 192.8 0 193.2 2.1 197C5.5 203 10.8 205.3 22 205.8C27.2 206.1 35.2 205.7 39.8 205L48.2 203.8L47.8 151.6L47.5 99.4L52.1 110.5C57.2 122.8 61.3 131.4 78.8 167C85.4 180.5 92.2 193.4 93.8 195.6C95.8 198.3 98.9 200.8 102.7 202.6C108.4 205.4 108.8 205.5 125.5 205.5C142.4 205.5 142.5 205.5 148.5 202.5L154.5 199.5V121C154.5 43.7 154.5 42.4 152.4 39C151.3 37.1 148.4 34.4 145.9 33C141.8 30.7 140.5 30.5 128.5 30.5C121.4 30.5 113.3 30.9 110.6 31.3L105.8 32.2L106.3 82.8C106.6 110.7 107.1 134.6 107.5 136C107.8 137.4 106 133.5 103.5 127.5C101 121.4 90.8 100.1 80.9 80C61 39.7 59 36.7 49 32.8C44.8 31.2 40.8 30.6 32 30.4C25.7 30.2 19.6 30.3 18.5 30.6Z'
                fill='black'
              />
              <path
                d='M331.1 31.9999C326.7 32.9999 323 35.8999 320.5 40.0999C317.5 45.1999 317.7 60.4999 320.9 67.7999C322.4 71.1999 324 73.1999 325.4 73.5999C326.5 73.8999 336.2 73.9999 346.8 73.7999L366 73.4999V132.6V191.7L368.3 196.1C372 203 377.7 205.4 391.5 205.8C397.8 206 405.5 205.5 409.5 204.8L416.5 203.5L416.8 138.5L417 73.4999L431.1 73.7999C439 73.9999 447.6 73.5999 450.6 72.9999C457.6 71.4999 462.6 67.3999 464.1 61.6999C465.8 55.1999 464.8 42.3999 462.1 36.1999L459.8 30.9999L397.1 31.0999C362.7 31.1999 333 31.5999 331.1 31.9999Z'
                fill='black'
              />
              <path
                d='M197.9 32.7C196.4 32.9 192.8 34.5 189.9 36.3C185.6 38.9 184 40.7 181.5 45.4L178.5 51.4L178.2 117.8C178 159.6 178.3 186.2 178.9 189.7C181 200.8 187.3 205.1 202.7 205.8C207.7 206 215.7 205.7 220.4 205L229 203.8V173.9V144.1L256.9 143.8C283.3 143.5 285 143.4 287.6 141.4C292 138.2 293.9 134.9 295 129.1C296.2 122.6 294.9 113.7 291.8 107.2L289.8 103H259.4H229V88.2V73.5L257.2 73.8C287.9 74.1 294.2 73.4 299 69.3C305.3 64.1 306.6 50 302 37.7L299.9 32L250.2 32.1C222.9 32.2 199.3 32.5 197.9 32.7Z'
                fill='black'
              />
            </svg>
          </Center>
          <Center
            w={{ base: '7rem', md: '13em' }}
            minH='4rem'
            position='relative'
          >
            <Image
              src='/svg/superteam.svg'
              alt='superteamDAO'
              layout='fill'
              objectFit='contain'
            />
          </Center>
          <Center
            w={{ base: '5rem', md: '8rem' }}
            minH='2rem'
            position='relative'
          >
            {' '}
            <Image
              src='/images/wire.png'
              alt='web3 wire'
              layout='fill'
              objectFit='contain'
            />
          </Center>{' '}
          <Center w={{ base: '7rem', md: '12rem' }}>
            <svg
              viewBox='0 0 182 29'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M19.118 0.783203C18.2448 0.783203 17.3894 0.864014 16.5616 1.01775C23.0009 2.2181 27.8752 7.867 27.8752 14.6532C27.8752 19.49 23.9548 23.4104 19.118 23.4104C14.2811 23.4104 10.3608 19.49 10.3608 14.6532C10.3608 10.723 12.9487 7.3979 16.5143 6.29019L16.5222 6.26457C15.7259 6.02608 14.8803 5.89796 14.0052 5.89796C9.16835 5.89796 5.24802 9.81829 5.24802 14.6551C5.24802 22.3164 11.4587 28.5251 19.118 28.5251C26.7793 28.5251 32.988 22.3145 32.988 14.6551C32.988 6.99384 26.7773 0.783203 19.118 0.783203Z'
                fill='#0B0B2C'
              />
              <path
                d='M14.0409 0.783813C6.38154 0.783813 0.170898 6.99445 0.170898 14.6538C0.170898 22.3151 6.38154 28.5238 14.0409 28.5238C14.914 28.5238 15.7694 28.4429 16.5973 28.2892C10.158 27.0889 5.28369 21.44 5.28369 14.6538C5.28369 9.81693 9.20402 5.8966 14.0409 5.8966C18.8777 5.8966 22.798 9.81693 22.798 14.6538C22.798 18.584 20.2101 21.9091 16.6446 23.0168L16.6367 23.0424C17.433 23.2809 18.2785 23.409 19.1537 23.409C23.9905 23.409 27.9108 19.4887 27.9108 14.6518C27.9128 6.99445 21.7022 0.783813 14.0409 0.783813Z'
                fill='#E7B400'
              />
              <path
                d='M59.2644 16.9315C59.0735 17.7429 58.7513 18.5304 58.2979 19.2941C57.8445 20.0339 57.2836 20.7021 56.6154 21.2988C55.9472 21.8715 55.1835 22.3369 54.3244 22.6948C53.4653 23.0289 52.5465 23.196 51.568 23.196C50.4464 23.196 49.3844 22.9812 48.3821 22.5517C47.4036 22.0982 46.5326 21.4897 45.7689 20.726C45.0291 19.9623 44.4325 19.0793 43.979 18.077C43.5495 17.0508 43.3347 15.953 43.3347 14.7837C43.3347 13.6143 43.5495 12.5284 43.979 11.5261C44.4325 10.4999 45.0291 9.60501 45.7689 8.84134C46.5326 8.07767 47.4036 7.48105 48.3821 7.05148C49.3844 6.59805 50.4464 6.37134 51.568 6.37134C52.5465 6.37134 53.4653 6.55032 54.3244 6.9083C55.1835 7.2424 55.9472 7.70776 56.6154 8.30438C57.2836 8.87714 57.8445 9.54535 58.2979 10.309C58.7513 11.0488 59.0735 11.8244 59.2644 12.6358H55.1477C54.9568 12.2063 54.6943 11.8244 54.3602 11.4903C54.0738 11.204 53.7039 10.9414 53.2505 10.7028C52.7971 10.4403 52.2362 10.309 51.568 10.309C50.3987 10.309 49.4202 10.7147 48.6327 11.5261C47.8451 12.3375 47.4514 13.4234 47.4514 14.7837C47.4514 16.144 47.8451 17.2298 48.6327 18.0412C49.4202 18.8526 50.3987 19.2583 51.568 19.2583C52.2362 19.2583 52.7971 19.139 53.2505 18.9003C53.7039 18.6617 54.0738 18.3992 54.3602 18.1128C54.6943 17.7787 54.9568 17.3849 55.1477 16.9315H59.2644Z'
                fill='#0B0B2C'
              />
              <path
                d='M66.0659 14.7837C66.0659 16.144 66.4596 17.2298 67.2472 18.0412C68.0347 18.8526 69.0132 19.2583 70.1826 19.2583C71.3519 19.2583 72.3304 18.8526 73.1179 18.0412C73.9055 17.2298 74.2992 16.144 74.2992 14.7837C74.2992 13.4234 73.9055 12.3375 73.1179 11.5261C72.3304 10.7147 71.3519 10.309 70.1826 10.309C69.0132 10.309 68.0347 10.7147 67.2472 11.5261C66.4596 12.3375 66.0659 13.4234 66.0659 14.7837ZM78.4159 14.7837C78.4159 15.953 78.1892 17.0508 77.7357 18.077C77.3062 19.0793 76.7096 19.9623 75.9459 20.726C75.2061 21.4897 74.335 22.0982 73.3327 22.5517C72.3542 22.9812 71.3042 23.196 70.1826 23.196C69.0609 23.196 67.9989 22.9812 66.9966 22.5517C66.0181 22.0982 65.1471 21.4897 64.3834 20.726C63.6436 19.9623 63.047 19.0793 62.5936 18.077C62.164 17.0508 61.9492 15.953 61.9492 14.7837C61.9492 13.6143 62.164 12.5284 62.5936 11.5261C63.047 10.4999 63.6436 9.60501 64.3834 8.84134C65.1471 8.07767 66.0181 7.48105 66.9966 7.05148C67.9989 6.59805 69.0609 6.37134 70.1826 6.37134C71.3042 6.37134 72.3542 6.59805 73.3327 7.05148C74.335 7.48105 75.2061 8.07767 75.9459 8.84134C76.7096 9.60501 77.3062 10.4999 77.7357 11.5261C78.1892 12.5284 78.4159 13.6143 78.4159 14.7837Z'
                fill='#0B0B2C'
              />
              <path
                d='M89.8542 6.37134C90.6895 6.37134 91.4054 6.49066 92.002 6.72931C92.5987 6.94409 93.0879 7.18274 93.4697 7.44525C93.8993 7.75549 94.2453 8.11347 94.5078 8.51917C94.8897 8.11347 95.3312 7.75549 95.8323 7.44525C96.2619 7.18274 96.775 6.94409 97.3716 6.72931C97.9682 6.49066 98.6245 6.37134 99.3405 6.37134C101.13 6.37134 102.562 6.94409 103.636 8.0896C104.71 9.23511 105.247 10.9295 105.247 13.1728V23.017H101.13V13.5308C101.13 12.5284 100.856 11.7409 100.307 11.1682C99.7819 10.5954 99.1615 10.309 98.4455 10.309C97.7296 10.309 97.0972 10.5954 96.5483 11.1682C96.0232 11.7409 95.7607 12.5284 95.7607 13.5308V23.017H91.6441V13.5308C91.6441 12.5284 91.3696 11.7409 90.8207 11.1682C90.2957 10.5954 89.6752 10.309 88.9593 10.309C88.2433 10.309 87.6109 10.5954 87.062 11.1682C86.537 11.7409 86.2745 12.5284 86.2745 13.5308V23.017H82.1578V6.55032H85.2006L85.9165 8.1612C86.2506 7.82709 86.6205 7.52878 87.0262 7.26627C87.3603 7.05148 87.766 6.84863 88.2433 6.65772C88.7206 6.4668 89.2576 6.37134 89.8542 6.37134Z'
                fill='#0B0B2C'
              />
              <path
                d='M118.134 6.37134C119.16 6.37134 120.139 6.58612 121.069 7.01569C122 7.42139 122.811 8.00608 123.504 8.76975C124.219 9.50956 124.78 10.3926 125.186 11.4187C125.616 12.4449 125.83 13.5666 125.83 14.7837C125.83 16.0008 125.616 17.1224 125.186 18.1486C124.78 19.1748 124.219 20.0697 123.504 20.8334C122.811 21.5732 122 22.1579 121.069 22.5874C120.139 22.9931 119.16 23.196 118.134 23.196C117.442 23.196 116.833 23.1125 116.308 22.9454C115.807 22.7784 115.366 22.5994 114.984 22.4085C114.554 22.1698 114.172 21.8954 113.838 21.5851V28.7446H109.722V6.55032H112.764L113.48 8.1612C113.838 7.82709 114.256 7.52878 114.733 7.26627C115.139 7.05148 115.628 6.84863 116.201 6.65772C116.774 6.4668 117.418 6.37134 118.134 6.37134ZM113.48 14.7837C113.48 16.144 113.874 17.2298 114.662 18.0412C115.449 18.8526 116.428 19.2583 117.597 19.2583C118.766 19.2583 119.745 18.8526 120.532 18.0412C121.32 17.2298 121.714 16.144 121.714 14.7837C121.714 13.4234 121.32 12.3375 120.532 11.5261C119.745 10.7147 118.766 10.309 117.597 10.309C116.428 10.309 115.449 10.7147 114.662 11.5261C113.874 12.3375 113.48 13.4234 113.48 14.7837Z'
                fill='#0B0B2C'
              />
              <path
                d='M136.396 6.37134C137.327 6.37134 138.186 6.53839 138.973 6.8725C139.761 7.18274 140.441 7.62424 141.014 8.19699C141.587 8.76975 142.028 9.44989 142.338 10.2374C142.673 11.025 142.84 11.8841 142.84 12.8148V23.017H139.797L139.081 21.4061C138.699 21.7402 138.281 22.0386 137.828 22.3011C137.422 22.5397 136.933 22.7545 136.36 22.9454C135.788 23.1125 135.143 23.196 134.427 23.196C132.637 23.196 131.265 22.7664 130.311 21.9073C129.356 21.0243 128.879 19.9027 128.879 18.5424C128.879 17.731 129.034 16.9912 129.344 16.3229C129.678 15.6309 130.227 15.0462 130.991 14.5689C131.754 14.0677 132.757 13.6859 133.998 13.4234C135.263 13.137 136.838 12.9938 138.723 12.9938C138.723 12.0869 138.472 11.3829 137.971 10.8818C137.494 10.3806 136.85 10.13 136.038 10.13C135.489 10.13 135.048 10.2255 134.714 10.4164C134.403 10.6073 134.153 10.8102 133.962 11.025C133.747 11.2875 133.604 11.5858 133.532 11.9199H129.416C129.511 11.1562 129.726 10.4403 130.06 9.77207C130.418 9.10385 130.895 8.51917 131.492 8.01801C132.089 7.51685 132.793 7.12308 133.604 6.8367C134.439 6.52646 135.37 6.37134 136.396 6.37134ZM135.143 19.9743C136.217 19.9743 137.076 19.664 137.721 19.0435C138.389 18.3992 138.723 17.5758 138.723 16.5735V15.8576C137.506 15.8576 136.527 15.9172 135.788 16.0366C135.048 16.132 134.463 16.2871 134.033 16.5019C133.628 16.6928 133.353 16.9315 133.21 17.2179C133.067 17.5043 132.995 17.8264 132.995 18.1844C132.995 18.6378 133.198 19.0555 133.604 19.4373C134.01 19.7953 134.523 19.9743 135.143 19.9743Z'
                fill='#0B0B2C'
              />
              <path
                d='M155.713 6.37134C156.691 6.37134 157.586 6.53839 158.397 6.8725C159.209 7.18274 159.901 7.6481 160.474 8.26859C161.07 8.86521 161.524 9.59308 161.834 10.4522C162.168 11.3113 162.335 12.2779 162.335 13.3518V23.017H158.218V13.8887C158.218 12.8148 157.896 11.9557 157.252 11.3113C156.631 10.6431 155.82 10.309 154.818 10.309C153.815 10.309 152.992 10.6431 152.348 11.3113C151.727 11.9557 151.417 12.8148 151.417 13.8887V23.017H147.3V6.55032H150.343L151.059 8.1612C151.465 7.82709 151.906 7.52878 152.383 7.26627C152.789 7.05148 153.266 6.84863 153.815 6.65772C154.388 6.4668 155.021 6.37134 155.713 6.37134Z'
                fill='#0B0B2C'
              />
              <path
                d='M165.034 6.55032H169.329L173.446 17.2895L177.205 6.55032H181.501C180.331 9.55728 179.269 12.2779 178.315 14.7121C177.909 15.7621 177.503 16.7883 177.097 17.7906C176.716 18.7929 176.37 19.7117 176.059 20.547C175.749 21.3584 175.487 22.0386 175.272 22.5874C175.057 23.1363 174.926 23.4585 174.878 23.554C174.472 24.5324 174.067 25.3558 173.661 26.024C173.279 26.716 172.861 27.2769 172.408 27.7064C171.955 28.136 171.465 28.4462 170.94 28.6372C170.415 28.8281 169.819 28.9235 169.15 28.9235C168.96 28.9235 168.769 28.9116 168.578 28.8877C168.411 28.8877 168.267 28.8758 168.148 28.8519C167.981 28.8281 167.838 28.7923 167.719 28.7446V25.3438C168.625 25.3438 169.318 25.141 169.795 24.7353C170.296 24.3296 170.678 23.8165 170.94 23.196L171.298 22.3011L165.034 6.55032Z'
                fill='#0B0B2C'
              />
            </svg>
          </Center>{' '}
        </Wrap>
      </Center>
    </Container>
  );
};

export default Featured;