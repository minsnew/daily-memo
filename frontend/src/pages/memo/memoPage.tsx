import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

// custom style
const useStyles = makeStyles((theme) =>
  createStyles({
    memoRoot: {
      width: '100%',
      height: '100%',
    },
  }),
);

// memo page component
const MemoPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.memoRoot}>
      <div>MEMO Content</div>
    </div>
  );
}

export default MemoPage;