import React from "react";
import { Modal, Table, Tag } from "antd";
import { IoMdArrowBack } from "react-icons/io";

const ConversationDetail = (props) => {
    const { data, onClose } = props;
    return (
        <Modal
            open={true}
            onCancel={() => {
                onClose();
            }}
            className="fixed top-0 left-0 right-0 bottom-0"
            header={null}
            footer={null}
        >
            <div className="h-full w-full flex flex-col items-center bg-white py-[10px]">
                <div className="w-full font-bold mb-2 flex items-center justify-center py-2 h-[50px] relative">
                    <IoMdArrowBack
                        onClick={() => {
                            onClose();
                        }}
                        className="text-xl cursor-pointer hover:text-gray-400 absolute left-1"
                    />
                    <div className="text-xl">{data?.title ?? ""}</div>
                </div>
                <div
                    id="scriptContainer"
                    className="flex-1 p-1 overflow-y-auto max-w-[600px]"
                >
                    {data?.content.map((item, index) => {
                        return <p className={`my-[10px] text-md ${index%2 === 0 ? 'text-orange-600' : ''}`}><span className={`mr-2 font-bold`}>{index%2 === 0 ? 'A:' : 'B:'}</span>{item}</p>;
                    })}
                </div>
                <div className="flex justify-center mt-2">
                    <audio controls autoPlay loop={true}>
                        <source src={data?.audioUrl} />
                    </audio>
                </div>
            </div>
        </Modal>
    );
};

export default ConversationDetail;
