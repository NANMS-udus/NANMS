import './Popup.css';
import check from '../assets/icons/check-circle.svg'
import error from '../assets/icons/error.svg'
import notf from '../assets/icons/notification.svg'
import { useContext, useEffect } from 'react';
import { UiContext } from '../MyContexts/UiContext';
import Loader from './Loader';

export default function Popup() {
    console.log('popup');

    const { popup, setPopup } = useContext(UiContext)

    const width = window.getComputedStyle(document.getElementById('root')).width

    const hidePopup = () => {
        const h = setTimeout(() => {
            setPopup((p) => {
                console.log('h', popup);

                return { ...p, hide: true }
            })
        }, 6000)

        const s = setTimeout(() => {
            console.log('s', popup);

            setPopup((p) => {
                return { ...p, msg: '', msgType: '', show: false }
            })
        }, 10000);


        return [h, s]
    }

    useEffect(() => {
        console.log(parseInt(width));

        let h;

        let s;

        if (popup.autoHide && parseInt(width) > 550) {
            [h, s] = hidePopup()
        }

        return () => {
            if (h && s) {
                console.log(h, s);

                clearTimeout(h)
                clearTimeout(s)
            }
            /*  */
        }
    }, [popup.autoHide])


    return (
        <div
            class={`custom-toast ${popup.hide ? 'hide' : ''}`}
            onClick={() => {

                if (parseInt(width) <= 550 && popup.autoHide) {
                    console.log();

                    hidePopup()
                }
            }}
        >
            {
                popup.msgType !== 'pending'
                    ? <img src={
                        popup.msgType === 'success'
                            ? check
                            : popup.msgType === 'err'
                                ? error
                                : popup.msgType === 'notf'
                                    ? notf
                                    : ''
                    }
                        class="toast-icon"
                        style={{ width: '30px' }}
                    />
                    : <Loader />
            }
            <div className='toast-main-content'>
                <div class="toast-content-title">
                    {
                        popup.msgType === 'success'
                            ? 'Successful'
                            : popup.msgType === 'err'
                                ? 'Error'
                                : popup.msgType === 'notf'
                                    ? 'Notification'
                                    : popup.msgType === 'pending'
                                        ? 'please wait'
                                        : ''
                    }
                </div>
                <div class="toast-content-text">{popup.msg}</div>
            </div>
        </div>
    );
};