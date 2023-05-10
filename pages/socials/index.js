import { SocialCard } from "../../components/SocialCard";

export default function Home ()
{
    return (

        <>
        
            <div className='w-full h-[35em] object-fill bg-fixed bg-[url("https://i.ibb.co/wQT8tCg/122427480-161210105663948-3594706252189084805-n.jpg")]'>
                <div className='flex flex-col justify-center items-center w-full h-full backdrop-blur-sm backdrop-brightness-50'>
                    <h1 className='text-9xl font-bold uppercase transition duration-300 hover:drop-shadow-lg'>Socials</h1>
                </div>
            </div>

            <div className='grid grid-cols-1 gap-10 justify-evenly p-20 w-full h-[40em]'>
                <SocialCard 
                    title="TikTok"
                    description="Come see my TikTok full of interesting and entertaining Computer Science content!"
                    image='https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Tiktok-512.png'
                    link='https://www.tiktok.com/@ouckah'
                />
                <SocialCard 
                    title="Linkedin"
                    description="Connect with me and check out what I have been doing internship / work wise!"
                    image='https://cdn-icons-png.flaticon.com/512/174/174857.png'
                    link='https://www.linkedin.com/in/aidan-ouckama/'
                />
                <SocialCard 
                    title="GitHub"
                    description="View what sorts of gadgets and gizmos I have most recently been working on!"
                    image='https://cdn-icons-png.flaticon.com/512/38/38401.png'
                    link='https://github.com/Ouckah'
                />
                <SocialCard 
                    title="Discord"
                    description="Come join our amazing community and chat with them! Lots of Computer Science in these parts."
                    image='https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png'
                    link='https://discord.com/invite/cZsJmkr'
                />
            </div>
        
        </>

    )
}