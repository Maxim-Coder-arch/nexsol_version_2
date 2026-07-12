export interface IMessageBox {
    title: string;
    message: string;
    setShow: (show: boolean) => void;
}