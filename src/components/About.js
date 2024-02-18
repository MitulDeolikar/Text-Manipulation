import React,{useState} from 'react'

export default function About(props) {

    // const[myStyle,setmyStyle]=useState({

        
    //         color:'black',
    //         backgroundColor:'white'
        
    // })
    // const[btnText,setbtnText]=useState("Switch to Dark Mode")
    let myStyle={
        color:props.mode==='dark'?'white':'rgb(62 56 56)',
        backgroundColor:props.mode==='dark'?'rgb(62 56 56)':'white'
    }
    
    return (
        <div className="container" >
            <h2 className='my-2' style={{color:props.mode==='dark'?'white':'#5e5656'}}>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            Analyze the text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            The app which provides you the platform to manipulate your text to certain cases and copy the edited text which just a click . It provides a preview and certain details regarding your text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            Free to Use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Our platform does not discrimnate users and allows all to freely use our services at your will
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            Browser compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This platform works with all browsers such as Chrome,Firefox,Safari,Internet Explorer, Brave and is ready to accept any sort of text you give.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button type="button" className="btn btn-outline-info my-2" onClick={toggleStyle}>Switch to Dark Mode</button> */}
        </div>
    )
}
