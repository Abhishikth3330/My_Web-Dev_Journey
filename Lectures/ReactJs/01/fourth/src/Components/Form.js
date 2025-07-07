function Form() {
    return(
        <>
            <div className="p-3 mb-2 bg-secondary text-white">
                <div class="container mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>
                <div class="container mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>

            <hr></hr>

            <div class="container">
                <table class="table table-striped align-middle">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Date of Birth</th>
                            <th>Profile Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Abhi</td>
                            <td>Nagpur</td>
                            <td>25 October, 2001</td>
                            <td><img src="./Assets/image.jpg" height={"50px"}></img></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>ABC</td>
                            <td>Chandrapur</td>
                            <td>25 September, 2003</td>
                            <td><img src="./Assets/image.jpg" height={"50px"}></img></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>DEF</td>
                            <td>Mumbai</td>
                            <td>03 January, 1999</td>
                            <td><img src="./Assets/image.jpg" height={"50px"}></img></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>


        </>
    );
}
export default Form;