import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import pxToRem from "../../../assets/theme/functions/pxToRem";
import {cyan, grey} from "@mui/material/colors";

export default function TabItem(props = {name:'Item', route:'/', selected:false}){
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