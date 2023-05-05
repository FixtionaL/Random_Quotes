import React, { Component,useEffect,useState ,useRef} from 'react';


const Quote = () =>
{

    const[quote,setQuote]=useState("");
    const textRef = useRef();
    let colors = ["#D5D6EA","#57FEFF", "#7FFFD4", "#57E964", "#FBB117", "#FF5F1F" ];
    const getQuote = () =>
    {
        fetch(" https://type.fit/api/quotes")
        .then((res)=>res.json())
        .then((data)=>
        {
            let ran = Math.floor(Math.random() * data.length);
            setQuote(data[ran]);
        })
    }

    useEffect(() =>
    {
        getQuote();
    },[])

    useEffect(()=>
        {
            let clran = Math.floor(Math.random() *colors.length);
            textRef.current.    style.color = colors[clran];

        },[quote]);

    return(
        <div>
            <h1 id='heading' className='mainH'>Boomer Quotes</h1>

        <div className='container'>
            <div className='data'>
                <p className='para' ref={textRef}>{quote.text}</p>
                <p className='para1'> {quote.author}</p>
            </div>
            <div className='btn'>
            <button className='qte-btn' onClick={getQuote}>Boring af, Next!</button>
            {/* <a href={`https://twitter.com/intent/tweet?text=${quote.text}`} target="_blank" rel="noopener noreferrer" className='twt-btn'><button>Tweet</button></a> */}
        </div>
        </div>
        </div>
    )
}
export default Quote;