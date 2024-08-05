import Box from "@mui/material/Box";

export default function MyCarouselItem(props)
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

