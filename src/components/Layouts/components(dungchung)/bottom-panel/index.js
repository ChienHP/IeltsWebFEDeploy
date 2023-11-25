import IeltsListeningPaletteSection from "../ielts-palette-section";
import "./style.css";

const BottomPanel = ({IeltsListeningPaletteSections}) => {
    return (
        <div>
            <div className="ielts-listening-question-palette">
                    {IeltsListeningPaletteSections?.map((item, index) => {
                        return (
                            <div key={index} className="ielts-listening-palette-section current">
                                {item}
                            </div>
                        );
                    })}
            </div>
            <div className="ielts-listening-question-control-buttons">
                <button id="ielts-listening-previous-question-button" disabled>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button id="ielts-listening-next-question-button">
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            <button
                type="button"
                id="ielts-listening-test-submit-button"
                className="ielts-listening-submit-button"
            >
                Submit <i className="fa-solid fa-paper-plane"></i>
            </button>
        </div>
    );
};

export default BottomPanel;
