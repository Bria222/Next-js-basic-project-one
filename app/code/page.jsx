import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'
async function fetchRepos() {
  const response = await fetch(`https://api.github.com/users/Bria222/repos`)
  const repos = await response.json()
  return repos
}
const ReposPage = async () => {
  const repos = await fetchRepos()

  return (
    <>
      <h2>Repositories</h2>
      <ul class='list-group'>
        {repos.map((repo) => {
          return (
            <li class='list-group-item' key={repo.id}>
              {repo.name}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ReposPage
