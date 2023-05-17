import { Banner } from '../components/Banner';
import Container from '../components/Container';
import { InfoCard } from '../components/InfoCard';

/*
  Emojis: https://emoji.craftwork.design/
*/

export default function Home() 
{
  return (
    
    <>
    
      <meta content="width=device-width, initial-scale=1" name="viewport" />

      <Banner text="Hello"/>

      <Container className='py-6 lg:py-12' contentClassNmae="px-0 sm:px-3">
        <InfoCard 
          title="Who is this?"
          description="Hi! My name is Aidan Ouckama and I'm a upcoming Computer Science student and front-end developer. I have touched many corners within the programming world including Web Design, Game Development, Database Building, Modding, and more! I've had a passion for coding from a young age and I'm excited to continuing pursuing it!"
          image='https://i.ibb.co/6mGbqWv/122426423-2630232447290059-1245205322917720626-n.jpg'
          emoji='https://emoji.craftwork.design/images/modal/thinking-face.png'
        />
      </Container>

    </>

  )
}
