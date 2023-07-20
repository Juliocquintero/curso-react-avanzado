import { GlobalStyle } from './components/styles/GlogalStyles';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { Logo } from "./components/Logo";
function App() {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  );
}

export default App;
