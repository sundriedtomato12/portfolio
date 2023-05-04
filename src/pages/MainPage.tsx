/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react'
import { Box, Grid, Stack, Typography, Paper, useMediaQuery, Link } from '@mui/material'
import { NavBar } from '../components/NavBar'
import Profile from '../assets/images/profile.jpeg'
import { colorPalette } from '../styles/colorTheme'
import '@fontsource/fira-code'
import '@fontsource/roboto'
import SnippetsThumbnail from '../assets/images/snippets-thumbnail.png'
import CombatChicksThumbnail from '../assets/images/combat-chicks-thumbnail.png'
import PorkyPrintsThumbnail from '../assets/images/porky-prints-thumbnail.png'
import KevinTheInternThumbnail from '../assets/images/kevin-the-intern-thumbnail.png'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper'
import MailIcon from '@mui/icons-material/Mail'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'

export function MainPage (): JSX.Element {
  const [currentPage, setCurrentPage] = useState<string>('home')
  const ref = useRef<any>(null)
  const isDesktop = useMediaQuery('(min-width:800px)')

  function handleScroll (): void {
    const scrollY = ref.current.scrollTop
    const home = document.getElementById('home')?.offsetTop
    const about = document.getElementById('about')?.offsetTop
    const projects = document.getElementById('projects')?.offsetTop
    const contact = document.getElementById('contact')?.offsetTop

    if ((contact != null) && scrollY >= contact) {
      setCurrentPage('contact')
    } else if ((projects != null) && scrollY > projects) {
      setCurrentPage('contact')
    } else if ((about != null) && scrollY > about + 50) {
      setCurrentPage('projects')
    } else if ((home != null) && scrollY > home + 30) {
      setCurrentPage('about')
    } else setCurrentPage('home')
  }

  const projects = [{
    name: 'Snippets',
    description: 'Bite-sized micro-blogging website',
    thumbnail: SnippetsThumbnail
  },
  {
    name: 'Combat Chicks',
    description: 'Chicken-themed turn-based web combat game',
    thumbnail: CombatChicksThumbnail
  },
  {
    name: 'Porky Prints',
    description: 'E-commerce website for 3D-printed toys',
    thumbnail: PorkyPrintsThumbnail
  },
  {
    name: 'Kevin The Intern',
    description: '\'AI\' Chatbot for Pixelmon',
    thumbnail: KevinTheInternThumbnail
  }
  ]

  function GreenArrowIcon (): JSX.Element {
    return <ArrowRightIcon sx={{ color: colorPalette.green }} />
  }

  function Slide (props: { name: string, description: string, thumbnail: string, url?: string }): JSX.Element {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper sx={{ backgroundColor: colorPalette.slate.lightest, height: isDesktop ? '43vh' : '31vh', width: isDesktop ? '33vw' : '100%', padding: '14px 18px 14px 18px' }}>
          <Box sx={{ mb: isDesktop ? '12px' : '6px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ fontFamily: 'Fira Code', fontSize: isDesktop ? '18px' : '14px', fontWeight: 700 }}>{props.name}</Typography>
            {(props.url != null) && <LaunchIcon
          sx={{ '&:hover': { color: colorPalette.blue, cursor: 'pointer' }, fontSize: '18px', fontWeight: '700', color: colorPalette.slate.dark }} onClick={() => window.open(props.url, '_blank')} />}
            </Box>
            <Typography sx={{ fontFamily: 'Roboto', fontSize: isDesktop ? '16px' : '12px' }}>{props.description}</Typography>
          </Box>
          <Box sx={{ margin: '0 auto', width: isDesktop ? '31vw' : '100%', height: isDesktop ? '33vh' : '22vh' }}>
            <Box component={'img'} src={props.thumbnail} maxHeight={'100%'} maxWidth={'100%'} sx={{ borderRadius: '4px' }} />
          </Box>
        </Paper>
      </Box>
    )
  }

  const iconStyle = {
    color: colorPalette.white,
    '&:hover': {
      color: colorPalette.blue,
      cursor: 'pointer'
    }
  }

  return (
		<Box style={{ height: '100vh', overflow: 'scroll' }}>
			<NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
			<Box ref={ref} onScroll={handleScroll} className='main-page' style={{ height: '100vh', backgroundColor: colorPalette.navy.dark, overflowY: 'scroll', padding: isDesktop ? '0px 24px 24px 24px' : '0px 10px 10px 10px' }}>
				<Box id="home" height={'100vh'} sx={{ paddingX: '10vw', display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center', color: colorPalette.white }}>
          <Box sx={{ display: isDesktop ? 'flex' : 'block' }}>
					<Typography sx={{ fontSize: '24px', color: colorPalette.green, fontFamily: 'Roboto', marginRight: '12px' }}>
            Hey! My name is</Typography>
            <Typography sx={{ fontSize: '24px', color: colorPalette.green, fontFamily: 'Fira Code' }}>Felicia Tan,
					</Typography>
          </Box>
          <Box sx={{ marginBottom: '12px', display: isDesktop ? 'flex' : 'block' }}>
					<Typography sx={{ fontSize: '24px', color: colorPalette.green, fontFamily: 'Roboto', marginRight: '12px' }}>
            but you can call me</Typography>
            <Typography sx={{ fontSize: '24px', color: colorPalette.green, fontFamily: 'Fira Code', fontWeight: 700 }}>Fel.
					</Typography>
          </Box>
					<Typography sx={{ fontSize: '16px', fontFamily: 'Roboto' }}>
            I&apos;m a Full Stack Developer based in Singapore with a passion for learning new tech stacks and building innovative products for the web. With a keen eye for design and a dedication to creating outstanding user interfaces, I take pride in my ability to bring fresh product ideas to life.
					</Typography>
				</Box>
				<Box id="about" height={isDesktop ? '100vh' : '130vh'} sx={{ paddingX: '10vw', display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'left', color: colorPalette.white }}>
          <Typography sx={{ marginTop: isDesktop ? '15vh' : '10vh', fontSize: '28px', fontWeight: 700, fontFamily: 'Fira Code', color: colorPalette.green }}>
            About me
          </Typography>
          <Grid container sx={{ display: 'flex', flexDirection: isDesktop ? 'row-reverse' : 'column', alignItems: 'center' }} spacing={isDesktop ? 5 : undefined}>
            <Grid item xs={isDesktop ? 3 : undefined}>
              <Box component='img' src={Profile} sx={{ marginTop: isDesktop ? '0px' : '16px', height: 'clamp(120px, 20vh, 160px)', width: 'fit-content', overflow: 'clip', borderRadius: '100px' }}/>
            </Grid>
            <Grid item xs={isDesktop ? 9 : undefined}>
              <Typography sx={{ fontSize: '16px', fontFamily: 'Roboto' }}>
                <p>
                Hello! I&apos;m Fel. My interest in web development started in high school when I learnt how to do stuff like customising my cursor and changing the color and font of Blogspot.com chatbox (hello millenials?). But I only decided to pursue software engineering as a career in 2021 by signing up for a bootcamp by <Link href='https://www.rocketacademy.co' sx={{ color: colorPalette.white, '&:hover': { color: colorPalette.blue } }} target='_blank' rel="noreferrer">Rocket Academy.</Link>
                </p>
                <p>
                Since graduating, I&apos;ve done multiple personal projects and I&apos;m currently building game-changing digital products at <Link href='https://www.circles.life' sx={{ color: colorPalette.white, '&:hover': { color: colorPalette.blue } }} target='_blank' rel="noreferrer">Circles.Life</Link>.
                </p>
                <p>
                Here are some technologies that I&apos;ve been working with recently:
                </p>
              </Typography>
              <Grid container item sx={{ display: 'flex', flexDirection: 'row' }}>
                <Stack sx={{ marginRight: '24px' }}>
                  <Typography sx={{ display: 'flex' }}><GreenArrowIcon/>Typescript</Typography>
                  <Typography sx={{ display: 'flex' }}><GreenArrowIcon/>Javascript</Typography>
                  <Typography sx={{ display: 'flex' }}><GreenArrowIcon/>ReactJs</Typography>
                </Stack>
                <Stack>
                  <Typography sx={{ display: 'flex' }}><GreenArrowIcon/>React Native</Typography>
                  <Typography sx={{ display: 'flex' }}><GreenArrowIcon/>NextJs</Typography>
                  <Typography sx={{ display: 'flex' }}><GreenArrowIcon/>NodeJs</Typography>
                </Stack>
              </Grid>
            </Grid>
        </Grid>
        </Box>
				<Box id="projects" height={'100vh'} sx={{ paddingX: '10vw', display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'left', color: colorPalette.white }}>
          <Typography sx={{ mt: isDesktop ? '15vh' : '10vh', mb: '42px', fontSize: '28px', fontWeight: 700, fontFamily: 'Fira Code', color: colorPalette.green }}>
            Projects
          </Typography>
          <Box height={'60vh'}>
            <Swiper
              direction={'horizontal'}
              slidesPerView={1}
              navigation={!!isDesktop}
              pagination={{ clickable: true }}
              centeredSlides={true}
              loop={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Slide name={'Kevin The Intern'} description={'\'AI\' Chatbot for Pixelmon'} thumbnail={KevinTheInternThumbnail} url={'https://kevin-chatbot.onrender.com'} />
              </SwiperSlide>
              <SwiperSlide>
                <Slide name={'Porky Prints'} description={'E-commerce website for 3D-printed toys'} thumbnail={PorkyPrintsThumbnail} />
              </SwiperSlide>
              <SwiperSlide>
                <Slide name={'Combat Chicks'} description={'Chicken-themed turn-based combat game'} thumbnail={CombatChicksThumbnail} />
              </SwiperSlide>
              <SwiperSlide>
                <Slide name={'Snippets'} description={'Bite-sized micro-blogging platform'} thumbnail={SnippetsThumbnail} />
              </SwiperSlide>
            </Swiper>
          </Box>
				</Box>
				<Box id="contact" height={'75vh'} sx={{ paddingX: '10vw', display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'left', color: colorPalette.white }}>
          <Typography sx={{ marginTop: isDesktop ? '15vh' : '8vh', fontSize: '28px', fontWeight: 700, fontFamily: 'Fira Code', color: colorPalette.green }}>
            Get in touch
          </Typography>
          <Typography sx={{ mt: '14px', fontSize: '16px', fontFamily: 'Roboto' }}>
            You can drop me an email or message me on Linkedin for my latest resume! Otherwise, feel free to check out my other socials:
					</Typography>
          <Box sx={{ mt: '14px' }}>
            <MailIcon
            sx={{ ...iconStyle, mr: '12px' }}
            onClick={() => window.open('mailto:felicia.tanwp@gmail.com', '_blank')}
            />
            <LinkedInIcon
            sx={{ ...iconStyle, mr: '12px' }}
            onClick={() => window.open('https://www.linkedin.com/in/-fel', '_blank')}
            />
            <GitHubIcon
            sx={{ ...iconStyle }}
            onClick={() => window.open('https://www.github.com/sundriedtomato12', '_blank')}
            />
          </Box>
				</Box>
			</Box>
		</Box>
  )
}
