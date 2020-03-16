import * as React from "react"
import styled from "styled-components"
import { secondaryColor, hansFont, desktop, primaryColor } from "../globalStyle"

interface ItemProps {
    anime: {
        title: string
        public_url?: string
        twitter_account?: string
    }
}

const AnimeItem: React.FC<ItemProps> = ({ anime }) => {
    const { title, public_url, twitter_account } = anime
    const haveLinks = !(public_url || twitter_account)

    return (
        <Anime>
            <Title>{title}</Title>
            <Wrapper>
                {haveLinks && <span>リンクなし</span>}
                {public_url && (
                    <LinkWrapper>
                        <a
                            href={public_url}
                            target='_blank'
                            rel='noopener noreferrer'>
                            <i className='fas fa-link'></i>公式サイト
                        </a>
                    </LinkWrapper>
                )}
                {twitter_account && (
                    <LinkWrapper>
                        <a
                            href={`https://twitter.com/${twitter_account}`}
                            target='_blank'
                            rel='noopener noreferrer'>
                            <i className='fab fa-twitter'></i>公式Twitter
                        </a>
                    </LinkWrapper>
                )}
            </Wrapper>
        </Anime>
    )
}

const Title = styled.h3`
    display: flex;
    height: auto;
    min-height: 50%;
    margin: auto;
    padding: 1rem;
    font-size: 1.5rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    line-height: 130%;
    font-family: ${hansFont};
    transition: all 0.5s ease-in-out;

    /* mouse */
    @media (pointer: fine) {
        padding: 0.5rem;
    }
`

const Wrapper = styled.div`
    height: 0;
    width: 100%;
    background-color: ${secondaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    z-index: -1;
    transition: all 0.5s ease-in-out;

    /* mouse */
    @media (pointer: fine) {
        font-size: 0.1rem;
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        margin: auto;
        text-align: center;
        background-color: transparent;
        z-index: 4;
    }
`

const LinkWrapper = styled.div`
    margin: 0.5rem;

    * {
        color: ${secondaryColor};
    }

    @media only screen and (${desktop}) {
        margin: 0;
    }

    @media (pointer: fine) {
        * {
            opacity: 0;
            color: #fff;
            transition: all 0.5s ease-in-out;
        }

        &:hover {
            * {
                color: ${primaryColor};
            }
        }
    }
`

const NoLink = styled.span`
    @media (pointer: fine) {
        opacity: 0;
        color: #fff;
        transition: all 0.5s ease-in-out;
    }
`

const Anime = styled.li`
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 10vh;
    background: #fff;
    box-shadow: 0.05rem 0.05rem 0.05rem -0.05rem rgba(80, 80, 80, 0.5);
    background-color: white;

    /* devices with touch screens */
    @media (pointer: coarse) {
        &:hover {
            ${Title} {
                padding: 1rem 2rem;
            }
            ${Wrapper} {
                height: 5rem;
                z-index: 2;
            }
        }
    }
    /* devices with mouse */
    @media (pointer: fine) {
        padding: 1rem;

        &::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 0;
            height: 100%;
            width: 100%;
            background: ${secondaryColor};
            opacity: 0;
            transition: all 0.5s ease-in-out;
        }

        &:hover {
            &::after {
                top: 0;
                opacity: 0.9;
            }
            ${Wrapper} ${LinkWrapper} *,
			${NoLink} {
                font-size: 1rem;
                opacity: 1;
            }
        }
    }

    /* touch screen laptops */
    @media (pointer: fine) and (hover: none) {
        &:hover {
            ${Title} {
                padding: 1rem 2rem;
            }
            ${Wrapper} {
                height: 5rem;
                z-index: 2;
            }
        }
    }
`

export default AnimeItem
