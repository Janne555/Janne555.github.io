import React, { createContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { AnimatePresence } from 'framer-motion'
import Background from './Background'
import Article from './Article'
import Header from './Header'
import Section from './Section'
import Picture from './Picture'
import Footer from './Footer'
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import ArrowRight from '@material-ui/icons/KeyboardArrowRight'
import IconButton from '@material-ui/core/IconButton'

type Article = {
  header: React.ReactNode
  content: React.ReactNode
  footer: React.ReactNode
  picture?: {
    src: string
    alt: string
  }
}

const articles: Article[] = [
  {
    header: <h1>Photography Section</h1>,
    content: (
      <>
        <p>
          I've done quite a bit of photography over the years and this page showcases some of my best work.
          I'm no expert by any stretch of the word but I personally like these pictures quite a bit.
          I shot these with my trusty Canon 1000d that I got from my dad like a decade ago and it still works like a charm.
          I've got no special lenses or anything so a dslr is a bit wasted on me but it sure takes nice pictures 😄
          </p>
        <p>
          I mainly take photos of scenery and wildlife and I like to find some interesting compositions when I make heavy use
          of close-ups and play around with focus. I've dabbled around with HDR-photography and some of the pictures on this page
          are lightly edited (sharpening and color correction).
          </p>
        <p>
          ps. please don't take my photos without permission 😊
          </p>
      </>
    ),
    footer: "",
  },
  {
    header: <h2>Lorem ipsum dolor sit amet</h2>,
    content: (
      <p>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.
      </p>
    ),
    footer: "",
    picture: {
      alt: "A fly amanita in stark sun light",
      src: "/img/amanita-small.webp"
    }
  },
  {
    header: <h2>Lorem ipsum dolor sit amet</h2>,
    content: (
      <p>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.
      </p>
    ),
    footer: "",
    picture: {
      alt: "A flowering branch of an apple tree with a wasp flying next to it",
      src: "/img/appletreeflower-small.webp"
    }
  },
  {
    header: <h2>Lorem ipsum dolor sit amet</h2>,
    content: (
      <p>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.
      </p>
    ),
    footer: "",
    picture: {
      alt: "An apple tree covered in a snowe dream scape",
      src: "/img/snowapple-small.webp"
    }
  },
  {
    header: <h2>Lorem ipsum dolor sit amet</h2>,
    content: (
      <p>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.
      </p>
    ),
    footer: "",
    picture: {
      alt: "A bumble bee resting on a dandelion",
      src: "/img/bumblebee-small.webp"
    }
  },
  {
    header: <h2>Lorem ipsum dolor sit amet</h2>,
    content: (
      <p>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.
      </p>
    ),
    footer: "",
    picture: {
      alt: "A butterfly resting on a green plant",
      src: "/img/butterfly-small.webp"
    }
  },
  {
    header: <h2>Lorem ipsum dolor sit amet</h2>,
    content: (
      <p>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.
      </p>
    ),
    footer: "",
    picture: {
      alt: "A moth looking over a field of grass",
      src: "/img/moth-small.webp"
    }
  },
  {
    header: <h2>Lorem ipsum dolor sit amet</h2>,
    content: (
      <p>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.
      </p>
    ),
    footer: "",
    picture: {
      alt: "A centered image of a velvety flower",
      src: "/img/velvetflower-small.webp"
    }
  },
  {
    header: <h2>Lorem ipsum dolor sit amet</h2>,
    content: (
      <p>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.
      </p>
    ),
    footer: "",
    picture: {
      alt: "A withered flower in black and white",
      src: "/img/withered-small.webp"
    }
  },
  {
    header: <h2>Lorem ipsum dolor sit amet</h2>,
    content: (
      <p>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.
      </p>
    ),
    footer: "",
    picture: {
      alt: "A mossy stone with a pine cone",
      src: "/img/moss-small.webp"
    }
  },
  {
    header: <h2>Lorem ipsum dolor sit amet</h2>,
    content: (
      <p>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.
      </p>
    ),
    footer: "",
    picture: {
      alt: "A mushroom hidden in grass",
      src: "/img/boletus-small.webp"
    }
  }
]

export const BackgroundContext = createContext<{ setBackgroundSrc: (src: string) => void }>({} as any)

const App: React.FC<{}> = () => {
  const [bgSrc, setBackgroundSrc] = React.useState('/img/boletus-small.webp')
  const articleRefs = React.useRef(articles.map(() => React.createRef<HTMLDivElement>()))
  const [articleInViewIndex, setArticleInViewIndex] = React.useState(0)
  const cb: IntersectionObserverCallback = React.useCallback(entries => {
    const intersecting = entries.find(entry => entry.isIntersecting)
    if (intersecting) {
      const newArticleInViewIndex = articleRefs.current.findIndex(ref => ref.current === intersecting.target)
      if (newArticleInViewIndex !== -1) {
        setArticleInViewIndex(newArticleInViewIndex)
      }
    }
  }, [])
  const observerRef = React.useRef(new IntersectionObserver(cb, { root: document.body, threshold: 1.0 }))

  function handleClick(dir: 'left' | 'right') {
    const nextIndex = articleInViewIndex + (dir === 'left' ? -1 : 1)
    const nextRef = articleRefs.current[nextIndex]
    if (nextRef) {
      nextRef.current.scrollIntoView({ behavior: 'smooth' })
      setArticleInViewIndex(nextIndex)
    }
  }

  useEffect(() => {
    const observer = observerRef.current
    const refs = articleRefs.current.map(ref => ref.current)
    refs.forEach(ref => observer.observe(ref))
    return () => {
      refs.forEach(ref => observerRef.current.unobserve(ref))
      observer.disconnect()
    }
  }, [])

  return (
    <BackgroundContext.Provider value={{ setBackgroundSrc }}>
      <Background src={bgSrc} />
      {articleInViewIndex > 0 && <LeftButton onClick={() => handleClick('left')} />}
      {
        articles.map((article, i) => (
          <Article ref={articleRefs.current[i]} key={i}>
            {article.picture && <Picture src={article.picture.src} alt={article.picture.alt} />}
            <Header>
              {article.header}
            </Header>
            <Section>
              {article.content}
            </Section>
            <Footer>
              {article.footer}
            </Footer>
          </Article>
        ))
      }
      {articleInViewIndex < articleRefs.current.length - 1 && <RightButton onClick={() => handleClick('right')} />}
      <Footer></Footer>
    </BackgroundContext.Provider>
  )
}

const LeftButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    ReactDOM.createPortal(
      <IconButton onClick={onClick} aria-label="previous image">
        <ArrowLeft />
      </IconButton>,
      document.getElementById("button-left")
    )
  )
}

const RightButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    ReactDOM.createPortal(
      <IconButton onClick={onClick} aria-label="next image">
        <ArrowRight />
      </IconButton>,
      document.getElementById("button-right")
    )
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