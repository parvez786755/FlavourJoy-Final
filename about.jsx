import React from 'react';
import './App.css'; // Place your CSS styles here or add them inline

function App() {
    return (
        <div className="App">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={require('./images/logooooo.png')} alt="FlavorJoy Logo" className="logo-image" /> {/* Replace with actual image path */}
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="recipes.html">Recipes</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

function MainContent() {
    return (
        <main>
            <ProfileSection />
            <OurTeam />
        </main>
    );
}

function ProfileSection() {
    return (
        <section className="profile-section">
            <div className="intro-card">
                <p className="intro-text">
                    At FlavorJoy, we celebrate the joy of cooking and the art of delicious recipes! Our mission is to inspire food lovers to create healthy, mouth-watering dishes that not only satisfy cravings but also support a balanced lifestyle.
                </p>
                <p className="intro-text">
                    We believe that food should be enjoyable and nourishing. That's why we curate a diverse collection of recipes focused on wholesome ingredients and flavorful combinations. Whether you’re looking for quick weeknight meals or impressive dishes for special occasions, we’ve got you covered.
                </p>
                <p className="intro-text">
                    Join our community of food enthusiasts! Share your own recipes, discover new favorites, and connect with like-minded individuals who share your passion for culinary creativity.
                </p>
                <p className="intro-text">
                    Let’s embark on this flavorful journey together!
                </p>
            </div>
            <div className="image-gallery">
                <img src="https://img.freepik.com/premium-photo/cooking-age-virtual-reality_893610-5066.jpg" alt="Cooking" className="gallery-image" />
            </div>
        </section>
    );
}

function OurTeam() {
    const teamMembers = [
        { name: 'Parvez', regNo: '221FA04427', contact: '8238392228', imgSrc: './images/Screenshot1.png' },
        { name: 'Mujahid', regNo: '221FA04373', contact: '8238392228', imgSrc: './images/Screenshot2.png' },
        { name: 'Sohail', regNo: '221FA04316', contact: '3428709088', imgSrc: './images/Screenshot3.png' },
        { name: 'Gopi', regNo: '221FA04291', contact: '8712868978', imgSrc: './images/gopi.jpg' },
        { name: 'Chinni', regNo: '221FA04396', contact: '1467281983', imgSrc: './images/Screenshot4.png' }
    ];

    return (
        <section className="our-team">
            <h2>Our Team</h2>
            <p className="team-intro">
                We have an entire team of geniuses behind us at FlavorJoy who are experts in everything – from customer service, to social media, to videography, to assisting with recipe shoots. They keep it all running smoothly!
            </p>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <TeamMember key={index} member={member} />
                ))}
            </div>
        </section>
    );
}

function TeamMember({ member }) {
    return (
        <div className="team-member">
            <img src={require(`${member.imgSrc}`)} alt={member.name} className="team-photo" />
            <h3>{member.name}</h3>
            <ol>
                <li>REG NO: {member.regNo}</li>
                <li>Contact: {member.contact}</li>
            </ol>
        </div>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2024 FlavorJoy. All rights reserved.</p>
        </footer>
    );
}

export default App;
