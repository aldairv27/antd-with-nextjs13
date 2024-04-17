import { ITheme } from "../../interface/theme";
import {
    changeMenuColor,
    resetColors
} from "./themeSlice"
var tinycolor = require("tinycolor2");
/**
 * Funcion para cambiar el color del menu lateral por medio del redux
 * @param color 
 * @returns 
 */
export const setChangeMenuColor = async (colorMenu: string, colorButton: string, logo: string) => {
    let color = tinycolor(colorMenu);
    let buttonColor = tinycolor(colorButton);
    var auxColorText: string;
    var auxColorTextActive: string;
    var auxButtonText: string;
    if (color.isLight()) {
        auxColorText = color.darken(30).toString();
        auxColorTextActive = color.darken(100).toString();
    }
    else if (color.isDark()) {
        auxColorText = color.lighten(40).toString();
        auxColorTextActive = color.lighten(100).toString();
    }
    if (buttonColor.isLight()) {
        auxButtonText = buttonColor.darken(100).toString();
    } else if (buttonColor.isDark()) {
        auxButtonText = buttonColor.lighten(100).toString();
    }
    const itheme: ITheme = {
        buttonBackgroundColor: colorButton,
        backgroundColorMenu: colorMenu,
        logo: logo,
        menuTextColor: auxColorText!,
        menuTextColorActive: auxColorTextActive!,
        buttonTextColor: auxButtonText!,
        textoPrueba: " "
    }
    return async (dispatch: Function) => {
        //cambio de color del menu lateral
        await dispatch(changeMenuColor(itheme));
    }
}

/**
 * Funcion para resetear los colores por default
 */
export const setToResetDefaultColor = async () => {
    return async (dispatch: Function) => {
        await dispatch(resetColors());
    }
}