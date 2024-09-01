import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'

export const loader = async () => {
  return json({
    data: [
      {
        slug: 'my-first-blog',
        title: 'My First Blog',
      },
      {
        slug: 'my-second-blog',
        title: 'My Second Blog',
      },
    ],
  })
}

export default function Posts() {
  const { data } = useLoaderData<typeof loader>()

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
