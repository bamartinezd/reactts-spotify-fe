import axios from 'axios';
import { useEffect, useState } from 'react';
import { Artist } from '../Models/Artist';

const artistService = {
    
    
    getArtistByIds: async(artistIds: string) => {
        const [user, setUser] = useState(null);

        useEffect(() => {
          // Make the API call when the component mounts
          axios.get(`https://localhost:7022/Artist/${artistIds}`)
            .then(response => {
              // Map the response to your model
              const data = response.data;
              //return data<Artist>
            })
            .catch(error => {
              console.error('Error fetching user:', error);
            });
        }, []);
    }



}
export default artistService;