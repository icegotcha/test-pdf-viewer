import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden scroll;
  height: 100%;
  max-height: 100%;
  position: relative;
  & > div {
    width: 100%;
    height: 100%;
  }
`
