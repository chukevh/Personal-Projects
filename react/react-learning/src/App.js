import Header from "./components/Header.js"
import MainContent from "./components/MainContent.js"
import Card from "./components/Card.js"
import BestSellers from "./components/BestSellers.js"
import shirtData from "./data/shirtData.js"


export default function App() {
  const cardElements = shirtData.map((shirt) => {
    return (
    <Card
      key={shirt.id}
      img={shirt.img} 
      brand={shirt.brand} 
      name={shirt.name} 
      price={shirt.price} 
      rating={shirt.rating} 
      reviewcount={shirt.reviewcount}
    />
    )
  }) 
  return (
    <div>
      <Header />
      <MainContent />
      <BestSellers />
      <section className="cards-list">
        {cardElements}
      </section>
    </div>
  )
}


