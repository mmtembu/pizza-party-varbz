import '../../App.css'
import React from 'react'
import CardItem from '../CardItem'
import {Link} from 'react-router-dom';
import { Button } from '../Button';
import backgroundVideo from '../../videos/video-1.mp4'

export default function SignUp(){
    return <>
    <div className="sign-up">
        <video autoPlay loop muted>
            <source src={backgroundVideo} type='video/mp4'/>
        </video>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <li className="cards__item">
                        <Link className="cards__item__signup" >
                            <div className="cards__item__info">
                                <h5 className="cards__item__text_role_header">Seeker</h5>
                                <div className="roles_description">
                                    <p>
                                        As a seeker you only get to view original local content posted by content creators
                                    </p>
                                </div>
                                <div className="btn-row_sign_up">
                                    {Button && <Button redirect="/sign-up-form-seeker" buttonStyle='btn--outline'> SIGN UP</Button>}
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className="cards__item">
                        <Link className="cards__item__signup" >
                            <div className="cards__item__info">
                                <h5 className="cards__item__text_role_header">Creator </h5>
                                <div className="roles_description">
                                    <p>
                                        As a creator you get to post original local content for the viewers and get to attract financers to fund your content 
                                    </p>
                                </div>
                                <div className="btn-row_sign_up">
                                    {Button && <Button redirect="/sign-up-form-creator" buttonStyle='btn--outline'> SIGN UP</Button>}
                                </div>
                            </div>
                        </Link>    
                    </li> 
                    <li className="cards__item">
                        <Link className="cards__item__signup" >
                            <div className="cards__item__info">
                                <h5 className="cards__item__text_role_header">Financer</h5>
                                <div className="roles_description">
                                    <p>
                                        As a creator you get to post original local content for the viewers and get to attract financers to fund your content 
                                    </p>
                                </div>
                                <div className="btn-row_sign_up">
                                    {Button && <Button redirect="/sign-up-form-financer" buttonStyle='btn--outline'> SIGN UP</Button>}
                                </div>
                            </div>
                        </Link>    
                    </li> 
                </ul>
            </div>
        </div>
    </div>
    </>
}

// https://github.com/mmtembu/TelkomGEWHack-Pizza-Party.git
// git push https://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@github.com/mmtembu/EPFYSDHackathon-Async.git origin
// git clone https://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@github.com/mmtembu/EPFYSDHackthon-Async.git

// git push https://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@github.com/mmtembu/TelkomGEWHack-Pizza-Party.git origin