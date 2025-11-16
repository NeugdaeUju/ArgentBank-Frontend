import Hero from '../Components/Hero.jsx'
import Feature from '../Components/Feature.jsx'
import Header from '../Components/Header.jsx'
import image1 from '../../public/icon-chat.webp'
import image2 from '../../public//icon-money.webp'
import image3 from '../../public/icon-security.webp'


function Home() {
    return (
        <>
        <Header title="Sign In"/>
            <main>
                <Hero />
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    <Feature 
                        image={image1}
                        title="You are our #1 priority"
                        text="Need to talk to a representative? You can get in touch through our
                            24/7 chat or through a phone call in less than 5 minutes."/>
                    <Feature 
                        image={image2}
                        title="More savings means higher rates"
                        text="The more you save with us, the higher your interest rate will be!"/>
                    <Feature 
                        image={image3}
                        title="Security you can trust"
                        text="We use top of the line encryption to make sure your data and money
                            is always safe."/>
                </section>
            </main>
        </>
    )
}

export default Home