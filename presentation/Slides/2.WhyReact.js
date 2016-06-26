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
        So Why React?
    </Heading>
    <List>
        <Appear><ListItem>This Presentation is in React!</ListItem></Appear>
        <Appear><ListItem>React has a huge community and is used in production by some big names</ListItem></Appear>
        <Appear><ListItem>Easy to learn and pickup</ListItem></Appear>
        <Appear><ListItem>React is all about components and reusability</ListItem></Appear>
        <Appear><ListItem>Easy to unit test</ListItem></Appear>
        <Appear><ListItem>React Native!!!</ListItem></Appear>
    </List>
</Slide>;
