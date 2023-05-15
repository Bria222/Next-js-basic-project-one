async function fetchRepos() {
  const response = await fetch(`https://api.github.com/users/Bria222/repos`)
  const repos = await response.json()
  return repos
}
const ReposPage = async () => {
  const repos = await fetchRepos()

  return (
    <>
      <h1>{repos[0].name}</h1>
    </>
  )
}

export default ReposPage
