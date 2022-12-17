import icon from "./Vector.svg"
import './style.css'

const LeftSide = () => (
    <>
    <div id = "leftSide"
        style={{ 
              flexDirection: 'column',
              backgroundColor: 'rgba(15, 88, 141, 0.05)',
              width: 226, 
              height: 607,
        }}>
        <img
            style={{ 
                width: 226,
                borderTopLeftRadius: 'inherit',
            }}
            src="https://s3-alpha-sig.figma.com/img/66c9/766b/c207d69c2b105689d11455c446de3096?Expires=1672012800&Signature=G-bz4llIrnYsmX7~YJnA3JZA8k8Q7iLhFUYmZbQwzpQfof4hejgLIAabKy1d4ranhvKZbrTKCbacGmz179yYdJ2Yp6y25tjYLSyyaiDCfGXDkS8cGjQCgzKDJJy78nHQjBTwfEtXKi7~MX1GY2mH09fltna7UIMFQsMWym7RyG5SUTnOHkfiSCRVMo1qvs0BgXWiBcj7TRu0CQ7xgjdYTI-hcMUSfuqWu7HbmtwPh0hGmtME23Io1ehvQTp99J9GfrJPPB9xsjPNerJKApJG68LmHQEae3iXBXvmfnwgKA8GbMkQy8o0vNcRQ5Q~4Ctd5RhyVwGCUSDIUy1u9O0L3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
        <div
            style={{ 
                width: 226, 
                paddingLeft: 34,
                }}>
            <section>
                <b>Imię:</b>
                <p>Marek Jakiś</p>
            </section>
            <section>
                <b>Wiek:</b>
                <p>7 lat</p>
            </section>
            <section>
                <b>Grzeczność:</b><br/>
                <div
                    style = {{
                        width: 'max-content',
                        height: 'max-content',
                        padding: '0.3rem',
                        border: '1px solid lightGray',
                        borderRadius: '50%',
                        marginBottom: '43px',
                        display: 'flex',
                    }}
                >
                    <img 
                        style={{ 
                            width: 20,
                        }}
                        src={icon}/> 
                </div>
            </section>
            <section>
                <b>Kraj:</b>
                <p>Polska</p>
            </section>
            <section>
                <b>Miasto:</b>
                <p>Kraków</p>
            </section>
            <section>
                <b>Kod pocztowy:</b>
                <p>31-276</p>
            </section>
            <section>
                <b>Ulica i numer domu</b>
                <p>Kasztanowa 17B/2</p>
            </section>
        </div>
    </div>
    </>
)

export default LeftSide;