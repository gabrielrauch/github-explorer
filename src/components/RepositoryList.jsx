import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'github-explorer',
  description: 'test',
  link: 'https://github.com/gabrielrauch/github-explorer'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Repository List</h1>
      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}
