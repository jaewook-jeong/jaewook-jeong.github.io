import React, { useState, useEffect } from 'react'
import Switch from 'react-switch'

import * as Dom from '../../utils/dom'
import { THEME } from '../../constants'

import { getValueFromLocalStorage, setValueToLocalStorage } from "../../utils/localStorage";
import styled from "styled-components";

const LOCAL_STORAGE_KEY = "_woogi_blog_/theme";

function getTheme(checked) {
  return checked ? THEME.DARK : THEME.LIGHT
}

function getLocalStorageTheme(defaultValue) {
  return getValueFromLocalStorage(`${LOCAL_STORAGE_KEY}/theme`) || defaultValue
}

function setLocalStorageTheme(val) {
  return setValueToLocalStorage(`${LOCAL_STORAGE_KEY}/theme`, val)
}

const SwitchContainer = styled.div`
  text-align: right;
  
  .icon {
    text-align: center;
    color: #222;
    font-size: 14px;
    font-weight: 900;
  }
`;

function toggleTheme(theme) {
  switch (theme) {
    case THEME.LIGHT: {
      Dom.addClassToBody(THEME.LIGHT)
      Dom.removeClassToBody(THEME.DARK)
      break
    }
    case THEME.DARK: {
      Dom.addClassToBody(THEME.DARK)
      Dom.removeClassToBody(THEME.LIGHT)
      break
    }
  }
}

export const ThemeSelector = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = checked => {
    const theme = getTheme(checked)

    setLocalStorageTheme(checked)
    setChecked(checked)
    toggleTheme(theme)
  }

  useEffect(() => {
    const checked = getLocalStorageTheme(Dom.hasClassOfBody(THEME.DARK))

    handleChange(checked)
  }, [])

  return (
    <SwitchContainer className="switch-container">
      <label htmlFor="normal-switch">
        <Switch
          onChange={handleChange}
          checked={checked}
          id="normal-switch"
          height={24}
          width={48}
          checkedIcon={<div className="icon checkedIcon">D</div>}
          uncheckedIcon={<div className="icon uncheckedIcon">L</div>}
          offColor={'#d9dfe2'}
          offHandleColor={'#fff'}
          onColor={'#999'}
          onHandleColor={'#282c35'}
        />
      </label>
    </SwitchContainer>
  )
}