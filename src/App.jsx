import { Home, Public } from './page/Public';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import path from './ulities/path';
import { ProductAndroidList, ProductPhuKienList, ProductIPhoneList, ProductMay99List, ProductNonPhoneList, ProductSamsungList } from './components/pages';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.ANDROID} element={<ProductAndroidList />} />
          <Route path={path.ACCESSORIES} element={<ProductPhuKienList />}/>
          <Route path={path.IPHONE} element={<ProductIPhoneList />}/>
          <Route path={path.MAY99} element={<ProductMay99List />}/>
          <Route path={path.NONPHONE} element={<ProductNonPhoneList />}/>
          <Route path={path.SAMSUNG} element={<ProductSamsungList />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
