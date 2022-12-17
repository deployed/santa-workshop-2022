import ReactLogoCalendar from '../../../../icons/calendar.svg';
import ReactLogoMail from '../../../../icons/mail.svg';
import ReactLogoClose from '../../../../icons/close.svg';
import Button from '@mui/material/Button';
import './RightSide.css';

const RightSide = () => {
    return (
        <div className='RightSide'>
            <button className='TopMenu__closeBtn'><img src={ReactLogoClose}></img></button>
            <div className='TopMenu'>
                <div className='BasicInfo'>
                    <ul className='BasicInfo__list'>
                        <div className='BasicInfo__list--top'>
                            <li className='BasicInfo__list--item'>ID<span className='BasicInfo__list--span'>12344</span></li>
                            <li className='BasicInfo__list--item'>
                                <button className='BasicInfo__btn'>
                                    <img src={ReactLogoMail} className="BasicInfo__btn--icon" />
                                    <span className='BasicInfo__btn--text'>Nowe</span></button>
                            </li>
                        </div>

                        <li className='BasicInfo__list--item'>
                            <img src={ReactLogoCalendar} className='BasicInfo__list--calendar' />
                            10.12.2022</li>
                    </ul>
                </div>
            </div>
            <h2 className='Gifts__header'>Lista:</h2>
            <div className='Gifts'>
                <ul className='Gifts__list'>
                    <li className='Gifts__text'>Piłka do nogi</li>
                    <li className='Gifts__text'>Czekolada oreo
                        <p className='Gifts__subtext'>Taka duża, gdzie są całe ciastka</p>
                    </li>
                    <li className='Gifts__text'>Szczeniaczek
                        <p className='Gifts__subtext'>Notatka od rodziców: proszę, nie</p>
                    </li>
                    <li className='Gifts__text'>Rowerek</li>
                </ul>
            </div>
            <div className='SubmitBtn__wrapper'>
                <Button variant='contained'
                    className='SubmitBtns__btn'
                    sx={{
                        background: '#294C89',
                        borderRadius: '16px'

                    }}

                >Akceptuj i wyślij</Button>
                <Button variant='outlined'
                    sx={{
                        color: '#294C89',
                        borderRadius: '16px'
                    }}
                >Odrzuć i daj rózgę</Button>
            </div>
        </div>

    )
}

export default RightSide
