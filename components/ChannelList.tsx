import {
  Box,
  Flex,
  Heading,
  Img,
  Spinner,
  Tooltip,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"

import { IChannel } from "../helper/db"

export const ChannelList: React.FC<{ channels: IChannel[] }> = ({
  channels,
}) => {
  return (
    <Box p={5} textAlign="center">
      <Heading mb={5}>TV Channels</Heading>
      <Wrap minH="80vh" flexWrap="wrap" justify="center" alignItems="center">
        {channels.length ? (
          channels.map(({ name, image }) => (
            <WrapItem
              m={2}
              w="100px"
              borderWidth="1px"
              borderRadius="10px"
              borderColor="teal.800"
              _hover={{
                transform: "scale(1.1)",
              }}
            >
              <Tooltip label={name.toUpperCase()}>
                <Flex justify="center" w="100%" h="100%" direction="column">
                  <Box>
                    <Img w="100%" src={image} />
                  </Box>
                </Flex>
              </Tooltip>
            </WrapItem>
          ))
        ) : (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
      </Wrap>
    </Box>
  )
}
