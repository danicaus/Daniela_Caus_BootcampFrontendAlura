import ErrorScreen from '../src/components/screens/ErrorScreen';
import websitePageHOC from '../src/components/wrappers/WebSitePage/hoc';

export default websitePageHOC(ErrorScreen, {
  pageWrapperProps: {
    boxProps: {
      height: '100vh',
    },
  },
});
