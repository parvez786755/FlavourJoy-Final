import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Router components
import './App.css';
import Sign from './sign'; // Assuming Sign.jsx is in the same directory

function App() {
    const scrollContainerRef = useRef(null);
    let scrollInterval;
    let scrollDirection = 1; // 1 for right, -1 for left

    // Clone the first few elements for seamless scrolling
    const cloneItems = () => {
        const items = scrollContainerRef.current.children;
        const firstItem = items[0].cloneNode(true);
        const lastItem = items[items.length - 1].cloneNode(true);
        scrollContainerRef.current.appendChild(firstItem);
        scrollContainerRef.current.insertBefore(lastItem, items[0]);
    };

    // Function to start automatic scrolling
    const startAutoScroll = () => {
        scrollInterval = setInterval(() => {
            // Scroll in the current direction
            scrollContainerRef.current.scrollLeft += scrollDirection;

            // Check for reaching the right end
            if (
                scrollContainerRef.current.scrollLeft >=
                scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth
            ) {
                // Reset to the first item (skip cloned one)
                scrollContainerRef.current.scrollLeft =
                    scrollContainerRef.current.scrollLeft - scrollContainerRef.current.clientWidth;
            }

            // Check for reaching the left end
            if (scrollContainerRef.current.scrollLeft <= 0) {
                // Reset to the last cloned item (skip cloned one)
                scrollContainerRef.current.scrollLeft =
                    scrollContainerRef.current.scrollLeft + scrollContainerRef.current.clientWidth;
            }
        }, 10); // Adjust the speed of scrolling here
    };

    // Function to stop scrolling on hover
    const stopAutoScroll = () => {
        clearInterval(scrollInterval);
    };

    // Function to start scrolling again when mouse leaves the container
    const resumeAutoScroll = () => {
        startAutoScroll();
    };

    // React useEffect hook to manage side effects
    useEffect(() => {
        // Clone items and start the auto-scrolling when the component mounts
        cloneItems();
        startAutoScroll();

        // Attach event listeners for hover interactions
        const scrollContainer = scrollContainerRef.current;
        scrollContainer.addEventListener('mouseover', stopAutoScroll);
        scrollContainer.addEventListener('mouseleave', resumeAutoScroll);

        // Cleanup event listeners when the component unmounts
        return () => {
            scrollContainer.removeEventListener('mouseover', stopAutoScroll);
            scrollContainer.removeEventListener('mouseleave', resumeAutoScroll);
            clearInterval(scrollInterval);
        };
    }, []);

    return (
        <Router>
            <div className="App">
                {/* Header */}
                <header>
                    <div className="logo">
                        <img
                            src="https://github.com/parvez786755/FlavoursJoy/blob/main/logooooo.png?raw=trnodeue"
                            alt="FlavorJoy Logo"
                            className="logo-image"
                        />
                    </div>
                    <nav>
                        <ul>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="recipes.html">Recipes</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li>
                                <form className="search-bar">
                                    <input type="text" placeholder="Search recipes..." />
                                    <button type="submit">🔍</button>
                                </form>
                            </li>
                            <li>
                                <Link to="/sign" className="login-button">Signin</Link> {/* This will navigate to a new page */}
                            </li>
                            <li><a href="sign.html" className="login-button">SignUp</a></li>
                        </ul>
                    </nav>
                </header>

                {/* Home Section */}
                <section id="home">
                    <div className="box">
                        <h2>FlavorsJoy Recipes</h2>
                        <h3 className="flavors-title">Simple Recipes Made for Daily Life</h3>
                    </div>
                    <div className="recipe-scroll-container" ref={scrollContainerRef}>
                        <div className="recipe-card">
                            <img
                                src="https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_720,h_480,al_c,q_80,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg"
                                alt="Recipe 1"
                            />
                            <article className="recipe-item">
                                <a href="https://youtu.be/BIG1h2vG-Qg" className="learn-more-btn">Delicious Hydrabadi Dum Biriyani</a>
                            </article>
                        </div>
                        <div className="recipe-card">
                            <img
                                src="https://www.madewithlau.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2r0kdewr%2Fproduction%2F4ba5d16bc37976b03c4404e678bff07890b6e228-1000x668.jpg&w=3840&q=75"
                                alt="Recipe 3"
                            />
                            <article className="recipe-item">
                                <a href="https://youtu.be/BIG1h2vG-Qg" className="learn-more-btn">Spicy Thai Noodles</a>
                            </article>
                        </div>
                        {/* Add more recipe cards as needed */}
                    </div>
                </section>

                {/* Profile Section */}
                <section className="profile-section">
                    <div className="intro-card">
                        <h1 className="intro-heading">
                            HI this is for Foodies <br /><span className="sub-heading">Nice to meet you!</span>
                        </h1>
                        <h2>Hamburger</h2>
                        <p className="intro-text">
                            A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw
                            onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an
                            American food but are popular around the world. In Japan, teriyaki burgers are popular. For the
                            recipe click Learn More
                        </p>
                        <a href="https://youtu.be/BIG1h2vG-Qg" className="learn-more-btn">Learn More</a>
                    </div>
                    <div className="image-gallerysss">
                        <img
                            src="https://joyfoodsunshine.com/wp-content/uploads/2022/10/best-hamburger-recipe-11.jpg"
                            alt="Lindsay Cooking"
                            className="gallery-image cooking-image"
                        />
                        <img
                            src="https://thumbs.dreamstime.com/b/dagwood-tower-sandwich-5573876.jpg"
                            alt="Lindsay Pouring"
                            className="gallery-image pouring-image"
                        />
                    </div>
                </section>

                {/* Footer */}
                <footer>
                    <p>&copy; 2024 FlavorJoy. All rights reserved.</p>
                </footer>
            </div>

            {/* Define Routes */}
            <Routes>
                <Route path="/sign" element={<Sign />} /> {/* This will render Sign on the /sign route */}
            </Routes>
        </Router>
    );
}

export default App;
