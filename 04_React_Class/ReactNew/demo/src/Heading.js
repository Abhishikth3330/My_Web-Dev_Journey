// [3] External style with css
// you use a different .css file and import the file here at the top to give the styling
import "./Heading.css"

function Heading(){

    // [2] this is the internal style tag
    const Mystyle = {
        backgroundColor: "blue",
        color: "black", // text color
        padding: "50px"
    }

    return <>
        {/* [1] h1 tag that is mentioned below is an example of inline CSS
            because you explicitly mention the style in the tag itself */}
        <h1 style={{color: "red", background: "yellow"}}>Heading</h1>

        {/* [2] Internal Style Tag : "Mystyle" 
            we'll use this and the create a variable with CSS so that variable acts as styling
            in the same file*/}
        <p style={Mystyle}>This is my first React Page and I am adding this paragraph for the first time</p>
        <h2>This is second Heading !!!</h2>
    </>
}
export default Heading