import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github'

export default NextAuth({  //takes object
    //providers are services to allow authentication
    providers: [
        //mutiple sevices can be used so array
        GitHubProvider({  //acepts object
            clientId : process.env.GITHUB_ID,
            clientSecret : process.env.GITHUB_SECRET,
        })
    ]
})