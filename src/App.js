import { Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';

import HomePageView from './views/HomePageView';
import MoviesPageView from './views/MoviesPageView';
import NotFoundView from './views/NotFoundView';
import MovieDetailsPageView from './views/MovieDetailsPageView';

function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomePageView />
        </Route>

        <Route path="/movies" exact>
          <MoviesPageView />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPageView />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}
export default App;
