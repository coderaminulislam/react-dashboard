
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MasterLayout from './Layout/MasterLayout'
import Content from './components/Content'
import Dashboard from './pages/Dashboard'
import CreditCards from './pages/CreditCards'




function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<MasterLayout/>}>

      <Route index path='/dashboard' element={<Dashboard/>}/>
      <Route path='/creditcards' element={<CreditCards/>}/>
      </Route>
      

     </Routes>
    </BrowserRouter>

     
    </>
  )
}

export default App
