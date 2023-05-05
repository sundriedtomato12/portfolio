export function handleScroll (
  ref: { current: { scrollTop: any } },
  setCurrentPage: (arg0: string) => void
): void {
  const scrollY = ref.current.scrollTop
  const home = document.getElementById('home')?.offsetTop
  const about = document.getElementById('about')?.offsetTop
  const projects = document.getElementById('projects')?.offsetTop
  const contact = document.getElementById('contact')?.offsetTop

  if (contact != null && scrollY >= contact) {
    setCurrentPage('contact')
  } else if (projects != null && scrollY > projects) {
    setCurrentPage('contact')
  } else if (about != null && scrollY > about + 80) {
    setCurrentPage('projects')
  } else if (home != null && scrollY > home + 30) {
    setCurrentPage('about')
  } else setCurrentPage('home')
}
