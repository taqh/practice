import { useState } from "react";
import logo from "../../assets/images/logo-mastercraft.svg";
import bookmarkIcon from "../../assets/images/icon-bookmark.svg";
import bookmarkedIcon from "../../assets/images/icon-bookmark-active.svg";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Hero = ({ showModal }) => {
   const [bookmark, setBookmark] = useState(false);

   const mark = () => {
      setBookmark((prevState) => !prevState);
   };

   return (
      <Card className='hero'>
         <img src={logo} alt='mastercraft-logo' className='hero__logo' />
         <h1 className='hero__heading'>Mastercraft Bamboo Monitor Riser</h1>
         <p>
            A beautifully handcrafted monitor stand to reduce neck and eye
            strain.
         </p>
         <Button className='hero__btn--back' onClick={() => showModal()}>Back this project</Button>
         <Button className='hero__btn--bookmark' onClick={mark}>
            {bookmark ? (
               <img src={bookmarkedIcon} alt='bookmark icon' />
            ) : (
               <img src={bookmarkIcon} alt='bookmark icon' />
            )}
            <span className={bookmark ? "selected" : ""}>
               {bookmark ? "Bookmarked" : "Bookmark"}
            </span>
         </Button>
      </Card>
   );
};

export default Hero;
