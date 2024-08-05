import {Pagination,} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import {
    indigo,
    teal,
} from "@mui/material/colors";
import pxToRem from "../../assets/theme/functions/pxToRem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MyCarouselItem from "./components/MyCarouselItem";
import TabItem from "./components/TabItem";
import CourseItem from "./components/CourseItem";

export default function HomePage(){

    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image:'alx-slide-10.png'
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image:'alx-slide-9.png'

        },
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image:'alx-slide2-min.png'
        }
    ]

    return (
        <>
            <Carousel
                indicators={true}
                indicatorContainerProps={{
                   style:{
                       zIndex: 3,
                       top: "-10rem",
                       marginBottom:'-4rem',
                       position: "relative",
                   }
                }}
                indicatorIconButtonProps={{
                    style:{
                        scale:'0.7'
                    }
                }}
            >
               {
                   items.map( (item, i) => (<MyCarouselItem item={item} key={i} />))
               }
            </Carousel>
            <Container
                sx={{
                    display:{xs:'none', lg:'block'},
                    width: "100%",
                    height:'7rem',
                    backgroundColor:indigo[900],
                    position:'relative',
                    top:'-3.5rem',
                    zIndex:'5',
                    borderRadius:pxToRem(4),
                }}
            >

            </Container>

            <Box
                sx={{
                    width:'100vw',
                    px:{ xs: '2rem', sm: '4rem', md: '8rem', lg: '16rem', xl: '16rem' },
                    display:'flex',
                    justifyContent:'space-around',

                }}
            >
                {TabItem({name:'All', route:'/home', selected:true})}
                {TabItem({name:'Data'})}
                {TabItem({name:'Programming & Development'})}
                {TabItem({name:'Business'})}
            </Box>

            <Box
                sx={{
                    py:'2rem',
                    px:{ xs: '2rem', sm: '4rem', md: '8rem', lg: '16rem', xl: '16rem' },
                    display:'flex',
                    flexDirection:'column',
                    backgroundColor:teal[50],
                    justifyContent:'center',
                    textAlign:'center'
                }}
            >
                <Typography variant={'title'}>
                    Unlock Your Tech Future & Transform Your Career
                </Typography>
                <Typography variant={'subtitle1'}>
                    Develop your tech and professional skills with our world-class programmes,
                    and be part of a community that will accelerate your career.
                </Typography>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container >
                        {response.courses.map((item, i) => (
                            <Grid xs={12} sm={12} md={6} lg={4} xl={3} >
                                <CourseItem image={item.imageURL} name={item.title} duration={item.details.duration} link={'/course'}/>
                            </Grid>
                        ))}
                        {/*<Grid xs={12} sm={12} md={6} lg={4} xl={3} >*/}
                        {/*    <CourseItem/>*/}
                        {/*</Grid>*/}

                    </Grid>
                </Box>

                <Container sx={{ height: "100%" }}>
                    <Grid container item justifyContent="center" xs={12} lg={6} mx="auto" height="100%">
                        <Pagination
                            count={5}
                            page={2}
                        />
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

let response = {
    "courses": [
        {
            "title": "AI Career Essentials",
            "description": "Elevate your career with essential AI skills.",
            "details": {
                "duration": "6 Weeks",
                "commitment": "5-10 hrs/week, Online",
                "startDate": "16 September 2024",
                "applicationDeadline": "5 September 2024",
                "adminFee": "$0"
            },
            "highlights": [
                "Learning a Collection of AI Tools",
                "Hands-on Experience",
                "Creating a Professional Tool Kit"
            ],
            "weeklyWorkflow": [
                {"week": 1, "title": "Getting Smart About AI", "description": "Understand fundamental AI concepts and trends."},
                {"week": 2, "title": "Improving Your Persona", "description": "Enhance your personal branding and professional presence."},
                {"week": 3, "title": "Becoming More Creative at Work", "description": "Learn how AI can boost your creativity and productivity."},
                {"week": 4, "title": "Becoming a Superhero at Work", "description": "Develop skills to excel in your current role with AI."},
                {"week": 5, "title": "Mastering AI for Entrepreneurship", "description": "Use AI tools to innovate and drive business success."},
                {"week": 6, "title": "Bringing It All Together", "description": "Integrate your learning and prepare for the future."}
            ],
            "outcomes": [
                {"title": "Comprehensive Understanding of AI", "description": "Deep dive into LLM, GenAI, GPT, and effective AI prompting."},
                {"title": "Empowered Professional Growth", "description": "Leverage AI tools to enhance your job search, CVs, and personal branding."},
                {"title": "Entrepreneurial Empowerment & Execution", "description": "Craft business plans and develop websites using AI tools to drive innovation."}
            ],
            "callToAction": {
                "text": "Ready to Get Started?",
                "description": "For more information or to begin your journey, reach out to LEA, your ALX AI Assistant. Start gaining in-demand job skills today!"
            },
            "imageURL": "https://via.placeholder.com/300?text=AI+Career+Essentials"
        },
        {
            "title": "Introduction to Web Development",
            "description": "Learn the basics of web development, including HTML, CSS, and JavaScript.",
            "details": {
                "duration": "4 Weeks",
                "commitment": "5-8 hrs/week, Online",
                "startDate": "1 October 2024",
                "applicationDeadline": "25 September 2024",
                "adminFee": "$50"
            },
            "highlights": [
                "Basics of HTML and CSS",
                "Introduction to JavaScript",
                "Building Responsive Websites"
            ],
            "weeklyWorkflow": [
                {"week": 1, "title": "Getting Started with HTML", "description": "Learn the structure and syntax of HTML."},
                {"week": 2, "title": "Styling with CSS", "description": "Understand how to apply styles using CSS."},
                {"week": 3, "title": "Introduction to JavaScript", "description": "Explore JavaScript fundamentals and its use in web development."},
                {"week": 4, "title": "Building Your First Website", "description": "Combine HTML, CSS, and JavaScript to create a simple website."}
            ],
            "outcomes": [
                {"title": "Proficiency in HTML and CSS", "description": "Gain skills in building and styling web pages."},
                {"title": "Basic JavaScript Knowledge", "description": "Understand how to make websites interactive."},
                {"title": "Complete a Simple Web Project", "description": "Create a fully functional website from scratch."}
            ],
            "callToAction": {
                "text": "Get Started with Web Development!",
                "description": "Enroll now to start building your web development skills and create stunning websites."
            },
            "imageURL": "https://via.placeholder.com/300?text=Web+Development"
        },
        {
            "title": "Data Science Bootcamp",
            "description": "Intensive course to master data science concepts, including Python, statistics, and machine learning.",
            "details": {
                "duration": "12 Weeks",
                "commitment": "10-15 hrs/week, Online",
                "startDate": "15 September 2024",
                "applicationDeadline": "5 September 2024",
                "adminFee": "$200"
            },
            "highlights": [
                "Python for Data Analysis",
                "Statistical Methods",
                "Introduction to Machine Learning"
            ],
            "weeklyWorkflow": [
                {"week": 1, "title": "Python Basics", "description": "Learn Python programming fundamentals."},
                {"week": 2, "title": "Data Manipulation with Pandas", "description": "Explore data analysis with Pandas library."},
                {"week": 3, "title": "Data Visualization", "description": "Create visualizations using Matplotlib and Seaborn."},
                {"week": 4, "title": "Statistical Analysis", "description": "Understand statistical methods and their applications."},
                {"week": 5, "title": "Introduction to Machine Learning", "description": "Get acquainted with machine learning concepts and algorithms."},
                {"week": 6, "title": "Supervised Learning", "description": "Dive into supervised learning techniques and models."},
                {"week": 7, "title": "Unsupervised Learning", "description": "Explore clustering and dimensionality reduction techniques."},
                {"week": 8, "title": "Model Evaluation and Selection", "description": "Learn how to evaluate and choose the best model."},
                {"week": 9, "title": "Deep Learning Introduction", "description": "Introduction to neural networks and deep learning."},
                {"week": 10, "title": "Advanced Machine Learning Techniques", "description": "Study advanced techniques and algorithms."},
                {"week": 11, "title": "Data Science Projects", "description": "Work on real-world data science projects."},
                {"week": 12, "title": "Capstone Project Presentation", "description": "Present your final project and receive feedback."}
            ],
            "outcomes": [
                {"title": "Advanced Data Science Skills", "description": "Master Python, statistics, and machine learning techniques."},
                {"title": "Real-World Project Experience", "description": "Complete projects that showcase your data science abilities."},
                {"title": "Prepared for Data Science Roles", "description": "Be ready for roles in data analysis, data engineering, and data science."}
            ],
            "callToAction": {
                "text": "Join the Data Science Revolution!",
                "description": "Sign up now to master data science and unlock new career opportunities."
            },
            "imageURL": "https://via.placeholder.com/300?text=Data+Science"
        },
        {
            "title": "Digital Marketing Mastery",
            "description": "Comprehensive course on digital marketing strategies and tools.",
            "details": {
                "duration": "8 Weeks",
                "commitment": "6-10 hrs/week, Online",
                "startDate": "10 October 2024",
                "applicationDeadline": "1 October 2024",
                "adminFee": "$100"
            },
            "highlights": [
                "SEO and SEM",
                "Social Media Marketing",
                "Content Creation and Strategy"
            ],
            "weeklyWorkflow": [
                {"week": 1, "title": "Introduction to Digital Marketing", "description": "Overview of digital marketing channels and strategies."},
                {"week": 2, "title": "SEO Fundamentals", "description": "Learn about search engine optimization techniques."},
                {"week": 3, "title": "SEM and Paid Advertising", "description": "Explore search engine marketing and pay-per-click advertising."},
                {"week": 4, "title": "Social Media Strategies", "description": "Develop strategies for effective social media marketing."},
                {"week": 5, "title": "Content Creation", "description": "Create engaging content for various platforms."},
                {"week": 6, "title": "Email Marketing", "description": "Learn how to design and execute email marketing campaigns."},
                {"week": 7, "title": "Analytics and Metrics", "description": "Understand how to measure and analyze marketing performance."},
                {"week": 8, "title": "Digital Marketing Project", "description": "Apply your skills to a real-world digital marketing project."}
            ],
            "outcomes": [
                {"title": "Master Digital Marketing Tools", "description": "Become proficient in SEO, SEM, and social media marketing."},
                {"title": "Effective Content Strategies", "description": "Learn to create and implement successful content strategies."},
                {"title": "Hands-on Project Experience", "description": "Work on a digital marketing project to showcase your skills."}
            ],
            "callToAction": {
                "text": "Boost Your Marketing Skills!",
                "description": "Enroll today to become a digital marketing expert and drive business success."
            },
            "imageURL": "https://via.placeholder.com/300?text=Digital+Marketing"
        },
        {
            "title": "Project Management Essentials",
            "description": "Gain essential project management skills for successful project execution.",
            "details": {
                "duration": "5 Weeks",
                "commitment": "4-6 hrs/week, Online",
                "startDate": "20 October 2024",
                "applicationDeadline": "10 October 2024",
                "adminFee": "$75"
            },
            "highlights": [
                "Project Planning and Scheduling",
                "Risk Management",
                "Team Coordination"
            ],
            "weeklyWorkflow": [
                {"week": 1, "title": "Introduction to Project Management", "description": "Learn the fundamentals of project management."},
                {"week": 2, "title": "Project Planning", "description": "Understand how to plan and schedule projects effectively."},
                {"week": 3, "title": "Risk Management", "description": "Identify and manage project risks."},
                {"week": 4, "title": "Team Coordination", "description": "Learn strategies for effective team management."},
                {"week": 5, "title": "Project Closure", "description": "Understand the process of closing and evaluating projects."}
            ],
            "outcomes": [
                {"title": "Strong Project Management Skills", "description": "Develop skills for planning, executing, and closing projects."},
                {"title": "Risk and Team Management", "description": "Learn to manage risks and coordinate teams effectively."},
                {"title": "Prepared for Project Management Roles", "description": "Be ready to take on project management responsibilities in various industries."}
            ],
            "callToAction": {
                "text": "Become a Project Management Pro!",
                "description": "Enroll now to master project management and drive successful project outcomes."
            },
            "imageURL": "https://via.placeholder.com/300?text=Project+Management"
        },
        {
            "title": "UX/UI Design Fundamentals",
            "description": "Learn the basics of UX/UI design to create user-friendly and visually appealing interfaces.",
            "details": {
                "duration": "6 Weeks",
                "commitment": "5-8 hrs/week, Online",
                "startDate": "1 November 2024",
                "applicationDeadline": "15 October 2024",
                "adminFee": "$60"
            },
            "highlights": [
                "Principles of UX Design",
                "UI Design Techniques",
                "User Research and Testing"
            ],
            "weeklyWorkflow": [
                {"week": 1, "title": "Introduction to UX Design", "description": "Learn the principles of user experience design."},
                {"week": 2, "title": "UI Design Basics", "description": "Understand the fundamentals of user interface design."},
                {"week": 3, "title": "Design Tools and Software", "description": "Get familiar with design tools and software."},
                {"week": 4, "title": "User Research", "description": "Learn how to conduct user research and gather feedback."},
                {"week": 5, "title": "Prototyping and Wireframing", "description": "Create prototypes and wireframes for your designs."},
                {"week": 6, "title": "Design Project", "description": "Apply your skills to a UX/UI design project."}
            ],
            "outcomes": [
                {"title": "Solid Understanding of UX/UI Principles", "description": "Master the fundamentals of user experience and interface design."},
                {"title": "Proficiency in Design Tools", "description": "Gain hands-on experience with popular design tools."},
                {"title": "Completed Design Project", "description": "Showcase your skills with a comprehensive design project."}
            ],
            "callToAction": {
                "text": "Start Designing Today!",
                "description": "Enroll to learn UX/UI design and create amazing user interfaces."
            },
            "imageURL": "https://via.placeholder.com/300?text=UX+UI+Design"
        },
        {
            "title": "Cybersecurity Fundamentals",
            "description": "Introduction to cybersecurity principles and practices to protect information systems.",
            "details": {
                "duration": "7 Weeks",
                "commitment": "6-9 hrs/week, Online",
                "startDate": "5 November 2024",
                "applicationDeadline": "25 October 2024",
                "adminFee": "$80"
            },
            "highlights": [
                "Network Security Basics",
                "Threats and Vulnerabilities",
                "Cybersecurity Best Practices"
            ],
            "weeklyWorkflow": [
                {"week": 1, "title": "Introduction to Cybersecurity", "description": "Understand the basics of cybersecurity and its importance."},
                {"week": 2, "title": "Network Security", "description": "Learn about protecting networks from various threats."},
                {"week": 3, "title": "Understanding Threats and Vulnerabilities", "description": "Explore different types of cybersecurity threats and vulnerabilities."},
                {"week": 4, "title": "Security Protocols and Encryption", "description": "Study security protocols and encryption methods."},
                {"week": 5, "title": "Incident Response and Management", "description": "Learn how to respond to and manage security incidents."},
                {"week": 6, "title": "Cybersecurity Tools and Techniques", "description": "Familiarize yourself with cybersecurity tools and techniques."},
                {"week": 7, "title": "Capstone Project", "description": "Apply your knowledge to a real-world cybersecurity project."}
            ],
            "outcomes": [
                {"title": "Fundamental Cybersecurity Knowledge", "description": "Gain essential knowledge to protect information systems."},
                {"title": "Hands-on Experience with Security Tools", "description": "Get practical experience with cybersecurity tools and techniques."},
                {"title": "Prepared for Cybersecurity Roles", "description": "Be ready for roles in cybersecurity and information security."}
            ],
            "callToAction": {
                "text": "Secure Your Future in Cybersecurity!",
                "description": "Enroll today to build a strong foundation in cybersecurity and protect digital assets."
            },
            "imageURL": "https://via.placeholder.com/300?text=Cybersecurity"
        },
        {
            "title": "Machine Learning with Python",
            "description": "Deep dive into machine learning algorithms and techniques using Python.",
            "details": {
                "duration": "10 Weeks",
                "commitment": "8-12 hrs/week, Online",
                "startDate": "15 November 2024",
                "applicationDeadline": "5 November 2024",
                "adminFee": "$120"
            },
            "highlights": [
                "Machine Learning Algorithms",
                "Python Libraries for ML",
                "Model Evaluation and Tuning"
            ],
            "weeklyWorkflow": [
                {"week": 1, "title": "Introduction to Machine Learning", "description": "Learn the basics of machine learning and its applications."},
                {"week": 2, "title": "Python for Machine Learning", "description": "Get familiar with Python libraries used in machine learning."},
                {"week": 3, "title": "Supervised Learning Algorithms", "description": "Explore supervised learning algorithms and their implementations."},
                {"week": 4, "title": "Unsupervised Learning Algorithms", "description": "Understand unsupervised learning algorithms and techniques."},
                {"week": 5, "title": "Model Evaluation Metrics", "description": "Learn how to evaluate and select models based on performance metrics."},
                {"week": 6, "title": "Feature Engineering", "description": "Study techniques for feature selection and transformation."},
                {"week": 7, "title": "Deep Learning Basics", "description": "Introduction to deep learning and neural networks."},
                {"week": 8, "title": "Advanced Machine Learning Techniques", "description": "Explore advanced machine learning techniques and algorithms."},
                {"week": 9, "title": "Machine Learning Projects", "description": "Apply your skills to real-world machine learning projects."},
                {"week": 10, "title": "Capstone Project", "description": "Complete and present a comprehensive machine learning project."}
            ],
            "outcomes": [
                {"title": "Expertise in Machine Learning Algorithms", "description": "Master various machine learning algorithms and techniques."},
                {"title": "Proficiency in Python for ML", "description": "Gain practical experience using Python for machine learning tasks."},
                {"title": "Real-World Project Experience", "description": "Showcase your skills with a final machine learning project."}
            ],
            "callToAction": {
                "text": "Advance Your Machine Learning Skills!",
                "description": "Enroll now to become proficient in machine learning with Python and tackle complex data challenges."
            },
            "imageURL": "https://via.placeholder.com/300?text=Machine+Learning"
        },
        {
            "title": "Blockchain Fundamentals",
            "description": "Introduction to blockchain technology and its applications in various industries.",
            "details": {
                "duration": "6 Weeks",
                "commitment": "5-7 hrs/week, Online",
                "startDate": "20 November 2024",
                "applicationDeadline": "10 November 2024",
                "adminFee": "$70"
            },
            "highlights": [
                "Understanding Blockchain Technology",
                "Smart Contracts",
                "Cryptocurrencies"
            ],
            "weeklyWorkflow": [
                {"week": 1, "title": "Introduction to Blockchain", "description": "Learn the fundamentals of blockchain technology."},
                {"week": 2, "title": "How Blockchain Works", "description": "Understand the mechanics behind blockchain systems."},
                {"week": 3, "title": "Smart Contracts and DApps", "description": "Explore smart contracts and decentralized applications."},
                {"week": 4, "title": "Cryptocurrencies and Tokens", "description": "Learn about various cryptocurrencies and tokens."},
                {"week": 5, "title": "Blockchain Use Cases", "description": "Study different use cases and applications of blockchain technology."},
                {"week": 6, "title": "Blockchain Project", "description": "Apply your knowledge to a blockchain project."}
            ],
            "outcomes": [
                {"title": "Deep Understanding of Blockchain", "description": "Gain a solid understanding of blockchain technology and its components."},
                {"title": "Proficiency with Smart Contracts", "description": "Learn how to develop and deploy smart contracts."},
                {"title": "Experience with Real-World Blockchain Projects", "description": "Complete a project that demonstrates your blockchain skills."}
            ],
            "callToAction": {
                "text": "Explore the World of Blockchain!",
                "description": "Enroll today to understand blockchain technology and its transformative potential."
            },
            "imageURL": "https://via.placeholder.com/300?text=Blockchain"
        },
        {
            "title": "Cloud Computing Basics",
            "description": "Introduction to cloud computing concepts, services, and deployment models.",
            "details": {
                "duration": "5 Weeks",
                "commitment": "4-6 hrs/week, Online",
                "startDate": "1 December 2024",
                "applicationDeadline": "20 November 2024",
                "adminFee": "$50"
            },
            "highlights": [
                "Cloud Service Models",
                "Deployment Strategies",
                "Security and Compliance"
            ],
            "weeklyWorkflow": [
                {"week": 1, "title": "Introduction to Cloud Computing", "description": "Learn the basics of cloud computing and its benefits."},
                {"week": 2, "title": "Understanding Cloud Service Models", "description": "Explore IaaS, PaaS, and SaaS."},
                {"week": 3, "title": "Cloud Deployment Models", "description": "Study public, private, and hybrid cloud models."},
                {"week": 4, "title": "Cloud Security", "description": "Understand security considerations and best practices in the cloud."},
                {"week": 5, "title": "Cloud Computing Project", "description": "Apply your knowledge in a cloud computing project."}
            ],
            "outcomes": [
                {"title": "Solid Understanding of Cloud Computing", "description": "Gain a clear understanding of cloud computing concepts and services."},
                {"title": "Knowledge of Deployment Models", "description": "Learn about different cloud deployment strategies."},
                {"title": "Hands-on Cloud Project Experience", "description": "Showcase your skills with a practical cloud computing project."}
            ],
            "callToAction": {
                "text": "Get Started with Cloud Computing!",
                "description": "Enroll now to learn cloud computing fundamentals and enhance your IT skills."
            },
            "imageURL": "https://via.placeholder.com/300?text=Cloud+Computing"
        },
        {
            "title": "Introduction to Artificial Intelligence",
            "description": "Foundational course on artificial intelligence, covering basic concepts and applications.",
            "details": {
                "duration": "4 Weeks",
                "commitment": "5-7 hrs/week, Online",
                "startDate": "15 December 2024",
                "applicationDeadline": "5 December 2024",
                "adminFee": "$40"
            },
            "highlights": [
                "AI Concepts and Terminology",
                "Basic AI Algorithms",
                "Applications of AI"
            ],
            "weeklyWorkflow": [
                {"week": 1, "title": "Introduction to AI", "description": "Learn the basics of artificial intelligence and its history."},
                {"week": 2, "title": "Basic AI Algorithms", "description": "Explore fundamental AI algorithms and techniques."},
                {"week": 3, "title": "Applications of AI", "description": "Understand how AI is applied in various industries."},
                {"week": 4, "title": "AI Project", "description": "Work on a basic AI project to apply your learning."}
            ],
            "outcomes": [
                {"title": "Understanding AI Fundamentals", "description": "Grasp the core concepts and terminology of AI."},
                {"title": "Knowledge of AI Algorithms", "description": "Learn about basic algorithms used in AI."},
                {"title": "Experience with an AI Project", "description": "Complete a project demonstrating your understanding of AI."}
            ],
            "callToAction": {
                "text": "Start Your AI Journey Now!",
                "description": "Enroll today to begin exploring artificial intelligence and its potential."
            },
            "imageURL": "https://via.placeholder.com/300?text=Artificial+Intelligence"
        },
        {
            "title": "Financial Analysis and Modeling",
            "description": "Learn financial analysis techniques and modeling skills to make informed business decisions.",
            "details": {
                "duration": "8 Weeks",
                "commitment": "6-9 hrs/week, Online",
                "startDate": "10 December 2024",
                "applicationDeadline": "1 December 2024",
                "adminFee": "$90"
            },
            "highlights": [
                "Financial Statement Analysis",
                "Building Financial Models",
                "Investment Valuation Techniques"
            ],
            "weeklyWorkflow": [
                {"week": 1, "title": "Introduction to Financial Analysis", "description": "Learn the basics of financial analysis and key concepts."},
                {"week": 2, "title": "Analyzing Financial Statements", "description": "Study how to analyze and interpret financial statements."},
                {"week": 3, "title": "Building Financial Models", "description": "Learn techniques for building and using financial models."},
                {"week": 4, "title": "Valuation Techniques", "description": "Explore methods for valuing investments and companies."},
                {"week": 5, "title": "Financial Forecasting", "description": "Understand how to forecast financial performance."},
                {"week": 6, "title": "Risk Analysis and Management", "description": "Study how to assess and manage financial risks."},
                {"week": 7, "title": "Case Studies", "description": "Analyze case studies to apply financial analysis techniques."},
                {"week": 8, "title": "Capstone Project", "description": "Complete a financial analysis and modeling project."}
            ],
            "outcomes": [
                {"title": "Expertise in Financial Analysis", "description": "Develop skills in analyzing financial statements and building models."},
                {"title": "Proficiency in Valuation Techniques", "description": "Learn how to value investments and companies effectively."},
                {"title": "Experience with Financial Projects", "description": "Showcase your skills with a comprehensive financial project."}
            ],
            "callToAction": {
                "text": "Enhance Your Financial Skills!",
                "description": "Enroll now to master financial analysis and modeling and drive business success."
            },
            "imageURL": "https://via.placeholder.com/300?text=Financial+Analysis"
        },
        {
            "title": "Graphic Design Basics",
            "description": "Learn the principles of graphic design and gain hands-on experience with design tools.",
            "details": {
                "duration": "6 Weeks",
                "commitment": "5-7 hrs/week, Online",
                "startDate": "1 January 2025",
                "applicationDeadline": "20 December 2024",
                "adminFee": "$55"
            },
            "highlights": [
                "Design Principles",
                "Using Design Software",
                "Creating Visual Content"
            ],
            "weeklyWorkflow": [
                {"week": 1, "title": "Introduction to Graphic Design", "description": "Learn the fundamental principles of graphic design."},
                {"week": 2, "title": "Design Software Overview", "description": "Get familiar with popular design software tools."},
                {"week": 3, "title": "Typography and Color Theory", "description": "Study typography and color theory for effective design."},
                {"week": 4, "title": "Creating Visual Content", "description": "Learn how to create various types of visual content."},
                {"week": 5, "title": "Design Project", "description": "Work on a design project to apply your skills."},
                {"week": 6, "title": "Portfolio Development", "description": "Develop a portfolio to showcase your design work."}
            ],
            "outcomes": [
                {"title": "Strong Design Fundamentals", "description": "Understand core graphic design principles and concepts."},
                {"title": "Proficiency in Design Software", "description": "Gain hands-on experience with design tools and software."},
                {"title": "Completed Design Portfolio", "description": "Create a portfolio to showcase your graphic design projects."}
            ],
            "callToAction": {
                "text": "Start Designing Today!",
                "description": "Enroll now to learn graphic design basics and create stunning visual content."
            },
            "imageURL": "https://via.placeholder.com/300?text=Graphic+Design"
        },
        {
            "title": "Introduction to Quantum Computing",
            "description": "Learn the basics of quantum computing and explore its potential applications.",
            "details": {
                "duration": "7 Weeks",
                "commitment": "6-8 hrs/week, Online",
                "startDate": "15 January 2025",
                "applicationDeadline": "5 January 2025",
                "adminFee": "$85"
            },
            "highlights": [
                "Quantum Computing Basics",
                "Quantum Algorithms",
                "Applications of Quantum Computing"
            ],
            "weeklyWorkflow": [
                {"week": 1, "title": "Introduction to Quantum Computing", "description": "Learn the foundational concepts of quantum computing."},
                {"week": 2, "title": "Quantum Bits (Qubits)", "description": "Understand the concept of quantum bits and their role in computation."},
                {"week": 3, "title": "Quantum Algorithms", "description": "Explore algorithms used in quantum computing."},
                {"week": 4, "title": "Applications of Quantum Computing", "description": "Study real-world applications and potential of quantum computing."},
                {"week": 5, "title": "Quantum Computing Tools", "description": "Familiarize yourself with tools and platforms for quantum computing."},
                {"week": 6, "title": "Building Quantum Algorithms", "description": "Learn how to develop and test quantum algorithms."},
                {"week": 7, "title": "Quantum Computing Project", "description": "Apply your knowledge in a quantum computing project."}
            ],
            "outcomes": [
                {"title": "Understanding Quantum Computing", "description": "Grasp the basics of quantum computing and its principles."},
                {"title": "Knowledge of Quantum Algorithms", "description": "Learn about quantum algorithms and their applications."},
                {"title": "Experience with Quantum Projects", "description": "Demonstrate your skills with a quantum computing project."}
            ],
            "callToAction": {
                "text": "Discover Quantum Computing!",
                "description": "Enroll today to explore the exciting world of quantum computing and its future possibilities."
            },
            "imageURL": "https://via.placeholder.com/300?text=Quantum+Computing"
        }
    ]
}




