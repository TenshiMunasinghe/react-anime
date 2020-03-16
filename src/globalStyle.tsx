import styled, { css } from "styled-components"

export const primaryColor = "#e12885"
export const secondaryColor = "#86cecb"
export const fontColor = "#373b3e"
export const backgroundColor = "#bec8d1"
export const headerHeightMobile = "4rem"
export const headerHeightLg = "3rem"

export const desktop = `min-width: 1224px`

export const nicoFont = `"nico", ToppanBunkyuMidashiGothicStdN-ExtraBold,
		BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
        "Open Sans", "Helvetica Neue", sans-serif`

export const hansFont = `"hans", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif`

export const backgroundGradient = css`
    background: linear-gradient(
            160deg,
            ${secondaryColor}88 8rem,
            transparent 15rem
        ),
        linear-gradient(-20deg, ${secondaryColor}88 5rem, transparent 15rem);
    background-attachment: fixed;
`

export const mainHeight = css`
    min-height: calc(100vh - ${headerHeightMobile});

    @media only screen and (min-width: 1224px) {
        min-height: calc(100vh - ${headerHeightLg});
    }
`
export const Space = styled.div`
    padding-top: ${headerHeightMobile};

    @media only screen and (${desktop}) {
        padding-top: ${headerHeightLg};
    }
`

export const Header = styled.header`
    position: fixed;
    width: 100%;
    height: ${headerHeightMobile};
    background-color: ${primaryColor};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    z-index: 999;
    box-shadow: 0 0.04rem 0.05rem 0.025rem rgba($color: #747474, $alpha: 0.8);

    @media only screen and (${desktop}) {
        height: ${headerHeightLg};
    }
`

export const HeaderTitle = styled.h2`
    background-image: linear-gradient(
        to right,
        ${fontColor},
        ${secondaryColor}
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 1.5rem;

    @media only screen and (${desktop}) {
        font-size: 1.75rem;
    }
`
