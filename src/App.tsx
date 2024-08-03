import './App.css';
import { Amount } from './components/amount';
import { Galery } from './components/galery';
import { Navbar } from './components/navbar';
import { Search } from './components/search';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Container } from './components/container';
import { Footer } from './components/footer';

function App() {
  return (
    <Provider store={store}>
      <div className='min-h-[100vh] relative'>
        <Navbar />
        <Container>
          <Search />
          <Amount />
          <Galery />
        </Container>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;

// <div className='min-h-[100vh] relative'>