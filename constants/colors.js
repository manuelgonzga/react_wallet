// constants/colors.js
const coffeeTheme = {
  primary: "#8B593E",
  background: "#FFF8F3",
  text: "#4A3428",
  border: "#E5D3B7",
  white: "#FFFFFF",
  textLight: "#9A8478",
  expense: "#E74C3C",
  income: "#2ECC71",
  card: "#FFFFFF",
  shadow: "#000000",
};

const forestTheme = {
  primary: "#2E7D32",     // Verde bosque principal (mantén este)
  background: "#F1F8E9",  // Verde muy claro, más suave y cálido
  text: "#1B5E20",        // Verde oscuro, legible
  border: "#AED581",      // Verde claro, amigable para bordes
  white: "#FFFFFF",
  textLight: "#81C784",   // Verde medio para textos secundarios
  expense: "#D32F2F",     // Rojo más suave que "#C62828" para que no sea tan agresivo
  income: "#43A047",      // Verde brillante, más optimista para ingresos
  card: "#FFFFFF",        // Tarjetas blancas limpias
  shadow: "rgba(0,0,0,0.2)", // Sombra más suave y realista
};


const purpleTheme = {
  primary: "#6A1B9A",
  background: "#F3E5F5",
  text: "#4A148C",
  border: "#D1C4E9",
  white: "#FFFFFF",
  textLight: "#BA68C8",
  expense: "#D32F2F",
  income: "#388E3C",
  card: "#FFFFFF",
  shadow: "#000000",
};

const oceanTheme = {
  primary: "#0277BD",
  background: "#E1F5FE",
  text: "#01579B",
  border: "#B3E5FC",
  white: "#FFFFFF",
  textLight: "#4FC3F7",
  expense: "#EF5350",
  income: "#26A69A",
  card: "#FFFFFF",
  shadow: "#000000",
};

export const THEMES = {
  coffee: coffeeTheme,
  forest: forestTheme,
  purple: purpleTheme,
  ocean: oceanTheme,
};

// 👇 change this to switch theme
export const COLORS = THEMES.forest;