const fechtPost = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}

export default function post ({ params }) {
  const posts = fechtPost()

  return (
    <section>
      {posts.map(element => (
        <article key={element.id}>
          <h2>{element.title}</h2>
          <p>{element.body}</p>
        </article>
      ))}
    </section>
  )
}
