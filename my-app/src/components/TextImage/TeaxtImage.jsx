import TOMISmall from '../../assets/TOMISmall.png';
import { Box, Flex } from '@chakra-ui/react';
import { Heading, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

const TeaxtImage = () => {
    return (
        <div>
            <Box mt={"28"} mx={"28"}>
                <Flex>
                    <Image src={TOMISmall} width={'12'}/>
                    <Text />
                    <Heading size={"md"} mt={"2"} ml={"2"} fontWeight={"medium"}>
                        Lorem ipsum dolor sit amet consectetur.
                    </Heading>
                </Flex>
            </Box>
        </div>
    );
};
export default TeaxtImage;
