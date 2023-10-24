import { UserOutlined, KeyOutlined, GoogleOutlined, FacebookOutlined, GithubOutlined } from '@ant-design/icons'

export const LoginTemplate = () => {
  return (
    <div className="LoginTemplate grid grid-cols-2">
        <div className="content-left col-span-1 flex items-center justify-center">
            <div className="h-[450px] w-[450px]">
                <img src="img/loginImage.png" alt="loginImage" className="h-full w-full p-40"/>
            </div>
        </div>
        <div className="content-right col-span-1 flex justify-center pr-[100px] pt-10">
            <div className='w-full mx-auto flex-col items-center'>
                <h2 className="text-[#009EE2] font-bold text-center text-[40px]">Welcome</h2>
                <div>
                    <label className="ml-30 block mb-2 text-sm font-medium text-[#009EE2]">Username</label>
                    <div className='input-content flex items-center'>
                        <UserOutlined className='mr-3 text-[20px]'/>
                        <input type="text" className="border border-[#009EE2] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Username" />
                    </div>
                </div>
                <div className='mt-20'>
                    <label className="ml-30 block mb-2 text-sm font-medium text-[#009EE2]">Password</label>
                    <div className='input-content flex items-center'>
                        <KeyOutlined className='mr-3 text-[20px]'/>
                        <input type="password" className="border border-[#009EE2] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Password" />
                    </div>
                </div>
                <div className='flex items-center justify-end my-10'>
                    <p className='text-14 hover:cursor-pointer'>Forgot your password?</p>
                </div>
                <div className='flex items-center justify-center'>
                    <button className="bg-[#009EE2] text-white border-2 border-[#009EE2] hover:border-[#2e6780] hover:bg-[#2e6780] hover:text-white transition-all font-bold py-6 px-34 rounded">
                        LOGIN
                    </button>
                </div>
                <div className='flex items-center justify-center my-20'>
                    <p className='w-[150px] h-[1px] bg-black'></p>
                    <p className='mx-10 text-[15px]'>OR</p>
                    <p className='w-[150px] h-[1px] bg-black'></p>
                </div>
                <div className='login-icons flex items-center justify-center gap-10'>
                    <div className='flex items-center justify-center bg-[#E7F2F5] w-[90px] h-[40px] rounded-[10px]'>
                        <GoogleOutlined className='text-20 hover:cursor-pointer'/>
                    </div>
                    <div className='flex items-center justify-center bg-[#E7F2F5] w-[90px] h-[40px] rounded-[10px]'>
                        <FacebookOutlined className='text-20 hover:cursor-pointer'/>
                    </div>
                    <div className='flex items-center justify-center bg-[#E7F2F5] w-[90px] h-[40px] rounded-[10px]'>
                        <GithubOutlined className='text-20 hover:cursor-pointer'/>
                    </div>
                </div>
                <div className='login-signup flex items-center justify-center mt-10 mb-20'>
                    <p className='text-14'>Don't have account? <span className='font-bold hover:cursor-pointer'>Register Now</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginTemplate