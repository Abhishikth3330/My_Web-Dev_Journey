function Map(){
    let FoodItem = ["salad", "roti", "sandwich", "cookie"]

    return <>
        <ul className="list-group">
            {FoodItem.map((item) => <li key={item} className="list-group-item">{item}</li>)}
        </ul>
    </>
}
export default Map;

// as you can see below is the bootsrap version of a list
// if you see then we have the same class names for the <ul> and <li> tags
// from below to above tags


{/* <ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul> */}