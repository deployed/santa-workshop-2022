import { StyledWrapper, StyledImg, StyledBox, StyledBoxWrapper, StyledNameList } from "./styles";
import kid from "../../../icons/kid.png";
import smiley from "../../../icons/smiley.svg";

const NameList = ({ header, text, isSvg }) => {
    return (
        <StyledNameList>
            <h3>{header}</h3>
            {isSvg ? <img src={text} /> : <p>{text}</p>}
        </StyledNameList>
    );
};
const arr = [{ id: 1, header: "Imię", text: "Marek Jakiś" },
{ id: 2, header: "Wiek", text: "7 lat" }, { id: 3, header: "Grzeczność", text: smiley, isSvg: true },
]

const arr2 = [{ id: 1, header: "Kraj:", text: "Polska" },
{ id: 2, header: "Miasto:", text: "Kraków" },
{ id: 3, header: "Kod pocztowy:", text: "31-276" },
{ id: 4, header: "Ulica i numer domu:", text: "Kasztanowa 17B/2" },
]
const LeftSide = () => {
    return (
        <StyledWrapper>
            <StyledImg src={kid} />
            <StyledBoxWrapper>
                <StyledBox>
                    {arr.map(({ header, text, id, isSvg }) => <NameList key={id} header={header} text={text} isSvg={isSvg}></NameList>)}
                </StyledBox>
                <StyledBox>
                    {arr2.map(({ header, text, id }) => <NameList key={id} header={header} text={text}></NameList>)}
                </StyledBox>
            </StyledBoxWrapper>
        </StyledWrapper>
    );
};

export default LeftSide;
