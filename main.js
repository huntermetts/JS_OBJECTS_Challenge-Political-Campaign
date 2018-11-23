// Creating Jim Cooper as an object
const jCooper = {
    congressional_district: "Tennessee's 5th District",
    platform_statements: {
        taxes: "In support of reducing defense spending in order to balance the budget.",

        jobs: "Supports educating our children to promoting fair environments for working mothers, 'policies that strengthen our families are the most important investments we can make for the future of our country.'",

        infrastructure: "In support of government funding for the development of renewable energy (e.g. solar, wind, thermal).",

        healthCare: "In support of the 2010 Affordable Care Act ('Obamacare').",
        crimeAndEnforcements: "In support of gun-control legislation."
    },

    urlDonation: "https://www.cooperforcongress.com/form/-8877775747779720448",

    events:"No upcoming events",

    volenteerInfo: {
        name:"Hunter",
        address:"123 ABC Ave",
        email:"123@abc.com",
        phone:"012-345-6789",
        availability:"Saturdays",
        activities:"Taking polls"
    },

    bio: "Born in Nashville, Jim – the son of former Tennessee Governor Prentice Cooper (deceased) and Hortense Cooper, 97, – was always studious. Whether in school, government service or business, Jim never forgot what his parents taught him about the importance of service to God, country, community and to others.",

    images: {
        headshot:"https://cooper.house.gov/sites/cooper.house.gov/files/biopic-large.jpg",
        family:"http://www.cooperforcongress.com/sites/jimcooper/files/images/family-new_%281%29.png",
        constituents:"https://cdn.britannica.com/66/164166-004-191E0399.jpg"
    },

    mission: "I work for you. As your representative in Congress, it's my job to make sure your voice is heard.",

    vote:"https://ovr.govote.tn.gov/"
}

// Testing that the object/properties work
console.log(jCooper.volenteerInfo.name);
console.log(jCooper.mission);