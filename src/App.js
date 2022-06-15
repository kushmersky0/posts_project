import './App.css';
import { useStore } from "./store"
import { Provider } from 'react-redux';
import { Posts } from "./comp/posts"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BasicTable from "./comp/table"
import { AddPost } from "./comp/addPost"



function App() {
  return <>



    <Provider store={useStore}>
      <BrowserRouter>
        <Switch>
          <Route path="/To_see_your_posts/:id" component={Posts} exact></Route>
          <Route path="/Add_Post/:id" component={AddPost} exact></Route>
          <BasicTable></BasicTable>
        </Switch>
      </BrowserRouter>

    </Provider>
  </>

}

export default App;
