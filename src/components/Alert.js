import React from 'react'



export default function Alert(props) {
  const capitalise=(word)=>{
   word=word.toLowerCase();
   return word.charAt(0).toUpperCase()+word.substring(1,word.length);
  }
 

    return (
   props.alert  && <div id="myalert">
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalise(props.alert.type)}:{props.alert.msg}</strong>
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button> */}
</div>
</div>
)
}




