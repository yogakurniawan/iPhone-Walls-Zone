import React from 'react'
import styled from 'styled-components'
import Link from '../Link'
import { LoveButtonSmall, ModelButtonSmall } from '../Button'
import { Eye } from '../Icon'
import { replaceSpaceWithDash } from '../../utils/common'

const Overlay = styled.div`
  background-image: linear-gradient(180deg,rgba(0,0,0,.6) 0,transparent 40%,transparent 60%,rgba(0,0,0,.7));
  text-align: center;
  position: absolute;
  top: 0;
  height: 100%;
  padding-top: 150%;
  width: 100%;
  opacity: 0;
  transition: all 0.25s ease-in-out;
`

const Wrapper = styled.div`
  margin-bottom: 20px;
`

export const Wallpaper = styled.div`
  background-size: contain;
  background-position: center;
  background-image: ${props => `url('${props.backgroundImage.replace(/'/g, "\\'")}')`};
  height: 100%;
  padding-top: 150%;
  position: relative;
  &:hover ${Overlay} {
    opacity: 1;
  }
`

const Name = styled.span`
  color: white;
  font-size: 1em;
  font-weight: 700;
  @media screen and (max-width: 320px) {
    font-size: 0.85em;
  }
`

const Div = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 5px;
  text-align: right;
`

const Title = styled.div`
  text-align: left;
  position: absolute;
  bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  &:hover span {
    text-decoration: underline;
    color: #FFFFFF;
  }
`

const Views = styled.div`
  display: inline-block;
  color: #fff;
  float: left;
  span {
    margin-right: 3px;
    &:before {
      ${Eye}
    }
  }
`

const Card = (props) => {
  const {
    data,
    detailMode,
    like,
    models
  } = props;
  const href = `/wallpaper?name=${replaceSpaceWithDash(data.name)}`
  const as = `/wallpaper/${replaceSpaceWithDash(data.name)}`
  const model = models && models.find(m => (m.id === data.iphoneModelId))
  let nameReplaced = data.name.replace(/(iPhone)/ig, '')
  nameReplaced = nameReplaced.replace(/(3|4|4s|5|X|5s|6|6s|SE|7|iPad Pro|iPad Mini)/g, '')
  nameReplaced = nameReplaced.replace(/(Wallpaper)/ig, '')
  nameReplaced = nameReplaced.replace(/(10."|12.9")/g, '')
  nameReplaced = nameReplaced.replace(/(Plus)/ig, '')
  nameReplaced = nameReplaced.replace(/(HD)/g, '')
  let modelReplaced = model && model.name.replace(/(Plus)/g, '+')
  modelReplaced = modelReplaced && modelReplaced.replace(/(.5"|.9")/g, '')
  if (detailMode) {
    return (
      <Wrapper>
        <Wallpaper backgroundImage={data.thumbnail}>
          <Overlay>
            <Link href={href} as={as}>
              <Title>
                <Name>{nameReplaced}</Name>
              </Title>
            </Link>
          </Overlay>
        </Wallpaper>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Wallpaper backgroundImage={data.thumbnail}>
        <Overlay>
          <Div>
            <Views>
              <span />
              {data.total_view}
            </Views>
            <Link href={`/model?model=${data.model}`} as={`/model/${data.model}`}>
              <ModelButtonSmall>
                {modelReplaced}
              </ModelButtonSmall>
            </Link>
            <LoveButtonSmall onClick={like}>
              <span />
              {data.total_like}
            </LoveButtonSmall>
          </Div>
          <Link href={href} as={as}>
            <Title>
              <Name>{nameReplaced}</Name>
            </Title>
          </Link>
        </Overlay>
      </Wallpaper>
    </Wrapper>
  )
}

export default Card
