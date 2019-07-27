import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import SubscribeForm from './Forms/Subscribe'
import { Twitter, GitHub } from './Social'
import Container from './Container'
import { useTheme } from './Theming'

const Footer = ({ author, noSubscribeForm }) => {
  const theme = useTheme();
  return (
    <footer
      css={css`
      background: ${theme.colors.headerBg};
      color: white;
      margin-top: 70px;
    `}
    >
      <Container
        css={css`
        padding-top: 0;
        padding-bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ${bpMaxSM} {
          padding-top: 0;
          flex-direction: column;
        }
      `}
      >
        {!noSubscribeForm && (
          <div>
            <SubscribeForm />
            <br />
            <br />
          </div>
        )}
        <div
          css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
        >
          <div
            css={css`
            font-size: 90%;
            opacity: 0.7;
          `}
          >
            {author && `${author} \u00A9 ${new Date().getFullYear()}`}
          </div>
          <div>
            <Twitter />
            <GitHub />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
