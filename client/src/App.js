import { Switch, Route } from "react-router-dom";
import './App.css';
import Homepage from "./Screens/Homepage/Homepage";
import AddPost from "./Screens/AddPost/AddPost";
import PostDetails from "./Screens/PostDetails/PostDetails";
import PostEdit from "./Screens/PostEdit/PostEdit";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/add-post" component={AddPost}></Route>
        <Route path="/post-details/:id" component={PostDetails}></Route>
        <Route path="/post-edit/:id" component={PostEdit}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
