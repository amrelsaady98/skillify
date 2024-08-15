import Box from "@mui/material/Box";
import pxToRem from "../../assets/theme/functions/pxToRem";
import Typography from "@mui/material/Typography";
import {amber, cyan, green, grey, lightBlue, teal} from "@mui/material/colors";
import {Accordion, AccordionDetails, AccordionSummary, Alert, Modal, Paper} from "@mui/material";
import Container from "@mui/material/Container";
import {IoBookmark, IoBookmarkOutline, IoCheckmarkDone, IoChevronDown} from "react-icons/io5";
import RoundedFilledButton from "../../components/Buttons/roundedFilledButton";
import MyRoundedFilledButton from "../../components/Buttons/roundedFilledButton";
import Divider from "@mui/material/Divider";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {BookmarkAdd, HeartBroken} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {addCourseToFav, removeFavCourse} from "../../redux/actions/coursesActions";
import Footer from "../../components/Footer/Footer";
import {handelAddToUserCourses, isUserLoggedIn} from "../../services/auth_service";

async function uplaodData(){
  for(let i = 0; i < data.length; i++) {
    delete data[i]['id'];
    await axios.post(`https://66b17fd61ca8ad33d4f44343.mockapi.io/api/v2/courses`, data[i])
    console.log(`item ${i} uploaded`)
  }
}

export default function CourseDetails(params) {

  // uplaodData()

  let {id} = useParams();

  const [data, setData] = React.useState();
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState({
    type:'success',
    content:'initial message',
  });


  const {favCourses} = useSelector((state) => state.favCourses);
  const dispatch = useDispatch();


  useEffect(() => {

    axios.get(`https://66b17fd61ca8ad33d4f44343.mockapi.io/api/v2/courses/${id}`)
      .then(response => setData(response.data))
      .catch((err) => console.log(err));

  }, []);

  console.log(id)

  function addItemToUserFavourite(){

  }




  return (
    <>
      {
        data == undefined ? <Box/> : <Box>
          {/*Hero Section*/}
          <Box
            sx={{
              display: 'flex',
              width: "100%",
              height: "35vw",
              backgroundImage: 'linear-gradient(211deg, #039BAB 5.98%, #0D7590 37.75%, #014C7C 70.36%)'
            }}
          >
            <Box
              style={{
                width: '15vw',
              }}
            >
              <img src={require('assets/images/illustrations/course_details_pattern.png')}
                   style={{
                     height: '35vw',
                     objectFit: 'cover',

                   }}
              />
            </Box>
            <Box
              style={{
                // padding: `${pxToRem(0)} ${pxToRem(48)}`,
                height: '100%',
                width: '35%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography variant={'h2'} color={amber['A200']} style={{padding: `${pxToRem(24)} ${pxToRem(0)}`}}>
                {data.title}
              </Typography>
              <Typography variant={'h1'} color={grey[50]}>
                {data.description}
              </Typography>
            </Box>

            <Box
              style={{
                height:'100%',
                width:'5%'
              }}
            />

            <Box
              style={{
                // height: '50vw',
                display: 'flex',
                justifyContent: 'center',
                zIndex:'10'
              }}
            >
              <Paper
                variant={'elevation'}
                elevation={10}
                style={{
                  width: '30vw',
                  height: 'max-content',
                  marginTop: pxToRem(150),
                  background: 'white',
                  borderRadius: pxToRem(8),
                }}
              >
                <img src={data.imageURL}
                     style={{
                       width: '100%',
                       maxHeight: pxToRem(350),
                       objectFit: 'cover',
                       borderRadius: `${pxToRem(8)} ${pxToRem(8)} 0 0`
                     }}
                />
                <Box
                  sx={{
                    px: '2rem',
                    py: '1rem',
                  }}
                >

                  <Box>
                    <Typography variant={'h4'} sx={{
                      marginBottom: '1rem'
                    }}>
                      This Programme includes:
                    </Typography>
                    {data.highlights.map(highlight => (

                      <Box
                        display={'flex'}
                        margin={'1rem 1.5rem'}
                        alignItems={'center'}

                      >
                        <IoCheckmarkDone color={'rgb(255 105 0)'} size={'2rem'}/>
                        <Typography
                          variant={'body1'}
                          sx={{
                            marginInlineStart: '1.5rem'
                          }}
                        >
                          {highlight}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box
                    style={{
                      display:'flex',
                      height:'4rem',
                    }}
                  >
                    <MyRoundedFilledButton
                      title={'Apply Now'}
                      backgroundColor={green["A400"]}
                      onClick={(e)=>{
                        e.preventDefault();
                        console.log(isUserLoggedIn())
                        if(!isUserLoggedIn()) {
                          setAlert(true)
                          setAlertContent({
                            type:'error',
                            message:'Login Required',
                          })
                        } else {
                          handelAddToUserCourses(
                            data,
                            ()=>{
                              setAlert(true)
                              setAlertContent({
                                type:'success',
                                message:'Course Added Successfully'
                              })
                            },
                            (message)=>{
                              setAlert(true)
                              setAlertContent({
                                type:'warning',
                                message: message
                              })
                            }
                          )
                        }

                      }}
                    />
                    <Box
                      style={{
                        width:'10%',
                        height:'100%',
                        display:'flex',
                        marginLeft:'2rem',
                        justifyContent: 'center',
                        alignItems:'center',
                        cursor:'pointer',
                      }}
                      onClick={()=>{
                        //TODO: Add to user favourite
                        if(favCourses.filter(course => course.id == data.id).length > 0) {
                          dispatch(removeFavCourse(data))
                        } else {
                          dispatch(addCourseToFav(data))
                        }
                      }}
                    >
                      {favCourses.filter(course => course.id == data.id).length > 0 ? <IoBookmark size={'2rem'} color={teal['500']}/> : <IoBookmarkOutline size={'2rem'} color={grey['500']}/>}
                    </Box>
                  </Box>

                </Box>
              </Paper>
            </Box>
            <Box
              style={{
                width: '15vw',
              }}
            />
          </Box>
          <Box
            style={{
              width:'100%',
              backgroundColor:teal[50],

            }}
          >
            <Box
              sx={{
                width:'50%',
                padding:{ xs: '0.5rem', sm: '0.5rem', md: '1rem', lg: '2rem', xl: '2rem' },
                height:'100%',
                display:'flex',
                flexWrap:'wrap',
                justifyContent:'start',
                zIndex:'0'
              }}
            >
              {Object.entries(data.details).map(([key, value], index) => (
                <Box
                  style={{
                    padding:'0 1.5rem',
                    margin:'1rem 0',
                    borderInlineEnd: index === Object.entries(data.details).length - 1 ? '' : '2px solid',
                    borderColor:grey[400],
                  }}
                >
                  <Typography variant={'overline'} fontSize={'1rem'} color={lightBlue[800]}>
                    {key}
                  </Typography>
                  <Typography variant={'body1'}>
                    {value}
                  </Typography>

                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              px:{ xs: '2rem', sm: '4rem', md: '8rem', lg: '12rem', xl: '16rem' },
              py:{ xs: '1rem', sm: '2rem', md: '4rem', lg: '6rem', xl: '8rem' },
              display:'flex',
              justifyContent:'space-between'
            }}
          >
            <Box
              style={{
                width:'55%',
              }}
            >
              <Typography variant={'h2'} sx={{

              }}>
                Outcomes
              </Typography>
              {data.outcomes.map((outcome, index) => (
                <Box
                  sx={{
                    my:{ xs: '0.5rem', sm: '1rem', md: '2rem', lg: '3rem', xl: '4rem' },
                    mx:{ xs: '0.5rem', sm: '1rem', md: '2rem', lg: '3rem', xl: '4rem' },
                  }}
                >

                  <Typography variant={'h4'} py={'0.5rem'}>
                    {outcome.title}
                  </Typography>

                  <Typography>
                    {outcome.description}
                  </Typography>

                </Box>
              ))}
            </Box>

            <Box style={{
              width:'2px',
              height:'auto',
              backgroundColor:cyan[200],
            }}>

            </Box>

            <Box
              style={{
                width:'35%'
              }}
            >
              {data.weeklyWorkflow.map((workflow, index) => (
                <Accordion >
                  <AccordionSummary
                    expandIcon={<IoChevronDown/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography variant={'h5'}>week {workflow.week} : {workflow.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {workflow.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
              {/*<Accordion>*/}
              {/*  <AccordionSummary*/}
              {/*    expandIcon={<IoChevronDown/>}*/}
              {/*    aria-controls="panel2-content"*/}
              {/*    id="panel2-header"*/}
              {/*  >*/}
              {/*    <Typography>Header</Typography>*/}
              {/*  </AccordionSummary>*/}
              {/*  <AccordionDetails>*/}
              {/*    <Typography>*/}
              {/*      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse*/}
              {/*      malesuada lacus ex, sit amet blandit leo lobortis eget.*/}
              {/*    </Typography>*/}
              {/*  </AccordionDetails>*/}
              {/*</Accordion>*/}
            </Box>
          </Box>
        </Box>
      }
      <Footer/>
      <Modal
        open={alert}
        style={{
        }}
      >
        <Box
          style={{
            width:'100%',
            height:'100vh',
            backgroundColor:'transparent',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          <Alert severity={alertContent.type} onClose={() => {
            setAlert(false)
          }}>
            {alertContent.message}
          </Alert>
        </Box>
      </Modal>
    </>
  )
}

let response = {
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
    {
      "week": 2,
      "title": "Improving Your Persona",
      "description": "Enhance your personal branding and professional presence."
    },
    {
      "week": 3,
      "title": "Becoming More Creative at Work",
      "description": "Learn how AI can boost your creativity and productivity."
    },
    {
      "week": 4,
      "title": "Becoming a Superhero at Work",
      "description": "Develop skills to excel in your current role with AI."
    },
    {
      "week": 5,
      "title": "Mastering AI for Entrepreneurship",
      "description": "Use AI tools to innovate and drive business success."
    },
    {
      "week": 6,
      "title": "Bringing It All Together",
      "description": "Integrate your learning and prepare for the future."
    }
  ],
  "outcomes": [
    {
      "title": "Comprehensive Understanding of AI",
      "description": "Deep dive into LLM, GenAI, GPT, and effective AI prompting."
    },
    {
      "title": "Empowered Professional Growth",
      "description": "Leverage AI tools to enhance your job search, CVs, and personal branding."
    },
    {
      "title": "Entrepreneurial Empowerment & Execution",
      "description": "Craft business plans and develop websites using AI tools to drive innovation."
    }
  ],
  "callToAction": {
    "text": "Ready to Get Started?",
    "description": "For more information or to begin your journey, reach out to LEA, your ALX AI Assistant. Start gaining in-demand job skills today!"
  },
  "imageURL": "https://via.placeholder.com/300?text=AI+Career+Essentials"
};
let data = [
  {
    "id": 0,
    "title": "AI Career Essentials",
    "description": "Elevate your career with essential AI skills.",
    "category": "Programming & development",
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
      {
        "week": 1,
        "title": "Getting Smart About AI",
        "description": "Understand fundamental AI concepts and trends."
      },
      {
        "week": 2,
        "title": "Improving Your Persona",
        "description": "Enhance your personal branding and professional presence."
      },
      {
        "week": 3,
        "title": "Becoming More Creative at Work",
        "description": "Learn how AI can boost your creativity and productivity."
      },
      {
        "week": 4,
        "title": "Becoming a Superhero at Work",
        "description": "Develop skills to excel in your current role with AI."
      },
      {
        "week": 5,
        "title": "Mastering AI for Entrepreneurship",
        "description": "Use AI tools to innovate and drive business success."
      },
      {
        "week": 6,
        "title": "Bringing It All Together",
        "description": "Integrate your learning and prepare for the future."
      }
    ],
    "outcomes": [
      {
        "title": "Comprehensive Understanding of AI",
        "description": "Deep dive into LLM, GenAI, GPT, and effective AI prompting."
      },
      {
        "title": "Empowered Professional Growth",
        "description": "Leverage AI tools to enhance your job search, CVs, and personal branding."
      },
      {
        "title": "Entrepreneurial Empowerment & Execution",
        "description": "Craft business plans and develop websites using AI tools to drive innovation."
      }
    ],
    "callToAction": {
      "text": "Ready to Get Started?",
      "description": "For more information or to begin your journey, reach out to LEA, your ALX AI Assistant. Start gaining in-demand job skills today!"
    },
    "imageURL": "https://via.placeholder.com/300?text=AI+Career+Essentials"
  },
  {
    "id": 1,
    "title": "Introduction to Web Development",
    "description": "Learn the basics of web development, including HTML, CSS, and JavaScript.",
    "category": "Programming & development",
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
      {
        "week": 1,
        "title": "Getting Started with HTML",
        "description": "Learn the structure and syntax of HTML."
      },
      {
        "week": 2,
        "title": "Styling with CSS",
        "description": "Understand how to apply styles using CSS."
      },
      {
        "week": 3,
        "title": "Introduction to JavaScript",
        "description": "Explore JavaScript fundamentals and its use in web development."
      },
      {
        "week": 4,
        "title": "Building Your First Website",
        "description": "Combine HTML, CSS, and JavaScript to create a simple website."
      }
    ],
    "outcomes": [
      {
        "title": "Proficiency in HTML and CSS",
        "description": "Gain skills in building and styling web pages."
      },
      {
        "title": "Basic JavaScript Knowledge",
        "description": "Understand how to make websites interactive."
      },
      {
        "title": "Complete a Simple Web Project",
        "description": "Create a fully functional website from scratch."
      }
    ],
    "callToAction": {
      "text": "Get Started with Web Development!",
      "description": "Enroll now to start building your web development skills and create stunning websites."
    },
    "imageURL": "https://via.placeholder.com/300?text=Web+Development"
  },
  {
    "id": 2,
    "title": "Data Science Bootcamp",
    "description": "Intensive course to master data science concepts, including Python, statistics, and machine learning.",
    "category": "Data",
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
      {
        "week": 1,
        "title": "Python Basics",
        "description": "Learn Python programming fundamentals."
      },
      {
        "week": 2,
        "title": "Data Manipulation with Pandas",
        "description": "Explore data analysis with Pandas library."
      },
      {
        "week": 3,
        "title": "Data Visualization",
        "description": "Create visualizations using Matplotlib and Seaborn."
      },
      {
        "week": 4,
        "title": "Statistical Analysis",
        "description": "Understand statistical methods and their applications."
      },
      {
        "week": 5,
        "title": "Introduction to Machine Learning",
        "description": "Get acquainted with machine learning concepts and algorithms."
      },
      {
        "week": 6,
        "title": "Supervised Learning",
        "description": "Dive into supervised learning techniques and models."
      },
      {
        "week": 7,
        "title": "Unsupervised Learning",
        "description": "Explore clustering and dimensionality reduction techniques."
      },
      {
        "week": 8,
        "title": "Model Evaluation and Selection",
        "description": "Learn how to evaluate and choose the best model."
      },
      {
        "week": 9,
        "title": "Deep Learning Introduction",
        "description": "Introduction to neural networks and deep learning."
      },
      {
        "week": 10,
        "title": "Advanced Machine Learning Techniques",
        "description": "Study advanced techniques and algorithms."
      },
      {
        "week": 11,
        "title": "Data Science Projects",
        "description": "Work on real-world data science projects."
      },
      {
        "week": 12,
        "title": "Capstone Project Presentation",
        "description": "Present your final project and receive feedback."
      }
    ],
    "outcomes": [
      {
        "title": "Advanced Data Science Skills",
        "description": "Master Python, statistics, and machine learning techniques."
      },
      {
        "title": "Real-World Project Experience",
        "description": "Complete projects that showcase your data science abilities."
      },
      {
        "title": "Prepared for Data Science Roles",
        "description": "Be ready for roles in data analysis, data engineering, and data science."
      }
    ],
    "callToAction": {
      "text": "Join the Data Science Revolution!",
      "description": "Sign up now to master data science and unlock new career opportunities."
    },
    "imageURL": "https://via.placeholder.com/300?text=Data+Science"
  },
  {
    "id": 3,
    "title": "Digital Marketing Mastery",
    "description": "Comprehensive course on digital marketing strategies and tools.",
    "category": "Business",
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
      {
        "week": 1,
        "title": "Introduction to Digital Marketing",
        "description": "Overview of digital marketing channels and strategies."
      },
      {
        "week": 2,
        "title": "SEO Fundamentals",
        "description": "Learn about search engine optimization techniques."
      },
      {
        "week": 3,
        "title": "SEM and Paid Advertising",
        "description": "Explore search engine marketing and pay-per-click advertising."
      },
      {
        "week": 4,
        "title": "Social Media Strategies",
        "description": "Develop strategies for effective social media marketing."
      },
      {
        "week": 5,
        "title": "Content Creation",
        "description": "Create engaging content for various platforms."
      },
      {
        "week": 6,
        "title": "Email Marketing",
        "description": "Learn how to design and execute email marketing campaigns."
      },
      {
        "week": 7,
        "title": "Analytics and Metrics",
        "description": "Understand how to measure and analyze marketing performance."
      },
      {
        "week": 8,
        "title": "Digital Marketing Project",
        "description": "Apply your skills to a real-world digital marketing project."
      }
    ],
    "outcomes": [
      {
        "title": "Master Digital Marketing Tools",
        "description": "Become proficient in SEO, SEM, and social media marketing."
      },
      {
        "title": "Effective Content Strategies",
        "description": "Learn to create and implement successful content strategies."
      },
      {
        "title": "Hands-on Project Experience",
        "description": "Work on a digital marketing project to showcase your skills."
      }
    ],
    "callToAction": {
      "text": "Boost Your Marketing Skills!",
      "description": "Enroll today to become a digital marketing expert and drive business success."
    },
    "imageURL": "https://via.placeholder.com/300?text=Digital+Marketing"
  },
  {
    "id": 4,
    "title": "Project Management Essentials",
    "description": "Gain essential project management skills for successful project execution.",
    "category": "Business",
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
      {
        "week": 1,
        "title": "Introduction to Project Management",
        "description": "Learn the fundamentals of project management."
      },
      {
        "week": 2,
        "title": "Project Planning",
        "description": "Understand how to plan and schedule projects effectively."
      },
      {
        "week": 3,
        "title": "Risk Management",
        "description": "Identify and manage project risks."
      },
      {
        "week": 4,
        "title": "Team Coordination",
        "description": "Learn strategies for effective team management."
      },
      {
        "week": 5,
        "title": "Project Closure",
        "description": "Understand the process of closing and evaluating projects."
      }
    ],
    "outcomes": [
      {
        "title": "Strong Project Management Skills",
        "description": "Develop skills for planning, executing, and closing projects."
      },
      {
        "title": "Risk and Team Management",
        "description": "Learn to manage risks and coordinate teams effectively."
      },
      {
        "title": "Prepared for Project Management Roles",
        "description": "Be ready to take on project management responsibilities in various industries."
      }
    ],
    "callToAction": {
      "text": "Become a Project Management Pro!",
      "description": "Enroll now to master project management and drive successful project outcomes."
    },
    "imageURL": "https://via.placeholder.com/300?text=Project+Management"
  },
  {
    "id": 5,
    "title": "UX/UI Design Fundamentals",
    "description": "Learn the basics of UX/UI design to create user-friendly and visually appealing interfaces.",
    "category": "Programming & development",
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
      {
        "week": 1,
        "title": "Introduction to UX Design",
        "description": "Learn the principles of user experience design."
      },
      {
        "week": 2,
        "title": "UI Design Basics",
        "description": "Understand the fundamentals of user interface design."
      },
      {
        "week": 3,
        "title": "Design Tools and Software",
        "description": "Get familiar with design tools and software."
      },
      {
        "week": 4,
        "title": "User Research",
        "description": "Learn how to conduct user research and gather feedback."
      },
      {
        "week": 5,
        "title": "Prototyping and Wireframing",
        "description": "Create prototypes and wireframes for your designs."
      },
      {
        "week": 6,
        "title": "Design Project",
        "description": "Apply your skills to a UX/UI design project."
      }
    ],
    "outcomes": [
      {
        "title": "Solid Understanding of UX/UI Principles",
        "description": "Master the fundamentals of user experience and interface design."
      },
      {
        "title": "Proficiency in Design Tools",
        "description": "Gain hands-on experience with popular design tools."
      },
      {
        "title": "Completed Design Project",
        "description": "Showcase your skills with a comprehensive design project."
      }
    ],
    "callToAction": {
      "text": "Start Designing Today!",
      "description": "Enroll to learn UX/UI design and create amazing user interfaces."
    },
    "imageURL": "https://via.placeholder.com/300?text=UX+UI+Design"
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
      {
        "week": 1,
        "title": "Introduction to Project Management",
        "description": "Learn the fundamentals of project management."
      },
      {
        "week": 2,
        "title": "Project Planning",
        "description": "Understand how to plan and schedule projects effectively."
      },
      {
        "week": 3,
        "title": "Risk Management",
        "description": "Identify and manage project risks."
      },
      {
        "week": 4,
        "title": "Team Coordination",
        "description": "Learn strategies for effective team management."
      },
      {
        "week": 5,
        "title": "Project Closure",
        "description": "Understand the process of closing and evaluating projects."
      }
    ],
    "outcomes": [
      {
        "title": "Strong Project Management Skills",
        "description": "Develop skills for planning, executing, and closing projects."
      },
      {
        "title": "Risk and Team Management",
        "description": "Learn to manage risks and coordinate teams effectively."
      },
      {
        "title": "Prepared for Project Management Roles",
        "description": "Be ready to take on project management responsibilities in various industries."
      }
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
      {
        "week": 1,
        "title": "Introduction to UX Design",
        "description": "Learn the principles of user experience design."
      },
      {
        "week": 2,
        "title": "UI Design Basics",
        "description": "Understand the fundamentals of user interface design."
      },
      {
        "week": 3,
        "title": "Design Tools and Software",
        "description": "Get familiar with design tools and software."
      },
      {
        "week": 4,
        "title": "User Research",
        "description": "Learn how to conduct user research and gather feedback."
      },
      {
        "week": 5,
        "title": "Prototyping and Wireframing",
        "description": "Create prototypes and wireframes for your designs."
      },
      {
        "week": 6,
        "title": "Design Project",
        "description": "Apply your skills to a UX/UI design project."
      }
    ],
    "outcomes": [
      {
        "title": "Solid Understanding of UX/UI Principles",
        "description": "Master the fundamentals of user experience and interface design."
      },
      {
        "title": "Proficiency in Design Tools",
        "description": "Gain hands-on experience with popular design tools."
      },
      {
        "title": "Completed Design Project",
        "description": "Showcase your skills with a comprehensive design project."
      }
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
      {
        "week": 1,
        "title": "Introduction to Cybersecurity",
        "description": "Understand the basics of cybersecurity and its importance."
      },
      {
        "week": 2,
        "title": "Network Security",
        "description": "Learn about protecting networks from various threats."
      },
      {
        "week": 3,
        "title": "Understanding Threats and Vulnerabilities",
        "description": "Explore different types of cybersecurity threats and vulnerabilities."
      },
      {
        "week": 4,
        "title": "Security Protocols and Encryption",
        "description": "Study security protocols and encryption methods."
      },
      {
        "week": 5,
        "title": "Incident Response and Management",
        "description": "Learn how to respond to and manage security incidents."
      },
      {
        "week": 6,
        "title": "Cybersecurity Tools and Techniques",
        "description": "Familiarize yourself with cybersecurity tools and techniques."
      },
      {
        "week": 7,
        "title": "Capstone Project",
        "description": "Apply your knowledge to a real-world cybersecurity project."
      }
    ],
    "outcomes": [
      {
        "title": "Fundamental Cybersecurity Knowledge",
        "description": "Gain essential knowledge to protect information systems."
      },
      {
        "title": "Hands-on Experience with Security Tools",
        "description": "Get practical experience with cybersecurity tools and techniques."
      },
      {
        "title": "Prepared for Cybersecurity Roles",
        "description": "Be ready for roles in cybersecurity and information security."
      }
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
      {
        "week": 1,
        "title": "Introduction to Machine Learning",
        "description": "Learn the basics of machine learning and its applications."
      },
      {
        "week": 2,
        "title": "Python for Machine Learning",
        "description": "Get familiar with Python libraries used in machine learning."
      },
      {
        "week": 3,
        "title": "Supervised Learning Algorithms",
        "description": "Explore supervised learning algorithms and their implementations."
      },
      {
        "week": 4,
        "title": "Unsupervised Learning Algorithms",
        "description": "Understand unsupervised learning algorithms and techniques."
      },
      {
        "week": 5,
        "title": "Model Evaluation Metrics",
        "description": "Learn how to evaluate and select models based on performance metrics."
      },
      {
        "week": 6,
        "title": "Feature Engineering",
        "description": "Study techniques for feature selection and transformation."
      },
      {
        "week": 7,
        "title": "Deep Learning Basics",
        "description": "Introduction to deep learning and neural networks."
      },
      {
        "week": 8,
        "title": "Advanced Machine Learning Techniques",
        "description": "Explore advanced machine learning techniques and algorithms."
      },
      {
        "week": 9,
        "title": "Machine Learning Projects",
        "description": "Apply your skills to real-world machine learning projects."
      },
      {
        "week": 10,
        "title": "Capstone Project",
        "description": "Complete and present a comprehensive machine learning project."
      }
    ],
    "outcomes": [
      {
        "title": "Expertise in Machine Learning Algorithms",
        "description": "Master various machine learning algorithms and techniques."
      },
      {
        "title": "Proficiency in Python for ML",
        "description": "Gain practical experience using Python for machine learning tasks."
      },
      {
        "title": "Real-World Project Experience",
        "description": "Showcase your skills with a final machine learning project."
      }
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
      {
        "week": 1,
        "title": "Introduction to Blockchain",
        "description": "Learn the basics of blockchain technology."
      },
      {
        "week": 2,
        "title": "Blockchain Architecture",
        "description": "Understand the architecture and components of a blockchain."
      },
      {
        "week": 3,
        "title": "Consensus Mechanisms",
        "description": "Explore different consensus mechanisms used in blockchain."
      },
      {
        "week": 4,
        "title": "Smart Contracts",
        "description": "Learn about smart contracts and their applications."
      },
      {
        "week": 5,
        "title": "Cryptocurrencies",
        "description": "Understand how cryptocurrencies work and their role in blockchain."
      },
      {
        "week": 6,
        "title": "Blockchain Use Cases",
        "description": "Study various use cases and applications of blockchain technology."
      }
    ],
    "outcomes": [
      {
        "title": "Solid Understanding of Blockchain Technology",
        "description": "Gain essential knowledge of blockchain and its components."
      },
      {
        "title": "Hands-on Experience with Smart Contracts",
        "description": "Learn to develop and deploy smart contracts."
      },
      {
        "title": "Prepared for Blockchain Roles",
        "description": "Be ready to explore roles in blockchain development and consulting."
      }
    ],
    "callToAction": {
      "text": "Unlock the Power of Blockchain!",
      "description": "Enroll to gain a comprehensive understanding of blockchain technology and its potential."
    },
    "imageURL": "https://via.placeholder.com/300?text=Blockchain"
  },
  {
    "id": 6,
    "title": "Project Management Essentials",
    "description": "Gain essential project management skills for successful project execution.",
    "category": "Business",
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
      {
        "week": 1,
        "title": "Introduction to Project Management",
        "description": "Learn the fundamentals of project management."
      },
      {
        "week": 2,
        "title": "Project Planning",
        "description": "Understand how to plan and schedule projects effectively."
      },
      {
        "week": 3,
        "title": "Risk Management",
        "description": "Identify and manage project risks."
      },
      {
        "week": 4,
        "title": "Team Coordination",
        "description": "Learn strategies for effective team management."
      },
      {
        "week": 5,
        "title": "Project Closure",
        "description": "Understand the process of closing and evaluating projects."
      }
    ],
    "outcomes": [
      {
        "title": "Strong Project Management Skills",
        "description": "Develop skills for planning, executing, and closing projects."
      },
      {
        "title": "Risk and Team Management",
        "description": "Learn to manage risks and coordinate teams effectively."
      },
      {
        "title": "Prepared for Project Management Roles",
        "description": "Be ready to take on project management responsibilities in various industries."
      }
    ],
    "callToAction": {
      "text": "Become a Project Management Pro!",
      "description": "Enroll now to master project management and drive successful project outcomes."
    },
    "imageURL": "https://via.placeholder.com/300?text=Project+Management"
  },
  {
    "id": 7,
    "title": "UX/UI Design Fundamentals",
    "description": "Learn the basics of UX/UI design to create user-friendly and visually appealing interfaces.",
    "category": "Design",
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
      {
        "week": 1,
        "title": "Introduction to UX Design",
        "description": "Learn the principles of user experience design."
      },
      {
        "week": 2,
        "title": "UI Design Basics",
        "description": "Understand the fundamentals of user interface design."
      },
      {
        "week": 3,
        "title": "Design Tools and Software",
        "description": "Get familiar with design tools and software."
      },
      {
        "week": 4,
        "title": "User Research",
        "description": "Learn how to conduct user research and gather feedback."
      },
      {
        "week": 5,
        "title": "Prototyping and Wireframing",
        "description": "Create prototypes and wireframes for your designs."
      },
      {
        "week": 6,
        "title": "Design Project",
        "description": "Apply your skills to a UX/UI design project."
      }
    ],
    "outcomes": [
      {
        "title": "Solid Understanding of UX/UI Principles",
        "description": "Master the fundamentals of user experience and interface design."
      },
      {
        "title": "Proficiency in Design Tools",
        "description": "Gain hands-on experience with popular design tools."
      },
      {
        "title": "Completed Design Project",
        "description": "Showcase your skills with a comprehensive design project."
      }
    ],
    "callToAction": {
      "text": "Start Designing Today!",
      "description": "Enroll to learn UX/UI design and create amazing user interfaces."
    },
    "imageURL": "https://via.placeholder.com/300?text=UX+UI+Design"
  },
  {
    "id": 8,
    "title": "Cybersecurity Fundamentals",
    "description": "Introduction to cybersecurity principles and practices to protect information systems.",
    "category": "Data",
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
      {
        "week": 1,
        "title": "Introduction to Cybersecurity",
        "description": "Understand the basics of cybersecurity and its importance."
      },
      {
        "week": 2,
        "title": "Network Security",
        "description": "Learn about protecting networks from various threats."
      },
      {
        "week": 3,
        "title": "Understanding Threats and Vulnerabilities",
        "description": "Explore different types of cybersecurity threats and vulnerabilities."
      },
      {
        "week": 4,
        "title": "Security Protocols and Encryption",
        "description": "Study security protocols and encryption methods."
      },
      {
        "week": 5,
        "title": "Incident Response and Management",
        "description": "Learn how to respond to and manage security incidents."
      },
      {
        "week": 6,
        "title": "Cybersecurity Tools and Techniques",
        "description": "Familiarize yourself with cybersecurity tools and techniques."
      },
      {
        "week": 7,
        "title": "Capstone Project",
        "description": "Apply your knowledge to a real-world cybersecurity project."
      }
    ],
    "outcomes": [
      {
        "title": "Fundamental Cybersecurity Knowledge",
        "description": "Gain essential knowledge to protect information systems."
      },
      {
        "title": "Hands-on Experience with Security Tools",
        "description": "Get practical experience with cybersecurity tools and techniques."
      },
      {
        "title": "Prepared for Cybersecurity Roles",
        "description": "Be ready for roles in cybersecurity and information security."
      }
    ],
    "callToAction": {
      "text": "Secure Your Future in Cybersecurity!",
      "description": "Enroll today to build a strong foundation in cybersecurity and protect digital assets."
    },
    "imageURL": "https://via.placeholder.com/300?text=Cybersecurity"
  },
  {
    "id": 9,
    "title": "Machine Learning with Python",
    "description": "Deep dive into machine learning algorithms and techniques using Python.",
    "category": "Programming & Development",
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
      {
        "week": 1,
        "title": "Introduction to Machine Learning",
        "description": "Learn the basics of machine learning and its applications."
      },
      {
        "week": 2,
        "title": "Python for Machine Learning",
        "description": "Get familiar with Python libraries used in machine learning."
      },
      {
        "week": 3,
        "title": "Supervised Learning Algorithms",
        "description": "Explore supervised learning algorithms and their implementations."
      },
      {
        "week": 4,
        "title": "Unsupervised Learning Algorithms",
        "description": "Understand unsupervised learning algorithms and techniques."
      },
      {
        "week": 5,
        "title": "Model Evaluation Metrics",
        "description": "Learn how to evaluate and select models based on performance metrics."
      },
      {
        "week": 6,
        "title": "Feature Engineering",
        "description": "Study techniques for feature selection and transformation."
      },
      {
        "week": 7,
        "title": "Deep Learning Basics",
        "description": "Introduction to deep learning and neural networks."
      },
      {
        "week": 8,
        "title": "Advanced Machine Learning Techniques",
        "description": "Explore advanced machine learning techniques and algorithms."
      },
      {
        "week": 9,
        "title": "Machine Learning Projects",
        "description": "Apply your skills to real-world machine learning projects."
      },
      {
        "week": 10,
        "title": "Capstone Project",
        "description": "Complete and present a comprehensive machine learning project."
      }
    ],
    "outcomes": [
      {
        "title": "Expertise in Machine Learning Algorithms",
        "description": "Master various machine learning algorithms and techniques."
      },
      {
        "title": "Proficiency in Python for ML",
        "description": "Gain practical experience using Python for machine learning tasks."
      },
      {
        "title": "Real-World Project Experience",
        "description": "Showcase your skills with a final machine learning project."
      }
    ],
    "callToAction": {
      "text": "Advance Your Machine Learning Skills!",
      "description": "Enroll now to become proficient in machine learning with Python and tackle complex data challenges."
    },
    "imageURL": "https://via.placeholder.com/300?text=Machine+Learning"
  },
  {
    "id": 10,
    "title": "Blockchain Fundamentals",
    "description": "Introduction to blockchain technology and its applications in various industries.",
    "category": "Data",
    "details": {
      "duration": "6 Weeks",
      "commitment": "5-7 hrs/week, Online",
      "startDate": "20 November 2024",
      "applicationDeadline": "10 November 2024",
      "adminFee": "$85"
    },
    "highlights": [
      "Blockchain Basics",
      "Cryptocurrency and Smart Contracts",
      "Blockchain Applications"
    ],
    "weeklyWorkflow": [
      {
        "week": 1,
        "title": "Introduction to Blockchain",
        "description": "Learn the fundamentals of blockchain technology."
      },
      {
        "week": 2,
        "title": "Cryptocurrencies",
        "description": "Understand how cryptocurrencies work and their impact."
      },
      {
        "week": 3,
        "title": "Smart Contracts",
        "description": "Explore the concept and use cases of smart contracts."
      },
      {
        "week": 4,
        "title": "Blockchain Platforms",
        "description": "Study different blockchain platforms and their features."
      },
      {
        "week": 5,
        "title": "Blockchain Applications",
        "description": "Learn about various applications of blockchain technology in different industries."
      },
      {
        "week": 6,
        "title": "Blockchain Project",
        "description": "Apply your knowledge to a practical blockchain project."
      }
    ],
    "outcomes": [
      {
        "title": "Understanding of Blockchain Technology",
        "description": "Gain a comprehensive understanding of blockchain and its components."
      },
      {
        "title": "Knowledge of Cryptocurrencies and Smart Contracts",
        "description": "Learn about the workings and applications of cryptocurrencies and smart contracts."
      },
      {
        "title": "Blockchain Project Experience",
        "description": "Showcase your understanding with a final blockchain project."
      }
    ],
    "callToAction": {
      "text": "Unlock the Potential of Blockchain!",
      "description": "Enroll to understand and utilize blockchain technology in various sectors."
    },
    "imageURL": "https://via.placeholder.com/300?text=Blockchain"
  }
]