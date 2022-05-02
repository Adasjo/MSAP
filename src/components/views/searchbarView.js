import TrackListPresenter from "./presenters/trackListPresenter"
import {spotifyPlayTrack, spotifyQueueTrack} from '../utilities/apiUtils.js'

function SearchbarView(props){
    return <div className="searchComponent">
        <div className="searchHeader">
            <input className="searchBar" type="text" placeholder="Search..." onChange={e => updateSearchText(e.target.value)}/>
            <button className="searchButton" onClick={search}>Search</button>
        </div>
        {props.promiseNoData() ||
        <TrackListPresenter tracks={searchResult.tracks.items} artistRedirect={artistRedirect} playTrack={track => spotifyPlayTrack(accessToken, track.uri)} addToQueue={uri => spotifyQueueTrack(accessToken, uri)}/>
        }
    </div>
}
export default SearchbarView