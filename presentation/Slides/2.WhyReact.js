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

export default <Slide transition={["slide"]}
                      notes={`This Presentation is in React!
                      React has a huge community and is used in production by some big names.
                      What is React
                      Easy to learn and pickup
                      React is all about components and reusability
                      Easy to unit test
                      Server Rendering!`} >
    <Heading size={2} caps fit textColor="black" textFont="primary">
        So Why React?
    </Heading>
    <List>
        <Appear><ListItem>This Presentation is in React!</ListItem></Appear>
        <Appear><ListItem>React has a huge community and is used in production by some big names</ListItem></Appear>
        <Appear><ListItem>What is React</ListItem></Appear>
        <Appear><ListItem>Easy to learn and pickup</ListItem></Appear>
        <Appear><ListItem>React is all about components and reusability</ListItem></Appear>
        <Appear><ListItem>Easy to unit test</ListItem></Appear>
        <Appear><ListItem>Server Rendering!</ListItem></Appear>
    </List>
</Slide>;
