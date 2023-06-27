import Head from 'next/head'

import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import CareerInfo from '@/components/CareerInfo'

function Home() {
  return (
    <>
      <Head>
        <title>Bon-TI Notes</title>
        <meta
          name="description"
          content="Aquí encontrarás una colección de notas detalladas y recursos útiles que he recopilado durante mi tiempo en la escuela. Este blog está diseñado para ayudar a estudiantes como tú a obtener información adicional, clarificar conceptos y reforzar el aprendizaje"
        />
      </Head>
      <Hero />
      <CareerInfo />
      <AboutMe />
    </>
  )
}

export default Home
