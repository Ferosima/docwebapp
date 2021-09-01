const light = {
  background: "#F8F9FB",
  color_text: "#263238",
  color_text_secondary: "#939499",
  color_error: "#d80404",
  primary_color: "#4F76E2",
  primary_text: "#3e6bdd",
  border_line: "1px solid #c7c7cc",
  input: { border_input: "1px solid #acb7c5", border_input_focus: "1px solid #2339c3" },
  page_auth: {
    color_error: "#d80404",
    color_link: "#2f49fb",
  },
  sidebar: {
    hover: { background: "#E4EBFA", color: "#678ABE" },
    header: { fontFamily: "Roboto-Medium", fontSize: "18px", margin: "20px 0 0" },
    default: { fontFamily: "Roboto", fontSize: "16px", margin: "5px 0" },
  },
  card: {
    background: "#fff",
    border: "1px solid #dadce0",
    color_subtitle: "#455a64",
    color_icon: "#455A64",
    color_preview: "#dae0f7",
  },
  preview: {
    tab: "#455A64",
    color_description: "#455a64",
    color_preview: "#dae0f7",
    dots: {
      color_grey: "#c7c7cc",
      color_primary: "#32e032",
      color_secondary: "#f4911d",
    },
  },
  button: {
    main: { background: "#477bff", color: "#fff" },
    outline: { background: "transparent", color: "#477bff", border: "2px solid #477bff" },
    outlineRed: { background: "transparent", color: "#DF5753", border: "1px solid #DF5753" },
  },
  form: {
    info: "#adaeb2",
    label: "#7f8587",
    text: "#263238",
  },
};
const dark = {
  background: "#24252d",
  color_text: "#e4e7f2",
  color_text_secondary: "#78839e",
  color_error: "#ff3a3a",
  primary_color: "#4F76E2",
  primary_text: "#5887ff",
  border_line: "1px solid #30313a",
  input: {
    border_input: "1px solid #4B5057",
    border_input_focus: "1px solid #4a5bc4",
  },
  page_auth: {
    color_error: "#ff3a3a",
    color_link: "#5481ff",
  },
  sidebar: {
    hover: { background: "#313543", color: "#95a0b9" },
    header: { fontFamily: "Roboto-Medium", fontSize: "18px", margin: "20px 0 0" },
    default: { fontFamily: "Roboto", fontSize: "16px", margin: "5px 0" },
  },
  card: {
    background: "#2a2d3a",
    border: "0",
    color_subtitle: "#8e97ab",
    color_icon: "#8e97ab",
    color_preview: "#313543",
  },
  preview: {
    tab: "#78839e",
    color_description: "#c7d3df",
    color_preview: "#313543",
    dots: {
      color_grey: "#66666c",
      color_primary: "#42a042",
      color_secondary: "#ba6d13",
    },
  },
  button: {
    main: { background: "#477bff", color: "#fff" },
    outline: { background: "transparent", color: "#4F76E2", color_border: "#477bff" },
    outlineRed: { background: "transparent", color: "#e6615d", color_border: "#DF5753" },
  },
  form: {
    info: "#8a939d",
    label: "#a2acb8",
    text: "#d3dde7",
  },
};
export const themes = { light, dark };
