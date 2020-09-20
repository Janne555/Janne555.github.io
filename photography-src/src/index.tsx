import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom'
import { AnimatePresence } from 'framer-motion'
import Background from './Background'
import Article from './Article'
import Header from './Header'
import Section from './Section'
import Picture from './Picture'
import Footer from './Footer'

export const BackgroundContext = createContext({ setBackgroundSrc: (src: string) => { } })

const App: React.FC<{}> = () => {
  const [bgSrc, setBgSrc] = useState('/img/boletus-small.webp')

  return (
    <BackgroundContext.Provider value={{ setBackgroundSrc: setBgSrc }}>
      <Background src={bgSrc} />
      <Article>
        <Header>
          <h1>Photography Section</h1>
        </Header>
        <Section>
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
            ps. please don't steal my photos 😊
          </p>
        </Section>
        <Footer>

        </Footer>
      </Article>
      <Article>
        <Picture src="/img/amanita-small.webp" alt="A fly amanita in stark sun light" />
        <Header>
          <h2>Lorem ipsum dolor sit amet</h2>
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
        <Picture src="/img/appletreeflower-small.webp" alt="A flowering branch of an apple tree with a wasp flying next to it" />
        <Header>
          <h2>Lorem ipsum dolor sit amet</h2>
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
        <Picture src="/img/snowapple-small.webp" alt="An apple tree covered in a snowe dream scape" />
        <Header>
          <h2>Lorem ipsum dolor sit amet</h2>
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
        <Picture src="/img/bumblebee-small.webp" alt="A bumble bee resting on a dandelion" />
        <Header>
          <h2>Lorem ipsum dolor sit amet</h2>
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
        <Picture src="/img/butterfly-small.webp" alt="A butterfly resting on a green plant" />
        <Header>
          <h2>Lorem ipsum dolor sit amet</h2>
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
        <Picture src="/img/moth-small.webp" alt="A moth looking over a field of grass" />
        <Header>
          <h2>Lorem ipsum dolor sit amet</h2>
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
        <Picture src="/img/velvetflower-small.webp" alt="A centered image of a velvety flower" />
        <Header>
          <h2>Lorem ipsum dolor sit amet</h2>
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
        <Picture src="/img/withered-small.webp" alt="A withered flower in black and white" />
        <Header>
          <h2>Lorem ipsum dolor sit amet</h2>
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
        <Picture src="/img/moss-small.webp" alt="A mossy stone with a pine cone" />
        <Header>
          <h2>Lorem ipsum dolor sit amet</h2>
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
        <Picture src="/img/boletus-small.webp" alt="A mushroom hidden in grass" />
        <Header>
          <h2>Lorem ipsum dolor sit amet</h2>
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

ReactDOM.render(
  <React.StrictMode>
    <AnimatePresence>
      <App />
    </AnimatePresence>
  </React.StrictMode>,
  document.getElementById('root')
);


export default App