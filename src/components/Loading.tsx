import * as React from "react"
import styled from "styled-components"
import { backgroundGradient } from "../globalStyle"
import gifLoad from "../gifs/animeGif4.gif"

const Loading: React.FC = () => {
    return (
        <Wrapper>
            <div>
                <p>loading...</p>
                <figure>
                    <img src={gifLoad} alt='' />
                </figure>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    ${backgroundGradient}
    height: 100vh;
    * {
        text-align: center;
        margin: auto;
    }
`

export default Loading
