import './App.css'
import image from './assets/post.jpg'

function App() {

  return (
    <>
      <section>
        <header className='title'>
          <h1>Il mio blog</h1>
        </header>
      </section>
      <section className='container'>
        <div className='card'>
          <img className='img' src={image}></img>
          <h2>titlo del post</h2>
          <p>sed autem hic esse quod iste non dolore labore voluptate tempora. Excepturi dolorum quaerat amet facere. Laudantium, impedit reiciendis. Molestias, fugit!</p>
        </div>
      </section>

    </>
  )
}

export default App
