import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import './CardArtist.css';

const CardArtist = (props: { imgUrl: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; span: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
    return (
        <div className='artist-card'>
            <div className="img">
                <img src={props.imgUrl} />
            </div>
            <div className='content-artist-card'>
                <div className='title-artist-card'>{props.title}</div>
                <span className='span-artist-card'>{props.span}</span>
            </div>
        </div>
    );
};

export default CardArtist;