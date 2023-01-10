import React from "react";
import { connect } from "react-redux";
import { selectLanguage } from "../../../redux/action/languages";
import Newmoviescroll from "../scrollmoviemenu/Newmoviescroll";
import Newtvserialscroll from "../scrollmoviemenu/Newtvserialscroll";
import Nowplaying from "../scrollmoviemenu/Nowplaying";
import TrendingMovie from "../scrollmoviemenu/TrendingMovie";
import Slidecontent from "../slidshowcontent/Slidecontent";



const Content = ({languages}) => {
    document.title = "Home | HERO MOVIES"
  return (
    <div className="Movie-card-div  bg-stone-900">
     <Slidecontent lang={languages}/>
    <div className="font-raleway mt-5 py-4 gap-20" >
      <Newmoviescroll  lang={languages}/>
      {/* <Newtvserialscroll  lang={languages}/> */}
      <Nowplaying lang={languages}/>
      <TrendingMovie lang={languages} />
    </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  languages: state.Languages,
});

export default connect(mapStateToProps,{selectLanguage,})(Content);
