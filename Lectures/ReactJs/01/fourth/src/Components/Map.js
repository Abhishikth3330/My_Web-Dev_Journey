function Map() {
    
    let Food = ['Salad', 'roti', 'sandwich', 'cookies'];

    return(
        <>
            {/* <ol>
                {Food.map((item) => <li key={item}>{item}</li>)}
            </ol> */}

            <ul>
                {Food.map((item) => <li key={item}>{item}</li>)}
            </ul>
        </>
    );
}
export default Map;