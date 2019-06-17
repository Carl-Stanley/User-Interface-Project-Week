// JS goes here
// Content for All Pages
const siteContent = {

    "a" : {

    },
    
    "address" : {

        "0" : [{
            "City" : "Albany",
            "State" : "NY",
            "Street" : "123 Lane<br>Suite 100",
            "Region" : "New York",
            "Zip"    : "12345",
            "Phone"  : "202 555 0144"
        }],
        "1" : [{
            "City" : "Orlando",
            "State" : "FL",
            "Street" : "Ocean Drive<br>Suite 201",
            "Region" : "Florida",
            "Zip"    : "22345",
            "Phone"  : "502 555 0144"
        }],
        "2" : [{
            "City" : "San Diego",
            "State" : "CA",
            "Street" : "Mountain Street<br>",
            "Region" : "California",
            "Zip"    : "22345",
            "Phone"  : "702 555 0144"
        }]


    },

    "button" : {
        "1" : "Learn More"

    }, 
    
    "footer" : {
        // Footer Index Page
        "1" : "Interested in starting a project?<br>Let’s talk:"

    },

    "H" : {
        // Headers for Index Page
        "0" : "S&J",
        "1" : "Integrity", 
        "2" : "Excellence",  
        "3" : "Progress.",  
        "4" : "Smith & Jones Architects",
        "5" : "Futuristic Designs",
        "6" : "View Designs",
        "7" : "Recent Projects",        
        "8" : "THE VILLAS",
        "9" : "OUTSKIRTS",
        "10" : "THE BLOCKS",
        // Headers For Services Page
        "11" : "Services",
        "12" : "",

    },
    
    "header" : {

    },

    "menu" : { // Menu all Pages 

        "0" : "Home",
        "1" : "Services",
        "2" : "Contact"

    },    

    "p" : {
        // P for Index Page
        "0" : "Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem",
        "1" : "Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem",
        "2" : "The Villas bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
        "3" : "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
        "4" : "The Outskirts are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
        "5" : "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
        "6" : "The Blocks are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. ",
        "7" : "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.", 
        // P for Services Page
        "8" : "Services include: completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.",
        "9" : 'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.'

    }    

};

// Main page Load Class. 
class loadPage {
    constructor(pageID) {

        this.pageID = pageID;

    }

    //tellMePage() {

      //  alert("PageID:" + this.pageID);
    //};

};

const newpage = new loadPage(pageID);

//newpage.tellMePage();
