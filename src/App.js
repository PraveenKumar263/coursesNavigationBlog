import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import { CardsList } from './components/CardList.js';
import courseData from './Data/courses.json';

const App = () => {
  // the different course categories
  const categories = ['ALL', 'FULL-STACK-DEVELOPMENT', 'DATA-SCIENCE', 'CYBER-SECURITY', 'DEVOPS'];
  const navigate = useNavigate(); // To navigate to a page
  const location = useLocation(); // get current path

  const handleNavigate = (category) => {
    navigate(category === 'ALL' ? '/' : `/${category}`);
  };

  return (
    <div className="App">
      <AppBar position="static" sx={{ backgroundColor: '#1a237e' }}>
        <Toolbar sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
          {categories.map((category, index) => (
            <Button
              key={index}
              color="inherit"
              onClick={() => handleNavigate(category)}
              sx={{
                textTransform: 'uppercase',
                fontWeight: 600,
                letterSpacing: '1px',
                fontSize: '18px',
                margin: '4px',
                width: 'auto',
                textDecoration: location.pathname === (category === 'ALL' ? '/' : `/${category}`) ? 'underline' : 'none',
                '&:hover': {
                  backgroundColor: '#3f51b5',
                  color: '#fff'
                }

              }}
            >
              {category}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      <Routes>
        {categories.map((category, index) => (
          <Route
            key={index}
            path={category === 'ALL' ? '/' : `/${category}`}
            element={<CardsList data={courseData} category={category} />}
          />
        ))}
      </Routes>
    </div>
  );
};

export default App;
