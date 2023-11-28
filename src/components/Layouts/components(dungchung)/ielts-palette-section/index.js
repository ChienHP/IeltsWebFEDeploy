import NumberWrapInline from "../NumberWrapInline";

const IeltsListeningPaletteSection = ({ partNumber, questionNumbers }) => {
    return (
        <>
            <strong className="ielts-listening-palette-section-part">
                Part {partNumber}:
            </strong>
            <>
                {questionNumbers.map((questionNumber, index) => 
                    <NumberWrapInline
                        key={index}
                        number={questionNumber}
                    ></NumberWrapInline>
                )}
            </>
        </>
    );
};

export default IeltsListeningPaletteSection;
