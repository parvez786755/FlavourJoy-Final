import React from 'react';

function Recipes() {
    const recipes = [
        {
            imgSrc: "https://github.com/parvez786755/FlavoursJoy/blob/main/nudels%20thay.png?raw=true",
            altText: "Spicy Thai Noodles",
            title: "Spicy Thai Noodles",
            description: "A flavorful and spicy Thai noodle dish with vegetables.",
            link: "https://youtu.be/a5gwmLovCUs"
        },
        {
            imgSrc: "https://github.com/parvez786755/FlavoursJoy/blob/main/garlic%20bread.png?raw=true",
            altText: "Cheesy Garlic Bread",
            title: "Cheesy Garlic Bread",
            description: "A delicious and easy-to-make garlic bread with melted cheese.",
            link: "recipe-details.html"
        },
        // Add more recipe items as needed
    ];

    return (
        <div>
            {/* Header */}
            <header style={styles.header}>
                <div style={styles.logo}>
                    <img
                        src="D:/221FA04427/MSD project 5/logooooo.png"
                        alt="FlavorJoy Logo"
                        style={styles.logoImage}
                    />
                </div>
                <nav>
                    <ul style={styles.navList}>
                        <li><a href="index.html" style={styles.navLink}>Home</a></li>
                        <li><a href="about.html" style={styles.navLink}>About Us</a></li>
                        <li><a href="contact.html" style={styles.navLink}>Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* Main Content */}
            <main style={styles.main}>
                {/* Hero Section */}
                <section style={styles.hero}>
                    <h2>Our Delicious Recipes</h2>
                    <p>Find the perfect recipe for any occasion!</p>
                </section>

                {/* Filter Section */}
                <section style={styles.filterSection}>
                    <h3>Filter by:</h3>
                    <form action="search.html" method="GET" style={styles.filterForm}>
                        <select name="meal-type" style={styles.select}>
                            <option value="all">All</option>
                            <optgroup label="Breakfast">
                                <option value="pancakes">Pancakes</option>
                                <option value="omelette">Omelette</option>
                                <option value="smoothies">Smoothies</option>
                                <option value="waffles">Waffles</option>
                            </optgroup>
                            <optgroup label="Lunch">
                                <option value="salads">Salads</option>
                                <option value="sandwiches">Sandwiches</option>
                                <option value="pasta">Pasta</option>
                                <option value="wraps">Wraps</option>
                            </optgroup>
                            <optgroup label="Dinner">
                                <option value="steak">Steak</option>
                                <option value="pizza">Pizza</option>
                                <option value="stir-fry">Stir-Fry</option>
                                <option value="tacos">Tacos</option>
                            </optgroup>
                            <optgroup label="Desserts">
                                <option value="cake">Cake</option>
                                <option value="cookies">Cookies</option>
                                <option value="ice-cream">Ice Cream</option>
                                <option value="brownies">Brownies</option>
                            </optgroup>
                        </select>
                        <button type="submit" style={styles.button}>Apply Filter</button>
                    </form>
                </section>

                {/* Recipe Grid */}
                <section style={styles.recipeGrid}>
                    {recipes.map((recipe, index) => (
                        <article key={index} style={styles.recipeItem}>
                            <img src={recipe.imgSrc} alt={recipe.altText} style={styles.recipeImage} />
                            <h4 style={styles.recipeTitle}>{recipe.title}</h4>
                            <p style={styles.recipeDescription}>{recipe.description}</p>
                            <a href={recipe.link} style={styles.recipeLink}>View Recipe</a>
                        </article>
                    ))}
                </section>
            </main>

            {/* Footer */}
            <footer style={styles.footer}>
                <p>&copy; 2024 FlavorJoy. All rights reserved.</p>
            </footer>
        </div>
    );
}

// Styles for the component
const styles = {
    header: {
        backgroundColor: '#6c5b7b',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px'
    },
    logo: {
        width: '150px'
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        margin: 0,
        padding: 0
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        padding: '8px 16px',
        backgroundColor: 'rgba(99, 66, 43, 0.267)',
        borderRadius: '5px'
    },
    main: {
        padding: '40px 20px'
    },
    hero: {
        textAlign: 'center',
        backgroundColor: '#f0e1d6',
        padding: '40px',
        borderRadius: '10px',
        marginBottom: '40px'
    },
    filterSection: {
        textAlign: 'center',
        marginBottom: '40px'
    },
    filterForm: {
        display: 'inline-block'
    },
    select: {
        padding: '10px 15px',
        fontSize: '1em',
        marginRight: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc'
    },
    button: {
        padding: '10px 15px',
        fontSize: '1em',
        backgroundColor: '#6c5b7b',
        color: '#fff',
        border: 'none',
        borderRadius: '5px'
    },
    recipeGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px'
    },
    recipeItem: {
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        padding: '20px'
    },
    recipeImage: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderBottom: '1px solid #ddd'
    },
    recipeTitle: {
        fontSize: '1.5em',
        margin: '15px 0',
        color: '#6c5b7b'
    },
    recipeDescription: {
        fontSize: '1em',
        color: '#666',
        marginBottom: '15px'
    },
    recipeLink: {
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#6c5b7b',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px'
    },
    footer: {
        backgroundColor: '#6c5b7b',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        marginTop: '40px'
    }
};

export default Recipes;
