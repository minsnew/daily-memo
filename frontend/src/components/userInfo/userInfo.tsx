import React from "react";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    userinfo: {
      display: 'flex',
    },
  }),
);

// user info component
const UserInfo: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.userinfo}>User Info</div>
  )
}

export default UserInfo;