import React from "react";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Image,
  Slide,
  Text,
  Code,
  CodePane
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#00BDEB",
    tertiary: "#eb7f00",
    text: "#012832",
    light: "#aaa"
  },
  {
    primary: "Muli"
  }
);

const code = {
  manifestStructure: require("!!raw-loader!../assets/codesnippets/marsagram/manifestStructure.js"),
  state: require("!!raw-loader!../assets/codesnippets/marsagram/state.js"),
  multiplyByTwoAndAddThree: require("!!raw-loader!../assets/codesnippets/hoc/multiplyByTwoAndAddThree.js"),
  cameras: require("!!raw-loader!../assets/codesnippets/hoc/cameras.js"),
  withCamerasLoading: require("!!raw-loader!../assets/codesnippets/hoc/withCamerasLoading.js"),
  withFetchingStart: require("!!raw-loader!../assets/codesnippets/hoc/withFetchingStart.js"),
  withFetchingEnd: require("!!raw-loader!../assets/codesnippets/hoc/withFetchingEnd.js"),
  appWithFetching: require("!!raw-loader!../assets/codesnippets/hoc/appWithFetching.js"),
  simpleImages: require("!!raw-loader!../assets/codesnippets/hoc/simpleImages.js"),
  installRedux: require("!!raw-loader!../assets/codesnippets/redux/installRedux.js"),
  createStore: require("!!raw-loader!../assets/codesnippets/redux/createStore.js")
};

const images = {
  techknowDay: require("../assets/images/techknowday.jpg"),
  trainers: require("../assets/images/trainers/trainers.jpg"),
  youareawesome: require("../assets/images/youareawesome.gif"),
  marsagram: require("../assets/images/marsagram/marsagram.jpg"),
  withoutFetch: require("../assets/images/hoc/withoutFetch.jpg"),
  withFetch: require("../assets/images/hoc/withFetch.jpg"),
  redux: require("../assets/images/redux/redux.jpg")
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        {/* Waiting / Starting slide */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={1.1} textColor="secondary">
            Higher Order Components and Redux
          </Heading>

          <Image width="100%" src={images.techknowDay} />
        </Slide>

        {/* Meet your trainers */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={1.5} textColor="secondary">
            Trainers
          </Heading>
          <Image width="100%" src={images.trainers} />
        </Slide>

        {/* What we will do today */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={1.5} textColor="secondary">
            What we will do today:
          </Heading>
          <List>
            <ListItem textColor="text" bold>
              Marsagram introduction
            </ListItem>
            <ListItem textColor="text" bold>
              Higher Order Components
            </ListItem>
            <ListItem textColor="text" bold>
              Marsagram and HOCs
            </ListItem>
            <ListItem textColor="text" bold>
              How Redux works
            </ListItem>
            <ListItem textColor="text" bold>
              Reduxify Marsagram
            </ListItem>
          </List>
        </Slide>

        {/* Marsagram image */}
        <Slide transition={["fade"]} bgColor="primary">
          <Image width="100%" src={images.marsagram} />
        </Slide>

        {/* Manifest data */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.manifestStructure}
          ranges={[
            { loc: [0, 12], title: "Manifest data" },
            { loc: [0, 12], title: "Manifest data" }
          ]}
        />

        {/* Manifest data */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.state}
          ranges={[
            { loc: [0, 11], title: "State" },
            { loc: [0, 11], title: "State" }
          ]}
        />

        {/* Function with Flavour */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.multiplyByTwoAndAddThree}
          ranges={[
            { loc: [0, 4], title: "multiplyByTwo() function" },
            { loc: [2, 10], title: "addThree() function" },
            { loc: [5, 14], title: "Higher Order Component" }
          ]}
        />

        {/* How to use it in the React world */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={1.5} textColor="secondary">
            How to use it in the React world?
          </Heading>
          <List>
            <ListItem textColor="text" bold>
              1. Create a component
            </ListItem>
            <ListItem textColor="text" bold>
              2. Create a HOC
            </ListItem>
            <ListItem textColor="text" bold>
              3. Get a composed component 🎩
            </ListItem>
          </List>
        </Slide>

        {/* Base Camera.js */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.cameras}
          ranges={[
            { loc: [0, 12], title: "Cameras.js with edge cases" },
            { loc: [0, 12], title: "Cameras.js with edge cases" }
          ]}
        />

        {/* withCamerasLoading */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.withCamerasLoading}
          ranges={[
            { loc: [0, 13], title: "CamerasWithLoadingOrEmpty" },
            { loc: [14, 22], title: "data => Cameras.js" }
          ]}
        />

        {/* Current Fetching in Images.js */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={1.1} textColor="secondary">
            How Images fetch data
          </Heading>
          <Image width="100%" src={images.withoutFetch} />
        </Slide>

        {/* Where we want to go with Images.js */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={1.1} textColor="secondary">
            HOCs responsible for fetching
          </Heading>
          <Image width="100%" src={images.withFetch} />
        </Slide>

        {/* withFetching sketch */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.withFetchingStart}
          ranges={[{ loc: [0, 15], title: "" }, { loc: [0, 15], title: "" }]}
        />

        {/* withFetching implementation */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.withFetchingEnd}
          ranges={[
            { loc: [0, 10], title: "State" },
            { loc: [10, 24], title: "Fetching data" },
            { loc: [25, 41], title: "" }
          ]}
        />

        {/* withFetching App.js */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.appWithFetching}
          ranges={[{ loc: [0, 14], title: "" }, { loc: [0, 14], title: "" }]}
        />

        {/* simplified Images.js */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.simpleImages}
          ranges={[
            { loc: [0, 15], title: "Simplify Images.js" },
            { loc: [0, 15], title: "Simplify Images.js" }
          ]}
        />

        {/* Redux */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={1.5} textColor="secondary">
            What is Redux
          </Heading>
          <List>
            <ListItem textColor="text" bold>
              1. State container for JavaScript app
            </ListItem>
            <ListItem textColor="text" bold>
              2. Consistent applications
            </ListItem>
            <ListItem textColor="text" bold>
              3. Easy to test
            </ListItem>
            <ListItem textColor="text" bold>
              3. Great web developers tools
            </ListItem>
          </List>
        </Slide>

        {/* State vs Redux */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={1.1} textColor="secondary">
            State vs Redux
          </Heading>
          <Image width="100%" src={images.redux} />
        </Slide>

        {/* installRedux */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.installRedux}
          ranges={[
            { loc: [0, 4], title: "Install Redux" },
            { loc: [0, 4], title: "Install Redux" }
          ]}
        />

        {/* appReducer */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.createStore}
          ranges={[
            { loc: [0, 7], title: "Create action" },
            { loc: [8, 28], title: "" },
            { loc: [29, 42], title: "Provider" },
            { loc: [43, 57], title: "App.js" },
            { loc: [58, 78], title: "App.js" },
            { loc: [79, 87], title: "" }
          ]}
        />

        {/* Redux */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={1.5} textColor="secondary">
            Move the state to Redux store
          </Heading>
          <List>
            <ListItem textColor="text" bold>
              1. Move state to initialState
            </ListItem>
            <ListItem textColor="text" bold>
              2. Define action types
            </ListItem>
            <ListItem textColor="text" bold>
              3. Reducer state functions
            </ListItem>
            <ListItem textColor="text" bold>
              4. Map state and dispatch in App.js
            </ListItem>
            <ListItem textColor="text" bold>
              3. Change App.js
            </ListItem>
          </List>
        </Slide>

        {/* Thank you! */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary" fontWeight="bold">
            Thank You! You are ✨✨✨ awesome ✨✨✨
          </Heading>
          <Image width="40%" src={images.youareawesome} />
        </Slide>
      </Deck>
    );
  }
}
