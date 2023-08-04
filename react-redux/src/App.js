import React from "react";
import CakeContainer from './components/cakeContainer'
import store from "./redux/store";
import { Provider } from "react-redux";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/iceCreamContainer";
import CandyContainer from "./components/candyContainer";
import NewCakeContainer from "./components/newCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";
function App() {
  return (
    <Provider store={store}>
          <div className="App">
            <UserContainer/>
            {/*<UserContainer/>
            <ItemContainer/>
            <ItemContainer cake/>
            <HooksCakeContainer/>
            <CandyContainer/>
            <IceCreamContainer/>
  <CakeContainer/>*/}
  <NewCakeContainer/>
         </div>
         </Provider>
  );
}

export default App;
