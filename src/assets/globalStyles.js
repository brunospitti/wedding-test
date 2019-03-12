import { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "#e69191",
  secondary: "#a593f2",
  tertiary: "#6fe2a5",
  greyDark: "#535353",
  greyLight: "#eaeaea"
};

export const fontFamily =
  "'Space Mono', -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', 'segoe ui', helvetica, roboto, noto, arial, sans-serif";

export const fontFamilyTitle =
  "'Archivo Black', 'Space Mono', -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', 'segoe ui', helvetica, roboto, noto, arial, sans-serif";

export const mainContainer = `
    width: 100%;
    max-width: 1360px;
    padding: 0 80px;
    margin: 0 auto;
    position: relative;
  `;

export const breakpoints = {
    desktop: `(min-width: 1260px)`,
    desktopSmall: `(max-width: 1259px)`,
    tablet: `(max-width: 1023px)`,
    mobile: `(max-width: 767px)`,
    workPillFixes: `(max-width: 1360px) and (min-width: 1260px)`,
}


export const GlobalStyles = createGlobalStyle`
    // css reset

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    * {
        box-sizing: border-box;
        :focus{
            outline: none;
        }
    }


    // global styles
    @import url('https://fonts.googleapis.com/css?family=Archivo+Black|Space+Mono:400,700');
    body {
        overflow-x: hidden;
    }
    
    * {
        font-family: ${fontFamily};
        font-size: 22px;
        line-height: 30px;
        color: ${colors.greyDark};
        font-weight: 300;
    }
`;
