import { Navbar } from '../../components/molecules'
import Products from './Products'



export default function Dashboard() {
    return (
        <div className='w-full'>
            <Navbar hideSearchbar />

                {/* <Orders /> */}
                <div className="w-full mb-16">
                    <Products />
                    {/* <input type={"file"} onChange={async(e)=>{
                        
                        try {

                            console.log(e.target.files[0])
                            return

                           await Product.uploadImage(e.target.value)
                            
                        } catch (error) {
                            console.log(error)
                        }
                        
                    }}/> */}
                </div>
            
            {/* <Footer /> */}
        </div>
    )
}
