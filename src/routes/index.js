import React from 'react';
import { Switch } from 'react-router-dom';
//import { toast, ToastType } from 'react-toastify';
import MyRoute from './MyRoute';
import Home from '../pages/Home';
import About from '../pages/About';
import Page404 from '../pages/Page404';

export default function Routes(){
  //toast.success('aeeee');
  //toast.error('aeeee');
  return(
      <Switch>
        <MyRoute exact path='/' component={Home} />
        <MyRoute exact path='/About' component={About} />
        <MyRoute path='*' component={Page404} />
      </Switch>
  )
};
