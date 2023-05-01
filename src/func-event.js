import react from 'react'

export default function Button(){
     const onclickButtonOK =() =>{
        alert('OK')
     }
          const onclickButtonCancel =() =>{
             alert('Cancel')
          }

     let banner = './imge/1.jpg'
     let url = 'http://reactjs.org'

     const bannerClick =() =>{
          window.open(url)
     }
     return (
          <div>
          <img src={banner} onClick ={bannerClick} style={{cursor:'pointer',width:'10%'}}/> 
          <button onClick={onclickButtonOK}>OK</button>
          <button onClick={onclickButtonCancel}>Cancel</button>
          </div>
     )
}