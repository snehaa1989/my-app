import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import './Cards.css'

export default function Cards(props) {
  const [expanded, setExpanded] = React.useState(false);
  console.log(props.blogs);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return (
        <div className='Cards'>
            {
                props.blogs.map((blog) => {
                    return (
                        <Card className='Cards' key = {blog.id} sx={{ 
                            maxWidth: 400
                             }}>
                            <CardHeader
                                title={blog.title}
                                subheader={blog.createdAt}
                            />
                            <CardMedia
                                component="img"
                                height="200"
                                image={blog.imageUrl}
                                alt={blog.title}
                            />
                            <CardContent>
                                {blog.description}
                            </CardContent>
                            <CardActions disableSpacing>
                                <button onClick={handleExpandClick}> <a href={blog.redirectUrl}>Read More</a></button>
                            </CardActions>
                        </Card> );
                })
                
            }
        </div>);

}
