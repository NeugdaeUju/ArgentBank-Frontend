import Header from '../Components/Header.jsx'
import Hero from '../Components/Hero.jsx'
import Feature from '../Components/Feature.jsx'
import Footer from '../Components/Footer.jsx'   
import image1 from '../assets/icon-chat.png'
import image2 from '../assets/icon-money.png'
import image3 from '../assets/icon-security.png'


function Home() {
    return (
        <>
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

/*
<div className="home">
            <h1>Welcome to Argent Bank</h1>
            <p>Your trusted partner in financial services.</p>
        </div>
*/