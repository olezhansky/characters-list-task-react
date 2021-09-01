import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Character from '../../components/Character/Character';
import Loader from '../../components/UI/Loader/Loader';
import { getCharactersAction } from '../../store/actions';
import styles from './CharactersContainer.module.scss';

const CharactersContainer = () => {

    const characters = useSelector((state) => state.characters);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getCharactersAction());
    }, [dispatch])
    
    return (
        <div className={styles.Wrapper}>
            <div className={styles.Container}>
                <h2 className={styles.Title}>Characters</h2>
                {characters.length ? ( <ul className={styles.List}>
                    {characters.map((character, index) => {
                        return <Character key={index} character={character}/>
                    })}
                </ul>) : <div className={styles.Loader}><Loader /></div>}
            </div>
        </div>
    )
}

export default CharactersContainer;