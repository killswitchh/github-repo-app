import { Owner } from '../../models/github-repositories.dto'

function UserInfo(props: { owner: Owner | null }) {
    const owner = props?.owner
    if (!owner) {
        return <> </>
    }
    const ownerInfo = (
        <div className='p-2'>
            <div className="card profile-card-width">
                <img className="card-img-top" src={owner.avatar_url} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{owner.login}</h5>
                    <p className="card-text">
                        {owner.type}
                    </p>
                </div>
            </div>
        </div>
    )
    if (ownerInfo) {
        return ownerInfo
    }
    return <> </>
}
export default UserInfo
