import List from "../components/list"
import Card from "../components/card"

const cardList = [
  {
    text: 'implement login'
  }
]
export default function Board() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">
        Develpment
      </h1>
      <main className="flex justify-between gap-4">
      <List name="TODO">
        {
          cardList.map((item, index) => (
            <Card {...item} key={index} />
          ))
        }
      </List>
      <List name="TODO">
        {
          cardList.map((item, index) => (
            <Card {...item} key={index} />
          ))
        }
      </List>
      <List name="TODO">
        {
          cardList.map((item, index) => (
            <Card {...item} key={index} />
          ))
        }
      </List>
      </main>
    </div>
  )
}
