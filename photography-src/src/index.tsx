import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'

const BackgroundContext = createContext({ setBackgroundSrc: (src: string) => { } })


const App: React.FC<{}> = () => {
  const [bgSrc, setBgSrc] = useState('/img/boletus-small.webp')

  return (
    <BackgroundContext.Provider value={{ setBackgroundSrc: setBgSrc }}>
      <Background src={bgSrc} />
      <Article>
        <Picture src="/img/boletus-small.webp" />
        <Header>
          <h3>Lorem ipsum dolor sit amet</h3>
        </Header>
        <Section>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
        </p>
        </Section>
        <Footer>

        </Footer>
      </Article>
      <Article horizontal>
        <Picture src="/img/moss-small.webp" />
        <Header>
          <h3>Lorem ipsum dolor sit amet</h3>
        </Header>
        <Section>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
        </p>
        </Section>
        <Footer>

        </Footer>
      </Article>
      <Article>
        <Picture src="/img/boletus-small.webp" />
        <Header>
          <h3>Lorem ipsum dolor sit amet</h3>
        </Header>
        <Section>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
        </p>
        </Section>
        <Footer>

        </Footer>
      </Article>
      <Article horizontal>
        <Picture src="/img/moss-small.webp" />
        <Header>
          <h3>Lorem ipsum dolor sit amet</h3>
        </Header>
        <Section>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
        </p>
        </Section>
        <Footer>

        </Footer>
      </Article>
      <Article>
        <Picture src="/img/boletus-small.webp" />
        <Header>
          <h3>Lorem ipsum dolor sit amet</h3>
        </Header>
        <Section>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
        </p>
        </Section>
        <Footer>

        </Footer>
      </Article>
      <Footer></Footer>
    </BackgroundContext.Provider>
  )
}

const Background: React.FC<{ src: string }> = ({ src }) => {
  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        key={src}
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        transition={{ duration: .5 }}
        className="background" style={{ backgroundImage: `url("${src}")` }}
      />
    </AnimatePresence>,
    document.querySelector("#bg")
  )
}

const Article: React.FC<{ horizontal?: boolean }> = ({ children, horizontal }) => {
  return (
    <>
      <article className={horizontal ? `horizontal` : `vertical`}>
        {children}
      </article>
    </>
  )
}

const Header: React.FC<{}> = ({ children }) => {
  return (
    <header>{children}</header>
  )
}

const Section: React.FC<{}> = ({ children }) => {
  return (
    <section>{children}</section>
  )
}

const Footer: React.FC<{}> = ({ children }) => {
  return (
    <footer>{children}</footer>
  )
}

const Picture: React.FC<{ src: string }> = ({ src }) => {
  const { setBackgroundSrc } = useContext(BackgroundContext)
  const cb: IntersectionObserverCallback = useCallback(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      setBackgroundSrc(src)
    }
  }, [])
  const observerRef = useRef(new IntersectionObserver(cb, { root: document.body, threshold: 1.0 }))
  const ref = useRef<HTMLPictureElement>(null)

  useEffect(() => {
    observerRef.current.observe(ref.current)
  }, [])

  return (
    <picture ref={ref}>
      <img src={src} alt="foo" />
    </picture>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <AnimatePresence>
      <App />
    </AnimatePresence>
  </React.StrictMode>,
  document.getElementById('root')
);


export default App