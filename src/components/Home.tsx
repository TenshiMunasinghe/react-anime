import * as React from "react"
import Form from "./Form"
import gifHome from "../gifs/animeGif2.gif"

const { memo } = React

const Home: React.FC = memo(() => {
    return (
        <>
            <header className='header'>
                <Form />
                <h2 className='header__title'>AniFinder</h2>
            </header>
            <div className='space'></div>
            <section className='home'>
                <div className='home__content'>
                    <p className='home__p'>放送年と季節を選択してください</p>
                    <figure>
                        <img src={gifHome} alt='' className='home__img' />
                    </figure>
                </div>
            </section>
        </>
    )
})

export default Home
