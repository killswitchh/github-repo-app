import { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
    setUserInfo,
    setUserRepositories,
    Store,
} from '../../features/user/userSlice'
import { GithubError } from '../../models/github-error'
import githubService from '../../services/api/github.service'
import { CONSTANTS } from '../../util/constants'
import Repositories from './Repositories'
import UserInfo from './UserInfo'

function GithubUserDetails() {
    const searchString = useSelector((state: Store) => state.user.searchString)
    const userInfo = useSelector((state: Store) => state.user.userInfo)
    const userRepositories = useSelector(
        (state: Store) => state.user.userRepositories,
    )
    const [errorMessage, setErrorMessage] = useState<string>(
        CONSTANTS.EMPTY_STRING,
    )
    const dispatch = useDispatch()

    useEffect(() => {
        if (searchString && searchString.length != 0) {
            console.log('Fetching data for ' + searchString)
            githubService
                .getUserRepos(searchString)
                .then(res => {
                    dispatch(setUserInfo(res[0].owner))
                    dispatch(setUserRepositories(res))
                })
                .catch((e: GithubError) => {
                    setErrorMessage(e.message)
                })
        }
    }, [searchString, errorMessage])

    return (
        <>
            {errorMessage && errorMessage.length > 0 && (
                <Alert key={'danger'} variant={'danger'}>
                    {errorMessage}
                </Alert>
            )}
            <UserInfo owner={userInfo}></UserInfo>
            <Repositories repositories={userRepositories}></Repositories>
        </>
    )
}

export default GithubUserDetails
