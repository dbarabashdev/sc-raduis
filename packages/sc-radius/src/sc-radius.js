import React from "react"
import styled from "styled-components"

const SCRadiusContainer = styled.div`
  width: ${props => props.width + `px`};
  height: ${props => props.height + `px`};
  background-color: ${props => props.backgroundColor};
  background-image: url(${props => props.backgroundImage});
  background-size: ${props => props.backgroundSize};
  border-radius: ${props => props.borderRadius};
  overflow: ${props => (props.overflowHidden ? "hidden" : "auto")};
`

const SCRadius = ({
  children,
  width,
  height,
  backgroundColor,
  backgroundImage,
  backgroundSize,
  borderRadius
}) => {
  return (
    <SCRadiusContainer
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      backgroundSize={backgroundSize}
      borderRadius={borderRadius}
    >
      {children}
    </SCRadiusContainer>
  )
}

export default SCRadius
