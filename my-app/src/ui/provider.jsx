import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import PropTypes from "prop-types";

const theme = extendTheme({
  colors: {
    brand: {
      500: "#09427D",
      400: "#0783F0",
      100: "#51BFFF",
    },
  },
  fonts: {
    heading: "'Noto Sans Lao', sans-serif",
    body: "'Inter', sans-serif",
  },
});

const Provider = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
