import Desktop from './components/Desktop/Desktop';
import Mobile from './components/Mobile/Mobile';
import { useMediaQuery} from 'react-responsive';
import MediaQuery from 'react-responsive';
import './App.css';

function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 360px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1000px)",
  });


  return (
  <div>
    <MediaQuery maxDeviceWidth={640}>
      {isMobileDevice && <Mobile />}
    </MediaQuery>

    <MediaQuery minDeviceWidth={1000}>
      {isDesktop && <Desktop />}
    </MediaQuery>

  </div>
  );
}

export default App;
