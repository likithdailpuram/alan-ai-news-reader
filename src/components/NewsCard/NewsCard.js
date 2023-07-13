import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import "./styles.css";
function NewsCard({article: {description,source,title,url,urlToImage,publishedAt }, i, activeArticle}){
    return (<Card className={"card " + (activeArticle === i ? "activeCard" : "")}>
        <CardActionArea href={url} target="_blank">
            <CardMedia component="img" className="media" image={urlToImage||'https://cdn-icons-png.flaticon.com/512/21/21601.png'}/>
            <div className="details">
                <Typography variant="body2" color="textSecondary" component="h2" >{(new Date(publishedAt)).toDateString()}</Typography>
                <Typography variant="body2" color="textSecondary" component="h2" >{source.name}</Typography>
            </div>
            <Typography className="title" gutterBottom variant="h5" >{title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
            </CardContent>
        </CardActionArea>
        <CardActions className="cardActions">
            <Button size="small" color="primary">Learn More</Button>
            <Typography variant="h5" color="textSecondary">{i+1}</Typography>
        </CardActions>
    </Card>);
}
export default NewsCard;