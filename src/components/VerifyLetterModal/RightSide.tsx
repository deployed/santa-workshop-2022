import mail from "./Mail.svg"
import star from "./Star.svg"
import calendar from "./Calendar.svg"

const RightSide = () => (
    <>
    <div id = "rightSide">
        <section 
            style = {{
                color: 'rgba(117, 117, 117, 1)',
                marginTop: 21,
                marginLeft: 42,
                marginBottom: 42.83,
            }}>
                <span style = {{
                    color: 'rgba(117, 117, 117, 1)',
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: '150%',
                    letterSpacing: '0.15',
                    marginRight: 50,
                }}>ID 12344</span> 
                
                <div style = {{
                        color: 'rgba(0, 0, 0, 0.87)',
                        fontWeight: 400,
                        fontSize: 13,
                        letterSpacing: '0.16',
                        border: '1px solid rgba(117, 117, 117, 0.85)',
                        borderRadius: '12px',
                        display: 'inline-block',
                        padding: '3px 7px',
                    }}>
                        <img src={mail} style={{ width: 15}}/>
                        <p style={{
                            marginLeft: 7.5,
                            display: 'inline',
                        }}>Nowe</p>
                </div>
                <div style = {{
                        color: 'rgba(0, 0, 0, 0.6)',
                        fontWeight: 400,
                        fontSize: 14,
                        letterSpacing: '0.17',
                    }}>
                        <img src={calendar} style={{ width: 16.67}}/>
                        <p style={{
                            marginLeft: 9.67,
                            display: 'inline',
                        }}>10.12.2022</p>
                </div>  
        </section>
        <section>
            <p style ={{
                fontWeight: 400,
                fontSize: 28,
                lineHeight: '123.5%',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '0.25',
                color: 'rgba(0, 0, 0, 0.87)',
                marginLeft: 45,
                marginBottom: 20.5,
            }}>Lista:</p>
            <div className="listElement">
                <img src={star}/>
                <span>Piłka do nogi</span>
            </div>
            <div className="listElement">
                <img src={star}/>
                <span>Czekolada oreo</span>
                {/* <span className="comment">Taka duża, gdzie są całe ciastka</span> */}
            </div>

            <button className="accept_btn">AKCEPYUJĘ I WYŚLIJ</button>

        </section>
    </div>
    </>
)

export default RightSide;