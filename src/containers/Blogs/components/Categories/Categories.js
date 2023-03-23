import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Cards from '../Cards/Cards';
import { color } from '@mui/system';

const styles = {
    BottomNavigation: {
      height: "5em",
    },
    img: {
        width: '50px',
        height: '50px',
        borderRadius: '60%',
    }
  };

const token = localStorage.getItem('authToken');
function getCategories() {
    return fetch('https://api-staging-v2.sploot.space/api/v2/cms/post-categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
        .then(response => response.json())
        .then(response => {
            return response;
        }
        )
        .catch(error => {
            console.log(error);
        }
        )
}

function showBlogs(slug)
{
    console.log(slug);
    return fetch(`https://api-staging-v2.sploot.space/api/v2/public/cms/post-categories/${slug}` , {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            return response;
        })
        .catch(error => {
            console.log(error);
        })
}
export async function getCategoryBlogs(slug) {
    return showBlogs(slug).then(response => {
        console.log(response);
        return response.data.data;
    });
}

export default function Categories(props) {
    const [categories, setCategories] = React.useState([]);
    const [value, setValue] = React.useState('recents');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    React.useEffect(() => {
        getCategories().then(response => {
            setCategories(response.data.data);
        })
    }, []);
    
    return (
        <BottomNavigation sx={{ width: 1750 }} value={value} onChange={handleChange}>
        {
            categories.map(category => (
            <BottomNavigationAction  onClick={() => {
                props.setSlug(category.slug);
            }} sx={styles.BottomNavigation}  key={category.id} label={category.name} value={category.name} icon={<img style = {styles.img} src={category.imageUrl} />} />
        ))}
      
        </BottomNavigation>

        
    );
}