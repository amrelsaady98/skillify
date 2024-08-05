import {Paper} from "@mui/material";
import pxToRem from "../../../assets/theme/functions/pxToRem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {amber, cyan, green, grey} from "@mui/material/colors";
import {Link} from "react-router-dom";

export default function CourseItem(props = {}){
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