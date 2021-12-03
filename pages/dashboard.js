import {useState, useEffect} from 'react'
import {useSession,getSession,signIn} from "next-auth/react"
function Dashboard(){
    const {data:session,status} = useSession()
    console.log(session,status)

    const [loading,setLoading] = useState(true)

    useEffect(() =>{
        const securePage = async () => {
            //getSession returns either session object or null if user not logged in
            const session = await getSession()
            if (!session){
                signIn()
            }else{
                setLoading(false)
            }
        }
        securePage()
    },[])

    if (loading){
        return <h2>Loading...</h2>
    }
    return <h1>Dashboard page</h1>
}

export default Dashboard