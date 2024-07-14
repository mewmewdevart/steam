import TitleAnimation from './utils/title-animation';
import Button from '@components/atoms/button/button';
import Navbar from '@components/molecules/navbar/navbar';
import Carousel from '@components/molecules/carousel/carousel';

import banner from "@assets/banner01.png"
import bannerLogo from "@assets/logo-banner01.png"

function App() {
  const labelCarousel = "United States, 1899. The end of the Old West era has begun, and authorities are hunting down the last remaining outlaw gangs. Those who do not surrender or succumb are killed."
  return (
    <>
      <TitleAnimation />
      <section className="bg-[#131823] w-full h-[100vh]">
        <Navbar/>
        {/* <Button
          label="Compre agora"
          extraClassNames="text-paragraph-large"
        /> */}
        <Carousel imagesCarousel={banner} logoCarousel={bannerLogo} labelCarousel={labelCarousel} />
      </section>
    </>
  );
}

export default App;
