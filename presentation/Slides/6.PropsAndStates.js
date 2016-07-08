// Import React
import React from "react";

// Import Spectacle Core tags
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

export default <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
  <List>
    <ListItem>Props And States</ListItem>
    <Appear><ListItem>Both are data that drives the behaviour of the Component</ListItem></Appear>
    <Appear><ListItem>Props are from external values</ListItem></Appear>
    <Appear><ListItem>Props allow you to drive behaviour from a parent component</ListItem></Appear>
    <Appear><ListItem>State is internal</ListItem></Appear>
    <Appear><ListItem>State allows you to drive behaviour within the component</ListItem></Appear>
  </List>
</Slide>;