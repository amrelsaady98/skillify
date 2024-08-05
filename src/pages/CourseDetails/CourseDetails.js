import Box from "@mui/material/Box";
import pxToRem from "../../assets/theme/functions/pxToRem";
import Typography from "@mui/material/Typography";
import {amber, grey} from "@mui/material/colors";
import {Paper} from "@mui/material";

export default function CourseDetails(params){



    return (
        <>
        {/*Hero Section*/}
            <Box
                sx={{
                    display:'flex',
                    width: "100%",
                    height: "35vw",
                    backgroundImage: 'linear-gradient(211deg, #039BAB 5.98%, #0D7590 37.75%, #014C7C 70.36%)'
                }}
            >
                <Box
                    style={{
                        width:'15vw',
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
                        width: '40%',
                        display: 'flex',
                        justifyContent:'center',
                        flexDirection:'column',
                    }}
                >
                    <Typography variant={'h2'} color={amber['A200']} style={{padding:`${pxToRem(24)} ${pxToRem(0)}`}}>
                      {response.title}
                    </Typography>
                   <Typography variant={'h1'} color={grey[50]}>
                     {response.description}
                   </Typography>
                </Box>

                <Box
                    style={{

                        height:'50vw',

                        display:'flex',
                        justifyContent:'center'
                    }}
                >
                    <Paper
                        variant={'elevation'}
                        elevation={10}
                        style={{

                            width: '30vw',
                            height: '50vw',
                            marginTop: pxToRem(220),
                            background: 'white',
                            borderRadius: pxToRem(8),
                        }}
                    >
                        <img src={require(`assets/images/carousel/alx-slide-10.png`)}
                             style={{
                                 width: '100%',
                                 objectFit: 'cover',
                                 borderRadius: `${pxToRem(8)} ${pxToRem(8)} 0 0`
                             }}
                        />
                      <Box
                        sx={{
                          px:'2rem',
                          py:'1rem',
                        }}
                      >

                        <Box>
                          <Typography variant={'h4'} sx={{
                            marginBottom:'0.5rem'
                          }}>
                            This Programme includes:
                          </Typography>
                          {response.highlights.map(highlight => (
                                <Typography
                                variant={'body1'}
                                sx={{
                                  marginInlineStart:'1.5rem'
                                }}
                                >
                                {highlight}
                                </Typography>
                          ))}
                        </Box>

                      </Box>
                    </Paper>
                </Box>
                <Box
                    style={{
                        width:'15vw',
                    }}
                >

                </Box>
            </Box>
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
};