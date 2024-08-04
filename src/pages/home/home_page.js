
import { Paper, Slider} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import {
    amber,
    blue,
    blueGrey,
    cyan,
    green,
    grey,
    indigo,
    lightBlue,
    lightGreen,
    lime,
    teal,
    yellow
} from "@mui/material/colors";
import pxToRem from "../../assets/theme/functions/pxToRem";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";


import {CarouselItem} from "react-material-ui-carousel/dist/components/CarouselItem";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
// import MKPagination from "../../components/MKPagination";


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
// import MKPagination from "components/MKPagination";

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
                    px:'20vw',
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
                    px:'16rem',
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
                <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid xs={12} sm={4} md={3}>
                        <CourseItem/>
                    </Grid>
                    <Grid xs={12} sm={4} md={3}>
                        <CourseItem/>
                    </Grid>
                    <Grid xs={12} sm={4} md={3}>
                        <CourseItem/>
                    </Grid>
                    <Grid xs={2} sm={4} md={3}>
                        <CourseItem/>
                    </Grid>
                    <Grid xs={12} sm={4} md={3}>
                        <CourseItem/>
                    </Grid>
                    <Grid xs={12} sm={4} md={3}>
                        <CourseItem/>
                    </Grid>
                    <Grid xs={12} sm={4} md={3}>
                        <CourseItem/>
                    </Grid>
                    <Grid xs={2} sm={4} md={3}>
                        <CourseItem/>
                    </Grid>

                </Grid>


                </Box>

                <Container sx={{ height: "100%" }}>
                    <Grid container item justifyContent="center" xs={12} lg={6} mx="auto" height="100%">
                        {/*<MKPagination>*/}
                        {/*    <MKPagination item>*/}
                        {/*        <Icon>keyboard_arrow_left</Icon>*/}
                        {/*    </MKPagination>*/}
                        {/*    <MKPagination item active>*/}
                        {/*        1*/}
                        {/*    </MKPagination>*/}
                        {/*    <MKPagination item>2</MKPagination>*/}
                        {/*    <MKPagination item>3</MKPagination>*/}
                        {/*    <MKPagination item>4</MKPagination>*/}
                        {/*    <MKPagination item>5</MKPagination>*/}
                        {/*    <MKPagination item>*/}
                        {/*        <Icon>keyboard_arrow_right</Icon>*/}
                        {/*    </MKPagination>*/}
                        {/*</MKPagination>*/}
                    </Grid>
                </Container>


            </Box>


        </>
    );
}
function MyCarouselItem(props)
{
    return (
        <Box
            sx={{
                width:'100vw',
                height:{xs: '330px', lg: '40vw'},
            }}
        >
        <img

            src={require(`assets/images/carousel/${props.item.image}`)}

            style={{
                objectFit: 'cover',
                width:'100%'
            }}
        />

        </Box>
    )
}

function TabItem(props = {name:'Item', route:'/', selected:false}){
    return (
        <Link to={props.route}>
            <Box
                sx={{
                    py:'12px'
                }}
            >
                <Typography variant={'subtitle1'} sx={{
                    px:pxToRem(4),
                    py:'12px',
                    borderBottom:'0.3rem solid transparent',
                    borderColor:props.selected ? cyan[300] : 'transparent',
                    display:'inline',
                    cursor:'pointer',
                    color:grey[700],
                    boxSizing:'border-box',
                    '&:hover':{
                        borderColor:cyan[300],
                        color:cyan[500]
                    }
                }}>
                    {props.name}
                </Typography>
            </Box>
        </Link>
    )
}
function CourseItem(props = {}){
    return(
        <>
            <Paper variant={'outlined'}
                sx={{
                    margin:pxToRem(12),
                    borderRadius:'6px'
                }}
            >
                <img src={require(`assets/images/carousel/alx-slide-10.png`)}
                     style={{
                        width:'100%',
                        objectFit:'cover',
                        borderRadius:'6px 6px 0 0'
                    }}
                />
                <Box
                    sx={{
                        paddingX:pxToRem(20),
                        paddingY:pxToRem(12),
                        textAlign:'start',
                    }}
                >
                    <Typography variant={'h6'} sx={{}}>
                        Back-End Web Development
                    </Typography>
                    <Typography variant={'subtitle2'}>
                        6 Months
                    </Typography>
                    <Button variant={'contained'} autoCapitalize={false} sx={{
                        paddingY:pxToRem(4),
                        my:pxToRem(12),
                        marginTop:pxToRem(36),
                        width:'100%',
                        backgroundColor:green["A200"],
                        borderRadius:'100px',
                        color:grey[800],
                        '&:hover':{
                            backgroundColor:amber["A200"],
                        }
                    }}>
                        <Typography variant={'button'} sx={{
                            textTransform: 'none',
                        }}>
                            Apply Now
                        </Typography>
                    </Button>

                    <Link to={'/test'}>
                        <Typography
                            variant={'body2'}
                            sx={{
                                textAlign:'center',
                                cursor:'pointer',
                                color:cyan[300],
                                '&:hover':{
                                    color:grey[400],
                                }
                            }}
                        >
                            learn more »
                        </Typography>
                    </Link>

                </Box>

            </Paper>
        </>
    );
}