const uploadImage = async (payload)=>{

    console.log(payload)

    try {

        const formData = new FormData()
        formData.append("product_img", payload)

        const url = "http://localhost:6050/add_product"

        const res = await fetch(url, {
            method: "POST",
            body: formData
        })

        const _res = await (res.json())

        console.log(_res)

        if(res.status !== 200) throw new Error(_res.message)
        
    } catch (error) {
        console.log(error)
        throw error
    }
    
}


const sell = async (payload)=>{

    

    try {


        const url = "http://localhost:5000/cswk-payment-platform-7d4a5/us-central1/transaction/make-payment"

        const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsX25hbWUiOiJNYXJ0aW4gT3d1c3UgWWVib2FoIiwiZW1haWwiOiJtdnJ0aW4yMUBnbWFpbC5jb20iLCJwaG9uZSI6IjIzMzU0MTczMzAyNSIsImlhdCI6MTY1Mjg0NDQ1NywiZXhwIjoxNjUyOTMwODU3fQ.blpaS6Z33wPyuaEkgLttXvnV36GU_3p9qSKnSPaoYF4"


        const res = await fetch(url, {
            headers: {
                'Content-Type': "application/json",
                'x-access-token': access_token
            },
            method: "POST",
            body: JSON.stringify(payload)
        })

        const _res = await (res.json())

        if(res.status !== 200) throw new Error(_res.message)
        
    } catch (error) {
        throw error
    }
    
}


const product = {
    uploadImage,
    sell
}

export default product