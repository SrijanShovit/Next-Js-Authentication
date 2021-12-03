import {getSession,useSession} from 'next-auth/react'

function Blog({data}){
    const {data:session} = useSession()
    console.log(session)
    return <h1>Blog page  {data}</h1>
}

export default Blog

//Server Side Authentication
//getServerSideProps helps us to determine session even b4 rendering
//session is always loaded and no need to destructure from props
//but the session will available  b4 rendering for this page only in that way


//getServerSideProps runs at every request and contains info what the request
export async function getServerSideProps(context){
    //determine if user logged in
    //pass context to getSession rest next-auth will handle
    const session = await getSession(context)

    
    return {
        props : {
            session : session,
            data : session ? 'Personal' : 'Public'
        }
    }


}