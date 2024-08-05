import pxToRem from "../../assets/theme/functions/pxToRem";
import {amber, green, grey} from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function MyRoundedFilledButton(props = {
  title:'Button',
  width:'100%',
  backgroundColor:green["A200"],
  color:grey[800],
  hoverBackgroundColor:amber["A200"],
  hoverColor:grey[800],
  enabled:true,
  onClick:(mouseEvent)=>{},
}) {
  return (
    <Button
      variant={'contained'}
      autoCapitalize={false}
      sx={{
        paddingY:pxToRem(4),
        my:pxToRem(12),
        width:props.width,
        backgroundColor:props.backgroundColor,
        borderRadius:'100px',
        color:props.color,
        '&:hover':{
          backgroundColor:props.hoverBackgroundColor,
          color:props.hoverColor,
        }
      }}
      onClick={props.onClick}
    >
      <Typography variant={'button'} sx={{
        textTransform: 'none',
      }}>
        {props.title}
      </Typography>
    </Button>
  );
}
MyRoundedFilledButton.defaultProps = {
  title:'Button',
  width:'100%',
  backgroundColor:green["A200"],
  color:grey[800],
  hoverBackgroundColor:amber["A200"],
  hoverColor:grey[800],
  enabled:true,
  onClick:(mouseEvent)=>{},
}

export default MyRoundedFilledButton;