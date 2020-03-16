import * as React from "react"
import { RouteComponentProps } from "react-router-dom"
import AnimateOnChange from "react-animate-on-change"
import styled from "styled-components"
import {
    Header,
    desktop,
    secondaryColor,
    Space,
    backgroundColor,
    mainHeight,
    primaryColor
} from "../globalStyle"
import { AnimeContext } from "../Context"
import usePrev from "../customHooks/usePrev"
import AnimeItem from "./AnimeItem"
import Form from "./Form"
import Loading from "./Loading"
import ErrorPage from "./ErrorPage"

interface PageProps
    extends RouteComponentProps<{ year: string; cour: string }> {}

const { useState, useContext, useEffect, useCallback } = React

const AnimePage: React.FC<PageProps> = ({ match }) => {
    const { getAnime, getSeason, loading } = useContext(AnimeContext)
    const [showBtn, setShowBtn] = useState<boolean>(false)
    const { year, cour } = match.params
    const { prevYear, prevCour } = usePrev(year, cour)

    const checkScroll = useCallback(() => {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            setShowBtn(true)
        } else {
            setShowBtn(false)
        }
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", checkScroll)

        return () => window.removeEventListener("scroll", checkScroll)
    }, [checkScroll])

    if (loading) return <Loading />

    const data = getAnime(year, cour)

    if (!data) return <ErrorPage />

    const { animes } = data
    const season = getSeason(cour)

    if (animes.length === 0) {
        return (
            <ErrorPage
                text='この期間の情報はありません&lt;(_ _)&gt;'
                year={year}
                cour={cour}
            />
        )
    }

    return (
        <>
            <Header>
                <Form year={year} cour={cour} />
                <h2>
                    <AnimateOnChange
                        baseClassName='fade'
                        animationClassName='fade--active'
                        animate={prevYear !== year}>
                        <EmphasisedText>{year}</EmphasisedText>
                    </AnimateOnChange>
                    年
                    {season === "全て" ? (
                        ""
                    ) : (
                        <AnimateOnChange
                            baseClassName='fade'
                            animationClassName='fade--active'
                            animate={prevCour !== cour}>
                            <EmphasisedText>{season}</EmphasisedText>
                        </AnimateOnChange>
                    )}
                    アニメ
                </h2>
            </Header>
            <Space></Space>
            <Wrapper>
                <Grid>
                    {animes.map((anime: any) => {
                        return <AnimeItem key={anime.id} anime={anime} />
                    })}
                </Grid>
            </Wrapper>
            <ScrollButton
                href='#root'
                type='button'
                visibility={showBtn ? "block" : "none"}>
                <span>&#9650;</span>
            </ScrollButton>
        </>
    )
}

const EmphasisedText = styled.span`
    font-size: 1.5rem;
    color: ${secondaryColor};

    @media screen and (${desktop}) {
        font-size: 2rem;
    }
`

const Wrapper = styled.main`
    padding: 2rem 0;
    min-width: 100vw;
    background-color: ${backgroundColor};
    ${mainHeight};
`

const Grid = styled.ul`
    max-width: 70vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 2rem;
    z-index: 1;
`

const ScrollButton = styled.a`
    position: fixed;
    display: ${({ visibility }) => visibility};
    right: 0;
    bottom: 0;
    margin: 0 0.5rem 1rem;
    width: 3rem;
    height: 3rem;
    font-size: 1.3rem;
    background-color: #fff;
    border: 1.5px solid ${primaryColor};
    z-index: 2;
    opacity: 0.7;
    color: ${primaryColor};
    text-align: center;

    span {
        line-height: 3rem;
    }
`

export default AnimePage
