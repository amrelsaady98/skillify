import Box from "@mui/material/Box";
import pxToRem from "../../assets/theme/functions/pxToRem";
import Typography from "@mui/material/Typography";
import {amber, cyan, green, grey, lightBlue, teal} from "@mui/material/colors";
import {Accordion, AccordionDetails, AccordionSummary, Paper} from "@mui/material";
import Container from "@mui/material/Container";
import {IoCheckmarkDone, IoChevronDown} from "react-icons/io5";
import RoundedFilledButton from "../../components/Buttons/roundedFilledButton";
import MyRoundedFilledButton from "../../components/Buttons/roundedFilledButton";
import Divider from "@mui/material/Divider";

export default function CourseDetails(params) {


  return (
    <>
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
            {response.title}
          </Typography>
          <Typography variant={'h1'} color={grey[50]}>
            {response.description}
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
            <img src={require(`assets/images/carousel/alx-slide-10.png`)}
                 style={{
                   width: '100%',
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
                {response.highlights.map(highlight => (

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

              <Box>
                <MyRoundedFilledButton
                  title={'Apply Now'}
                  backgroundColor={green["A400"]}
                />
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
          {Object.entries(response.details).map(([key, value], index) => (
            <Box
              style={{
                padding:'0 1.5rem',
                margin:'1rem 0',
                borderInlineEnd: index === Object.entries(response.details).length - 1 ? '' : '2px solid',
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
          {response.outcomes.map((outcome, index) => (
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
          {response.weeklyWorkflow.map((workflow, index) => (
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<IoChevronDown/>}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>Week {workflow.week} : {workflow.title}</Typography>
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