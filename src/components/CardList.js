import { Grid, Container } from '@mui/material';
import { CardBox } from './CardBox';

export function CardsList({ category, data }) {
  const filteredData = category === 'ALL' ? data : data.filter(item => item.category === category);

  return (
    <Container maxWidth="xl" sx={{ marginY: '20px' }}>
      <Grid container spacing={{ xs: 2, md: 3, lg: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {filteredData.map(card => (
          <Grid item xs={12} sm={6} md={4} key={card.id} >
            <CardBox data={card} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};