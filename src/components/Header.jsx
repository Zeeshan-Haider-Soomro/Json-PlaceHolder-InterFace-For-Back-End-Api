import React from 'react'

const Header = () => {
  return (
    <div>
        <h1 className='text-center underline bg-[#3B83F6] text-white p-3'>check my new project <span className='font-bold'>MistCSS</span>write react components with 50% less code</h1>
        <div className='flex justify-around mt-5'>
            <h1 className='font-bold'>JSONPlaceholder</h1>
            <ul className='flex gap-5'>
                <li>Guide</li>
                <li>
                Sponsor this project</li>
                <li>
                Blog</li>
                <li>
                My JSON Server</li>
            </ul>
        </div>
    </div>
  )
}

export default Header