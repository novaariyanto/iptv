import { useRef } from "react"

import { CopyIcon } from "@chakra-ui/icons"
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Tooltip,
  useToast,
} from "@chakra-ui/react"

export const Hero: React.FC = () => {
  const urlRef = useRef<HTMLInputElement>()
  const toast = useToast()
  const url = "https://iptv.mwafa.net/api/playlist.m3u"

  function clickHandle() {
    const copyText = urlRef.current
    copyText.select()
    copyText.setSelectionRange(0, 99999)

    if (document) document.execCommand("copy")

    toast({
      position: "top",
      render: () => (
        <Box color="white" p={5} bg="green.500">
          Copied the playlist url.
        </Box>
      ),
      duration: 1000,
    })
  }

  return (
    <Flex
      color="gray.100"
      minHeight="30vh"
      direction="column"
      alignItems="center"
      justify="center"
      bgGradient="linear(to-b, teal.800,teal.600)"
      p={5}
      borderBottomWidth="10px"
      borderBottomColor="blue.600"
      boxShadow="0px 0px 5px black"
    >
      <Heading mb={5}>IPTV INDONESIA</Heading>
      <Box mx={3}>
        <InputGroup minW="30vw">
          <Input readOnly ref={urlRef} value={url} />
          <InputRightElement>
            <Tooltip label="Click to copy playlist url">
              <CopyIcon onClick={() => clickHandle()} />
            </Tooltip>
          </InputRightElement>
        </InputGroup>
      </Box>
    </Flex>
  )
}
