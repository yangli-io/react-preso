import React from "react";
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

export default <Slide transition={["zoom"]} bgColor="primary">
  <Heading size={2} fit caps lineHeight={1} textColor="black">
    Intro to React
  </Heading>
  <Heading size={1} fit caps>
    A ReactJS Presentation With ES 6/ES Next
  </Heading>
  <Heading size={4} caps textColor="black">Yang Li</Heading>
  <Link href="https://github.com/FormidableLabs/spectacle">
    <Text bold caps textColor="tertiary">View on Github</Text>
  </Link>
</Slide>;