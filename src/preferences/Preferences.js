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
                onClick={() => onSelect("birdie")}
                selected={selected.includes("birdie")}
              >
                Birdies
              </S.Button>

              <S.Button
                onClick={() => onSelect("par")}
                selected={selected.includes("par")}
              >
                Pars
              </S.Button>

              <S.Button
                onClick={() => onSelect("bogie")}
                selected={selected.includes("bogie")}
              >
                Bogies
              </S.Button>

              <S.Button
                onClick={() => onSelect("double")}
                selected={selected.includes("double")}
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
