import { theme } from "antd";

export const lightTheme = {
  // hashed: false ,
  algorithm: theme.defaultAlgorithm,
  token: {
    // colorBgFooter: "#3e3f97",
    // colorTextFooter: '#ffffff',
    colorPrimary: "#FFA1B8",
    fontSize: '15px',
  },
  components: {
    Header: {
      colorLink: '#FFFFFF',
    },
    Button: {
      colorPrimary: "#FFFFFF;",
      colorTextBase: '#ffffff',
      colorLinkHover: '#ffffff',
      //   colorPrimaryHover: "#9192f5",
    },
    Menu: {
      // fontSize:20,
      colorText: '#ffffff',
      colorBgTextHover: "#ffffff",
      colorLinkHover: '#ffffff',
      colorTextDescription: '#ffffff',
      // colorLinkHover: '#ffffff',
    },
    Dropdown: {
      colorText: '#000000',
      paddingXS: 12,
      paddingXXS: 8,
      lineHeight:2,
    },
  },
};

export const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    // colorPrimary: "#1677ff",
    // colorBgBase	: "#222222",
    // colorTextBase: "#ffffff",
    // colorTextFooter: "#ffffff",
    // colorBgFooter: "#000000",
  },
  components: {
    Button: {
      //   colorPrimary: "#6366f2;",
      //   colorPrimaryHover: "#9192f5",
    },
    Menu: {
      controlItemBgActive: '#000000',
    },
  },
};