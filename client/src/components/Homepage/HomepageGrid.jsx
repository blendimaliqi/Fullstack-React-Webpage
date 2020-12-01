import React from 'react';
import {Grid} from '@material-ui/core';

export const HomepageGrid = () => {
    return (
        <Grid container spacing={6} >
            <Grid item lg={3} sm={3} xs={4} >
                <section style={{display:"flex", alignItems:"center", justifyContent:"center" ,height:"280px", width:"100%", background:"#DBDBDB"}}> 
                    <p style={{fontWeight:"bolder", fontSize:"1.5em"}}>Kontorer</p>
                </section>
            </Grid>
            <Grid item xs={7} sm={9}>
                <section style={{display:"flex", alignItems:"center", justifyContent:"center" ,height:"280px", width:"100%", background:"#DBDBDB"}}> 
                    <p style={{fontWeight:"bolder", fontSize:"1.5em"}}>Kontakt</p> 
                </section>
            </Grid>
            <Grid item xs={12}>
                <section style={{display:"flex", alignItems:"center", justifyContent:"center" ,height:"25rem", width:"100%", background:"#DBDBDB"}}> 
                    <p style={{fontWeight:"bolder", fontSize:"1.5em"}}>Se våre fagartikler om oppussing av bad</p> 
                </section>
            </Grid>
      </Grid>
    )
}
export default HomepageGrid;