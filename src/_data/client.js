module.exports = {
    name: "Skyline Digital Solutions",
    email: "hello@skyline-digital-solutions.com",
    phoneForTel: "", // Format for tel: links (no parentheses or dashes)
    phoneFormatted: "",
    image: "/assets/images/square-light.png",
    address: {
        lineOne: "",
        lineTwo: "",
        city: "Fresno",
        state: "CA",
        zip: "",
        country: "US",
        mapLink: "",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://skyline-digital-solutions.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
