import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

export function CardBox({ data }) {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardActionArea component="a" href={data.url} target="_blank">
        <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
          <CardMedia
            component="img"
            image={data.image}
            alt={data.title}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <CardContent sx={{ flexGrow: 1, textAlign: 'left' }}>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.author} - {data.date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.read}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}