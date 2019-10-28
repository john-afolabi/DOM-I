const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaimg = document.getElementById('cta-img');
ctaimg.setAttribute('src', siteContent['cta']['img-src']);

const middleimg = document.getElementById('middle-img');
middleimg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Add Nav Text
const nav = document.getElementsByTagName('nav')[0];
nav.children[0].textContent = siteContent['nav']['nav-item-1']
nav.children[1].textContent = siteContent['nav']['nav-item-2']
nav.children[2].textContent = siteContent['nav']['nav-item-3']
nav.children[3].textContent = siteContent['nav']['nav-item-4']
nav.children[4].textContent = siteContent['nav']['nav-item-5']
nav.children[5].textContent = siteContent['nav']['nav-item-6']

// Add CTA
const cta = document.getElementsByClassName('cta-text')[0];
cta.children[0].textContent = siteContent['cta']['h1'];
cta.children[1].textContent = siteContent['cta']['button'];

// Content
const textContent = document.querySelectorAll('.text-content')

// Top Content
textContent[0].children[0].textContent = siteContent["main-content"]["features-h4"];
textContent[0].children[1].textContent = siteContent["main-content"]["features-content"];

textContent[1].children[0].textContent = siteContent["main-content"]["about-h4"];
textContent[1].children[1].textContent = siteContent["main-content"]["about-content"];

// Bottom Content
textContent[2].children[0].textContent = siteContent["main-content"]["services-h4"];
textContent[2].children[1].textContent = siteContent["main-content"]["services-content"];

textContent[3].children[0].textContent = siteContent["main-content"]["product-h4"];
textContent[3].children[1].textContent = siteContent["main-content"]["product-content"];

textContent[4].children[0].textContent = siteContent["main-content"]["vision-h4"];
textContent[4].children[1].textContent = siteContent["main-content"]["vision-content"];