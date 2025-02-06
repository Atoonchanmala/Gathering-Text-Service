import { Box, Flex, Button } from "@chakra-ui/react";
import { Heading, Text, Highlight } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
const InputComponent = () => {
  return (
    <div>
      <Box mt={"10"}>
        <Box>
          <Heading
            size={"lg"}
            pt={9}
            pl={"36"}
            color={"white"}
            fontFamily={"Inter, sans-serif"}
            fontWeight={"bold"}
          >
            <Highlight query={["*"]} styles={{ color: "#dc2626" }}>
              * Lorem ipsum dolor sit amet.
            </Highlight>
          </Heading>
        </Box>

        <Box mt={"2"} sx={{width:"85%"}}>
          <Flex ml={"32"}>
            <Input height={"14"}/>
            <Button ml={"5"}>
              <Text>Click</Text>
            </Button>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default InputComponent;
