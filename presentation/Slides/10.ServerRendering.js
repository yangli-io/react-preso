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

export default <Slide transition={["spin", "zoom"]} bgColor="primary">
  <Heading caps fit size={1} textColor="white">
    Server Rendering
  </Heading>
  <Markdown>
    {`
You can render ReactJS Code on the server with Node
* Crawlable
* Faster Initial Load
* Useful for Templating (Replaces EJS/pug-jade)
* Server/Client shares 80-90% of code
              `}
  </Markdown>
</Slide>;
