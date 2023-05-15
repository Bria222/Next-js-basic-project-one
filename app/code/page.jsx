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
              <Link href={`/code/repos/${repo.name}`} className='nav-link'>
                {' '}
                <h5>{repo.name}</h5>
                <p>{repo.description}</p>
                <div className='repo-details'>
                  <span>
                    <FaStar /> {repo.stargazers_count}
                  </span>
                  <span>
                    <FaCodeBranch />
                    {repo.forks_count}
                  </span>
                  <span>
                    <FaEye />
                    {repo.watchers_count}
                  </span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ReposPage
