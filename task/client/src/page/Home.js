
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useQuery} from "@apollo/client";
import '../style/Home.css';
import Box from '@mui/material/Box';

import { gql } from "@apollo/client";

const FETCH_QUERY = gql`
query {
  allDrugs {
    id
    name
    description
    sku
    price
    image
  }
}
`

function Home() {
  const {loading, error, data} = useQuery(FETCH_QUERY)
  console.log(data,'data', error,'error', loading, 'loading')
  
  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error.message}`;
 

  return(
    <div classname="Home">
      <Box  sx={{ display: 'flex',
          flexWrap: 'wrap',
          p: 1,
          m: 1,}} >
        {data.allDrugs.map((drug) => 
        <div key={drug.id}>
        <Card sx={{ maxWidth: 345 }}>
         <CardMedia
           component="img"
           alt="Drug Pic"
           height="140"
           image={drug.image}
          />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {drug.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {drug.description}
              </Typography>
           </CardContent>
           <CardActions>
           <Button size="small">{drug.sku}</Button>
           <Button size="small">Price {drug.price}</Button>
           <Button size="small">addtocart</Button>
          </CardActions>
        </Card>
        </div>
      )}
      </Box>
    </div>
  )
}

export default Home