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

const images = {
    netflix: require("../../assets/netflix.png"),
    yahoo: require("../../assets/yahoo.png"),
    facebook: require("../../assets/facebook.jpg"),
    airbnb: require("../../assets/airbnb.jpg"),
    uber: require("../../assets/uber.jpg"),
    reddit: require("../../assets/reddit.jpg")
};

export default <Slide transition={["slide"]} notes="You can even put notes on your slide. How awesome is that?">
    <Heading size={5} caps fit textColor="black" textFont="primary">
        Community
    </Heading>
    <Layout>
        <Fill>
            <Image width="100%" height="100px" src={images.netflix}/>
        </Fill>
        <Fill>
            <Image width="100%" height="100px" src={images.yahoo}/>
        </Fill>
        <Fill>
            <Image width="100%" height="100px" src={images.facebook}/>
        </Fill>
    </Layout>
    <Layout>
        <Fill>
            <Image width="100%" height="100px" src={images.airbnb}/>
        </Fill>
        <Fill>
            <Image width="100%" height="100px" src={images.uber}/>
        </Fill>
        <Fill>
            <Image width="100%" height="100px" src={images.reddit}/>
        </Fill>
    </Layout>
</Slide>;
