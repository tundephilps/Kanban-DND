import { extendTheme } from "@chakra-ui/react";
// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
    styles: {
        global: (props) => ({
            body: {
                bg: props.colorMode === "dark" ? "gray.800" : "white",
            },
        }),
    },
});
export default theme;
