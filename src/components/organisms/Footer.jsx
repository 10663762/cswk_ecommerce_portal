import { IoCall, IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="w-full bg-slate-800 text-white px-2 py-4">
        <h2 className="text-2xl font-bold">
            Join our newsletter
        </h2>
        <p className="text-sm text-gray-400 mb-4">GH₵ 20.00 discount on your first order</p>
        <div className="w-full flex items-center bg-white rounded-md overflow-hidden">
            <input placeholder='Your email' type="text" className="w-full flex-1 h-full p-1 outline-none placeholder:text-black/60" />
            <button className="text-slate-800 py-2 px-3 flex items-center justify-center bg-yellow-500 rounded-md ">
                Subscribe
            </button>
        </div>

        <div className="my-8">
            <h2 className="text-xl font-bold">
                Contact us
            </h2>
            <span className="flex items-center">
                <IoMail className="mr-1" /> martinandcarl@luxury.store
            </span>
            <span className="flex items-center">
                <IoCall className="mr-1" /> +233 306 668 000
            </span>
        </div>
    </div>
  )
}
