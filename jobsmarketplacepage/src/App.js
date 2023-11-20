import Desktop from './components/Desktop';
import Mobile from './components/Mobile';
import { useMediaQuery} from 'react-responsive';
import MediaQuery from 'react-responsive';
import './App.css';

function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 360px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });


  return (
  <div>

    <MediaQuery maxDeviceWidth={640}>
      {isMobileDevice && <Mobile />}
    </MediaQuery>

    <MediaQuery minDeviceWidth={1224}>
      {isDesktop && <Desktop />}
    </MediaQuery>

  </div>
  );
}

export default App;
