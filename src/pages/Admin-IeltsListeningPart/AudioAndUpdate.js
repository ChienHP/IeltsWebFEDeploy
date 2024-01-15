import { useState } from "react";
import { UpdateAudioModal } from "./UpdateAudioModal/UpdateAudioModal";

export const AudioAndUpdate = ({ieltsListeningPart}) => {
    const [showUpdateAudioModal, setShowUpdateAudioModal] = useState(false);

    return (
        <div>
            <div className="d-flex justify-content-center">
                <audio
                    controls
                    className="my-audio-player"
                    style={{ width: "500px" }}
                    key={ieltsListeningPart?.partDetail?.audioSrc}
                >
                    <source
                        src={ieltsListeningPart?.partDetail?.audioSrc}
                    ></source>
                </audio>

                <button
                    className="my-button-74"
                    onClick={() => setShowUpdateAudioModal(true)}
                >
                    Update
                </button>

                <UpdateAudioModal
                    show={showUpdateAudioModal}
                    setShow={setShowUpdateAudioModal}
                    partId={ieltsListeningPart?.id}
                ></UpdateAudioModal>
            </div>
        </div>
    );
};
