import * as React from "react"
import styled from "styled-components"
import {
    Header,
    Space,
    backgroundColor,
    mainHeight,
    HeaderTitle
} from "../globalStyle"
import Form from "./Form"
// import gifError from "../gifs/animeGif3.gif"

interface ErrorProp {
    text?: string
    year?: string
    cour?: string
}

const ErrorPage: React.FC<ErrorProp> = React.memo(
    ({ text = "page not found", year = "2014", cour = "1" }) => {
        return (
            <>
                <Header>
                    <Form year={year} cour={cour} />
                    <HeaderTitle>AniFinder</HeaderTitle>
                </Header>
                <Space></Space>
                <ErrorContent>
                    <div>
                        <p>{text}</p>
                        {/* <img src={gifError} alt='' className='error__img' /> */}
                    </div>
                </ErrorContent>
            </>
        )
    }
)

// ErrorPage.defaultProps = {
// 	text: "page not found",
// 	year: "2014",
// 	cour: "1"
// }

const ErrorContent = styled.section`
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    background-color: ${backgroundColor};
    ${mainHeight};
    * {
        text-align: center;
        margin: auto;
        font-size: 2rem;
    }
`

export default ErrorPage
