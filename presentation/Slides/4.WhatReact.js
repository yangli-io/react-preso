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

export default <Slide transition={["slide"]} notes="You can even put notes on your slide. How awesome is that?">
  <Heading size={2} caps fit textColor="black" textFont="primary">
    What is react?
  </Heading>
  <List>
    <Appear><ListItem>A Presentation Library</ListItem></Appear>
    <Appear><ListItem>Components, Components and Components</ListItem></Appear>
    <Appear><ListItem>Easily Unit Testable</ListItem></Appear>
    <Appear><ListItem>UI Performance Focused</ListItem></Appear>
    <Appear><ListItem>JSX!!</ListItem></Appear>
  </List>

  <Appear><Heading size={2} caps fit textColor="black" textFont="primary">
    What react isn't?
  </Heading></Appear>
  <List>
    <Appear><ListItem>React is not a complete framework</ListItem></Appear>
    <Appear><ListItem>You need to use it with redux or flux</ListItem></Appear>
  </List>
</Slide>;
