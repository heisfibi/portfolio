import { Banner } from "../../components/Banner";
import Container from "../../components/Container";
import { ProjectCard } from "../../components/ProjectCard";

export default function Projects() 
{
    return (
        <>
        
            <meta content="width=device-width, initial-scale=1" name="viewport" />

            <Banner text="Projects"/>
 
            <Container className='w-full bg-almost-black-500 pb-20'>
                <div className='py-3 pt-6 sm:pb-6 sm:pt-9 sm:px-0 flex flex-row justify-between items-center'>
                    <img className='h-[40px] sm:h-[60px] lg:h-[75px]' src='https://emoji.craftwork.design/images/modal/face-with-open-mouth.png'/>
                    <div className='bg-white w-1/3 sm:w-1/2 h-1.5 px-16'></div>
                    <h1 className='text-white text-base sm:text-2xl lg:text-3xl font-bold'>Featured Projects</h1>
                </div>
                <div className='grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 sm:px-0 gap-6 sm:gap-9 justify-evenly'> 
                    <ProjectCard 
                        title="Tic Tac Toe"
                        description="A fully working tic tac toe board built with React!"
                        image="https://web.stevens.edu/news/newspoints/zoom-bg/Stevens-zoom-background-garden.jpg"
                        date="May 5th, 2023"
                        link='tictactoe'
                    /> 
                </div>
            </Container> 
        </>
    )
}