import { ProjectCard } from "../../components/ProjectCard";

export default function Projects() 
{
    return (
        <>

            <div className='w-full h-[35em] object-fill bg-fixed bg-[url("https://i.ibb.co/wQT8tCg/122427480-161210105663948-3594706252189084805-n.jpg")]'>
                <div className='flex flex-col justify-center items-center w-full h-full backdrop-blur-sm backdrop-brightness-50'>
                    <h1 className='text-9xl font-bold uppercase transition duration-300 hover:drop-shadow-lg'>Projects</h1>
                </div>
            </div>

            <div className='w-full h-[70em] bg-almost-black-500'>
                <div className='flex flex-row justify-center items-center gap-16 pt-10 pb-16'>
                    <img className='w-[10em] h-[10em]' src='https://emoji.craftwork.design/images/modal/face-with-open-mouth.png'/>
                    <div className='bg-white w-1/2 h-1.5 px-16'></div>
                    <h1 className='text-white text-4xl font-semibold py-16'>Featured Projects</h1>
                </div>

                <div className='grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 gap-10 justify-evenly px-20'>
                    <ProjectCard 
                        title="Stevens '26 Student Portfolio Website"
                        description="Working as Project Manager of a student portfolio website a group of my classmates are working on. It's my first time working with others on a large project so I'm learning a lot!"
                        image="https://web.stevens.edu/news/newspoints/zoom-bg/Stevens-zoom-background-garden.jpg"
                    />
                    <ProjectCard 
                        title="Laptop Upcycle G-Suite Registration System"
                        description="Currently a software engineer intern for a non-profit technology organization. Building a registration system for volunteers to sign-up and attent volunteer sessions."
                        image="https://techcrunch.com/wp-content/uploads/2020/10/google-workspace-icons.jpg"
                    />
                    <ProjectCard 
                        title="Java Text-Based Game"
                        description="More of a personal project. Making a silly little Java text based game with weapons and a character based map. Going back to step one of all coders journey into programming!"
                        image="https://media.wired.com/photos/5f7b9cfd126693e1dc256c39/4:3/w_1800,h_1350,c_limit/games-settings-wired.png"
                    />
                </div>
            </div>
        
        </>
    )
}