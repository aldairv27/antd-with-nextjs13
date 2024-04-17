import CSS from "csstype"

/**
 * Colores del proyecto
 */
export const primaryColorBlue: string = '#000B3D';
export const accentColor: string = '#009ADE';
export const flowKitBlue: string = '#0099FF';
export const blueButton: string = '#009ADE'
export const whiteAlpha36: string = '#FFFFFF5C';
export const whiteColor: string = '#FFFFFF';
export const grayColor700: string = '#2D3748';
export const red500: string = '#E53E3E';
export const blueTextCatalogue: string = '#2A4365';
export const grayIconColor: string = '#4A5568';
export const gray50: string = '#F7FAFC';
export const gray200: string = '#E2E8F0';
export const gray500: string = '#718096';
export const gray600: string = '#4A5568';
export const gray700: string = '#2D3748';
export const flowkitPurple: string = '#7B61FF';
export const flowkitGreen: string = '#29CC6A';

/*Colores sección de ventas */
export const primaryButtonSales: string = '#0099FF';
export const primaryButtonSalesH: string = '#002F87';
export const secondaryButtonSales: string = '#EDF2F7';
export const secondaryButtonSalesH: string = '#bfc3c7';

/**
 * Clases de estilos del proyecto
 */
export const paddingMarginZero: CSS.Properties = {
    padding: '0',
    margin: '0'
}

export const centerFlex: CSS.Properties = {
    display: 'flex',
    alignItems: "center",
    textAlign: 'center',
}

export const backgroundPrimaryColor: CSS.Properties = {
    backgroundColor: primaryColorBlue,
}

export const genericCenterFlex: CSS.Properties = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
}

export const footerDivStyle: CSS.Properties = {
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    padding: '0% 16px 0 40px',
    borderTop: '1px solid #FFFFFF5B',
}

export const iconLogOut: CSS.Properties = {
    color: '#FFFFFFA6',
    fontSize: '14px',
    width: '25px',
}

export const pLogOut: CSS.Properties = {
    color: '#FFFFFFA6',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: '400',
    margin: 0,
}

export const hrColor: CSS.Properties = {
    color: whiteAlpha36,
    borderColor: whiteAlpha36,
    backgroundColor: whiteAlpha36,
}

export const paddingLogoExodusSider: CSS.Properties = {
    height: '64px',
}

export const centerItems: CSS.Properties = {
    display: 'flex',
    alignItems: 'center',
}

export const sectionTittle: CSS.Properties = {
    color: gray700,
    margin: '10px 0',
    fontWeight: '700',
    fontSize: "20px",
}

export const styleButtonAdd: CSS.Properties = {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
}

export const centerButtonsActions: CSS.Properties = {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
}

export const paddingRowSearch: CSS.Properties = {
    // height: '10%',
    padding: '15px 4%',
    borderTop: '1px solid #E2E8F0',
}

export const paddingTable: CSS.Properties = {
    padding: '2% 4%',
}

export const positionStylePagination: CSS.Properties = {
    padding: '1% 4%'
}

export const paddingStylePagination: CSS.Properties = {
    paddingTop: '20px'
}

export const styleHeader: CSS.Properties = {
    background: whiteColor,
    display: 'flex',
    alignItems: 'center',
}

export const styleCenterTextSider: CSS.Properties = {
    fontSize: '12px',
    textAlign: 'center',
    color: '#FFFFFF5C'
}

export const textAreaStyle: CSS.Properties = {
    width: '100%',
    resize: 'none',
    borderRadius: '6px',
    border: `1px solid ${gray200}`,
    height: '75px',
}

export const textAreaFormItemStyle: CSS.Properties = {
    color: gray700,
    fontWeight: '600',
    margin: '0',
    padding: '0',
    fontSize: '16px',
}

export const buttonListCatalogueRowStyle: CSS.Properties = {
    border: '1px solid #E2E8F0',
    height: '48px',
    padding: '0 4%'
}

export const buttonListCatalogueColStyle: CSS.Properties = {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
}

export const containerPage: CSS.Properties = {
    padding: '0 4%',
    borderTop: '1px solid #E2E8F0',
}

export const paddingRowSearchWithFilter: CSS.Properties = {
    height: '10%',
    padding: '0px 4%',
    borderTop: '1px solid #E2E8F0'
}

export const paddingRowSearchWithFilterMobile: CSS.Properties = {
    padding: '1% 4%',
    borderTop: '1px solid #E2E8F0'
}

export const paddingFilter: CSS.Properties = {
    padding: '0 4%'
}

export const paddingFilterMobile: CSS.Properties = {
    padding: '0 4% 1.5%',
}

export const paddingCardTable: CSS.Properties = {
    padding: '2% 0',
    paddingRight: '1%'
}

export const stylePSupplier: CSS.Properties = {
    color: gray700,
    fontSize: '16px',
    fontWeight: '500',
}

export const stylePNotes: CSS.Properties = {
    color: "#744210",
    fontSize: '12px',
    fontWeight: '400',
    margin: '0 0 0 18px',
}

export const divSupplier: CSS.Properties = {
    display: 'flex',
    margin: '0 0 9px 0',
    justifyContent: 'space-between',
    alignItems: 'center',
}

export const supplierName: CSS.Properties = {
    color: gray700,
    margin: 0,
    fontWeight: '700',
    fontSize: "20px",
}

export const actionButtonSupplier: CSS.Properties = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '75px'
}

export const backgroundNotes: CSS.Properties = {
    backgroundColor: "#FEFCBF",
    height: "64px",
    color: "#744210",
}

export const sectionButonColorCol: CSS.Properties = {
    // height: '144px',
    borderRadius: '4px',
    border: '1px solid #E2E8F0',
}

export const sectionButonColorFlex: CSS.Properties = {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '144px',
    padding: '0 2%'
}

export const sectionButonColorDiv: CSS.Properties = {
    height: '120px',
    width: '132px',
    backgroundColor: '#F7FAFC',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderRadius: '4px',
}

export const sectionButonColorP600: CSS.Properties = {
    fontSize: '16px',
    color: gray700,
    margin: 0,
    fontWeight: '600',
}

export const sectionButonColorP400: CSS.Properties = {
    fontSize: '14px',
    color: gray600,
    margin: 0,
    fontWeight: '400',
}

export const sectionButonColorDivPicker: CSS.Properties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    border: "1px solid #E2E8F0",
    height: '36px',
    borderRadius: '8px',
    maxWidth: '172px'
}

export const sectionButonColorP500: CSS.Properties = {
    margin: '0',
    fontSize: '14px',
    color: gray700,
    fontWeight: '500'
}

export const sectionMenuCol: CSS.Properties = {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '144px',
    padding: '0 2%'
}

export const sectionMenuRow: CSS.Properties = {
    height: '120px',
    width: '132px',
    borderRadius: '4px',
    color: 'white',
    textAlign: 'center',
    padding: '5% 0',
    alignItems: 'center',
    fontSize: '16px'
}

export const paginationDetail: CSS.Properties = {
    display: 'flex',
    justifyContent: 'end',
    height: "60px",
    alignItems: 'center'
}

export const tagCategory: CSS.Properties = {
    height: '28px',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: '400',
    color: gray700,
    alignContent: 'center',
    borderRadius: '2px'
}

export const cashingOutTextStyle: CSS.Properties = {
    fontSize: '16px',
    fontWeight: '600',
    color: gray700,
    margin: '0 0 0 0'
}

export const styleSubtitles: CSS.Properties = {
    margin: 0,
    color: gray700,
    fontWeight: '500',
}

export const styleLabelCashingOutSettings: CSS.Properties = {
    fontSize: '16px',
    fontWeight: '600',
    color: gray700
}

export const authLayout: CSS.Properties = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

export const cardDesktopAuthLayout: CSS.Properties = {
    padding: '0',
    borderRadius: '1em',
    height: '36em',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '28em',
}

export const cardMobileAuthLayout: CSS.Properties = {
    padding: '0',
    borderRadius: '1em',
    height: '36em',
    width: '25em',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
}

export const titleLoginStyle: CSS.Properties = {
    fontWeight: 'bold',
    fontSize: '27px',
    margin: '0 0 20px 0',
    textAlign: 'center',
}

export const descriptionText: CSS.Properties = {
    padding: '0',
    marginBottom: '1em',
    color: '#828287',
    fontSize: '16px',
    lineHeight: 1.2,
    textAlign: 'center',
    width: '90%'
}

export const instructionsText: CSS.Properties = {
    textAlign: 'center',
    padding: '0',
    marginBottom: '1em',
    color: '#828287',
    fontSize: '16px',
    lineHeight: 1.2,
}

export const buttonListSave: CSS.Properties = {
    marginLeft: '10px',
    marginTop: "10px",
    width: '140px',
}