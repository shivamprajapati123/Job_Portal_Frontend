import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import company_icon from "./company_icon.svg";
import microsoft_logo from "./microsoft_logo.svg";
import walmart_logo from "./walmart_logo.svg";
import accenture_logo from "./accenture_logo.png";
import profile_img from "./profile_img.png";
import app_main_img from "./app_main_img.png";
import cross_icon from './cross_icon.svg';
import location_icon from './location_icon.svg';
import money_icon from './money_icon.svg';
import suitcase_icon from './suitcase_icon.svg';
import person_icon from './person_icon.svg';
import upload_area from './upload_area.svg';
import resume_selected from './resume_selected.svg';
import resume_not_selected from './resume_not_selected.svg';
import play_store from './play_store.svg';
import app_store from './app_store.svg';
import back_arrow_icon from './back_arrow_icon.svg';
import left_arrow_icon from './left_arrow_icon.svg';
import right_arrow_icon from './right_arrow_icon.svg';
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import profile_upload_icon from './profile_upload_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import resume_download_icon from './resume_download_icon.svg'
import delete_icon from './delete_icon.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import samsung_logo from './samsung_logo.png'
import adobe_logo from './adobe_logo.png'
import amazon_logo from './amazon_logo.png'
import main_img from './main_img.png'

export const assets = {
    logo,
    search_icon,
    cross_icon,
    upload_area,
    company_icon,
    resume_not_selected,
    resume_selected,
    microsoft_logo,
    walmart_logo,
    accenture_logo,
    app_main_img,
    play_store,
    app_store,
    back_arrow_icon,
    left_arrow_icon,
    right_arrow_icon,
    location_icon,
    money_icon,
    suitcase_icon,
    person_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    home_icon,
    main_img,
    add_icon,
    person_tick_icon,
    resume_download_icon,
    profile_img,
    delete_icon,
    profile_upload_icon,
    email_icon,
    lock_icon,
    samsung_logo,
    adobe_logo,
    amazon_logo
}

export const JobCategories = [
    "Software Development",
    "Data Science",
    "UI/UX Design",
    "Project Management",
    "Cybersecurity",
    "Cloud Computing",
    "Business Analysis",
    "DevOps",
];

export const JobLocations = [
    "Bangalore",
    "Hyderabad",
    "Mumbai",
    "Chennai",
    "Delhi",
    "Kolkata",
    "Gurgaon",
]

export const filterCategory = [
    "Category",
    "Location",
    "Company"
]

// Sample data for Manage Jobs Page
export const manageJobsData = [
    { _id: 1, title: "Full Stack Developer", date: 1729102298497, location: "Bangalore", applicants: 20 },
    { _id: 2, title: "Data Scientist", date: 1729102298497, location: "San Francisco", applicants: 15 },
    { _id: 3, title: "Marketing Manager", date: 1729102298497, location: "London", applicants: 2 },
    { _id: 4, title: "UI/UX Designer", date: 1729102298497, location: "Dubai", applicants: 25 }
];

// Sample data for Profile Page
export const jobsApplied = [
    {
        company: 'Amazon',
        title: 'Full Stack Developer',
        location: 'Bangalore',
        date: '22 Aug, 2024',
        status: 'Pending',
        logo: company_icon,
    },
    {
        company: 'Meta',
        title: 'Data Scientist',
        location: 'San Francisco',
        date: '22 Aug, 2024',
        status: 'Rejected',
        logo: company_icon,
    },
    {
        company: 'Google',
        title: 'Marketing Manager',
        location: 'London',
        date: '25 Sep, 2024',
        status: 'Accepted',
        logo: company_icon,
    },
    {
        company: 'Qualcomm',
        title: 'UI/UX Designer',
        location: 'Dubai',
        date: '15 Oct, 2024',
        status: 'Pending',
        logo: company_icon,
    },
    {
        company: 'Microsoft',
        title: 'Full Stack Developer',
        location: 'Hyderabad',
        date: '25 Sep, 2024',
        status: 'Accepted',
        logo: company_icon,
    },
];

export const viewApplicationsPageData = [
    { _id: 1, name: "Richard Sanford", jobTitle: "Full Stack Developer", location: "Bangalore", imgSrc: profile_img },
    { _id: 2, name: "Enrique Murphy", jobTitle: "Data Scientist", location: "San Francisco", imgSrc: profile_img },
    { _id: 3, name: "Alison Powell", jobTitle: "Marketing Manager", location: "London", imgSrc: profile_img },
    { _id: 4, name: "Richard Sanford", jobTitle: "UI/UX Designer", location: "Dubai", imgSrc: profile_img },
    { _id: 5, name: "Enrique Murphy", jobTitle: "Full Stack Developer", location: "Hyderabad", imgSrc: profile_img },
    { _id: 6, name: "Alison Powell", jobTitle: "Data Scientist", location: "New Delhi", imgSrc: profile_img },
    { _id: 7, name: "Richard Sanford", jobTitle: "Marketing Manager", location: "Chennai", imgSrc: profile_img },
];

export const jobsData = [
    {
        _id: '1',
        title: "Full Stack Developer",
        location: "Bangalore",
        level: "Senior",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359d2",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candidate will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
        salary: 82000,
        date: 1729411667114,
        category: "Software Development",
    },
    {
        _id: '2',
        title: "Data Scientist",
        location: "Hyderabad",
        level: "Moderate",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join our analytics team to help drive business decisions using data. As a Data Scientist, you will leverage your analytical skills to uncover patterns and insights that will influence our strategic direction. You will work closely with stakeholders to understand their needs and deliver impactful analyses that support our growth objectives. Your role is critical in turning data into actionable insights.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Analyze large datasets to uncover trends and patterns that inform business strategies.</li>
            <li>Develop predictive models to forecast outcomes and improve decision-making.</li>
            <li>Visualize data findings through reports and dashboards for stakeholders.</li>
            <li>Collaborate with cross-functional teams to define data-driven goals.</li>
            <li>Continuously refine data collection and analysis processes to enhance accuracy.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in Python or R for statistical analysis and data manipulation.</li>
            <li>Experience with data visualization tools (e.g., Tableau, Power BI).</li>
            <li>Strong knowledge of SQL and database management.</li>
            <li>Familiarity with machine learning techniques and algorithms.</li>
            <li>Excellent problem-solving and critical-thinking skills.</li>
        </ol>`,
        salary: 72000,
        date: 1729681667114,
        category: "Data Science",
    },
    {
        _id: '3',
        title: "UI/UX Designer",
        location: "Mumbai",
        level: "Beginner",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Create intuitive digital experiences as a UI/UX Designer. In this role, you will collaborate with product teams to design engaging user interfaces and ensure a seamless user journey. Your creativity and attention to detail will be crucial in developing designs that not only look good but also enhance functionality and user satisfaction.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Conduct user research and usability testing to gather insights on user needs.</li>
            <li>Create wireframes, prototypes, and high-fidelity designs that communicate user flows.</li>
            <li>Collaborate with development teams to implement designs effectively.</li>
            <li>Stay updated with industry trends and best practices in UI/UX design.</li>
            <li>Gather and analyze user feedback to iterate and improve designs.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in design tools like Figma, Sketch, or Adobe XD.</li>
            <li>Strong understanding of user-centered design principles.</li>
            <li>Basic knowledge of HTML/CSS for better collaboration with developers.</li>
            <li>Excellent communication and teamwork skills.</li>
            <li>Creative problem-solving abilities.</li>
        </ol>`,
        salary: 61000,
        date: 1729681667114,
        category: "UI/UX Design",
    },
    {
        _id: '4',
        title: "DevOps Engineer",
        location: "Chennai",
        level: "Senior",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Enhance our deployment pipeline as a DevOps Engineer. This role will involve automating deployment processes, managing cloud infrastructure, and implementing best practices for security and performance. You will play a vital role in bridging the gap between development and operations, ensuring efficient workflows and high-quality releases.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Automate deployment processes using CI/CD tools to streamline development workflows.</li>
            <li>Manage cloud infrastructure, ensuring optimal performance and scalability.</li>
            <li>Implement security best practices to safeguard our systems.</li>
            <li>Monitor application performance and troubleshoot issues proactively.</li>
            <li>Collaborate with developers to improve system reliability and efficiency.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Experience with CI/CD tools (e.g., Jenkins, GitLab CI).</li>
            <li>Strong knowledge of cloud platforms (e.g., AWS, Azure).</li>
            <li>Proficiency in scripting languages (e.g., Bash, Python).</li>
            <li>Familiarity with containerization technologies (e.g., Docker, Kubernetes).</li>
            <li>Excellent troubleshooting and analytical skills.</li>
        </ol>`,
        salary: 53000,
        date: 1729681667114,
        category: "DevOps",
    },
    {
        _id: '5',
        title: "Software Engineer",
        location: "Delhi",
        level: "Moderate",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join our team as a Software Engineer to build high-quality applications that deliver exceptional user experiences. You will be responsible for designing, developing, and maintaining software solutions that meet business needs. Collaborating closely with other engineers, you will contribute to code reviews and ensure best practices are followed throughout the development process.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop and maintain software applications that fulfill user requirements.</li>
            <li>Collaborate with cross-functional teams to design scalable and efficient solutions.</li>
            <li>Participate in code reviews to ensure code quality and maintainability.</li>
            <li>Conduct testing and debugging to improve application functionality.</li>
            <li>Document development processes and application designs.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficient in Java or C# with a solid understanding of object-oriented programming.</li>
            <li>Experience with Agile methodologies and software development life cycle.</li>
            <li>Strong problem-solving skills and attention to detail.</li>
            <li>Familiarity with version control systems (e.g., Git).</li>
            <li>Excellent communication and teamwork abilities.</li>
        </ol>`,
        salary: 91000,
        date: 1729681667114,
        category: "Software Development",
    },
    {
        _id: '6',
        title: "Cloud Architect",
        location: "Kolkata",
        level: "Senior",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Design cloud solutions as a Cloud Architect, helping to transform our infrastructure and services. You will work closely with various teams to understand their requirements and translate them into secure, scalable, and efficient cloud-based solutions. Your expertise will guide our cloud strategy and ensure that we leverage cloud technologies to their fullest potential.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design and implement cloud solutions that align with business objectives.</li>
            <li>Provide guidance on best practices for cloud architecture and deployment.</li>
            <li>Collaborate with DevOps teams to enhance cloud infrastructure and security.</li>
            <li>Monitor cloud systems for performance and cost-effectiveness.</li>
            <li>Stay updated on emerging cloud technologies and industry trends.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong knowledge of cloud service providers (e.g., AWS, Azure, GCP).</li>
            <li>Experience with cloud architecture patterns and best practices.</li>
            <li>Familiarity with containerization and orchestration technologies (e.g., Docker, Kubernetes).</li>
            <li>Excellent analytical and problem-solving skills.</li>
            <li>Relevant certifications (e.g., AWS Certified Solutions Architect) are preferred.</li>
        </ol>`,
        salary: 96000,
        date: 1729681667114,
        category: "Cloud Computing",
    },
    {
        _id: '7',
        title: "Business Analyst",
        location: "Gurgaon",
        level: "Moderate",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join us as a Business Analyst to optimize our processes and improve overall efficiency. You will work closely with stakeholders to identify business needs and gather requirements for new projects. Your analytical skills will help drive decision-making and ensure that solutions align with business objectives.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Gather and analyze business requirements from stakeholders.</li>
            <li>Develop detailed documentation of business processes and workflows.</li>
            <li>Collaborate with IT and development teams to translate requirements into solutions.</li>
            <li>Conduct testing and validation of new systems and processes.</li>
            <li>Provide ongoing support and training for users.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong analytical skills and attention to detail.</li>
            <li>Proficiency in business analysis tools (e.g., Visio, JIRA).</li>
            <li>Excellent communication and interpersonal abilities.</li>
            <li>Experience with data analysis and reporting.</li>
            <li>Familiarity with Agile methodologies is a plus.</li>
        </ol>`,
        salary: 68000,
        date: 1729681667114,
        category: "Business Analysis",
    },
    {
        _id: '8',
        title: "Project Manager",
        location: "Noida",
        level: "Senior",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Lead projects as a Project Manager ensuring timely delivery and alignment with organizational goals. You will oversee project planning, execution, and monitoring, collaborating with various teams to ensure that all aspects of each project are delivered successfully. Your strong leadership skills will be key to motivating team members and fostering a positive work environment.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Define project scope, objectives, and deliverables in collaboration with stakeholders.</li>
            <li>Develop detailed project plans and schedules to guide execution.</li>
            <li>Monitor project progress and adjust plans as necessary to meet deadlines.</li>
            <li>Facilitate communication between teams and manage stakeholder expectations.</li>
            <li>Conduct project retrospectives to identify lessons learned and areas for improvement.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proven experience as a Project Manager in a technology-focused environment.</li>
            <li>Familiarity with project management software (e.g., JIRA, Trello).</li>
            <li>Strong leadership and organizational skills.</li>
            <li>Excellent communication and interpersonal abilities.</li>
            <li>Certification in project management (e.g., PMP, Scrum Master) is preferred.</li>
        </ol>`,
        salary: 60000,
        date: 1729681667114,
        category: "Project Management",
    },
    {
        _id: '9',
        title: "Cybersecurity Analyst",
        location: "Bangalore",
        level: "Moderate",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Protect our systems as a Cybersecurity Analyst. In this role, you will monitor security systems, analyze potential threats, and implement protective measures to safeguard our information and assets. Your expertise will help us stay ahead of evolving security challenges and maintain a secure environment for our users and stakeholders.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Monitor and analyze security events to identify potential threats.</li>
            <li>Conduct risk assessments and vulnerability analyses to enhance security posture.</li>
            <li>Implement security measures and controls to mitigate risks.</li>
            <li>Collaborate with IT teams to respond to security incidents.</li>
            <li>Stay informed about the latest cybersecurity trends and threats.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong knowledge of security protocols, standards, and tools.</li>
            <li>Experience with SIEM tools and incident response processes.</li>
            <li>Understanding of network protocols and security technologies.</li>
            <li>Excellent problem-solving and analytical skills.</li>
            <li>Relevant certifications (e.g., CISSP, CEH) are a plus.</li>
        </ol>`,
        salary: 62000,
        date: 1729681667114,
        category: "Cybersecurity",
    },

    // ...previous jobs (1-9)...
    {
        _id: '10',
        title: "Cloud Architect",
        location: "Kolkata",
        level: "Senior",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Design cloud solutions as a Cloud Architect, helping to transform our infrastructure and services. You will work closely with various teams to understand their requirements and translate them into secure, scalable, and efficient cloud-based solutions. Your expertise will guide our cloud strategy and ensure that we leverage cloud technologies to their fullest potential.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design and implement cloud solutions that align with business objectives.</li>
            <li>Provide guidance on best practices for cloud architecture and deployment.</li>
            <li>Collaborate with DevOps teams to enhance cloud infrastructure and security.</li>
            <li>Monitor cloud systems for performance and cost-effectiveness.</li>
            <li>Stay updated on emerging cloud technologies and industry trends.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong knowledge of cloud service providers (e.g., AWS, Azure, GCP).</li>
            <li>Experience with cloud architecture patterns and best practices.</li>
            <li>Familiarity with containerization and orchestration technologies (e.g., Docker, Kubernetes).</li>
            <li>Excellent analytical and problem-solving skills.</li>
            <li>Relevant certifications (e.g., AWS Certified Solutions Architect) are preferred.</li>
        </ol>`,
        salary: 96000,
        date: 1729681667114,
        category: "Cloud Computing",
    },
    {
        _id: '11',
        title: "Business Analyst",
        location: "Gurgaon",
        level: "Moderate",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join us as a Business Analyst to optimize our processes and improve overall efficiency. You will work closely with stakeholders to identify business needs and gather requirements for new projects. Your analytical skills will help drive decision-making and ensure that solutions align with business objectives.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Gather and analyze business requirements from stakeholders.</li>
            <li>Develop detailed documentation of business processes and workflows.</li>
            <li>Collaborate with IT and development teams to translate requirements into solutions.</li>
            <li>Conduct testing and validation of new systems and processes.</li>
            <li>Provide ongoing support and training for users.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong analytical skills and attention to detail.</li>
            <li>Proficiency in business analysis tools (e.g., Visio, JIRA).</li>
            <li>Excellent communication and interpersonal abilities.</li>
            <li>Experience with data analysis and reporting.</li>
            <li>Familiarity with Agile methodologies is a plus.</li>
        </ol>`,
        salary: 68000,
        date: 1729681667114,
        category: "Business Analysis",
    },
    {
        _id: '12',
        title: "Project Manager",
        location: "Noida",
        level: "Senior",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Lead projects as a Project Manager ensuring timely delivery and alignment with organizational goals. You will oversee project planning, execution, and monitoring, collaborating with various teams to ensure that all aspects of each project are delivered successfully. Your strong leadership skills will be key to motivating team members and fostering a positive work environment.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Define project scope, objectives, and deliverables in collaboration with stakeholders.</li>
            <li>Develop detailed project plans and schedules to guide execution.</li>
            <li>Monitor project progress and adjust plans as necessary to meet deadlines.</li>
            <li>Facilitate communication between teams and manage stakeholder expectations.</li>
            <li>Conduct project retrospectives to identify lessons learned and areas for improvement.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proven experience as a Project Manager in a technology-focused environment.</li>
            <li>Familiarity with project management software (e.g., JIRA, Trello).</li>
            <li>Strong leadership and organizational skills.</li>
            <li>Excellent communication and interpersonal abilities.</li>
            <li>Certification in project management (e.g., PMP, Scrum Master) is preferred.</li>
        </ol>`,
        salary: 60000,
        date: 1729681667114,
        category: "Project Management",
    },
    {
        _id: '13',
        title: "Cybersecurity Analyst",
        location: "Bangalore",
        level: "Moderate",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Protect our systems as a Cybersecurity Analyst. In this role, you will monitor security systems, analyze potential threats, and implement protective measures to safeguard our information and assets. Your expertise will help us stay ahead of evolving security challenges and maintain a secure environment for our users and stakeholders.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Monitor and analyze security events to identify potential threats.</li>
            <li>Conduct risk assessments and vulnerability analyses to enhance security posture.</li>
            <li>Implement security measures and controls to mitigate risks.</li>
            <li>Collaborate with IT teams to respond to security incidents.</li>
            <li>Stay informed about the latest cybersecurity trends and threats.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong knowledge of security protocols, standards, and tools.</li>
            <li>Experience with SIEM tools and incident response processes.</li>
            <li>Understanding of network protocols and security technologies.</li>
            <li>Excellent problem-solving and analytical skills.</li>
            <li>Relevant certifications (e.g., CISSP, CEH) are a plus.</li>
        </ol>`,
        salary: 62000,
        date: 1729681667114,
        category: "Cybersecurity",
    },
    {
        _id: '14',
        title: "Data Scientist",
        location: "Bangalore",
        level: "Senior",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join our innovative team as a Data Scientist, where you will analyze complex data sets to drive strategic decision-making. You will leverage your statistical and programming skills to uncover insights and develop predictive models, contributing to the overall success of our organization.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Analyze large datasets to identify trends, patterns, and anomalies.</li>
            <li>Develop and implement predictive models and algorithms.</li>
            <li>Collaborate with cross-functional teams to understand business needs and provide data-driven solutions.</li>
            <li>Visualize data findings and present insights to stakeholders.</li>
            <li>Stay current with industry trends and best practices in data science.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in programming languages such as Python or R.</li>
            <li>Strong knowledge of statistical methods and machine learning techniques.</li>
            <li>Experience with data visualization tools (e.g., Tableau, Power BI).</li>
            <li>Excellent problem-solving skills and attention to detail.</li>
            <li>Ability to communicate complex concepts to non-technical audiences.</li>
        </ol>`,
        salary: 65000,
        date: 1729681667114,
        category: "Data Science",
    },
    {
        _id: '15',
        title: "UI/UX Designer",
        location: "Hyderabad",
        level: "Moderate",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>We are seeking a talented UI/UX Designer to enhance our user experience across digital platforms. You will collaborate with product managers and developers to create intuitive and engaging interfaces that meet user needs and improve overall satisfaction.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Conduct user research and usability testing to inform design decisions.</li>
            <li>Create wireframes, prototypes, and high-fidelity mockups for web and mobile applications.</li>
            <li>Work closely with development teams to ensure designs are implemented accurately.</li>
            <li>Iterate on designs based on user feedback and analytics.</li>
            <li>Stay updated on design trends and best practices in UI/UX.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in design tools such as Sketch, Figma, or Adobe XD.</li>
            <li>Strong understanding of user-centered design principles.</li>
            <li>Experience with responsive and adaptive design techniques.</li>
            <li>Excellent communication skills and ability to work collaboratively.</li>
            <li>A portfolio showcasing relevant design projects is required.</li>
        </ol>`,
        salary: 64000,
        date: 1729681667114,
        category: "UI/UX Design",
    },
    {
        _id: '16',
        title: "DevOps Engineer",
        location: "Bangalore",
        level: "Senior",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>As a DevOps Engineer, you will play a crucial role in enhancing our software development and deployment processes. You will work with development and operations teams to automate workflows, improve system reliability, and ensure seamless integration and delivery of applications.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design and implement CI/CD pipelines to automate application deployment.</li>
            <li>Monitor system performance and troubleshoot issues proactively.</li>
            <li>Collaborate with development teams to improve software development lifecycle.</li>
            <li>Implement infrastructure as code using tools like Terraform or Ansible.</li>
            <li>Ensure security best practices are followed in the deployment process.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong experience with cloud platforms (AWS, Azure, or GCP).</li>
            <li>Proficiency in scripting languages such as Bash or Python.</li>
            <li>Familiarity with containerization tools like Docker and orchestration platforms like Kubernetes.</li>
            <li>Excellent troubleshooting and problem-solving skills.</li>
            <li>Relevant certifications (e.g., AWS Certified DevOps Engineer) are a plus.</li>
        </ol>`,
        salary: 74000,
        date: 1729681667114,
        category: "DevOps",
    },
    {
        _id: '17',
        title: "Cloud Engineer",
        location: "Chennai",
        level: "Moderate",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join our technology team as a Cloud Engineer, where you will be responsible for designing and managing our cloud infrastructure. You will collaborate with development and operations teams to ensure the efficient deployment and scaling of applications.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design and implement cloud solutions using AWS, Azure, or Google Cloud Platform.</li>
            <li>Monitor and optimize cloud resources for performance and cost efficiency.</li>
            <li>Work with DevOps teams to automate deployment processes.</li>
            <li>Ensure cloud security and compliance with industry standards.</li>
            <li>Provide technical support and troubleshooting for cloud-based applications.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Experience with cloud platforms and services.</li>
            <li>Proficiency in scripting languages such as Python or Bash.</li>
            <li>Strong understanding of networking concepts and security.</li>
            <li>Experience with container orchestration tools like Kubernetes.</li>
            <li>Good problem-solving skills and attention to detail.</li>
        </ol>`,
        salary: 102000,
        date: 1729681667114,
        category: "Cloud Computing",
    },
    {
        _id: '18',
        title: "Business Analyst",
        location: "Gurgaon",
        level: "Moderate",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join us as a Business Analyst to optimize our processes and improve overall efficiency. You will work closely with stakeholders to identify business needs and gather requirements for new projects. Your analytical skills will help drive decision-making and ensure that solutions align with business objectives.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Gather and analyze business requirements from stakeholders.</li>
            <li>Develop detailed documentation of business processes and workflows.</li>
            <li>Collaborate with IT and development teams to translate requirements into solutions.</li>
            <li>Conduct testing and validation of new systems and processes.</li>
            <li>Provide ongoing support and training for users.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong analytical skills and attention to detail.</li>
            <li>Proficiency in business analysis tools (e.g., Visio, JIRA).</li>
            <li>Excellent communication and interpersonal abilities.</li>
            <li>Experience with data analysis and reporting.</li>
            <li>Familiarity with Agile methodologies is a plus.</li>
        </ol>`,
        salary: 68000,
        date: 1729681667114,
        category: "Business Analysis",
    },
    {
        _id: '19',
        title: "Project Manager",
        location: "Delhi",
        level: "Senior",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Lead projects as a Project Manager ensuring timely delivery and alignment with organizational goals. You will oversee project planning, execution, and monitoring, collaborating with various teams to ensure that all aspects of each project are delivered successfully. Your strong leadership skills will be key to motivating team members and fostering a positive work environment.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Define project scope, objectives, and deliverables in collaboration with stakeholders.</li>
            <li>Develop detailed project plans and schedules to guide execution.</li>
            <li>Monitor project progress and adjust plans as necessary to meet deadlines.</li>
            <li>Facilitate communication between teams and manage stakeholder expectations.</li>
            <li>Conduct project retrospectives to identify lessons learned and areas for improvement.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proven experience as a Project Manager in a technology-focused environment.</li>
            <li>Familiarity with project management software (e.g., JIRA, Trello).</li>
            <li>Strong leadership and organizational skills.</li>
            <li>Excellent communication and interpersonal abilities.</li>
            <li>Certification in project management (e.g., PMP, Scrum Master) is preferred.</li>
        </ol>`,
        salary: 60000,
        date: 1729681667114,
        category: "Project Management",
    },
    {
        _id: '20',
        title: "Cybersecurity Analyst",
        location: "Kolkata",
        level: "Moderate",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Protect our systems as a Cybersecurity Analyst. In this role, you will monitor security systems, analyze potential threats, and implement protective measures to safeguard our information and assets. Your expertise will help us stay ahead of evolving security challenges and maintain a secure environment for our users and stakeholders.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Monitor and analyze security events to identify potential threats.</li>
            <li>Conduct risk assessments and vulnerability analyses to enhance security posture.</li>
            <li>Implement security measures and controls to mitigate risks.</li>
            <li>Collaborate with IT teams to respond to security incidents.</li>
            <li>Stay informed about the latest cybersecurity trends and threats.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong knowledge of security protocols, standards, and tools.</li>
            <li>Experience with SIEM tools and incident response processes.</li>
            <li>Understanding of network protocols and security technologies.</li>
            <li>Excellent problem-solving and analytical skills.</li>
            <li>Relevant certifications (e.g., CISSP, CEH) are a plus.</li>
        </ol>`,
        salary: 62000,
        date: 1729681667114,
        category: "Cybersecurity",
    },
    {
        _id: '21',
        title: "Software Developer",
        location: "Mumbai",
        level: "Moderate",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join our team as a Software Developer to build high-quality applications that deliver exceptional user experiences. You will be responsible for designing, developing, and maintaining software solutions that meet business needs. Collaborating closely with other engineers, you will contribute to code reviews and ensure best practices are followed throughout the development process.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop and maintain software applications that fulfill user requirements.</li>
            <li>Collaborate with cross-functional teams to design scalable and efficient solutions.</li>
            <li>Participate in code reviews to ensure code quality and maintainability.</li>
            <li>Conduct testing and debugging to improve application functionality.</li>
            <li>Document development processes and application designs.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficient in Java or C# with a solid understanding of object-oriented programming.</li>
            <li>Experience with Agile methodologies and software development life cycle.</li>
            <li>Strong problem-solving skills and attention to detail.</li>
            <li>Familiarity with version control systems (e.g., Git).</li>
            <li>Excellent communication and teamwork abilities.</li>
        </ol>`,
        salary: 91000,
        date: 1729681667114,
        category: "Software Development",
    },
    {
        _id: '22',
        title: "Cloud Architect",
        location: "Hyderabad",
        level: "Senior",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Design cloud solutions as a Cloud Architect, helping to transform our infrastructure and services. You will work closely with various teams to understand their requirements and translate them into secure, scalable, and efficient cloud-based solutions. Your expertise will guide our cloud strategy and ensure that we leverage cloud technologies to their fullest potential.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design and implement cloud solutions that align with business objectives.</li>
            <li>Provide guidance on best practices for cloud architecture and deployment.</li>
            <li>Collaborate with DevOps teams to enhance cloud infrastructure and security.</li>
            <li>Monitor cloud systems for performance and cost-effectiveness.</li>
            <li>Stay updated on emerging cloud technologies and industry trends.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong knowledge of cloud service providers (e.g., AWS, Azure, GCP).</li>
            <li>Experience with cloud architecture patterns and best practices.</li>
            <li>Familiarity with containerization and orchestration technologies (e.g., Docker, Kubernetes).</li>
            <li>Excellent analytical and problem-solving skills.</li>
            <li>Relevant certifications (e.g., AWS Certified Solutions Architect) are preferred.</li>
        </ol>`,
        salary: 96000,
        date: 1729681667114,
        category: "Cloud Computing",
    },
    {
        _id: '23',
        title: "Frontend Engineer",
        location: "Bangalore",
        level: "Moderate",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
    <p>We are looking for a talented Frontend Engineer to join our growing team. You will be responsible for building visually appealing and highly usable web interfaces that delight our users. You will collaborate closely with designers and backend engineers to deliver seamless user experiences and ensure our applications are fast, responsive, and accessible.</p>
    <h2><strong>Key Responsibilities</strong></h2>
    <ol>
        <li>Develop and maintain modern, responsive web applications using React.js and related technologies.</li>
        <li>Work with UI/UX designers to translate designs and wireframes into high-quality code.</li>
        <li>Optimize applications for maximum speed and scalability.</li>
        <li>Ensure the technical feasibility of UI/UX designs and maintain cross-browser compatibility.</li>
        <li>Participate in code reviews and contribute to a culture of continuous improvement.</li>
    </ol>
    <h2><strong>Skills Required</strong></h2>
    <ol>
        <li>Strong proficiency in JavaScript, HTML5, and CSS3.</li>
        <li>Experience with React.js and state management libraries (e.g., Redux).</li>
        <li>Familiarity with RESTful APIs and modern front-end build pipelines and tools.</li>
        <li>Understanding of accessibility and web performance best practices.</li>
        <li>Excellent problem-solving skills and attention to detail.</li>
    </ol>`,
        salary: 78000,
        date: 1729681667114,
        category: "Software Development",
    },
    {
        _id: '24',
        title: "Software Developer",
        location: "Kolkata",
        level: "Moderate",
        companyId: {
            _id: "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
    <p>We are seeking a passionate Software Developer to join our growing engineering team. As part of this role, you will be responsible for designing, developing, and maintaining software solutions aligned with user needs and business goals. Your expertise in coding and logical problem-solving will contribute to the creation of scalable and efficient software.</p>
    <h2><strong>Key Responsibilities</strong></h2>
    <ol>
      <li>Write clean, scalable, and efficient code across various platforms.</li>
      <li>Collaborate with cross-functional teams to define software requirements and specifications.</li>
      <li>Participate in code reviews, debugging, and testing activities.</li>
      <li>Stay up-to-date with emerging trends and technologies in software development.</li>
      <li>Continuously improve the performance, scalability, and maintainability of our systems.</li>
    </ol>
    <h2><strong>Skills Required</strong></h2>
    <ol>
      <li>Strong foundation in object-oriented programming and software development principles.</li>
      <li>Experience with languages such as JavaScript, Python, or Java.</li>
      <li>Familiarity with version control tools like Git.</li>
      <li>Understanding of databases, APIs, and web frameworks.</li>
      <li>Good problem-solving and communication skills.</li>
    </ol>`,
        salary: 45000,
        date: 1729681667114,
        category: "Software Development",
    },
    {
        _id: '25',
        title: "Data Scientist",
        location: "Hyderabad",
        level: "Senior",
        companyId: {
            _id: "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
    <p>Join our data science team and leverage advanced analytics and machine learning to uncover actionable insights. As a Data Scientist, you will be at the forefront of interpreting large volumes of data to support strategic decision-making across the organization. You will work closely with engineers and business analysts to translate data into meaningful solutions.</p>
    <h2><strong>Key Responsibilities</strong></h2>
    <ol>
      <li>Develop predictive models and algorithms using machine learning techniques.</li>
      <li>Analyze structured and unstructured data to identify patterns and trends.</li>
      <li>Visualize data insights through dashboards and reporting tools.</li>
      <li>Collaborate with stakeholders to gather requirements and define KPIs.</li>
      <li>Stay current with latest tools, techniques, and research in the field.</li>
    </ol>
    <h2><strong>Skills Required</strong></h2>
    <ol>
      <li>Proficiency in Python, R, or Scala for data analysis.</li>
      <li>Experience with ML libraries like scikit-learn, TensorFlow, or PyTorch.</li>
      <li>Strong background in statistics and data modeling.</li>
      <li>Familiarity with SQL and data visualization tools (e.g., Tableau).</li>
      <li>Excellent communication and storytelling skills.</li>
    </ol>`,
        salary: 70000,
        date: 1729681667114,
        category: "Data Science",
    },
    {
        _id: '26',
        title: "UI/UX Designer",
        location: "Mumbai",
        level: "Moderate",
        companyId: {
            _id: "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
    <p>As a UI/UX Designer, you will play a crucial role in enhancing the user experience of our digital products. You will work on wireframes, prototypes, and final design outputs that are both functional and aesthetically appealing. Your creative thinking and attention to detail will help shape intuitive interfaces that meet user needs.</p>
    <h2><strong>Key Responsibilities</strong></h2>
    <ol>
      <li>Create wireframes, mockups, and user flows for web and mobile applications.</li>
      <li>Conduct user research, testing, and usability assessments.</li>
      <li>Collaborate with developers to implement designs accurately.</li>
      <li>Ensure consistency of visual elements across platforms.</li>
      <li>Incorporate feedback into iterative design improvements.</li>
    </ol>
    <h2><strong>Skills Required</strong></h2>
    <ol>
      <li>Expertise in design tools such as Figma, Adobe XD, or Sketch.</li>
      <li>Understanding of user-centered design principles.</li>
      <li>Knowledge of HTML/CSS is a plus.</li>
      <li>Good communication and storytelling ability.</li>
      <li>Strong portfolio showcasing previous work.</li>
    </ol>`,
        salary: 50000,
        date: 1729681667114,
        category: "UI/UX Design",
    },
    {
        _id: '27',
        title: "Cybersecurity Analyst",
        location: "Chennai",
        level: "Senior",
        companyId: {
            _id: "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
    <p>We are hiring an experienced Cybersecurity Analyst to safeguard our digital infrastructure. You will assess threats, conduct risk analyses, and design security measures to protect sensitive data. Your work will be critical in maintaining trust with our users and clients by ensuring robust cybersecurity practices.</p>
    <h2><strong>Key Responsibilities</strong></h2>
    <ol>
      <li>Monitor networks and systems for security breaches and intrusions.</li>
      <li>Identify vulnerabilities and implement security solutions.</li>
      <li>Conduct regular audits and penetration testing.</li>
      <li>Stay up-to-date on latest cybersecurity threats and best practices.</li>
      <li>Collaborate with IT and compliance teams to ensure system integrity.</li>
    </ol>
    <h2><strong>Skills Required</strong></h2>
    <ol>
      <li>Proficiency in tools like Wireshark, Metasploit, and Splunk.</li>
      <li>Strong knowledge of firewalls, VPNs, IDS/IPS.</li>
      <li>Understanding of regulatory standards like ISO 27001 or GDPR.</li>
      <li>Relevant certifications such as CEH, CISSP, or CompTIA Security+.</li>
      <li>Strong analytical and incident response skills.</li>
    </ol>`,
        salary: 65000,
        date: 1729681667114,
        category: "Cybersecurity",
    },
    {
        _id: '28',
        title: "Cloud Engineer",
        location: "Gurgaon",
        level: "Beginner",
        companyId: {
            _id: "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
    <p>We are looking for a skilled Cloud Engineer to manage and maintain cloud-based infrastructure. You will work with modern cloud platforms to ensure scalability, availability, and security. This role is ideal for someone who thrives in a fast-paced environment and enjoys optimizing performance of distributed systems.</p>
    <h2><strong>Key Responsibilities</strong></h2>
    <ol>
      <li>Design and deploy scalable cloud infrastructure using AWS, Azure, or GCP.</li>
      <li>Monitor system performance and troubleshoot issues.</li>
      <li>Implement cloud security measures and disaster recovery plans.</li>
      <li>Automate workflows using scripting and configuration tools.</li>
      <li>Maintain documentation for configurations and procedures.</li>
    </ol>
    <h2><strong>Skills Required</strong></h2>
    <ol>
      <li>Hands-on experience with cloud platforms and tools.</li>
      <li>Familiarity with containerization (Docker, Kubernetes).</li>
      <li>Knowledge of CI/CD pipelines and DevOps practices.</li>
      <li>Strong scripting skills (Bash, Python, etc.).</li>
      <li>Problem-solving and communication skills.</li>
    </ol>`,
        salary: 38000,
        date: 17296816657114,
        category: "Cloud Computing",
    },

    {
        _id: '29',
        title: "Business Analyst",
        location: "Kolkata",
        level: "Moderate",
        companyId: {
            _id: "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
    <p>We are hiring a skilled Business Analyst to drive data-informed decisions and help shape our products. You will work closely with cross-functional teams to identify business problems, recommend solutions, and implement processes that improve productivity and client satisfaction.</p>
    <h2><strong>Key Responsibilities</strong></h2>
    <ol>
      <li>Gather and analyze business requirements through meetings and data analysis.</li>
      <li>Prepare detailed reports and business cases for various stakeholders.</li>
      <li>Bridge the gap between technical teams and business units.</li>
      <li>Continuously evaluate business processes and suggest improvements.</li>
      <li>Support project implementation with testing, documentation, and feedback.</li>
    </ol>
    <h2><strong>Skills Required</strong></h2>
    <ol>
      <li>Strong analytical and problem-solving skills.</li>
      <li>Experience with data tools (Excel, SQL, Power BI).</li>
      <li>Familiarity with Agile methodologies.</li>
      <li>Excellent communication and presentation skills.</li>
      <li>Experience in writing BRDs and functional specs.</li>
    </ol>`,
        salary: 52000,
        date: 1729500000000,
        category: "Business Analysis",
    },
    {
        _id: '30',
        title: "DevOps Engineer",
        location: "Bangalore",
        level: "Beginner",
        companyId: {
            _id: "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
    <p>We’re searching for an experienced DevOps Engineer to enhance our software development and deployment processes. You will be responsible for CI/CD pipelines, infrastructure automation, and system reliability. Join us to build a fast, safe, and scalable development environment.</p>
    <h2><strong>Key Responsibilities</strong></h2>
    <ol>
      <li>Design and maintain CI/CD pipelines for rapid deployments.</li>
      <li>Automate infrastructure using Terraform, Ansible, or similar tools.</li>
      <li>Monitor application health and optimize performance.</li>
      <li>Collaborate with developers and QA for system improvements.</li>
      <li>Implement robust security and compliance practices.</li>
    </ol>
    <h2><strong>Skills Required</strong></h2>
    <ol>
      <li>Experience with tools like Jenkins, Docker, Kubernetes.</li>
      <li>Proficiency in shell scripting and cloud platforms.</li>
      <li>Familiarity with monitoring tools like Prometheus or Grafana.</li>
      <li>Understanding of software development life cycles.</li>
      <li>Strong debugging and system design knowledge.</li>
    </ol>`,
        salary: 35000,
        date: 1729450000000,
        category: "DevOps",
    },
    {
        _id: '31',
        title: "Project Manager",
        location: "Hyderabad",
        level: "Senior",
        companyId: {
            _id: "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
    <p>We are looking for an experienced Project Manager to oversee software development projects. Your ability to lead cross-functional teams and manage timelines will be vital in ensuring delivery of quality solutions that meet business objectives.</p>
    <h2><strong>Key Responsibilities</strong></h2>
    <ol>
      <li>Define scope, goals, and deliverables for each project.</li>
      <li>Create and maintain detailed project plans and documentation.</li>
      <li>Communicate project status with stakeholders and leadership.</li>
      <li>Coordinate internal and external resources for execution.</li>
      <li>Conduct retrospectives and implement continuous improvement.</li>
    </ol>
    <h2><strong>Skills Required</strong></h2>
    <ol>
      <li>Strong knowledge of project management methodologies (Agile/Scrum).</li>
      <li>Experience using project tools like Jira and MS Project.</li>
      <li>Leadership and conflict-resolution capabilities.</li>
      <li>Excellent stakeholder management and reporting.</li>
      <li>PMP or Scrum certification is a plus.</li>
    </ol>`,
        salary: 62000,
        date: 1729400000000,
        category: "Project Management",
    },
    {
        _id: '32',
        title: "Cloud Architect",
        location: "Mumbai",
        level: "Senior",
        companyId: {
            _id: "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
    <p>We are hiring a Cloud Architect to design and implement high-performance cloud environments. You’ll be responsible for aligning cloud infrastructure with organizational goals, ensuring optimal performance, scalability, and security.</p>
    <h2><strong>Key Responsibilities</strong></h2>
    <ol>
      <li>Architect and implement secure, scalable cloud infrastructures.</li>
      <li>Collaborate with product and engineering teams on architecture decisions.</li>
      <li>Define best practices for cloud deployment and usage.</li>
      <li>Ensure compliance with security and governance standards.</li>
      <li>Lead migration strategies for legacy applications.</li>
    </ol>
    <h2><strong>Skills Required</strong></h2>
    <ol>
      <li>Expertise in AWS, Azure, or Google Cloud Platform.</li>
      <li>Proficiency in infrastructure-as-code (Terraform/CloudFormation).</li>
      <li>Solid understanding of network, security, and storage architecture.</li>
      <li>Strong communication and leadership skills.</li>
      <li>Cloud certifications are highly preferred.</li>
    </ol>`,
        salary: 75000,
        date: 1729380000000,
        category: "Cloud Computing",
    },
    {
        _id: '33',
        title: "UI/UX Designer",
        location: "Chennai",
        level: "Moderate",
        companyId: {
            _id: "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
    <p>We are seeking a creative UI/UX Designer to join our team and craft elegant, user-friendly interfaces. Your designs will directly impact user engagement and satisfaction across our digital platforms. Work closely with product managers and developers to bring ideas to life.</p>
    <h2><strong>Key Responsibilities</strong></h2>
    <ol>
      <li>Research and understand user needs and behavior.</li>
      <li>Create wireframes, mockups, and interactive prototypes.</li>
      <li>Design and maintain UI style guides.</li>
      <li>Iterate designs based on feedback and user testing.</li>
      <li>Ensure accessibility and responsiveness across devices.</li>
    </ol>
    <h2><strong>Skills Required</strong></h2>
    <ol>
      <li>Proficiency in Figma, Adobe XD, or similar design tools.</li>
      <li>Strong sense of layout, typography, and color theory.</li>
      <li>Experience in conducting usability testing.</li>
      <li>Good communication and collaboration skills.</li>
      <li>Portfolio demonstrating design process and outcomes.</li>
    </ol>`,
        salary: 49000,
        date: 1729320000000,
        category: "UI/UX Design",
    },
];


