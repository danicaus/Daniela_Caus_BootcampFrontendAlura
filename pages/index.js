import HomeScreen from '../src/components/wrappers/HomeScreen';
import websitePageHOC from '../src/components/wrappers/WebSitePage/hoc';

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    capaProps: {
      display: true,
      title: 'Daniela Caus',
      subtitle: 'Portfólio Alura',
    },
  },
});
