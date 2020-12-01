import React from 'react';
import styled from 'styled-components';
import {Grid} from '@material-ui/core';

export const HomepageGrid = () => {
    return (
        <Grid container spacing={3}>
        <Grid item xs={2} >
        <div style={{display:"flex", alignItems:"center", justifyContent:"center" ,height:"280px", width:"100%", background:"#DBDBDB"}}> <p style={{fontWeight:"bolder", fontSize:"1.5em"}}>Kontorer</p> </div>
        </Grid>
        <Grid item xs={10}>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center" ,height:"280px", width:"100%", background:"#DBDBDB"}}> <p style={{fontWeight:"bolder", fontSize:"1.5em"}}>Kontakt</p> </div>
        </Grid>
        <Grid item xs={12}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center" ,height:"280px", width:"100%", background:"#DBDBDB"}}> <p style={{fontWeight:"bolder", fontSize:"1.5em"}}>Se våre fagartikler om oppussing av bad</p> </div>
        </Grid>
      </Grid>
    )
}
export default HomepageGrid;