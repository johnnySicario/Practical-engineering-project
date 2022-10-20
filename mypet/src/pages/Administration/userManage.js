import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getDeleteUserAction, getUpdateUserAction } from './../../redux/actions/getUsersActions';

const UserManageComp = ({data , index}) => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [admin, setAdmin] = useState(null)

    const updateUser = () => {
        let dataUpdate = { username : username !== "" ? username : data.username , email : email !== "" ? email : data.email , admin : admin !== null ? admin : data.admin }
        dispatch(getUpdateUserAction({id : data._id} , dataUpdate))
    }

  return (
    <>
        <td>{index}</td>
        <td><input type="text" defaultValue={data.username} onChange={e => setUsername(e.target.value)}/></td>
        <td><input type="text" defaultValue={data.email} onChange={e => setEmail(e.target.value)}/></td>
        <td>
            <input type="checkbox" defaultChecked={data.admin ? true : false} onChange={(e) => setAdmin(e.target.checked)}/>
        </td>
        <td> <input type="button" defaultValue="delete" onClick={() => dispatch(getDeleteUserAction(data._id))} /> </td>
        <td> <input type="button" defaultValue="update" onClick={updateUser}/> </td>
    </>
  )
}

export default UserManageComp