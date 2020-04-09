import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import AlbumList from './components/AlbumList'
import SingleAlbum from './components/SingleAlbum'

export default (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/albums' component={AlbumList}/>
    <Route path='/album/:id' component={SingleAlbum}/>
  </Switch>
)