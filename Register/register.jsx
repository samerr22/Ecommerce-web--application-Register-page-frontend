import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import usEr from '/image/user.png';
import React from 'react';




    
     
   


    return(

      <div>



 <h3 style={{position: 'absolute',left: '400px',top: '170px',fontSize: '25px',fontFamily: 'Garamond'}}>Creat a New Accout</h3>


 <Card style={{ width: '50rem',
                   height: '17rem', 
                   border: 'none',
                   backgroundColor: 'rgba(100, 100, 100, 0.1)',
                   borderRadius: '8px',
                   position: 'absolute', 
                   top: '200px',
                   marginLeft: '400px',
                 
                   }}>
      <Card.Body>
        
    <h3 style={{position: 'absolute', fontSize: '15px', fontFamily: 'initial', top : '30px',left: '50px'}}>UserName</h3>
    <input style={{position: 'absolute',width: '350px',height: '35px',top: '55px', border: 'none', borderRadius: '30px',left:'40px'}}
    onChange={(e) => setName(e.target.value)}></input>
    <h3 style={{position: 'absolute', fontSize: '15px', fontFamily: 'initial', top: '100px',left: '50px'}}>Email</h3>
    <input style={{position: 'absolute',width: '350px',height: '35px',top: '125px',border: 'none',borderRadius: '30px',left:'40px'}}
    onChange={(e) => setEmail(e.target.value)}></input>
    <h3 style={{position: 'absolute', fontSize: '15px', fontFamily: 'initial', top: '170px',left: '50px'}}>Password</h3>
    <input type="password"
           name="password"
           className='from-control runded-0'
    style={{position: 'absolute',width: '350px',height: '35px',top: '195px',border: 'none',borderRadius: '30px',left:'40px'}}
    onChange={(e) => setPassword(e.target.value)}></input>
   
   
    

    <button onClick={handleSubmit}  style={{position: 'absolute', fontSize: '20px', fontFamily: 'initial', top: '70px',left: '500px',width: '250px',height: '40px', backgroundColor: '#7272FF',color: 'white',border: 'none',borderRadius: '50px'}}>Register</button>
    <h3 style={{position: 'absolute', fontSize: '10px', fontFamily: 'initial', top: '130px',left: '570px'}}>Already Have a Account</h3>
    <button style={{position: 'absolute', fontSize: '20px', fontFamily: 'initial', top: '170px',left: '500px',width: '250px',height: '40px', backgroundColor: '#E84B4F',color: 'white',border: 'none',borderRadius: '50px'}}>Login</button>
    

   
      </Card.Body>
    </Card> 
      
     







<div style={{}}>
   <hr className="middle-line" style={{color: '#f98029', marginTop: '480px',height: '5px',width: '100%', position: 'absolute' }}/>
   <img src={Chat} style={{marginTop: '500px',position: 'absolute', marginLeft: '270px', width: '20px',height: '20px',  }} />
        <h1  style={{color: '#f98029',marginTop: '500px',position: 'absolute',fontSize: '15px', marginLeft: '300px',fontFamily: 'Garamond'}}> chat withUs</h1> 
        <h1 style={{color: '#f98029',marginTop: '500px',position: 'absolute',fontSize: '15px', marginLeft: '1200px',fontFamily: 'Garamond'}}> About us</h1>
        <h1 style={{color: '#f98029',marginTop: '520px',position: 'absolute',fontSize: '15px', marginLeft: '1200px',fontFamily: 'Garamond'}}> Terms & Condition</h1>
        <h1 style={{color: '#f98029',marginTop: '540px',position: 'absolute',fontSize: '15px', marginLeft: '1200px',fontFamily: 'Garamond'}}> Privacy police</h1>
        <h1 style={{color: '#f98029',marginTop: '560px',position: 'absolute',fontSize: '15px', marginLeft: '1200px',fontFamily: 'Garamond'}}> Contact us</h1>
        
        </div>

    </div>

    )
}

export default register;



