import React from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import  '../../styles/scrollmenu.css'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'
const Scrollfunction = ({children}) => {
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);
  const isItemSelected = (id) => !!selected.find((el) => el === id);
  const handleClick =
  (id) =>
  ({ getItemById, scrollToItem }) => {
    const itemSelected = isItemSelected(id);
    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    );
  };
  return (
    <div>
          <ScrollMenu LeftArrow={LeftArrow}  RightArrow={RightArrow} scrollContainerClassName='scroll-menu'>
           {children}
          </ScrollMenu>
    </div>
  )}

  function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);
  
    return (
      <button disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        <BsArrowLeft color='#708090'  fontSize='2em' />
      </button>
      
    );
  }
  function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  
    return (
      <button disabled={isLastItemVisible} onClick={() => scrollNext()}>
        <BsArrowRight color='#708090' fontSize='2em' />
      </button>
    );
  }


export default Scrollfunction
