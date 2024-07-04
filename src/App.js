import React, { Component, useEffect, useState } from 'react'


function App() {
  const[render,setRender]=useState(false);
  const [data,setData]=useState(
  [
  
      { date: "2022-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-02", views: 150, article: "Article 2" },
  
      { date: "2023-09-02", views: 120, article: "Article 3" },
  
      { date: "2020-09-03", views: 200, article: "Article 4" }
  
  ]
  
  )

  const sortdata=()=>{
      setData(data.sort((a,b)=>{
        if(new Date(b.date)===new Date(a.date)){
          return (b.views-a.views)}
        
          return new Date(b.date)-new Date(a.date)
        }
      ))
      console.log(data)
      setRender(!render)
    }
    const sortviews=()=>{
      setData( data.sort((a,b)=>{
        if(a.views===b.views){
        return new Date(b.date)-new Date(a.date)
      }
      return (b.views-a.views)}
    ))
    setRender(!render)
    
  }


  return (
    <div className="App">
      <h1>Date and Views Tabel</h1>
      <button type="button" onClick={sortdata}>Sort by Date</button>
      <button type="button" onClick={sortviews}>Sort by Views</button>

      <div className="tabel">
        <table>
          <thead>

          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
          </thead>
          <tbody>
          {data.map((ele,ind)=>(
            <tr key={ind}>
              <td>{ele.date}</td>
              <td>{ele.views}</td>
              <td>{ele.article}</td>
            </tr>
          ))}
          </tbody>
          
        </table>
      </div>
    </div>
  );
}

export default App;
