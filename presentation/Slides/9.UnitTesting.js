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
import CodeSlide from 'spectacle-code-slide';

export default [<Slide transition={["slide"]} notes="You can even put notes on your slide. How awesome is that?">
  <Heading size={2} caps fit textColor="black" textFont="primary">
    React Unit Testing
  </Heading>
  <List>
    <Appear><ListItem>Components are easy to unit test</ListItem></Appear>
    <Appear><ListItem>React can integrate with JSDOM, no more PhantomJS!</ListItem></Appear>
    <Appear><ListItem>Mocha, Chai, JSDOM examples</ListItem></Appear>
  </List>
</Slide>, <CodeSlide
  className="yolo"
  transition={[]}
  maxWidth="80%"
  lang="jsx"
  code={require("raw!../../assets/code/UnitTest.txt")}
  ranges={[
{ loc: [8, 11], title: "Render the component" },
{ loc: [12, 16], title: "Make sure prop works" },
{ loc: [17, 22], title: "Renders the Thumb" },
{ loc: [23, 34] },
{ loc: [35, 45] }
]}/>];
