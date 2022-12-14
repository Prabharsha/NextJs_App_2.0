import React from 'react'

const User = ({user}) => {

  return (
  <tr key={user.id}>
    <td key={user.userNIC} className="text-left px-7 first-letter:uppercase py-4 whitespace-nowrap ">
        <div key={user.userNIC} className="font-bold text-sm text-gray-800"> {user.userNIC}</div>
    </td>

    <td key={user.userName} className="text-left px-7 first-letter:uppercase py-4 whitespace-nowrap ">
        <div key={user.userName} className="font-bold text-sm text-gray-800"> {user.userName}</div>
    </td>

    <td key={user.contactNo} className="text-left px-7 first-letter:uppercase py-4 whitespace-nowrap ">
        <div key={user.contactNo} className="font-bold text-sm text-gray-800"> {user.contactNo}</div>
    </td>

    <td key={user.id} className="text-right px-7 first-letter:uppercase whitespace-nowrap py-6">
        <a href="#" className="font-bold text-sm text-indigo-400 hover:text-indigo-600 hover:cursor-pointer px-5">Edit</a>

        <a href="#" className="font-bold text-sm text-red-400 hover:text-red-600 hover:cursor-pointer">Delete</a>
   
    </td>
</tr>
  )
}

export default User