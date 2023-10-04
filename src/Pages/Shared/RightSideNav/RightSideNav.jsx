import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"


const RightSideNav = () => {
    return (
     <div>
           <div className='space-y-3 border p-3 mb-7'>
            <h1 className='text-3xl font-semibold'>Login With</h1>
            <button className="btn btn-outline w-full">
                <FaGoogle></FaGoogle>
                Login with Google
            </button>
            <button className="btn btn-outline w-full">
                <FaGithub></FaGithub>
                Login with Google
            </button>
        </div>
        <div className=' border p-3 mb-7'>
            <h1 className='text-3xl font-semibold my-5'>Fire Us On</h1>
            <a className='flex  items-center gap-4 font-medium text-2xl border p-2 rounded-t-lg' href="">
                <FaFacebook className='w-[30px] h-[30px]'></FaFacebook>
                Facebook
            </a>
            <a className='flex  items-center gap-4 font-medium text-2xl border p-2' href="">
                <FaInstagram className='w-[30px] h-[30px]'></FaInstagram>
                Instagram
            </a>
            <a className='flex  items-start gap-4 font-medium text-2xl border p-2 rounded-b-lg' href="">
                <FaTwitter className='w-[30px] h-[30px]'></FaTwitter>
                Twitter
            </a>
        </div>
        <div className='bg-gray-300 p-4 mt-5' >
            <h1 className='text-2xl font-semibold'>Q Zone</h1>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
        </div>
     </div>
    );
};

export default RightSideNav;