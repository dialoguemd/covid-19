import React from 'react'

import styled from 'styled-components/macro'
import regionsIndex from 'regions/index.json'
import { getRegionId } from 'services/region-loader'
const regionId = getRegionId()

const RegionOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 100;
`

const RegionPickerContainer = styled.div`
  margin: 0 16px;
  width: 72px;
  height: 40px;
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 5;

  img {
    width: 64px;
    height: 32px;
    border: 4px ${props => props.theme.colors.background} solid;
    margin-top: -4px;
    display: none;
  }
  img:first-child {
    margin-top: 0px;
    display: block;
  }
  &:hover {
    img {
      display: block;
    }
  }
`

const changeRegion = id => {
  localStorage.setItem('region', id)
  window.location.hash = '/'
  window.location.reload()
}

interface RegionProps {
  id?: string
  onClick?: Function
}

export const Region: React.FC<RegionProps> = ({ id, ...rest }: any) => {
  const image = require(`regions/${id}/images/icon.png`)
  return <img alt={id} src={image} {...rest} />
}

export const RegionPicker: React.FC = () => {
  return (
    <RegionPickerContainer>
      <RegionOptionsContainer>
        <Region id={regionId} />
        {regionsIndex.REGIONS.filter(id => id !== regionId).map(id => (
          <Region key={id} id={id} onClick={() => changeRegion(id)} />
        ))}
      </RegionOptionsContainer>
    </RegionPickerContainer>
  )
}

export default RegionPicker
