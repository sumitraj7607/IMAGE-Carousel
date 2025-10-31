import { useRef, useState } from "react";
import "./App.css";
import ImgGallery from "./components/ImgGallery";
import Text from "./components/Text";
import Gallery from "./img";


function App() {
  const [count, setCount] = useState(0);
  const [background, setBackGround] = useState(Gallery[count].src);
  const [selectedimg, setSelectedImg] = useState(0);
  const scrollRef = useRef();

  const handleClick = (imageSrc, index) => {
    setBackGround(imageSrc);
    setSelectedImg(index);
  };

  const prevsImg = () => {
    const newCount = count === 0 ? Gallery.length - 1 : count - 1;
    setCount(newCount);
    setBackGround(Gallery[newCount].src);
    setSelectedImg(newCount);
    if (scrollRef.current) {
      const currentScroll = scrollRef.current.scrollLeft;
      scrollRef.current.scrollBy({
        left: -350,
        behavior: "smooth",
      });
    }
  };

  const nextImg = (direction) => {
    const newCount = count === Gallery.length - 1 ? 0 : count + 1;
    setCount(newCount);
    setBackGround(Gallery[newCount].src);
    setSelectedImg(newCount);
    if (scrollRef.current) {
      const currentScroll = scrollRef.current.scrollLeft;
      scrollRef.current.scrollBy({
        left: 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Text 
      background={background}
      selectedimg={selectedimg}
      prevsImg={prevsImg}
      nextImg={nextImg}
      />

      <ImgGallery
        scrollRef={scrollRef}
        handleClick={handleClick}
        selectedimg={selectedimg}
      />
      
      
    </>
  );
}

export default App;
