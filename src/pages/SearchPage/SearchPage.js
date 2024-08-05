import Container from "@mui/material/Container";
import bg_img from 'assets/images/carousel/alx-slide2-min.png'
import {grey, indigo} from "@mui/material/colors";
import pxToRem from "../../assets/theme/functions/pxToRem";
import Box from "@mui/material/Box";
import {Image} from "@mui/icons-material";
import {Input, TextField} from "@mui/material";

export default function SearchPage(props) {

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

  return(
    <Box>

      <Box
        style={{
          width:'100%',
          height:pxToRem(240),
          backgroundImage:`url(${require('assets/images/background/img.png')})`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
        }}
      >

      </Box>



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

        <Box
          style={{
            width:'100%',
            height:'100%',
            display:'flex',
            alignItems: 'center',
          }}
        >
          <TextField
            // color={grey[50]}
            sx={{
              width:'50%',
              color:'white',
              '&:focus': {
                color:indigo[900],
              }
            }}
          />
        </Box>

      </Container>
    </Box>
  )
}