/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react'
import { Box, Grid, Stack, Typography, Paper, useMediaQuery, Link, Modal, Dialog, DialogTitle, Button } from '@mui/material'
import { NavBar } from '../components/NavBar'
import Profile from '../assets/images/profile.jpeg'
import { colorPalette } from '../styles/colorTheme'
import SnippetsThumbnail from '../assets/images/snippets-thumbnail.png'
import CombatChicksThumbnail from '../assets/images/combat-chicks-thumbnail.png'
import PorkyPrintsThumbnail from '../assets/images/porky-prints-thumbnail.png'
import KevinTheInternThumbnail from '../assets/images/kevin-the-intern-thumbnail.png'
import SnippetsDemo from '../assets/videos/snippets-demo.mp4'
import CombatChicksDemo from '../assets/videos/combat-chicks-demo.mp4'
import PorkyPrintsDemo from '../assets/videos/porky-prints-demo.mp4'
import KevinDemo from '../assets/videos/kevin_demo.mp4'
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
import { SocialsBar } from '../components/SocialsBar'

interface ProjectType {
  name: string
  description: string
  video: string
  technologies: string[]
  thumbnail?: string
  url?: string
  githubUrl?: string
}

const iconStyle = {
  fontSize: '36px',
  color: colorPalette.white,
  '&:hover': {
    color: colorPalette.green.light,
    cursor: 'pointer'
  }
}

const projects: ProjectType[] = [
  {
    name: 'Kevin The Intern',
    description: '\'AI\' FAQ Chatbot for Pixelmon, featuring their latest intern, Kevin.',
    technologies: ['Typescript', 'React', 'Ant Design'],
    thumbnail: KevinTheInternThumbnail,
    video: KevinDemo,
    url: 'https://kevin-chatbot.onrender.com'
  },
  {
    name: 'Porky Prints',
    description: 'E-commerce website for customisable 3D printed toys.',
    technologies: ['Javascript', 'React', 'Chakra UI', 'NodeJs', 'Ant Design', 'Sequelize'],
    thumbnail: PorkyPrintsThumbnail,
    video: PorkyPrintsDemo,
    githubUrl: 'https://github.com/sundriedtomato12/3D-Model-Ecommerce-Frontend'
  },
  {
    name: 'Combat Chicks',
    description: 'Chicken-themed turn-based web combat game with a vintage, pixelated art style.',
    technologies: ['Javascript', 'EJS', 'CSS', 'Sequelize'],
    thumbnail: CombatChicksThumbnail,
    video: CombatChicksDemo,
    githubUrl: 'https://github.com/sundriedtomato12/project3-combatchicks'
  },
  {
    name: 'Snippets',
    description: 'Bite-sized micro-blogging website with a simple UI layout.',
    technologies: ['Javascript', 'EJS', 'CSS', 'Sequelize'],
    thumbnail: SnippetsThumbnail,
    video: SnippetsDemo,
    githubUrl: 'https://github.com/sundriedtomato12/project2-snippets'
  }
]

export function MainPage (): JSX.Element {
  const [isSlideClicked, setIsSlideClicked] = useState<boolean>(false)
  const [slideClicked, setSlideClicked] = useState<ProjectType>(projects[0])
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
    } else if ((about != null) && scrollY > about + 80) {
      setCurrentPage('projects')
    } else if ((home != null) && scrollY > home + 30) {
      setCurrentPage('about')
    } else setCurrentPage('home')
  }

  function GreenArrowIcon (): JSX.Element {
    return <ArrowRightIcon sx={{ color: colorPalette.green.light }} />
  }

  function Slide (props: { name: string, description: string, thumbnail: string, url?: string }): JSX.Element {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper sx={{ backgroundColor: colorPalette.slate.lightest, height: isDesktop ? '43vh' : '31vh', width: isDesktop ? '33vw' : '100%', padding: '14px 18px 14px 18px' }} onClick={() => { setIsSlideClicked(true) }}>
          <Box sx={{ mb: isDesktop ? '12px' : '6px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ fontFamily: 'Fira Code', fontSize: isDesktop ? '18px' : '14px', fontWeight: 700 }}>{props.name}</Typography>
            {(props.url != null) && <LaunchIcon
          sx={{ '&:hover': { color: colorPalette.green.light, cursor: 'pointer' }, fontSize: '26px', fontWeight: '700', color: colorPalette.slate.dark }} onClick={() => window.open(props.url, '_blank')} />}
            </Box>
            <Typography sx={{ fontFamily: 'Roboto', fontSize: isDesktop ? '16px' : '12px' }}>{props.description}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: isDesktop ? '33vh' : '22vh' }}>
            <Box component={'img'} src={props.thumbnail} maxHeight={'100%'} maxWidth={'98%'} sx={{ borderRadius: '4px' }} />
          </Box>
        </Paper>
      </Box>
    )
  }

  function handleDialogClose (): void {
    setIsSlideClicked(false)
  }

  function StyledButton (props: { label: any, url: any }): JSX.Element {
    const { label, url } = props
    return <Button variant='contained' sx={{ padding: '2px', color: colorPalette.white, textTransform: 'none', fontWeight: '700', '&:hover': { backgroundColor: colorPalette.green.dark, transform: 'translateY(-1px)', cursor: 'pointer' }, backgroundColor: colorPalette.green.dark }} onClick={() => window.open(url, '_blank')}>
      {label}
    </Button>
  }

  function ProjectDialog (props: { name: string, description: string, video: string, technologies: string[], githubUrl?: string, url?: string }): JSX.Element {
    return (
      <Dialog onClose={handleDialogClose} open={isSlideClicked}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper sx={{ backgroundColor: colorPalette.slate.lightest, height: isDesktop ? '60vh' : '70%', width: isDesktop ? '44vw' : '100%', padding: '16px 20px 16px 20px' }}>
          <Box sx={{ mb: isDesktop ? '14px' : '8px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '8px' }}>
            <Typography sx={{ fontFamily: 'Fira Code', fontSize: isDesktop ? '22px' : '14px', fontWeight: 700 }}>{props.name}</Typography>
            {(props.url != null) && <StyledButton label='Try it!' url={props.url} />}
            </Box>
            <Typography sx={{ fontFamily: 'Roboto', fontSize: isDesktop ? '16px' : '12px' }}>{props.description} Built using {props.technologies.map((tech, index) => {
              if (index === props.technologies.length - 1) {
                return <><b>{tech}</b>.</>
              } else {
                return <><b>{tech}</b>, </>
              }
            })}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: isDesktop ? '44vh' : '60%' }}>
            <Box component={'video'} src={props.video} autoPlay loop playsInline muted disablePictureInPicture maxHeight={'100%'} maxWidth={'100%'} sx={{ borderRadius: '4px' }} />
          </Box>
        </Paper>
      </Box>
      </Dialog>
    )
  }

  return (
    <Box style={{ width: '100%' }}>
			<NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
			<Box ref={ref} onScroll={handleScroll} className='main-page' style={{ height: '100vh', backgroundColor: colorPalette.navy.dark, overflowY: 'scroll', padding: isDesktop ? '0px 24px 24px 24px' : '0px 10px 10px 10px' }}>
				<Box id="home" height={'100vh'} sx={{ paddingX: '10vw', display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center', color: colorPalette.white }}>
          <Box sx={{ display: isDesktop ? 'flex' : 'block' }}>
					<Typography sx={{ fontSize: '24px', color: colorPalette.green.light, fontFamily: 'Roboto', marginRight: '12px' }}>
            Hey! My name is</Typography>
            <Typography sx={{ fontSize: '24px', color: colorPalette.green.light, fontFamily: 'Fira Code' }}>Felicia Tan,
					</Typography>
          </Box>
          <Box sx={{ marginBottom: '12px', display: isDesktop ? 'flex' : 'block' }}>
					<Typography sx={{ fontSize: '24px', color: colorPalette.green.light, fontFamily: 'Roboto', marginRight: '12px' }}>
            but you can call me</Typography>
            <Typography sx={{ fontSize: '24px', color: colorPalette.green.light, fontFamily: 'Fira Code', fontWeight: 700 }}>Fel.
					</Typography>
          </Box>
					<Typography sx={{ fontSize: '16px', fontFamily: 'Roboto' }}>
            I&apos;m a Full Stack Developer based in Singapore with a passion for learning new tech stacks and building innovative products for the web. With a keen eye for design and a dedication to creating outstanding user interfaces, I take pride in my ability to bring fresh product ideas to life.
					</Typography>
				</Box>
				<Box id="about" height={isDesktop ? '100vh' : 'fit-content'} sx={{ pb: isDesktop ? 0 : '16vh', paddingX: '10vw', display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'left', color: colorPalette.white }}>
          <Typography sx={{ marginTop: isDesktop ? '15vh' : '10vh', fontSize: '28px', fontWeight: 700, fontFamily: 'Fira Code', color: colorPalette.green.light }}>
            About me
          </Typography>
          <Grid container sx={{ display: 'flex', flexDirection: isDesktop ? 'row-reverse' : 'column', alignItems: 'center' }} spacing={isDesktop ? 6 : undefined}>
            <Grid item xs={isDesktop ? 3 : undefined}>
              <Box component='img' src={Profile} sx={{ marginTop: isDesktop ? '0px' : '16px', height: 'clamp(120px, 20vh, 160px)', width: 'auto', overflow: 'clip', borderRadius: '100px' }}/>
            </Grid>
            <Grid item xs={isDesktop ? 9 : undefined}>
              <Typography sx={{ fontSize: '16px', fontFamily: 'Roboto' }}>
                <p>
                Hello! I&apos;m Fel. My interest in web development started in high school when I learnt how to do stuff like customising my cursor and changing the color and font of Blogspot.com chatbox (hello millenials?). But I only decided to pursue software engineering as a career in 2021 by signing up for a bootcamp by <Link href='https://www.rocketacademy.co' sx={{ textDecoration: 'none', color: colorPalette.green.light, '&:hover': { textDecoration: 'underline', color: colorPalette.green.light } }} target='_blank' rel="noreferrer">Rocket Academy.</Link> Since graduating, I&apos;ve done multiple personal projects and I&apos;m currently building game-changing digital products at <Link href='https://www.circles.life' sx={{ textDecoration: 'none', color: colorPalette.green.light, '&:hover': { textDecoration: 'underline', color: colorPalette.green.light } }} target='_blank' rel="noreferrer">Circles.Life</Link>.
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
          <Typography sx={{ mt: isDesktop ? '15vh' : '10vh', mb: '42px', fontSize: '28px', fontWeight: 700, fontFamily: 'Fira Code', color: colorPalette.green.light }}>
            Projects
          </Typography>
          <Box height={'60vh'}>
            <Swiper
              direction={'horizontal'}
              slidesPerView={1}
              navigation={!!isDesktop}
              pagination={{ clickable: true }}
              centeredSlides={true}
              modules={[Pagination, Navigation]}
              className="project-swiper"
              onSlideChangeTransitionStart={(slide) => {
                setSlideClicked(projects[slide.activeIndex])
              }}
            >
              <ProjectDialog name={slideClicked.name} description={slideClicked.description} video={slideClicked.video} url={slideClicked.url} githubUrl={slideClicked.githubUrl} technologies={slideClicked.technologies} />
              <SwiperSlide>
                <Slide name={'Kevin The Intern'} description={'\'AI\' FAQ Chatbot for Pixelmon'} thumbnail={KevinTheInternThumbnail} url={'https://kevin-chatbot.onrender.com'} />
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
          <Typography sx={{ marginTop: isDesktop ? '15vh' : '8vh', fontSize: '28px', fontWeight: 700, fontFamily: 'Fira Code', color: colorPalette.green.light }}>
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
      <SocialsBar />
		</Box>
  )
}
