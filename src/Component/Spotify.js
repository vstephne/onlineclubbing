import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios';

const Spotify = ()=>{


  const [token,setToken]= useState("")
    
    useEffect(()=>{
        const hash = window.location.hash
        let token= window.localStorage.getItem("token")
        

        if(!token && hash){
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
        
            console.log(token)
            window.location.hash=""
            window.localStorage.setItem("token",token)
            setToken(token)
    
    
        }
    },[ ])

  const CLIENTID = "2038fab5e9314ad88e5acfc3188e4cca"
  const REDIRECT_URI = "http://localhost:3000/spotify"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])
  const [songlinks, setSonglinks] = useState([])

  useEffect((x)=>{
        console.log(x)
        renderLinks();
    },[ songlinks])

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }
  const [songs, setSong] = useState([])

const searchArtists = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKey,
            type: "album"
        }
    })
    setArtists(data.albums.items)
    await axios.get("https://api.spotify.com/v1/me/playlists", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(data1=>
      data1.data.items.forEach(element => {
        const {tracks} = axios.get(element.tracks.href, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      }).then(s=>{
        console.log(s);
        let r=[]
        s.data.items.forEach(x=>{
          axios.get(x.track.href, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        r=r.concat(x.track.external_urls.spotify)
      })
      setSonglinks(r)
    })
  
      
      })
    )

    
    //console.log(playlist)
    
}

const renderLinks = () => {
  let x =0
  return  (
      <div id="">
          {/* {<a href={x.external_urls.spotify}>{x.name}</a>} */}
      </div>
  )
  }

const renderArtists = () => {
    return artists.map(artist => (
        <div key={artist.id}>
            {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
            {artist.name}
        </div>
    ))
}
  return(
      <div>
        <h1> Spotify App</h1>
        {!token ?
        <a href = {`${AUTH_ENDPOINT}?client_id=${CLIENTID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login Spotify</a>
        
        : <button onClick={logout}>Logout</button>}

        {token ?
            <form onSubmit={searchArtists}>
                <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                <button type={"submit"}>Search</button>
            </form>

            : <h2>Please login</h2>
        }

        {/* <!--{renderArtists()}--> */}

        {renderArtists()}

      </div>
  )

}

export default Spotify