import { GithubRepository } from '../../models/github-repositories.dto'

function Repositories(props: { repositories: GithubRepository[] | null }) {
    const repostiories = props?.repositories
    const repositoryList = repostiories?.map(
        (item: GithubRepository, index) => {
            return (
                <div key={index} className="p-2">
                    <div className="card card-width p-2">
                        <div className="card-body" style={{height: 200}}>
                            <h5 className="card-title">{item.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                {item.description}
                            </h6>
                            <a href={item.html_url} className="card-link">
                                Git URL
                            </a>
                            <a href={item.url} className="card-link">
                                URL
                            </a>
                        </div>
                    </div>
                </div>
            )
        },
    )

    if (repositoryList) {
        return (
            <>
                <h2> Repository List </h2>
                <div className="d-flex justify-content-start flex-wrap align-items-start" style={{height: '300px'}}>
                    {repositoryList}
                </div>
            </>
        )
    }
    return <></>
}
export default Repositories
