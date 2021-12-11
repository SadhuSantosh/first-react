import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


const data = [
    {
        name: "Spaghetti",
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2021%2F09%2F23%2Fspaghetti-and-spinach-with-sun-dried-tomato-cream-sauce.jpg&q=85",
        time: "30 mins",
        serves: "2"
    },
    {
        name: "Fusilli",
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/4/30/0/ei1017_fusilli.jpg.rend.hgtvcom.616.462.suffix/1398787149575.jpeg",
        time: "20 mins",
        serves: "1"
    },
    {
        name: "Ravioli",
        image: "https://www.kitchensanctuary.com/wp-content/uploads/2021/06/Creamy-Tomato-Ravioli-Sauce-square-FS-30.jpg",
        time: "25 mins",
        serves: "2"
    },
    {
        name: "Fettuccine",
        image: "https://pinchofyum.com/wp-content/uploads/Mushroom-Fettuccine-Recipe.jpg",
        time: "15 mins",
        serves: "2"
    }

]

function Recipe() {

    return (
        <>
            <Typography align="center" variant="h5">
                Recipes
            </Typography>
            <br />
            <div style={{ display: "flex" , gap:"50px", justifyContent:"space-evenly",flexWrap:"wrap",margin:"20px"}}>


                {
                    data.map((item) => {
                        return (
                            <Card style={{ width: "300px" }}>
                                <Typography>
                                    {item.name}
                                </Typography>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={item.image}
                                    alt={item.name}
                                />
                                <div style={{ display: "flex", direction: "row" }}>
                                    <div>
                                        Time : {item.time}  |
                                    </div>
                                    <div>
                                        Serves : {item.serves}
                                    </div>
                                </div>

                            </Card>
                        )
                    })
                }


            </div>
        </>)
}

export default Recipe;
