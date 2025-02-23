import Abc from "./Abc"

function Food(){
    
    let FoodItem = ["salad", "daal", "roti"]

    return <>
        <h1>FOOD</h1>
        <ul className="list-group">
            {FoodItem.map((item) => (<Abc key={item} FoodItem = {item}></Abc>))}
        </ul>        
    </>
}
export default Food;