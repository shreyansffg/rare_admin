import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

function CenteredGrid(props) {
  const { classes , children} = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          {children}
        </Grid>
        <Grid item xs={6}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);


// <Paper className={classes.root}>
//       <Table className={classes.table}>
//         <TableHead>
//           <TableRow>
//             <TableCell></TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat (g)</TableCell>
//             <TableCell align="right">Carbs (g)</TableCell>
//             <TableCell align="right">Protein (g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {this.state.challengeList.map(row => (
//             <TableRow key={row.id}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
    // </Paper>
