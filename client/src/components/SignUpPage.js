import { useState } from 'react'

const SignUpPage = () => {
    const [signInState, setPage] = useState("signup")

    return (
    <div className='bg-blue-100 h-[100%] w-[100%] absolute flex justify-center'>
        <div className='flex flex-col space-y-4 p-10 bg-gradient-to-tr h-max from-cyan-500 to-blue-600 mt-64 rounded-md text-[30px]'>
            {
                (signInState === "signup")
                ? 
                <>                
                    <h1 className='text-center text-white'>Sign Up</h1>
                    <form className='space-y-4'>
                        <input className='p-2 rounded-md block' placeholder="Email" />
                        <input className='p-2 rounded-md block' placeholder="Full name" />
                        <input className='p-2 rounded-md block' placeholder="Password" />
                        <button className='bg-cyan-300 ml-[30%] p-2 rounded-md' type='submit'>Sign Up</button>
                    </form>
                    <a onClick={(e) => {signInState === "signup" ? setPage("signin") : setPage("signup")}} className='text-[18px] underline text-center text-blue-100 cursor-pointer'>Already have an account?</a>
                </>

                :
                <>
                    <h1 className='text-center text-white'>Sign In</h1>
                    <form className='space-y-4'>
                        <input className='p-2 rounded-md block' placeholder="Email" />
                        <input className='p-2 rounded-md block' placeholder="Password" />
                        <button className='bg-cyan-300 ml-[30%] p-2 rounded-md' type='submit'>Sign In</button>
                    </form>
                    <a onClick={(e) => {signInState === "signup" ? setPage("signin") : setPage("signup")}} className='text-[18px] underline text-center text-blue-100 cursor-pointer'>Dont have an account?</a>
                </>
            }
        </div>
    </div>
  )
}

export default SignUpPage