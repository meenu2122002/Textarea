import React, { useState } from 'react';


export default function Myfun(props) {
    const [text, settext] = useState("hello everyone nice to meet u all");
    const [count, setcount] = useState([""]);
    const handleclick = () => {
        console.log("handleclick event fired");
        settext(text.toUpperCase());
        if (text.length != 0)
            props.showalert("success", "converted to upper case")

    }
    const handleclicklwr = (event) => {
        event.target.style.backgroundColor = "yellow"
        console.log("handleclick event fired");
        settext(text.toLowerCase());
        if (text.length != 0)
            props.showalert("warning", "converted to lower case")

    }



    // const handleclickemail=()=>{
    //     for(let i=0;i<text.length;i++){
    //         if(text.substring(i,11)=="@gmail.com"){
    //             for(let j=i-1;j>=0;j--){
    //                 if(text.charAt(j)==" "){
    //                  setcount(count.concat(text.substring(j+1,i-j+10)));
    //                 }
    //             }

    //         }

    //     }
    // }
    const handlechange = (event) => {
        settext(event.target.value);
    }
    const removeextspaces = () => {
    let str="";
    const a=text.split(" ");
    for (let index = 0; index < a.length; index++) {
        if(a[index].length!=0)
        str=str.concat(a[index]);
    else if(a[index].length==0 && a[index+1].length!=0)
    str=str + " ?";
    
    }
    const st="";
    for(let j=0;j<str.length;j++){
        if(str.charAt(j)!="?")
            st+=str.charAt(j);
    }

    //     let newarray =text.split(" ").filter((e) =>{
    //  return e.length!=0;
    // });
    // for(let i=0;i<newarray.length;i++)
    //    str=str.concat(newarray[i]);
       settext(st);
    
    //     for (let i = 0, j = 0; i < text.length; i++) {
    //         if ((text.charAt(i) == " " && text.charAt(j) != " ") || (text.charAt(j) != " " && text.charAt(i + 1) == "")) {
    //             str = str.concat(text.substring(j, i - j + 2));
    //             j = i;
    //         }
    //         else if (text.charAt(i) != " " && text.charAt(j) == " ") {
    //             j = i;
    //             if (text.charAt(i + 1) == "")
    //                 str = str.concat(text.substring(j, i - j + 2));
    //         }

    //     }

    //     settext(str);
    }



    const countword = (text) => {
        let count = 0;

        for (let i = 0; i < text.length; i++) {
            if (text.charAt(i) == " " && text.charAt(i + 1) != " ")
                count += 1;

            else if (text.charAt(i) == " " && text.charAt(i + 1) == "" && text.charAt(0) != " ")

                count += 1;

            else if (text.charAt(i) != " " && text.charAt(i + 1) == "")
                count += 1;
        }
        return count;
    }
    return (
        <div style={{ marginLeft: 300 }}>
            <h1>Enter your credentials</h1>
            <textarea name="text" id="" cols="100" rows="10" value={text} onChange={handlechange}></textarea><br></br>
            <button onClick={handleclick} className={`btn btn-warning m-10`} >uppercase </button>
            <button onClick={handleclicklwr} className={`btn btn-success m-3`} >lower case  </button>
            {/* <button onClick={handleclickemail} className={`btn btn-primary m-3`} >email-address  </button> */}
            <button onClick={removeextspaces} className={`btn btn-primary m-3`} >remove extraspaces </button>

            <p>No of Words in the textfield is {countword(text)} and characters {text.length}</p>
            <p>time  taken to read it is {0.008 * text.split(" ").length}</p>
            <p>{text}</p>
            <p> the emails in this textfield is {count}</p>

        </div>
    )




}