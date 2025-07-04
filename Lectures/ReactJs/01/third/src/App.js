import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      {/* <h1>Ferrari</h1>
      <h2>Lamborghini</h2>
      <h3>Bugatti</h3>
      <h4>McLaren</h4>
      <h5>Aston Martin</h5>
      <h6>Porsche</h6>


      <hr color='black'></hr>

      <p>
        Cars, also known as <b>automobiles or motor vehicles</b>, are wheeled, self-propelled vehicles primarily used for transporting people. They typically have <u>four wheels, an engine, and are designed to be driven on roads</u>. Cars are a common form of <i>personal transportation</i> and are used for a wide range of purposes, from commuting to leisure travel.

        <br></br>

        <b>Equation: </b> x<sup>2</sup> <br></br>
        <u>Formula: </u>CH<sub>4</sub>

      </p>

      <h1>This will be a list of Fruits: </h1>
      <ol type='i'>
        <li>Orange</li>
        <li>Apple</li>
        <li>Grapes</li>
        <li>Pineapple</li>
        <li>Banana</li>
      </ol>

      <hr color='black'></hr>

      <h2>This is a list of cities: </h2>
      <ul>
        <li>Nagpur</li>
        <li>Chandrapur</li>
        <li>Delhi</li>
        <li>Mumbai</li>
      </ul> */}

      <hr color='black'></hr>

      <h3>This is a list of Countries with currency: </h3>
      <dl>
        <dt><b>India : </b></dt>
        <dd>The currency is Rupees</dd>
        
        <dt><b>Japan : </b></dt>
        <dd>The currency is Yen</dd>

        <dt><b>South Korea : </b></dt>
        <dd>The currency is Won</dd>
      </dl>


      <table border= '2px' black>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Mathematics</th>
            <th>Physics</th>
            <th>Chemistry</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Abhi Thul</td>
            <td>85</td>
            <td>78</td>
            <td>90</td>
          </tr>
          <tr>
            <td>ABC</td>
            <td>88</td>
            <td>74</td>
            <td>84</td>
          </tr>
          <tr>
            <td>PQRS</td>
            <td>75</td>
            <td>81</td>
            <td>78</td>
          </tr>
          <tr>
            <td>XYZ</td>
            <td>92</td>
            <td>88</td>
            <td>94</td>
          </tr>
        </tbody>
      </table>

      <hr color='black'></hr>

      <form>
        <div>
          <span>
            <img src={logo} alt='LOGO' height= "100px"></img>
          </span>
          <span>Student Registration Form</span>
        </div>

        <div>
          <h2><b>Student Information</b></h2>
        </div>

      </form>


    </>
  );
}

export default App;
