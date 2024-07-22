import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden auto;
  background-color: white;
  & > div {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    .react-pdf__Page {
      width: 100% !important;
      canvas {
        width: 100% !important;
        height: 100% !important;
      }
    }
  }
`
