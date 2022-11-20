import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchString, Store } from '../../features/user/userSlice'

function UserSearch() {
    const searchString = useSelector((state: Store) => state.user.searchString)
    const dispatch = useDispatch()
    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault()
        dispatch(setSearchString(userName))
    }
    const [userName, setUserName] = useState<string | null>(null)

    return (
        <section>
            <form>
                <label>
                    Github Username:
                    <input
                        type="text"
                        name="name"
                        onChange={(e: React.BaseSyntheticEvent) =>
                            setUserName(e.target.value)
                        }
                    />
                </label>
                <input
                    type="button"
                    value="Find"
                    onClick={event => handleSubmit(event)}
                />
            </form>
        </section>
    )
}

export default UserSearch
