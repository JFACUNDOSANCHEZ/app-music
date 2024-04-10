import React, { useState, useEffect } from 'react';
import { getTopTracks } from './componentes/spotify';

export default function Artistas() {
    const [topTracks, setTopTracks] = useState([]);

    useEffect(() => {
        async function fetchTopTracks() {
            const tracks = await getTopTracks();
            setTopTracks(tracks);
        }

        fetchTopTracks();
    }, []);

    return (
        <div>
            <h2>Top Tracks</h2>
            <ul>
                {topTracks.map(track => (
                    <li key={track.id}>
                        {track.name} by {track.artists.map(artist => artist.name).join(', ')}
                    </li>
                ))}
            </ul>
        </div>
    );
}