import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Flex } from 'rebass'
import Link from '../Link'
import { RowFixed } from '../Row'
// import Logo from '../../assets/logo_white.svg'
import Wordmark from '../../assets/wordmark_dfyn.png'

const TitleWrapper = styled.div`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  z-index: 10;
`


export default function Title() {
  const history = useHistory()

  return (
    <TitleWrapper onClick={() => history.push('/')}>
      <Flex alignItems="left">
        <RowFixed>
          <img width={'120px'} style={{ marginLeft: '-20px', marginTop: '0px' }} src={Wordmark} alt="logo" />
        </RowFixed>
      </Flex>
    </TitleWrapper>
  )
}
