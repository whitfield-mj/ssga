import React from "react";
import ToggledView, { Toggle, View } from "./PreferencesToggle";
import cog from "../images/cog.svg";
import * as S from "./styles";

function Preferences({ onSelect, selected }) {
  return (
    <div>
      <ToggledView>
        <Toggle>
          <S.Cog>
            <img src={cog} alt="settings cog" />
          </S.Cog>
        </Toggle>

        <View>
          <S.Overlay>
            <Toggle>
              <S.WhiteClose />
            </Toggle>
            <S.PanelContainer>
              <h2>Highlight</h2>
              <S.Button
                onClick={() => onSelect("birdies")}
                selected={selected.includes("birdies")}
              >
                Birdies
              </S.Button>

              <S.Button
                onClick={() => onSelect("pars")}
                selected={selected.includes("pars")}
              >
                Pars
              </S.Button>

              <S.Button
                onClick={() => onSelect("bogies")}
                selected={selected.includes("bogies")}
              >
                Bogies
              </S.Button>

              <S.Button
                onClick={() => onSelect("doubles")}
                selected={selected.includes("doubles")}
              >
                Doubles
              </S.Button>

              <S.Button
                onClick={() => onSelect("worse")}
                selected={selected.includes("worse")}
              >
                Worse
              </S.Button>
            </S.PanelContainer>
          </S.Overlay>
        </View>
      </ToggledView>
    </div>
  );
}

export default Preferences;
