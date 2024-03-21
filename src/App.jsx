import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import { action as updateOrderAction } from './features/order/UpdateOrder';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  const mockWeatherData = {
    'New York': {
      temperature: '22°C',
      humidity: '56%',
      windSpeed: '15 km/h',
    },
    'Los Angeles': {
      temperature: '27°C',
      humidity: '45%',
      windSpeed: '10 km/h',
    },
    London: {
      temperature: '15°C',
      humidity: '70%',
      windSpeed: '20 km/h',
    },
  };

  const [filteredData, setFilteredData] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [previousSearch, setPreviousSearch] = useState([]);
  const [weatherError, setWeatherError] = useState(false);
  const [trigger, settrigger] = useState(false);
  console.log('previousSearch', previousSearch);

  const handleSearch = (prev) => {
    const city = filteredData.trim();

    if (mockWeatherData.hasOwnProperty(city)) {
      if (!previousSearch.includes(city)) {
        setPreviousSearch([...previousSearch, city]);
      }
      console.log('mock', mockWeatherData);
      setWeatherData(mockWeatherData[city]);
      setWeatherError(false);
    } else {
      setWeatherData(null);
      setWeatherError(true);
    }
  };

  const handleSubmit = (e) => {
    console.log('Im here');
    // setFilteredData(city);
    handleSearch();
  };
  const handlePrev = (city) => {
    console.log(city);

    // Use the callback function of setFilteredData to ensure it's updated
    setFilteredData(city);
  };

  useEffect(() => {
    handleSearch();
  }, [filteredData]);

  const [on, setOn] = useState(false);

  function handleClick() {
    setOn(!on);
    console.log('work');
  }

  return <RouterProvider router={router} />;
}

export default App;
// function App() {

//
// }

// export default App;

{
  /* <div>
<input
  onChange={(e) => setFilteredData(e.target.value)}
  value={filteredData}
  type="text"
  id="citySearch"
  placeholder="Search for a city..."
/>
<button onClick={handleSubmit} id="searchButton">
  Search
</button>

<div id="weatherData">
  <div>Temperature: {weatherData?.temperature ?? ''}</div>
  <div>Humidity:{weatherData?.humidity ?? ''} </div>
  <div>Wind Speed:{weatherData?.windSpeed ?? ''} </div>
  {weatherError && <div>City not found.</div>}
</div>
<div id="previousSearches" style={{display:'flex', gap: 3}}>
  {previousSearch.length > 0 &&
    previousSearch?.map((city) => (
      <button onClick={() => handlePrev(city)} key={city}>
        {city}
      </button>
    ))}
</div>
</div> */
}
