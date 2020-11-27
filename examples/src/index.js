import React from 'react';
import { render} from 'react-dom';
import MyComponent1 from '../../src';
const App = () => (
 <MyComponent1 />
);
render(<App />, document.getElementById("root"));