import '../styles/globals.css'
import 'swiper/css';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Navbar from '../components/navbar';
import Footer from '../components/Footer'
import connect from '../mDb';
connect()


function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </QueryClientProvider>
  )
}

export default MyApp
