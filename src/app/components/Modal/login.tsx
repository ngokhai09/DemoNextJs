'use client';

import { Button, Modal } from 'flowbite-react';
import {useState} from "react";

export default function Login() {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };

    return (
        <>
            <Button className={"w-10 h-10 text-black hover:bg-slate-50 rounded-lg duration-300"} onClick={() => props.setOpenModal('default')}>Đăng nhập</Button>
            <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>

                <Modal.Footer>
                    <Button onClick={() => props.setOpenModal(undefined)}>I accept</Button>
                    <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


