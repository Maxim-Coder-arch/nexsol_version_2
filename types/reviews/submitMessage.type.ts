interface ISubmitMessage {
    type: "success" | "error";
    text: string;
}

export type ISubmitMessageType = ISubmitMessage | null;