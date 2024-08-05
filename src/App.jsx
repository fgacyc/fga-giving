import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header.jsx";
import Section1 from "./components/section1.jsx";
import Section2 from "./components/section2.jsx";
import Footer from "./components/footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <Header/>
          <div className={"h-[144px] flex justify-center items-center text-3xl font-bold text-[#676767]"}>
              Give
          </div>
          <Section1/>
          <Section2/>
          <Footer/>
      </>
  )
}

export default App
