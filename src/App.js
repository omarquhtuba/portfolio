import Intro from './components/intro/Intro';
import Main from './components/main/Main'
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact'
import Toggle from './components/toggle/Toggle'
import { useContext } from 'react';
import { ThemeContext } from './context'

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div style={{backgroundColor: darkMode ? 'black' : "white",
    color: darkMode && "white"
    }}>
      <Toggle/>
      <Intro/>
      <Main/>
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
