import React from "react";
import { ThemeConsumer } from "styled-components";
import ModeButton from "./ModeButton";

export default function ToggleMode () {
  return (
    <ThemeConsumer>{theme => (
      <ModeButton 
        variant="primary"
        onClick={e => 
          theme.setTheme(
            theme.mode === 'dark'
            ? {...theme, mode: 'ligth'}
            : {...theme, mode: 'dark'}
          )
        }
      >
        Toggle Mode
    </ModeButton>)}
    </ThemeConsumer>
  )
}