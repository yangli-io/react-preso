import React from 'react';

import CodeSlide from 'spectacle-code-slide';
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

export default [<Slide transition={["zoom", "fade"]} bgColor="primary">
  <CodePane
    lang="jsx"
    source={require("raw!../../assets/code/LikeButton1.txt")}
    margin="20px auto"
  />
</Slide>, <CodeSlide
  transition={[]}
  lang="jsx"
  code={require("raw!../../assets/code/LikeButton1.txt")}
  ranges={[
{ loc: [0, 1], title: "import react" },
{ loc: [2, 3], title: "Create Class" },
{ loc: [3, 6], title: "propTypes" },
{ loc: [7, 10], title: "default props" },
{ loc: [11, 20] }
]}/>]