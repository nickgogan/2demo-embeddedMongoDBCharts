import './Dashboard.css';
import Chart from "./Chart";

const Dashboard = () => {
//   const url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/metadata';
//   const [countries, setCountries] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [filterCountry, setFilterCountry] = useState({});

//   function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

//   useEffect(() => {
//     axios.get(url).then(res => {
//       setCountries(res.data.countries);
//       const randomCountryNumber = getRandomInt(res.data.countries.length);
//       let randomCountry = res.data.countries[randomCountryNumber];
//       setSelectedCountry(randomCountry);
//       setFilterCountry({"country": randomCountry});
//     })
//   }, [])

//   useEffect(() => {
//     if (selectedCountry !== "") {
//       setFilterCountry({"country": selectedCountry});
//     }
//   }, [selectedCountry])

  return <div className="App">
    <h1 className="title">MongoDB Charts</h1>
    {/* <h2 className="title">COVID-19 Dashboard with Filters</h2>
    <div className="form">
      {countries.map(c => <div className="elem" key={c}>
        <input type="radio" name="country" value={c} onChange={() => setSelectedCountry(c)} checked={c === selectedCountry}/>
        <label htmlFor={c} title={c}>{c}</label>
      </div>)}
    </div> */}
    <div className="charts">
      <Chart height={'600px'} width={'800px'} /*filter={filterCountry}*/ chartId={'62ab8958-f4d9-4172-8761-e59aba0ba76a'}/>
      <Chart height={'600px'} width={'800px'} /*filter={filterCountry}*/ chartId={'62ab8f08-5f50-4b75-8667-8cd7e7c23a35'}/>
      <Chart height={'600px'} width={'800px'} /*filter={filterCountry}*/ chartId={'62aba00d-ed6c-4769-8f89-bc52817d3980'}/>
    </div>
  </div>
};

export default Dashboard;