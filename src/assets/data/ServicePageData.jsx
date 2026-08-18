import React from 'react';

const ServicePageData = {
    heroSection : {
        hero_section_heading_f:'Professional ',
        hero_highlight_text :'web solutions ',
        hero_section_heading_l:'designed for modern businesses',
        hero_small_title:'OUR SERVICES',
        hero_desc:'We provide end-to-end web development, UI/UX design, SEO, and digital solutions that help businesses improve visibility, increase conversions, and accelerate long-term growth.',
        hero_button_text: false,
        hero_bg_uri:'/src/assets/servicesPageHero.jpg'  
    },
    cardData: [
       {
            small_title: 'Development',
            title: 'Web Development',
            icon:'',
            desc: 'We build fast, secure, and scalable websites tailored to your business objectives. Every solution is developed using modern technologies and industry best practices to ensure outstanding performance, security, and future scalability.',
            button_text:'Web Development',
            button_link: "/web-development",
            list_data: ['Custom Website Development','Business & Corporate Websites','Responsive Mobile-First Design', 'CMS & Admin Dashboard', 'API Integration','Performance Optimization']
        }, 
        {
            small_title: 'design',
            title: 'UI/UX Design',
            icon:'',
            desc: 'Our design process focuses on creating intuitive digital experiences that improve usability, strengthen brand identity, and maximize user engagement across every device.',
            button_text:'about UI/UX Design',
            button_link: "/ui-ux-design",
            list_data: ['User Experience Research','Wireframing & Prototyping','Design Systems', 'Responsive Layout Design', 'Accessibility Best Practices']
        }, 
        {
            small_title: 'Writing',
            title: 'Content Strategy & Copywriting',
            icon:'',
            desc: 'High-quality content builds trust, improves search visibility, and converts visitors into customers. We create compelling website content that communicates your value and supports your marketing goals.',
            button_text:'about Content Writing',
            button_link: "/content-writing",
            list_data: ['Website Copywriting','Landing Page Content','SEO Content Writing', 'Service Page Copy', 'Blog Content','Brand Messaging']
        }, 
        {
            small_title: 'SEO',
            title: 'SEO Optimization',
            icon:'',
            desc: 'We optimize websites to improve search engine visibility, increase qualified traffic, and generate sustainable business growth through proven SEO strategies.',
            button_text:'about SEO ',
            button_link: "/about-SEO",
            list_data: ['Technical SEO Audits','On-Page Optimization','Website Speed Optimization', 'Keyword Strategy', 'Local SEO','Performance Reporting']
        }, 
    ]
};

export default ServicePageData;