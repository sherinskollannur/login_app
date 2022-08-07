import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function OutlinedCard({ loginUserData, registeredUsers }) {
  const [registeredUsersLoaded, setRegisteredUsersLoaded] =
    React.useState(false);

  React.useEffect(() => {
    if (registeredUsers) {
      setRegisteredUsersLoaded(true);
    }
  }, []);

  return (
    <Card
      variant="outlined"
      style={{
        margin: '10px',
        minWidth:
          loginUserData.userType === 'admin' && registeredUsersLoaded && '50%',
      }}
    >
      <CardContent>
        {!registeredUsersLoaded && (
          <Typography variant="h5">
            Hi {loginUserData.userName} , Welcome to MyCare dashboard
          </Typography>
        )}

        {loginUserData.userType === 'admin' && registeredUsersLoaded && (
          <>
            <Typography variant="h5">
              User Name : {registeredUsers.userName}
            </Typography>
            <Typography variant="h5">
              Email : {registeredUsers.email}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
}
