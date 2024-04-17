'use client'
import { ITheme } from "@/interface/theme";
import { flowKitBlue, primaryColorBlue, whiteColor } from "@/styles/CommonStyle";
import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";
import logoExodus from '../../../public/svg/Brand.svg';
export const URL_LOGO_EXODUS = process.env.NEXT_PUBLIC_URL_LOGO as string;

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        backgroundColorMenu: primaryColorBlue,
        buttonBackgroundColor: flowKitBlue,
        logo: logoExodus,
        buttonTextColor: whiteColor,
        menuTextColor: '#FFFFFF5C',
        textoPrueba: 'Hola',
    } as ITheme,
    reducers: {
        changeMenuColor: (state: Draft<ITheme>, { payload }: PayloadAction<ITheme>) => {
            state.backgroundColorMenu = payload.backgroundColorMenu;
            state.buttonBackgroundColor = payload.buttonBackgroundColor;
            state.logo = payload.logo;
            state.menuTextColor = payload.backgroundColorMenu === primaryColorBlue ? '#FFFFFF5C' : payload.menuTextColor;
            state.menuTextColorActive = payload.backgroundColorMenu === primaryColorBlue ? whiteColor : payload.menuTextColorActive;
            state.buttonTextColor = payload.buttonTextColor;
        },
        resetColors: (state: Draft<ITheme>,) => {
            state.backgroundColorMenu = primaryColorBlue;
            state.buttonBackgroundColor = flowKitBlue;
            state.logo = URL_LOGO_EXODUS;
            state.buttonTextColor = whiteColor;
            state.menuTextColor = '#FFFFFF5C';
            state.menuTextColorActive = whiteColor;
        }
    },
});

export const {
    changeMenuColor,
    resetColors,
} = themeSlice.actions;

export default themeSlice.reducer;