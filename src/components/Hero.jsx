import React from 'react'

const Hero = () => {
  return (
    <>
        <div className='xl:m-[180px] leading-10'>
        <h1 className='text-5xl pb-5'> JSON Placeholder</h1>
        <h1 className='text-2xl pb-5'>Free fake and reliable API for testing and prototyping.</h1>
        <h1 className='text-2xl pb-5'>Powered by JSON Server + LowDB.</h1>
        <h1 className='text-2xl pb-5'>Serving ~3 billion requests each month.</h1>
        </div>
        <div className='xl:m-[180px] leading-10'>
            <h1 className='text-4xl font-semibold pb-5'>Sponsors</h1>
            <h1 className=''>JSONPlaceholder is supported by the following companies and Sponsors on GitHub, check them out 💖</h1>
            <img className='h-[200px] w-[550px]' src="/images/mockend.svg" alt="" />
            <img className='h-[150px] w-[550px]' src="/images/zuplo.png" alt="" />
            <p className='underline'>Your company logo here</p>
        </div>
        <div className='xl:m-[180px] leading-10'>
            <h1>Try it</h1>
            <p>Run this code here, in a console or from any site:</p>
            <img className='xl:h-[150px] xl:w-[850px] rounded-xl my-5' src="/images/code.png" alt="" />
            <button className='bg-black text-white rounded-sm px-3 font-bold'>Run Script</button>
            <img className='xl:h-[150px] xl:w-[850px] rounded-xl my-5' src="/images/image.png" alt="" />
            <p>Congrats! You've made your first call to JSONPlaceholder. 😃 🎉</p>
            <img className='xl:h-[150px] xl:w-[450px] rounded-xl my-5' src="/images/coding.png" alt="" />
        </div>
        <div className='xl:m-[180px] leading-10 '>
            <h1 className='text-4xl py-5'>When to use</h1>
            <p>JSONPlaceholder is a free online REST API that you can use <span className='font-bold'>whenever you need some fake data</span>. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.</p>
        </div>
        <div className='xl:m-[180px] leading-10'>
            <h1 className='text-4xl py-5'>Resources</h1>
            <p>JSONPlaceholder comes with a set of 6 common resources:</p>
            <div className='flex gap-10'>
                <div className='flex flex-col underline p-5'>
                    <a target='blank' href='https://building-ap-is-from-back-end-express-js-node-js.vercel.app/posts'>/posts</a>
                    <a target='blank' href='https://building-ap-is-from-back-end-express-js-node-js.vercel.app/comments'>/comments</a>
                    <a target='blank' href='https://building-ap-is-from-back-end-express-js-node-js.vercel.app/albums'>/albums</a>
                    <a target='blank' href='https://building-ap-is-from-back-end-express-js-node-js.vercel.app/photos'>/photos</a>
                    <a target='blank' href='https://building-ap-is-from-back-end-express-js-node-js.vercel.app/todos'>/todos</a>
                    <a target='blank' href='https://building-ap-is-from-back-end-express-js-node-js.vercel.app/users'>/users</a>
                </div>
                <div className='p-5'>
                    <p>100 posts</p>
                    <p>500 comments</p>
                    <p>100 albums</p>
                    <p>5000 photos</p>
                    <p>200 todos</p>
                    <p>10 users</p>
                </div>
            </div>
            <p><span className='font-bold md:mb-5'>Note</span>: resources have relations. For example: posts have many comments, albums have many photos, ... see guide for the full list.</p>
        </div>
    </>
  )
}

export default Hero