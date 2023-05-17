import { Banner } from "../../components/Banner";
import Container from "../../components/Container";
import { SocialCard } from "../../components/SocialCard";

export default function Home ()
{
    return (

        <>
        
            <meta content="width=device-width, initial-scale=1" name="viewport" />

            <Banner text={"Socials"}/>

            <Container className='w-full h-full bg-almost-black-500 pb-20'>
                <div className='py-3 pt-6 sm:pb-6 sm:pt-9 sm:px-0 flex flex-row justify-between items-center'>
                    <img className='h-[40px] sm:h-[60px] lg:h-[75px]' src='https://emoji.craftwork.design/images/modal/handshake-yellow.png'/>
                    <div className='bg-white w-1/3 sm:w-1/2 h-1.5 px-16'></div>
                    <h1 className='text-white text-base sm:text-2xl lg:text-3xl font-bold'>Follow Us</h1>
                </div>
                <div className='grid sm:grid-cols-2 gap-6 sm:gap-9 sm:px-0 justify-evenly w-full'>
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
                        link='https://discord.gg/acbpxq8rvY'
                    />
                </div>
            </Container>
        
        </>

    )
}