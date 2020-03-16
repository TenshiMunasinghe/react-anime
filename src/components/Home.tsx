import * as React from "react"
import styled from "styled-components"
import {
    mainHeight,
    backgroundGradient,
    Space,
    Header,
    HeaderTitle
} from "../globalStyle"
import Form from "./Form"
import gifHome from "../gifs/animeGif2.gif"

const { memo } = React

const Home: React.FC = memo(() => {
    return (
        <>
            <Header>
                <Form />
                <HeaderTitle>AniFinder</HeaderTitle>
            </Header>
            <Space></Space>
            <Wrapper>
                <div>
                    <p>放送年と季節を選択してください</p>
                    <figure>
                        <img src={gifHome} alt='' />
                    </figure>
                </div>
            </Wrapper>
        </>
    )
})

const Wrapper = styled.section`
    ${mainHeight}
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    ${backgroundGradient}
    * {
        text-align: center;
        margin: auto;
    }
`

export default Home
