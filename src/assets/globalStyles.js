import { createGlobalStyle } from 'styled-components';

export const colors = {
  primary: '#2b5854',
  secondary: '#a593f2',
  tertiary: '#6fe2a5',
  greyDark: '#535353',
  greyLight: '#eaeaea',
  bgColor: '#f7f7f7',
};

export const fontFamily =
  "'Bellota Text', -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', 'segoe ui', helvetica, roboto, noto, arial, sans-serif";

export const fontFamilyTitle = `'Tangerine', ${fontFamily}`;

export const breakpoints = {
  desktop: `(min-width: 1260px)`,
  desktopSmall: `(max-width: 1259px)`,
  tablet: `(max-width: 1023px)`,
  mobile: `(max-width: 767px)`,
  mobileSmall: `(max-width: 400px)`,
  workPillFixes: `(max-width: 1360px) and (min-width: 1260px)`,
};

export const mainContainer = `
	height: 100%;
	width: 100%;
	max-width: 1260px;
	padding: 0 80px;
	margin: 0 auto;
	position: relative;
	@media ${breakpoints.tablet} {
		padding: 0 40px;
	}
	@media ${breakpoints.mobile} {
		padding: 0 20px;
	}
`;
export const outerContainer = `
	height: 100%;
	width: 100%;
	max-width: 1700px;
	margin: 0 auto;
	position: relative;
`;

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


    /* global styles */
    @import url('https://fonts.googleapis.com/css?family=Bellota+Text:300,400,700|Tangerine:400,700&display=swap');
    html,
		body {
        overflow-x: hidden;
        background-color: ${colors.bgColor};
    }

    * {
        box-sizing: border-box;
        touch-action: auto;
        font-family: ${fontFamily};
        font-size: 16px;
        line-height: 26px;
        color: ${colors.greyDark};
        font-weight: 400;
				@media ${breakpoints.mobile} {
                font-size: 18px;
    			line-height: 26px;
				}
				@media ${breakpoints.mobileSmall} {
					font-size: 16px;
					line-height: 24px;
				}
    }
`;
