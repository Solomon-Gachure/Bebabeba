import React from 'react'
import { Outlet } from 'react-router-dom'

const RootsLayout = () => {
  return (
    <div>
        hey
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootsLayout