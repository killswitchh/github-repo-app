import { Owner } from '../../models/github-repositories.dto'

function UserInfo(props: { owner: Owner | null }) {
    const owner = props?.owner
    if (!owner) {
        return <> </>
    }
    const ownerInfo = (
        <>
            <div className="row">
                <div className="col">ID : </div>
                <div className="col">{owner.id}</div>
            </div>

            <div className="row">
                <div className="col">Avatar : </div>
                <div className="col">{owner.avatar_url}</div>
            </div>

            <div className="row">
                <div className="col">Name : </div>
                <div className="col">{owner.login}</div>
            </div>
        </>
    )
    if (ownerInfo) {
        return ownerInfo
    }
    return <> </>
}
export default UserInfo
