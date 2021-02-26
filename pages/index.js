import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Projects from "../components/Projects/Projects"
import Head from "next/head";


export default function Landing(){
    return(
        <>
                      <Head>
        <title>
         Karim Zitouni: Portfolio
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <body class="body">
            <NavBar display={true}/>
                <Hero />
                <About />
                <Projects />
            <Footer />
            </body>
        </>
    )
}