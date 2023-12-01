import React from "react"
import { useNavigate } from "react-router-dom";

export const IMG_BASE_URL = "http://image.tmdb.org/t/p/w1280/";

export default function TVc( props ) {
    const navigate = useNavigate();
    const onClickMovieItem = () => {
     navigate(`/tv/${props.name}` , {
        state: props
     })
    }
    return (
        <div className="tv-container" onClick={onClickMovieItem}>
            <img src={IMG_BASE_URL + props.poster_path} alt="tv 프로그램 포스터"/>
            <div className="tv-info">
            <h4>{props.name}</h4>
            <span>{props.vote_average}</span>
            </div>
        </div>
    );
}