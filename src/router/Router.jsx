import React, { useMemo } from 'react'
import { Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import Details from "../pages/Details"
import User from "../pages/User"
import Favorites from "../pages/Favorites"

import ProtectedRoute from "./ProtectedRoute"
import Login from "../pages/Login"
import Register from "../pages/Register"

const Router = () => {

  return (

    <Routes>
      <Route element={<Home />} path="/category/:categoryId" />
      <Route element={<Details />} path="/detail/:detailId" />


      <Route element={
        <ProtectedRoute>
          <User />
        </ProtectedRoute>
      } path="/user" />
      <Route element={
        <ProtectedRoute>
          <Favorites />
        </ProtectedRoute>
      } path="/favs" />


      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
      <Route element={<Home />} path="/" />
    </Routes>

  )
}

export default Router