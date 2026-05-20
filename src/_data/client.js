module.exports = {
    name: "Slate Digital Solutions",
    email: "dkyline-digital-solutions777@gmail.com",
    phoneForTel: "+1(602)-783-5033", // Format for tel: links (no parentheses or dashes)
    phoneFormatted: "+1 (602) 783-5033",
    address: {
        lineOne: "First Address Line",
        lineTwo: "Second Address Line",
        city: "Glendale",
        state: "AZ",
        zip: "85306",
        country: "US",
        mapLink: "https://maps.app.goo.gl/rbq19ZobU8snJ1FWA",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.skyline-digital-solutions.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
