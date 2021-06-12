import React from 'react'

function UserList(props) {

    const tab = props.user_list

    return (
        <table style={{border:"1px solid", width:"20%"}}>
            <thead>
                <tr>
                <th style={{background:"DimGrey"}} colspan="2">User List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{border:"1px solid", background:"DarkGrey"}}>ID</td>
                    <td style={{border:"1px solid", background:"DarkGrey"}}>User name</td>
                </tr>

                {tab.map(el => <tr><td style={{background:"GainsBoro"}}>{el.id}</td><td style={{background:"GainsBoro"}}>{el.name}</td></tr>)}

            </tbody>
        </table>
    )
}

export default UserList
