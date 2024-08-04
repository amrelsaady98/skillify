import Box from "@mui/material/Box";
import pxToRem from "../../assets/theme/functions/pxToRem";
import Typography from "@mui/material/Typography";
import {amber, grey} from "@mui/material/colors";
import {Paper} from "@mui/material";

export default function (params){



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
                        Virtual Assistant
                    </Typography>
                   <Typography variant={'h1'} color={grey[50]}>
                       Gain the Skills to Become a Virtual Assistant
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