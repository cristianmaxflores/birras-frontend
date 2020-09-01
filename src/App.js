import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Segment, Container} from "semantic-ui-react";

import MeetingsApp from "./meetingsApp/main";

//ctrl + shift + u + 3c = <
//ctrl + shift + u + 3e = >
function App() {
  return (
    <div className="App">
      <Container>
        <Segment>
          <MeetingsApp />
        </Segment>
      </Container>
    </div>
  );
}

export default App;
