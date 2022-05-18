import { IoMenu, IoSearchOutline } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import { Cart, HorizontalScrollWrapper, Logo } from "../atoms";
import Wishlist from '../atoms/Wishlist';




export default function Navbar({hideSearchbar=false}) {

    const {pathname} = useLocation()

    const routes = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Store",
            path: "/store"
        },
        {
            title: "Cart",
            path: "/cart"
        },
        {
            title: "Wishlist",
            path: "/wishlist"
        },
    ]
    
    return (
        <>
            <div className="flex w-full bg-slate-800 p-2 justify-between">
                <div className='flex items-center'>
                    <IoMenu className='text-2xl text-white mr-2' />
                </div> 
                <div className="w-14 h-8">
                    <Logo />
                </div>

                <div
                    className='flex items-center'
                >
                    <Link to="/wishlist">
                        <Wishlist />
                    </Link>
                    <div className='mr-1' />
                    <Link to="/cart">
                        <Cart label={2} />
                    </Link>

                </div>
            </div>
            {
                !hideSearchbar && (
                    <div className="w-full bg-slate-800 p-2">
                        <div className="w-full flex items-center bg-white rounded-md overflow-hidden">
                            <input placeholder='Search clothes' type="text" className="w-full flex-1 h-full p-1 outline-none placeholder:text-black/60" />
                            <button className="py-2 px-3 flex items-center justify-center bg-yellow-500 rounded-md ">
                                <IoSearchOutline className='text-xl text-slate-700' /> 
                            </button>
                        </div>
                    </div>
                )
            }
            <div className="bg-slate-600 w-full p-2">
                <HorizontalScrollWrapper>
                    {
                        routes.map((route, index)=>(
                            <Link
                                key={index} 
                                className={
                                    route.path === pathname ? 'py-1 px-3 text-sm border border-white/30 rounded text-white bg-yellow-500 inline-block mr-3 last:mr-0' : 'py-1 px-3 text-sm border border-white/30 rounded text-white inline-block mr-3 last:mr-0'
                                }
                                to={route.path}
                            >
                                {route.title}
                            </Link>
                        ))
                    }
                </HorizontalScrollWrapper>
            </div>
        </>
    )
}


