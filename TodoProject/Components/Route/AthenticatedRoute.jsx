import React, {  } from 'react';
import Authentication from '../Authentication';
import {Navigate, Route} from 'react-router-dom';
function AthenticatedRoute({component:Component,...restOfProps}) {
    const isAuthenticated=sessionStorage.getItem('athenticatedUser');
    return (
        <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
    )
    //    if (Authentication.isLoggedUserIn()) {
    //     return <Route{...this.props}/>
    //    }else {
    //     <Navigate to={"/login"}/>
    //    }
    

}

export default AthenticatedRoute;