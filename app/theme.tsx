import { extendTheme, StyleFunctionProps } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      light: "#fff", // main light
      dark1: "#333439", //"#404247",
      dark2: "#2c2f33", // main dark
      dark3: "#23272a",
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("brand.light", "brand.dark2")(props)
      },
      ".markdown": {
        color: mode("gray.900", "gray.100")(props) // chakra-uiが提供するセットも使える
      },
      ".markdown code": {
        "bg": mode("gray.100", "#1e2224")(props)
      },
      ".code-title": {
        bg: mode("gray.200", "gray.600")(props),
        color: mode("gray.900", "gray.200")(props)
      },
      ".header": {
        color: mode("gray.600", "gray.200")(props),
        bg: mode("brand.light", "brand.dark1")(props),
        borderColor: mode("gray.200", "gray.500")(props),
      },
      ".footer": {
        color: mode("gray.700", "gray.200")(props),
        bg: mode("gray.100", "brand.dark1")(props)
      },
      ".markdown a": {
        color: mode("blue.400", "#4ba7f4")(props)
      }
    }),
  },
});
export default theme;