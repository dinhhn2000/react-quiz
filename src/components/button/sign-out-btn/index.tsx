import React from 'react'

export default function LogOutButton() {
  const signOut = () => {
    localStorage.removeItem('user')
  }

  return (
    <button onClick={signOut}>
      <i className="fas fa-sign-out-alt"></i>
    </button>
  )
}
