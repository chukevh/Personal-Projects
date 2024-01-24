import Header from "./components/Header.js"
import MainContent from "./components/MainContent.js"
import BestSellers from "./components/BestSellers.js"
import State from "./components/State.js"
import AddItems from "./components/AddItem.js"


export default function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <BestSellers />
      <AddItems />
    </div>
  )
}


